const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="text-base font-bold text-white tracking-tight hover:text-indigo-400 transition-colors duration-200"
          >
            Zaid.
          </a>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-zinc-700">
            © 2025 Zaid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
