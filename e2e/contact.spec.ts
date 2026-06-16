import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  async function fill(page: import("@playwright/test").Page) {
    await page.getByLabel("Name").fill("Jane Doe");
    await page.getByLabel("Email").fill("jane@example.com");
    await page.getByLabel("Subject").fill("Job opportunity");
    await page.getByLabel("Message").fill("I would love to work with you.");
  }

  test("submits successfully when the API returns ok (mocked)", async ({ page }) => {
    // Intercept the API so the test never sends a real email.
    await page.route("**/api/contact", async (route) => {
      expect(route.request().method()).toBe("POST");
      const body = route.request().postDataJSON();
      expect(body).toMatchObject({ name: "Jane Doe", email: "jane@example.com" });
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    const submit = page.locator('#contact button[type="submit"]');
    await fill(page);
    await submit.click();

    await expect(submit).toContainText(/message sent/i);
  });

  test("shows an error state when the API fails (mocked)", async ({ page }) => {
    await page.route("**/api/contact", (route) =>
      route.fulfill({ status: 500, json: { error: "Failed to send email." } })
    );

    const submit = page.locator('#contact button[type="submit"]');
    await fill(page);
    await submit.click();

    await expect(submit).toContainText(/failed/i);
  });

  test("native validation blocks empty submissions", async ({ page }) => {
    let called = false;
    await page.route("**/api/contact", (route) => {
      called = true;
      return route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.getByRole("button", { name: /send message/i }).click();

    // Required fields prevent the request from firing.
    await expect(page.getByLabel("Name")).toBeFocused();
    expect(called).toBe(false);
  });
});
