import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the correct title and meta description", async ({ page }) => {
    await expect(page).toHaveTitle(/Florin Bighiu/);
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /Full-Stack Developer/i);
  });

  test("renders the hero with the developer's name", async ({ page }) => {
    const hero = page.locator("#home");
    await expect(hero.getByRole("heading", { level: 1 })).toContainText("FLORIN");
  });

  test("renders all primary sections", async ({ page }) => {
    for (const id of ["#home", "#about", "#projects", "#skills", "#contact"]) {
      await expect(page.locator(id)).toBeVisible();
    }
  });

  test("Download CV and Resume links point to the PDF in /public", async ({ page }) => {
    await expect(page.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/FLORIN_BIGHIU_Resume.pdf"
    );
    await expect(page.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/FLORIN_BIGHIU_Resume.pdf"
    );
  });

  test("serves the résumé PDF as a real downloadable asset", async ({ request }) => {
    const res = await request.get("/FLORIN_BIGHIU_Resume.pdf");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("pdf");
  });

  test("renders every project card", async ({ page }) => {
    for (const title of ["ClarityCristal", "EcomX", "Momentum", "SWAPI Explorer", "Employees Madness"]) {
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
    }
  });

  test("loads without app-level console errors or uncaught exceptions", async ({ page }) => {
    // Ignore third-party noise (analytics/insights scripts and failed external
    // resource loads) that isn't part of the app's own code.
    const IGNORE = /vercel|analytics|insights|speed-insights|Failed to load resource|net::ERR/i;
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error" && !IGNORE.test(msg.text())) errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });
});
