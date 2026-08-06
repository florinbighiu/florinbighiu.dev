"use client";

import { useReveal } from "@/hooks/useReveal";

const stats = [
  { num: "3+",     label: "Years hands-on" },
  { num: "ISTQB",  label: "CTFL v4.0 certified" },
  { num: "5",      label: "Projects shipped" },
  { num: "1.5y",   label: "Full-stack bootcamp" },
];

const details = [
  { icon: "📞", text: "+40 748 389 067",              href: "tel:+40748389067" },
  { icon: "📍", text: "Iași, Romania",                href: null },
  { icon: "✉️", text: "florin.bighiu1@gmail.com",     href: "mailto:florin.bighiu1@gmail.com" },
  { icon: "💼", text: "linkedin.com/in/florin-bighiu", href: "https://www.linkedin.com/in/florin-bighiu/" },
  { icon: "🐙", text: "github.com/florinbighiu",      href: "https://github.com/florinbighiu" },
  { icon: "🗣️", text: "Romanian (native) · English (C1)", href: null },
];

export default function About() {
  const bioRef     = useReveal();
  const statsRef   = useReveal();
  const detailsRef = useReveal();

  return (
    <section id="about" className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          Who I am
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em] mb-10"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          About me
        </h2>

        {/* Bio – full width (exact CV summary) */}
        <div ref={bioRef} className="reveal max-w-[780px] space-y-5 text-[1.05rem] text-muted leading-[1.8]">
          <p>
            <strong className="text-primary font-medium">ISTQB certified QA Automation Engineer</strong> with
            3+ years of combined hands-on experience across full-stack training, production projects and
            open-source work. Currently building scrapers, automated tests and frontend features for{" "}
            <a
              href="https://peviitor.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              peviitor.ro
            </a>
            , a live open-source job platform.
          </p>
          <p>
            Strong in <strong className="text-primary font-medium">test automation</strong> (Playwright,
            JUnit), <strong className="text-primary font-medium">API testing</strong> (Postman),{" "}
            <strong className="text-primary font-medium">CI/CD</strong> (GitHub Actions) and test design,
            with a <strong className="text-primary font-medium">full-stack background</strong> in
            JavaScript/TypeScript, React, Java and Spring Boot — plus day-to-day{" "}
            <strong className="text-primary font-medium">AI-driven development</strong> with Claude Code.
          </p>
        </div>

        {/* Stats – 4 columns */}
        <div ref={statsRef} className="reveal reveal-delay-1 grid grid-cols-4 gap-5 mt-12 max-[700px]:grid-cols-2">
          {stats.map(({ num, label }) => (
            <div
              key={num}
              className="bg-surface border border-white/[0.12] rounded-2xl p-6 hover:border-[rgba(190,255,68,0.25)] transition-colors duration-300"
            >
              <div className="font-display font-extrabold text-[2.4rem] text-accent">{num}</div>
              <div className="text-[0.82rem] text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Contact details – horizontal row */}
        <div ref={detailsRef} className="reveal reveal-delay-2 mt-10 border-t border-white/[0.12] pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-4 list-none">
            {details.map(({ icon, text, href }) => (
              <li key={text} className="flex items-center gap-2 text-[0.88rem] text-muted">
                <span className="w-7 h-7 bg-surface-2 border border-white/[0.12] rounded-[7px] grid place-items-center text-[0.8rem] shrink-0">
                  {icon}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-muted no-underline hover:text-accent transition-colors duration-200"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
