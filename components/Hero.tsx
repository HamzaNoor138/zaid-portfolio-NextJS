import { ArrowRight, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlobeClient from "./GlobeClient";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[140px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #2d2d2d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen py-28 pt-24">

          {/* ── Left: text content ── */}
          <div className="z-10 lg:pr-8">

            {/* Quote line */}
            <AnimatedSection delay={0.0}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-indigo-500/50" />
                <p className="text-[11px] font-mono text-indigo-300/60 tracking-wide italic">
                  &ldquo;Trust is the most valuable currency in any relationship — once earned, it must be protected.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Name + GitHub */}
            <AnimatedSection delay={0.05}>
              <div className="mb-5">
                <p className="text-2xl sm:text-3xl font-bold text-zinc-300 tracking-wide flex items-center gap-2 mb-1">
                  <span className="text-indigo-500 font-mono font-light">&lt;</span>
                  Zaid
                  <span className="text-indigo-500 font-mono font-light">/&gt;</span>
                </p>
                <div className="flex items-center gap-4">
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs text-indigo-400 font-medium mb-8 px-3 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Available for new projects
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.92] mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-700">
                  Building Digital
                  <br />
                  Products
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-xl sm:text-2xl font-semibold text-white max-w-lg leading-snug mb-4">
                I turn complex business problems into automated, scalable web systems —
                so your team moves faster and your revenue grows.
              </p>
              <p className="text-base text-zinc-500 max-w-md leading-relaxed mb-10">
                SaaS platforms · CRM & workflow automation · REST API integrations ·
                AI-accelerated delivery
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors duration-200"
                >
                  View Projects
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-medium text-sm hover:border-zinc-500 hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} />
                  Get in Touch
                </a>
              </div>
            </AnimatedSection>

          </div>

          {/* ── Right: Globe ── */}
          <AnimatedSection
            delay={0.2}
            className="hidden lg:block relative h-[620px]"
          >
            {/* Orbital ring decorations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="absolute w-[420px] h-[180px] rounded-full border border-dashed border-indigo-500/20"
                style={{ transform: "rotateX(75deg) rotateZ(20deg)" }} />
              <div className="absolute w-[520px] h-[200px] rounded-full border border-dashed border-violet-500/15"
                style={{ transform: "rotateX(72deg) rotateZ(-30deg)" }} />
              <div className="absolute w-[360px] h-[140px] rounded-full border border-indigo-400/10"
                style={{ transform: "rotateX(78deg) rotateZ(60deg)" }} />
            </div>

            {/* Edge gradient masks */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>
            <GlobeClient />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
