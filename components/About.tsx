"use client";

import { useReveal } from "@/hooks/useReveal";

const stats = [
  { num: "3",   label: "Years hands-on" },
  { num: "E2E", label: "Playwright automation" },
  { num: "5",   label: "Projects shipped" },
  { num: "1.5y", label: "Full-stack bootcamp" },
];

const details = [
  { icon: "📞", text: "+40 748 389 067",              href: "tel:+40748389067" },
  { icon: "📍", text: "Iași, Romania",                href: null },
  { icon: "✉️", text: "florin.bighiu1@gmail.com",     href: "mailto:florin.bighiu1@gmail.com" },
  { icon: "💼", text: "linkedin.com/in/florin-bighiu", href: "https://www.linkedin.com/in/florin-bighiu/" },
  { icon: "🐙", text: "github.com/florinbighiu",      href: "https://github.com/florinbighiu" },
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

        {/* Bio – full width */}
        <div ref={bioRef} className="reveal max-w-[780px] space-y-5 text-[1.05rem] text-muted leading-[1.8]">
          <p>
            <strong className="text-primary font-medium">QA Automation Engineer &amp; Full-Stack Developer</strong>{" "}
            with 3 years of hands-on experience through self-study, personal projects, and an
            intensive{" "}
            <strong className="text-primary font-medium">1.5-year full-stack bootcamp</strong>.
            My focus is quality engineering — <strong className="text-primary font-medium">Playwright
            E2E automation</strong>, CI/CD pipelines with <strong className="text-primary font-medium">GitHub
            Actions</strong>, API testing with Postman, and structured bug reporting.
          </p>
          <p>
            That QA work sits on a real full-stack foundation: I&apos;ve built and shipped apps with
            React and Next.js on the frontend, Java and Spring Boot on the backend, and SQL/PostgreSQL
            data layers — so I test with a clear understanding of how the whole system fits together.
            I&apos;m looking to grow into a dedicated QA automation role while contributing across the stack.
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
