import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-16 pt-32 pb-24 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(190,255,68,0.18)_0%,transparent_70%)] blur-[100px] opacity-60 animate-blob-float pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(120,80,255,0.12)_0%,transparent_70%)] blur-[100px] opacity-60 animate-blob-float-r pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1100px] grid grid-cols-[1fr_340px] gap-16 items-center max-[900px]:grid-cols-1">

        {/* Left */}
        <div>
          {/* Available tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[0.75rem] tracking-[0.1em] uppercase text-accent border border-[rgba(190,255,68,0.25)] bg-[rgba(190,255,68,0.08)] px-4 py-[0.4rem] rounded-full mb-6">
            <span className="w-[6px] h-[6px] bg-accent rounded-full animate-pulse-dot" />
            Available for work
          </div>

          {/* Name */}
          <h1 className="font-display font-extrabold leading-[0.95] tracking-[-0.02em] text-primary"
              style={{ fontSize: "clamp(3.5rem,7vw,6.5rem)" }}>
            FLORIN
            <em className="not-italic text-accent block">BIGHIU.</em>
          </h1>

          {/* Sub */}
          <p className="mt-6 text-[1.1rem] text-muted leading-[1.7] max-w-[480px]">
            <strong className="text-primary font-medium">Full-Stack Developer and QA Automation Engineer</strong> building
            scalable web apps with{" "}
            <strong className="text-primary font-medium">React</strong> on the frontend and{" "}
            <strong className="text-primary font-medium">Java / Spring</strong> on the backend.
            Focused on clean code, great UX, and fast delivery.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-[0.8rem] font-medium tracking-[0.07em] uppercase text-bg bg-accent px-7 py-[0.85rem] rounded-full transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(190,255,68,0.3)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Let&apos;s talk
            </a>
            <a
              href="/FLORIN_BIGHIU_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.8rem] font-medium tracking-[0.07em] uppercase text-primary border border-white/[0.18] px-7 py-[0.85rem] rounded-full transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-[2px]"
            >
              Download CV
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          <div className="flex gap-3 mt-8">
            {[
              {
                href: "https://www.linkedin.com/in/florin-bighiu/",
                label: "LinkedIn",
                icon: (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                href: "https://github.com/florinbighiu",
                label: "GitHub",
                icon: (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                ),
              },
              {
                href: "mailto:florin.bighiu1@gmail.com",
                label: "Email",
                icon: (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={label}
                className="flex items-center justify-center w-10 h-10 rounded-[10px] border border-white/[0.18] text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(190,255,68,0.08)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar Card */}
        <div className="relative bg-surface border border-white/[0.12] rounded-2xl p-6 overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

          <Image
            src="https://portofolio-florinbighiu.vercel.app/_next/image?url=%2F283185044_2606893879444159_1671680474858766700_n.jpg&w=640&q=95"
            alt="Florin Bighiu"
            width={300}
            height={300}
            className="w-full aspect-square object-cover rounded-[10px]"
            priority
          />

          <div className="mt-5 flex flex-col gap-[5px]">
            <div className="font-display font-bold text-[1.1rem] text-primary">Florin Bighiu</div>
            <div className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-accent">
              Full-Stack Developer
            </div>
            <div className="text-[0.85rem] text-muted mt-1 flex items-center gap-1">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Iași, Romania
            </div>
            <div className="inline-flex items-center gap-[6px] font-mono text-[0.7rem] tracking-[0.07em] uppercase text-[#60d17a] bg-[rgba(96,209,122,0.1)] border border-[rgba(96,209,122,0.2)] px-3 py-[5px] rounded-full mt-2 w-fit">
              <span className="w-[5px] h-[5px] bg-[#60d17a] rounded-full animate-pulse-dot" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
