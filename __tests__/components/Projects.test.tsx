import { render, screen, within } from "@testing-library/react";
import Projects from "@/components/Projects";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
  });

  it("renders a card for each project", () => {
    render(<Projects />);
    for (const title of ["ClarityCristal", "EcomX", "Momentum", "SWAPI Explorer", "Employees Madness"]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("links 'All on GitHub' to the GitHub profile", () => {
    render(<Projects />);
    expect(screen.getByRole("link", { name: /all on github/i })).toHaveAttribute(
      "href",
      "https://github.com/florinbighiu"
    );
  });

  it("renders Live Site / GitHub links with security rel attributes", () => {
    render(<Projects />);
    const liveLinks = screen.getAllByRole("link", { name: /live site/i });
    expect(liveLinks.length).toBeGreaterThan(0);
    for (const link of liveLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });

  it("renders project images with descriptive alt text", () => {
    render(<Projects />);
    expect(screen.getByAltText("ClarityCristal")).toBeInTheDocument();
    expect(screen.getByAltText("SWAPI Explorer")).toBeInTheDocument();
  });

  it("shows tech tags within a project card", () => {
    render(<Projects />);
    const card = screen.getByRole("heading", { name: "EcomX" }).closest(".project-card")!;
    expect(within(card as HTMLElement).getByText("PostgreSQL")).toBeInTheDocument();
  });
});
