"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-[1.1rem] border-b border-white/[0.07] backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-bg/95" : "bg-bg/75"
      }`}
    >
      {/* Logo */}
      <Link
        href="#home"
        className="font-display font-extrabold text-[1.15rem] tracking-[0.04em] text-primary no-underline"
      >
        FB<span className="text-accent">.</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link relative font-mono text-[0.78rem] text-muted uppercase tracking-[0.08em] no-underline hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/Florin.Bighiu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[0.78rem] font-medium tracking-[0.08em] uppercase text-bg bg-accent px-5 py-2 rounded-full hover:opacity-85 hover:-translate-y-px transition-all duration-200"
      >
        Resume ↗
      </a>
    </nav>
  );
}
