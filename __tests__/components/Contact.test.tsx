import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";

function fillForm() {
  return {
    name: screen.getByLabelText("Name"),
    email: screen.getByLabelText("Email"),
    subject: screen.getByLabelText("Subject"),
    message: screen.getByLabelText("Message"),
  };
}

describe("Contact form", () => {
  const originalFetch = global.fetch;
  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it("renders all required fields and a submit button", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Subject")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("submits the form data to /api/contact and shows a success state", async () => {
    const fetchMock = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) });
    global.fetch = fetchMock as unknown as typeof fetch;
    const user = userEvent.setup();

    render(<Contact />);
    const fields = fillForm();
    await user.type(fields.name, "Jane Doe");
    await user.type(fields.email, "jane@example.com");
    await user.type(fields.subject, "Job opportunity");
    await user.type(fields.message, "Let us collaborate.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByRole("button")).toHaveTextContent(/message sent/i)
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" })
    );
    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string);
    expect(body).toMatchObject({
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Job opportunity",
      message: "Let us collaborate.",
    });
  });

  it("shows an error state when the request fails", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: false, json: async () => ({ error: "nope" }) }) as unknown as typeof fetch;
    const user = userEvent.setup();

    render(<Contact />);
    const fields = fillForm();
    await user.type(fields.name, "Jane");
    await user.type(fields.email, "jane@example.com");
    await user.type(fields.subject, "Hi");
    await user.type(fields.message, "Hello there");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(screen.getByRole("button")).toHaveTextContent(/failed/i));
  });
});
