import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the name heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/florin/i);
    expect(heading).toHaveTextContent(/bighiu/i);
  });

  it("links 'Download CV' to the public résumé PDF", () => {
    render(<Hero />);
    const cv = screen.getByRole("link", { name: /download cv/i });
    expect(cv).toHaveAttribute("href", "/FLORIN_BIGHIU_Resume.pdf");
    expect(cv).toHaveAttribute("target", "_blank");
  });

  it("links 'Let's talk' to the contact section", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /let's talk/i })).toHaveAttribute("href", "#contact");
  });

  it("renders the social links (LinkedIn, GitHub, Email)", () => {
    render(<Hero />);
    expect(screen.getByTitle("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/florin-bighiu/"
    );
    expect(screen.getByTitle("GitHub")).toHaveAttribute("href", "https://github.com/florinbighiu");
    expect(screen.getByTitle("Email")).toHaveAttribute("href", "mailto:florin.bighiu1@gmail.com");
  });

  it("opens external social links in a new tab but keeps mailto in-place", () => {
    render(<Hero />);
    expect(screen.getByTitle("GitHub")).toHaveAttribute("target", "_blank");
    expect(screen.getByTitle("Email")).not.toHaveAttribute("target", "_blank");
  });
});
