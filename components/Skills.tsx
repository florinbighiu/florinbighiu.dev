"use client";

import { useEffect, useRef } from "react";

const testingSkills  = ["Playwright E2E", "Jest", "JUnit", "Postman / API Testing", "Unit Testing", "Regression Testing", "Bug Reporting"];
const frontendSkills = ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
const backendSkills  = ["Java", "Spring Boot", "REST APIs", "Node.js", "Express"];
const dbSkills       = ["PostgreSQL", "SQL", "MongoDB"];
const aiSkills       = ["Claude Code", "RAG", "Tool calling", "AI-assisted dev"];
const toolSkills     = ["Git", "GitHub Actions", "CI/CD", "Agile", "IntelliJ", "VS Code", "Linux"];

const proficiencies = [
  { name: "Playwright E2E & Test Automation", pct: 85 },
  { name: "JavaScript / TypeScript",          pct: 85 },
  { name: "React / Next.js",                  pct: 82 },
  { name: "CI/CD & API Testing",              pct: 80 },
  { name: "Java / Spring Boot",               pct: 78 },
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
      className={`reveal ${delay} bg-surface border border-white/[0.12] rounded-2xl p-7 hover:border-[rgba(190,255,68,0.25)] hover:-translate-y-[2px] transition-all duration-300 ${wide ? "col-span-2 max-[560px]:col-span-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-[6px]">{kicker}</div>
      <div className="font-display font-bold text-[1.1rem] mb-5">{title}</div>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          How I work
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Skills &amp; Tech
        </h2>
        <p className="text-muted leading-[1.7] mt-4 max-w-[640px]">
          Quality engineering first — automated and manual testing across the stack — backed by
          full-stack development and AI-assisted workflows.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-4 gap-4 mt-12 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">

          {/* Testing & QA — 2 cols (lead) */}
          <BentoCard wide delay="">
            <CardHeader kicker="Testing & QA" title="Quality Engineering" />
            <div className="flex flex-wrap gap-[7px]">
              {testingSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Proficiency bars — 2 cols */}
          <BentoCard wide delay="reveal-delay-1">
            <CardHeader kicker="Proficiency" title="Core Strengths" />
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

          {/* Frontend — 2 cols */}
          <BentoCard wide delay="reveal-delay-2">
            <CardHeader kicker="Frontend" title="UI & Client Side" />
            <div className="flex flex-wrap gap-[7px]">
              {frontendSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Backend — 2 cols */}
          <BentoCard wide delay="reveal-delay-3">
            <CardHeader kicker="Backend" title="Server & API" />
            <div className="flex flex-wrap gap-[7px]">
              {backendSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Databases — 1 col */}
          <BentoCard delay="">
            <CardHeader kicker="Databases" title="Data Layer" />
            <div className="flex flex-wrap gap-[7px]">
              {dbSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* AI-assisted — 1 col */}
          <BentoCard delay="reveal-delay-1">
            <CardHeader kicker="AI-Assisted" title="Modern Workflow" />
            <div className="flex flex-wrap gap-[7px]">
              {aiSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

          {/* Tools & CI/CD — 2 cols */}
          <BentoCard wide delay="reveal-delay-2">
            <CardHeader kicker="Tools & CI/CD" title="Dev Workflow" />
            <div className="flex flex-wrap gap-[7px]">
              {toolSkills.map((s) => <SkillPill key={s} label={s} />)}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
