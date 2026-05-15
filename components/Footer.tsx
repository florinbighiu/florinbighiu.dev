const links = [
  { href: "https://github.com/florinbighiu", label: "GitHub" },
  { href: "https://www.linkedin.com/in/florin-bighiu/", label: "LinkedIn" },
  { href: "mailto:florin.bighiu1@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.12]">
      <div className="max-w-[1200px] mx-auto px-16 py-10 flex items-center justify-between max-[900px]:flex-col max-[900px]:gap-4 max-[900px]:px-6">
        <p className="font-mono text-[0.72rem] tracking-[0.04em] text-muted">
          © 2026 <span className="text-accent">Florin Bighiu</span> — Built with ♥ in Iași, Romania
        </p>
        <ul className="flex gap-6 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-mono text-[0.72rem] tracking-[0.06em] uppercase text-muted no-underline hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
