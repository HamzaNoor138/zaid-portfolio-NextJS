"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — photo + name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-500/50 group-hover:ring-indigo-400/80 transition-all duration-200 flex-shrink-0 shadow-[0_0_12px_-2px_rgba(99,102,241,0.5)]">
            <Image src="/z.jpg" alt="Zaid" fill sizes="44px" className="object-cover" priority />
          </div>
          <span className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-200">
            Zaid
          </span>
        </a>

        <ul className="flex items-center gap-6 sm:gap-8">
          {links.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href} className="hidden sm:block relative">
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-500 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-white transition-all duration-200"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
