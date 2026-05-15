"use client";

import { useReveal } from "@/hooks/useReveal";

const stats = [
  { num: "18+", label: "Months of experience" },
  { num: "4",   label: "Shipped projects" },
  { num: "15+", label: "Technologies used" },
  { num: "2",   label: "Stacks mastered" },
];

const details = [
  { icon: "📞", text: "+40 748 964 313",             href: "tel:+40748964313" },
  { icon: "📍", text: "Iași, Romania",               href: null },
  { icon: "✉️", text: "florin.bighiu1@gmail.com",    href: "mailto:florin.bighiu1@gmail.com" },
  { icon: "💼", text: "linkedin.com/in/florin-bighiu", href: "https://www.linkedin.com/in/florin-bighiu/" },
  { icon: "🐙", text: "github.com/florinbighiu",     href: "https://github.com/florinbighiu" },
];

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="border-t border-white/[0.07]">
      <div className="max-w-3/4 mx-auto px-16 py-28">
        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          Who I am
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          About me
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-[1.1fr_1fr] gap-20 mt-14 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Left – bio + stats */}
          <div ref={leftRef} className="reveal">
            <div className="space-y-5 text-[1.05rem] text-muted leading-[1.8]">
              <p>
                Dynamic{" "}
                <strong className="text-primary font-medium">Full-Stack Developer</strong>{" "}
                adept in all stages of advanced web development. Over the past eighteen months,
                I've gained hands-on experience across a wide range of technologies — from Java
                and Spring on the backend to React and Next.js on the frontend.
              </p>
              <p>
                I thrive in both independent settings and collaborative teams, shipping features
                that are clean, performant, and maintainable. My approach is simple: understand
                the problem deeply, then build the right solution.
              </p>
              <p>
                Currently seeking opportunities where I can grow as a developer while contributing
                to products that matter.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map(({ num, label }, i) => (
                <div
                  key={num}
                  className={`bg-surface border border-white/[0.07] rounded-2xl p-5 hover:border-[rgba(190,255,68,0.25)] transition-colors duration-300 reveal reveal-delay-${i + 1}`}
                >
                  <div className="font-display font-extrabold text-[2.2rem] text-accent">{num}</div>
                  <div className="text-[0.82rem] text-muted mt-[2px]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – contact details */}
          <div ref={rightRef} className="reveal reveal-delay-2">
            <ul className="space-y-4 list-none">
              {details.map(({ icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 text-[0.9rem] text-muted">
                  <span className="w-8 h-8 bg-surface-2 border border-white/[0.07] rounded-[8px] grid place-items-center text-[0.85rem] shrink-0">
                    {icon}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-muted no-underline hover:text-accent transition-colors duration-200 break-all"
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
      </div>
    </section>
  );
}
