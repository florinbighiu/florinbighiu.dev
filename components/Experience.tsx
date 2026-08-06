"use client";

import { useReveal } from "@/hooks/useReveal";

type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  tags?: string[];
};

const roles: Role[] = [
  {
    role: "QA & Development (Volunteer)",
    company: "peviitor.ro — Asociația Oportunități și Cariere",
    period: "2026 – Present",
    location: "Romania, Remote",
    current: true,
    points: [
      "Build and maintain scrapers that collect job listings from external career sites, with automated tests validating output structure and data quality.",
      "Develop frontend features on the public job search platform, working from tickets in a shared codebase with peer code review.",
      "Designed and implemented a new automated test suite covering previously untested modules, improving coverage.",
    ],
    tags: ["Playwright", "JavaScript", "React", "Scrapers", "Code review"],
  },
  {
    role: "Team Coordinator & Machine Operator",
    company: "De Jong Zuurmond",
    period: "06/2025 – 06/2026",
    location: "Netherlands",
    points: [
      "Operated 5+ types of specialised machinery for green-space and grounds maintenance.",
      "Led a team of 4–6 operators across multiple sites, coordinating daily assignments with company managers and keeping 100% of daily schedules on track.",
    ],
  },
  {
    role: "Dental Lab Technician Assistant",
    company: "AMA R&D GROUPE",
    period: "06/2024 – 05/2025",
    location: "Iași, Romania",
    points: [
      "Processed ~100 online clinic orders per day with accurate data entry; provided first-line support for workflow, network and software issues, documenting problems clearly to reduce downtime.",
    ],
  },
];

const education = [
  {
    title: "ISTQB Certified Tester Foundation Level (CTFL) v4.0",
    org: "iSQI",
    period: "Certified",
    detail: "Credential ID: 26-CTFL 4-280050-12",
  },
  {
    title: "Full Stack Development Course",
    org: "Codecool Romania",
    period: "12/2022 – 06/2024",
    detail:
      "Intensive 1.5-year bootcamp: JavaScript, React, Node.js, Java, Spring Boot, REST APIs, databases, Git, Agile teamwork, and software testing fundamentals.",
  },
  {
    title: "Electrical Engineering",
    org: "“Gh. Asachi” Technical University",
    period: "10/2017 – 07/2020",
    detail:
      "Completed three years of a four-year program; foundations in algorithms, data structures, C/C++ and analytical problem solving.",
  },
];

function RoleCard({ role, delay }: { role: Role; delay: string }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${delay} relative pl-8 pb-10 last:pb-0 border-l border-white/[0.12] last:border-l-transparent`}
    >
      {/* Timeline dot */}
      <span
        className={`absolute left-0 top-[6px] -translate-x-1/2 w-[9px] h-[9px] rounded-full ${
          role.current ? "bg-accent animate-pulse-dot" : "bg-surface-2 border border-white/[0.25]"
        }`}
      />

      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-display font-bold text-[1.05rem] text-primary">
          {role.role}
          <span className="text-accent"> · </span>
          <span className="font-body font-normal text-muted text-[0.95rem]">{role.company}</span>
        </h3>
        <span className="font-mono text-[0.7rem] tracking-[0.07em] uppercase text-muted whitespace-nowrap">
          {role.period} · {role.location}
        </span>
      </div>

      <ul className="mt-3 flex flex-col gap-2 list-none">
        {role.points.map((point) => (
          <li key={point} className="relative pl-4 text-[0.92rem] text-muted leading-[1.7]">
            <span className="absolute left-0 top-[0.65em] w-[5px] h-px bg-accent" />
            {point}
          </li>
        ))}
      </ul>

      {role.tags && (
        <div className="mt-4 flex flex-wrap gap-[6px]">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] tracking-[0.07em] uppercase text-muted border border-white/[0.12] bg-bg-2 px-[10px] py-[5px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const eduRef = useReveal();

  return (
    <section id="experience" className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          Where I&apos;ve worked
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Experience
        </h2>

        {/* Timeline */}
        <div className="mt-12 max-w-[880px]">
          {roles.map((role, i) => (
            <RoleCard
              key={role.company}
              role={role}
              delay={["", "reveal-delay-1", "reveal-delay-2"][i] ?? ""}
            />
          ))}
        </div>

        {/* Education & certifications */}
        <div ref={eduRef} className="reveal reveal-delay-1 mt-16 border-t border-white/[0.12] pt-10">
          <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-6">
            Education &amp; Certifications
          </div>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
            {education.map(({ title, org, period, detail }) => (
              <div
                key={title}
                className="bg-surface border border-white/[0.12] rounded-2xl p-6 hover:border-[rgba(190,255,68,0.25)] hover:-translate-y-[2px] transition-all duration-300"
              >
                <div className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-muted mb-2">
                  {period}
                </div>
                <div className="font-display font-bold text-[1rem] text-primary leading-[1.4]">
                  {title}
                </div>
                <div className="text-[0.85rem] text-accent mt-1">{org}</div>
                <p className="text-[0.85rem] text-muted leading-[1.7] mt-3">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
