import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function PullQuote() {
  return (
    <section className="py-24 border-t border-zinc-800/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[280px] bg-indigo-600/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection className="flex flex-col items-center text-center">
          <Quote className="w-9 h-9 text-indigo-500/30 mb-8" strokeWidth={1.5} />

          <p className="text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold text-white leading-[1.35] tracking-tight max-w-3xl">
            &ldquo;Trust is the most valuable currency in any relationship
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              {" "}— once earned, it must be protected.&rdquo;
            </span>
          </p>

          <div className="flex items-center gap-3 mt-9">
            <span className="w-8 h-px bg-indigo-500/50" />
            <span className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">Muhammad Faiq</span>
            <span className="w-8 h-px bg-indigo-500/50" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
