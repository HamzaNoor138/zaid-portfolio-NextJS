import { Code2, Database, Gauge, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "End-to-end web apps — from schema design to pixel-perfect UI.",
  },
  {
    icon: Database,
    title: "API & Database Architecture",
    text: "REST APIs and data layers built to scale with the product.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    text: "Core Web Vitals, load times, and technical SEO that converts.",
  },
  {
    icon: Briefcase,
    title: "Freelance & Consulting",
    text: "Scoping, delivery, and long-term partnerships that ship.",
  },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "15+", label: "Clients served" },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-zinc-800/40 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[520px] h-[520px] bg-indigo-600/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          {/* Left — bio + focus areas */}
          <div>
            <SectionTitle label="About" title="Who I Am" />

            <AnimatedSection delay={0.1} className="-mt-6 mb-12">
              <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                I&apos;m Zaid — a full-stack developer with{" "}
                <span className="text-white font-semibold">5+ years of experience</span>{" "}
                turning ideas into reality. I transform manual business operations
                into powerful, automated systems — engineered end-to-end for speed,
                scale, and real impact.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                {focusAreas.map(({ icon: Icon, title, text }, i) => (
                  <div
                    key={title}
                    className="group relative flex gap-5 py-5 pl-5 border-t border-zinc-800/60 last:border-b transition-colors duration-300 hover:border-t-zinc-700"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-indigo-400 scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
                    <span className="text-xs font-mono text-zinc-700 pt-1.5 w-6 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/[0.06] transition-colors duration-300">
                      <Icon size={17} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — featured portrait */}
          <AnimatedSection delay={0.15}>
            <div className="max-w-md lg:ml-auto">
              <div className="grad-border p-px rounded-3xl">
                <div className="rounded-3xl overflow-hidden relative aspect-square">
                  <Image
                    src="/z.jpg"
                    alt="Zaid — Full Stack Developer"
                    fill
                    priority
                    sizes="(min-width: 1024px) 28rem, 90vw"
                    className="object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400">
                      Available for new projects
                    </span>
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-1.5 text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                      <MapPin size={12} />
                      Remote / Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 mt-6 rounded-2xl border border-zinc-800/70 divide-x divide-zinc-800/70 overflow-hidden bg-zinc-900/20">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center py-5 px-2">
                    <div className="text-xl font-bold text-white mb-0.5">{value}</div>
                    <div className="text-[11px] text-zinc-600 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              {/* Open to */}
              <div className="flex items-center gap-3 mt-6 px-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 flex-shrink-0">
                  Open to
                </span>
                <span className="h-px flex-1 bg-zinc-800/70" />
                <div className="flex flex-wrap gap-2">
                  {["Freelance", "Full-time", "Consulting"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
