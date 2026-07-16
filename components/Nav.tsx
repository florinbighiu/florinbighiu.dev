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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-[1.1rem] border-b border-white/[0.12] backdrop-blur-xl transition-all duration-300 ${
        scrolled || open ? "bg-bg/95" : "bg-bg/75"
      }`}
    >
      {/* Logo */}
      <Link
        href="#home"
        className="font-display font-extrabold text-[1.15rem] tracking-[0.04em] text-primary no-underline"
        onClick={() => setOpen(false)}
      >
        FB<span className="text-accent">.</span>
      </Link>

      {/* Desktop links */}
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

      <div className="flex items-center gap-3">
        {/* CTA */}
        <a
          href="/FLORIN_BIGHIU_Resume_2026-07-16-2-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.78rem] font-medium tracking-[0.08em] uppercase text-bg bg-accent px-5 py-2 rounded-full hover:opacity-85 hover:-translate-y-px transition-all duration-200"
        >
          Resume ↗
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-[10px] border border-white/[0.18] text-primary hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <ul
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-1 list-none bg-bg/98 backdrop-blur-xl border-b border-white/[0.12] px-6 py-4"
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block font-mono text-[0.85rem] text-muted uppercase tracking-[0.08em] no-underline py-3 hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
