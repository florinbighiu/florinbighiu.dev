import { render, screen } from "@testing-library/react";
import { act } from "react";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders all section links pointing to in-page anchors", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
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
});
