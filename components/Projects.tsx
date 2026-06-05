"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    category: "Business Site",
    title: "ClarityCristal",
    description:
      "Professional cleaning service website for a Lanzarote-based business — featuring before/after image sliders, tiered pricing, WhatsApp booking integration, and a bilingual responsive layout.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    image: "/screenshots/claritycristal.png",
    live: "https://claritycristal.com",
  },
  {
    num: "02",
    category: "E-Commerce",
    title: "EcomX",
    description:
      "Full-featured e-commerce platform with product browsing, cart management, user authentication, and order processing — built for a seamless shopping experience.",
    tags: ["React", "Java", "Spring", "Tailwind", "PostgreSQL"],
    image:
      "https://portofolio-florinbighiu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEcomX.09b6c95a.png&w=3840&q=75",
    github: "https://github.com/florinbighiu/El-proyecte-grande",
  },
  {
    num: "03",
    category: "Productivity",
    title: "Momentum",
    description:
      "Schedule management app with multi-tenant org switcher, user authentication, and task organization. Clean UX built for productivity-focused teams.",
    tags: ["React", "JavaScript", "Java", "Spring", "PostgreSQL"],
    image: "/screenshots/momentum.png",
    github: "https://github.com/florinbighiu/manifest-app",
    live: "https://momentum-pi-wheat.vercel.app",
  },
  {
    num: "04",
    category: "MERN Stack",
    title: "SWAPI Explorer",
    description:
      "MERN stack app integrating the Star Wars API to let users explore ships, characters, and planets — with dynamic search and rich data.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/screenshots/swapi.png",
    github: "https://github.com/florinbighiu/free-style-mern-project",
  },
  {
    num: "05",
    category: "HR Tools",
    title: "Employees Madness",
    description:
      "HR management platform built on the MERN stack for administrators to manage employee records, departments, and roles — efficiently and at scale.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://portofolio-florinbighiu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FemployeeMadness.44c1bb59.png&w=3840&q=75",
    github: "https://github.com/florinbighiu/the-employee-madness",
  },
];

function ProjectCard({ project, delay }: { project: (typeof projects)[0]; delay: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3-D tilt
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    };
    const onLeave = () => { card.style.transform = ""; };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Reveal
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal ${delay} project-card bg-surface border border-white/[0.12] rounded-2xl overflow-hidden cursor-pointer group hover:border-[rgba(190,255,68,0.25)]`}
    >
      {/* Browser frame */}
      <div className="mx-4 mt-4 rounded-xl overflow-hidden border border-white/[0.10] bg-[#1a1a1a]">
        {/* Chrome bar */}
        <div className="flex items-center gap-[6px] px-3 py-[7px] bg-[#242424] border-b border-white/[0.08]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 bg-[#1a1a1a] rounded-md px-3 py-[3px] font-mono text-[0.6rem] text-muted/60 truncate">
            {project.live ?? project.github ?? ""}
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative overflow-hidden max-h-[200px]">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={800}
            className="w-full h-auto transition-all duration-500 group-hover:scale-105 saturate-75 brightness-90 group-hover:saturate-100 group-hover:brightness-100"
          />
          {/* Description overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[0.85rem] text-primary leading-[1.6]">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-accent mb-[6px]">
          {project.num} — {project.category}
        </div>
        <h3 className="font-display font-bold text-[1.25rem] mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-[6px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] tracking-[0.07em] uppercase text-muted border border-white/[0.12] bg-bg-2 px-[10px] py-[5px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 px-6 py-4 border-t border-white/[0.12]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.07em] uppercase text-accent no-underline transition-all duration-200 hover:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.07em] uppercase text-primary no-underline transition-all duration-200 hover:gap-3 hover:text-accent"
            onClick={(e) => e.stopPropagation()}
          >
            Live Site
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-3"];

  return (
    <section id="projects" className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-16 py-28">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              What I&apos;ve built
            </div>
            <h2
              className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
            >
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/florinbighiu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] font-medium tracking-[0.07em] uppercase text-primary border border-white/[0.18] px-6 py-3 rounded-full hover:border-accent hover:text-accent hover:-translate-y-[2px] transition-all duration-200 mb-1"
          >
            All on GitHub ↗
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
