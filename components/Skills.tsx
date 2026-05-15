"use client";

import { useEffect, useRef } from "react";

const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"];
const backendSkills  = ["Java", "Spring Boot", "Spring Security", "Node.js", "Express", "REST API"];
const dbSkills       = ["PostgreSQL", "MongoDB", "SQL"];
const toolSkills     = ["Git", "GitHub", "IntelliJ", "VS Code", "Postman", "Claude Code", "Linux"];

const proficiencies = [
  { name: "React / Next.js",         pct: 85 },
  { name: "Java & Spring",           pct: 80 },
  { name: "JavaScript / TypeScript", pct: 82 },
  { name: "PostgreSQL / MongoDB",    pct: 75 },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="skill-pill font-mono text-[0.72rem] font-medium tracking-[0.04em] text-primary bg-bg-2 border border-white/[0.12] px-[14px] py-[7px] rounded-[8px] cursor-default">
      {label}
    </span>
  );
}

function BentoCard({
  children,
  wide,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          // Animate XP bars inside this card
          el.querySelectorAll<HTMLElement>("[data-width]").forEach((bar) => {
            bar.style.width = bar.dataset.width + "%";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${delay} bg-surface border border-white/[0.12] rounded-2xl p-7 hover:border-[rgba(190,255,68,0.25)] hover:-translate-y-[2px] transition-all duration-300 ${wide ? "col-span-2" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-16 py-28">
        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          What I use
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Skills &amp; Tech
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-4 gap-4 mt-12 max-[900px]:grid-cols-2">

          {/* Frontend — 2 cols */}
          <BentoCard wide delay="">
            <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">Frontend</div>
            <div className="font-display font-bold text-[1.1rem] mb-5">UI & Client Side</div>
            <div className="flex flex-wrap gap-[7px]">
              {frontendSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Backend — 2 cols */}
          <BentoCard wide delay="reveal-delay-1">
            <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">Backend</div>
            <div className="font-display font-bold text-[1.1rem] mb-5">Server & API</div>
            <div className="flex flex-wrap gap-[7px]">
              {backendSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Proficiency bars — 2 cols */}
          <BentoCard wide delay="reveal-delay-2">
            <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">Proficiency</div>
            <div className="font-display font-bold text-[1.1rem] mb-6">Core Strengths</div>
            <div className="flex flex-col gap-4">
              {proficiencies.map(({ name, pct }) => (
                <div key={name}>
                  <div className="mb-[6px]">
                    <span className="text-[0.85rem] font-medium text-primary">{name}</span>
                  </div>
                  <div className="h-1 bg-bg-2 rounded-full overflow-hidden">
                    <div className="xp-bar" data-width={pct} />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Databases — 1 col */}
          <BentoCard delay="reveal-delay-3">
            <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">Databases</div>
            <div className="font-display font-bold text-[1.1rem] mb-5">Data Layer</div>
            <div className="flex flex-wrap gap-[7px]">
              {dbSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Tools — 1 col */}
          <BentoCard delay="reveal-delay-4">
            <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">Tools</div>
            <div className="font-display font-bold text-[1.1rem] mb-5">Dev Workflow</div>
            <div className="flex flex-wrap gap-[7px]">
              {toolSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
