"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const leftRef  = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLFormElement>();
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  let btnColor = "bg-accent text-bg";
  if (status === "sent")  btnColor = "bg-[#60d17a] text-bg";
  if (status === "error") btnColor = "bg-red-500 text-white";

  let btnLabel: React.ReactNode = (
    <>
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
      Send message
    </>
  );
  if (status === "loading") btnLabel = <>Sending…</>;
  if (status === "sent")    btnLabel = <>✓ Message sent!</>;
  if (status === "error")   btnLabel = <>✗ Failed — try again</>;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("send failed");

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-16 py-28">
        {/* Header */}
        <div className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent mb-3 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          Get in touch
        </div>
        <h2
          className="font-display font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Let&apos;s work together
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-[1fr_1.3fr] gap-20 mt-14 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Left */}
          <div ref={leftRef} className="reveal">
            <h3 className="font-display font-bold text-[1.5rem] mb-3">Have a project in mind?</h3>
            <p className="text-muted leading-[1.7] mb-8">
              Whether you&apos;re looking to hire, collaborate on something interesting, or just want to
              connect — my inbox is always open. I&apos;ll get back to you within a day.
            </p>
            <a
              href="mailto:florin.bighiu1@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[0.85rem] text-accent border border-[rgba(190,255,68,0.25)] bg-[rgba(190,255,68,0.08)] px-5 py-3 rounded-full hover:bg-[rgba(190,255,68,0.16)] hover:-translate-y-[2px] transition-all duration-200"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              florin.bighiu1@gmail.com
            </a>
          </div>

          {/* Right – form */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Name"  id="name"  type="text"  placeholder="Your name" />
              <FormField label="Email" id="email" type="email" placeholder="your@email.com" />
            </div>
            <FormField label="Subject" id="subject" type="text" placeholder="What's this about?" />
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="message"
                className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="bg-surface border border-white/[0.07] rounded-[10px] text-primary font-body text-[0.95rem] px-[18px] py-[14px] outline-none focus:border-accent transition-colors duration-200 resize-none placeholder:text-muted/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`self-start inline-flex items-center gap-2 font-mono text-[0.8rem] font-medium tracking-[0.08em] uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(190,255,68,0.25)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${btnColor}`}
            >
              {btnLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, id, type, placeholder,
}: {
  label: string; id: string; type: string; placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={id} className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="bg-surface border border-white/[0.07] rounded-[10px] text-primary font-body text-[0.95rem] px-[18px] py-[14px] outline-none focus:border-accent transition-colors duration-200 placeholder:text-muted/60"
      />
    </div>
  );
}
