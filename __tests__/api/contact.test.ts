/**
 * @jest-environment node
 */
import { POST } from "@/app/api/contact/route";

// Mock the Resend SDK. The route constructs `new Resend(...)` at module load,
// so the mock must expose a stable `emails.send` we can assert against.
const mockSend = jest.fn();
jest.mock("resend", () => ({
  // `send` defers to mockSend lazily (at call time, not module-load time) to
  // avoid the temporal-dead-zone error from jest.mock being hoisted.
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: (...args: unknown[]) => mockSend(...args) },
  })),
}));

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Hello",
  message: "I would like to work with you.",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    mockSend.mockReset();
  });

  it("sends an email and returns { ok: true } for a valid payload", async () => {
    mockSend.mockResolvedValueOnce({ id: "email_123" });

    const res = await POST(makeRequest(validPayload));
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ ok: true });
    expect(mockSend).toHaveBeenCalledTimes(1);
  });

  it("forwards the submitter's data into the email payload", async () => {
    mockSend.mockResolvedValueOnce({ id: "email_123" });

    await POST(makeRequest(validPayload));

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "florin.bighiu1@gmail.com",
        replyTo: validPayload.email,
        subject: `[Portfolio] ${validPayload.subject}`,
        text: expect.stringContaining(validPayload.message),
      })
    );
  });

  it.each([
    ["name", { ...validPayload, name: "" }],
    ["email", { ...validPayload, email: "" }],
    ["subject", { ...validPayload, subject: "" }],
    ["message", { ...validPayload, message: "" }],
  ])("returns 400 when %s is missing", async (_field, payload) => {
    const res = await POST(makeRequest(payload));
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("All fields are required.");
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns 500 when the email provider throws", async () => {
    mockSend.mockRejectedValueOnce(new Error("provider down"));
    // Silence the route's console.error for this expected failure.
    const errSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const res = await POST(makeRequest(validPayload));
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.error).toBe("Failed to send email.");
    errSpy.mockRestore();
  });
});
