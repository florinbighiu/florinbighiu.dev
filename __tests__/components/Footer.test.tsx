import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/florin bighiu/i)).toBeInTheDocument();
  });

  it("renders the three social links with correct hrefs", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/florinbighiu"
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/florin-bighiu/"
    );
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:florin.bighiu1@gmail.com"
    );
  });

  it("opens http links in a new tab but not the mailto link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: "Email" })).not.toHaveAttribute("target", "_blank");
  });
});
