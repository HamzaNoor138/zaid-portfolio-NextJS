import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({ label, title, subtitle, center = false, className = "" }: Props) {
  const align = center ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${align} mb-16 ${className}`}>
      <AnimatedSection>
        <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
          {!center && <span className="w-5 h-px bg-indigo-500/70" />}
          <span className="text-sm font-mono text-indigo-400 tracking-[0.2em] uppercase">{label}</span>
          {center && <span className="w-5 h-px bg-indigo-500/70" />}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]">
          {title}
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className={`mt-6 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <div className="h-px w-[72px] bg-gradient-to-r from-indigo-500/70 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-indigo-500" />
        </div>
        {subtitle && (
          <p className="mt-5 text-zinc-500 text-base max-w-lg leading-relaxed">{subtitle}</p>
        )}
      </AnimatedSection>
    </div>
  );
}
