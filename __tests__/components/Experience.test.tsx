import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";

describe("Experience", () => {
  it("renders the section heading and anchor id", () => {
    const { container } = render(<Experience />);
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });

  it("renders every role from the CV", () => {
    render(<Experience />);
    for (const role of [
      /QA & Development \(Volunteer\)/,
      /Team Coordinator & Machine Operator/,
      /Dental Lab Technician Assistant/,
    ]) {
      expect(screen.getByRole("heading", { name: role })).toBeInTheDocument();
    }
  });

  it("shows the ISTQB certification with its credential id", () => {
    render(<Experience />);
    expect(
      screen.getByText(/ISTQB Certified Tester Foundation Level \(CTFL\) v4\.0/)
    ).toBeInTheDocument();
    expect(screen.getByText(/26-CTFL 4-280050-12/)).toBeInTheDocument();
  });

  it("lists the bootcamp and university education entries", () => {
    render(<Experience />);
    expect(screen.getByText("Full Stack Development Course")).toBeInTheDocument();
    expect(screen.getByText("Codecool Romania")).toBeInTheDocument();
    expect(screen.getByText(/Technical University/)).toBeInTheDocument();
  });
});
