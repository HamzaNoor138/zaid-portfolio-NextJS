import AnimatedSection from "./AnimatedSection";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";

const socials: { label: string; href: string }[] = [];

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-[#0d0d14] to-[#0a0a0a]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/12 rounded-full blur-[100px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="relative px-10 py-16 text-center">
              <AnimatedSection delay={0.1}>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="w-5 h-px bg-indigo-500/70" />
                  <span className="text-sm font-mono text-indigo-400 tracking-[0.2em] uppercase">Contact</span>
                  <span className="w-5 h-px bg-indigo-500/70" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-5 leading-[1.02]">
                  Let&apos;s build something
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                    great together.
                  </span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <p className="text-zinc-500 text-base max-w-md mx-auto mb-10 leading-relaxed">
                  I&apos;m currently available for freelance and contract work.
                  Drop me a line — I reply within 24 hours.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:zaidsalman138446@gmail.com"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors duration-200"
                  >
                    <Mail size={16} />
                    zaidsalman138446@gmail.com
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.45}>
                <div className="flex items-center justify-center gap-3 mt-10">
                  {socials.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-800 text-zinc-500 text-xs font-medium hover:border-zinc-600 hover:text-white transition-all duration-200"
                    >
                      {label}
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
