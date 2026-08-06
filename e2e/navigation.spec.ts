import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("nav anchor links scroll to their sections", async ({ page }) => {
    // The desktop nav links are hidden below the md breakpoint.
    test.skip(
      (page.viewportSize()?.width ?? 0) < 768,
      "Desktop nav links are hidden on mobile"
    );

    for (const [name, id] of [
      ["About", "#about"],
      ["Experience", "#experience"],
      ["Projects", "#projects"],
      ["Skills", "#skills"],
      ["Contact", "#contact"],
    ] as const) {
      await page.getByRole("link", { name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${id}$`));
      await expect(page.locator(id)).toBeInViewport();
    }
  });

  test("mobile menu opens and navigates to a section", async ({ page }) => {
    // Only meaningful on viewports where the desktop links are hidden.
    test.skip(
      (page.viewportSize()?.width ?? 0) >= 768,
      "Mobile menu is only shown below the md breakpoint"
    );

    await page.getByRole("button", { name: /open menu/i }).click();
    const panel = page.locator("#mobile-menu");
    await expect(panel).toBeVisible();

    await panel.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(panel).toBeHidden();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("external project links use safe target/rel attributes", async ({ page }) => {
    const githubProfile = page.getByRole("link", { name: /all on github/i });
    await expect(githubProfile).toHaveAttribute("target", "_blank");
    await expect(githubProfile).toHaveAttribute("rel", /noopener/);
  });

  test("footer social links resolve to the right destinations", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/florinbighiu"
    );
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/florin-bighiu/"
    );
  });
});
