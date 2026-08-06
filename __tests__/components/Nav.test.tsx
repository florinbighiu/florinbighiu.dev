import { render, screen, within } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders all section links pointing to in-page anchors", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("links the Resume button to the CV served from /public", () => {
    render(<Nav />);
    const resume = screen.getByRole("link", { name: /resume/i });
    expect(resume).toHaveAttribute("href", "/FLORIN_BIGHIU_Resume.pdf");
    expect(resume).toHaveAttribute("target", "_blank");
    expect(resume).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("toggles the scrolled background after scrolling past 60px", () => {
    const { container } = render(<Nav />);
    const nav = container.querySelector("nav")!;

    expect(nav.className).toContain("bg-bg/75");

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 120, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(nav.className).toContain("bg-bg/95");
  });

  it("keeps the mobile menu closed by default", () => {
    render(<Nav />);
    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    // No mobile menu panel rendered until toggled.
    expect(document.getElementById("mobile-menu")).toBeNull();
  });

  it("opens the mobile menu and exposes the section links", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    const panel = document.getElementById("mobile-menu")!;
    expect(panel).toBeInTheDocument();
    const toggle = screen.getByRole("button", { name: /close menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    for (const label of ["About", "Experience", "Projects", "Skills", "Contact"]) {
      expect(within(panel).getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("closes the mobile menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    const panel = document.getElementById("mobile-menu")!;
    await user.click(within(panel).getByRole("link", { name: "Projects" }));

    expect(document.getElementById("mobile-menu")).toBeNull();
  });
});
