import AnimatedSection from "./AnimatedSection";
import Highlights from "./Highlights";
import SectionTitle from "./SectionTitle";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2021 — Present",
    type: "Remote",
    highlights: [
      "Help businesses eliminate manual processes and replace them with scalable automation systems — cutting operational overhead and accelerating revenue growth",
      "Delivered 15+ production platforms across SaaS, CRM, fintech, and real estate — full ownership from architecture to deployment",
      "Specialize in workflow automation, AI integration, and business process digitization that measurably improves team efficiency",
    ],
    stack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "TypeScript", "REST APIs", "Claude AI"],
  },
  {
    role: "Full Stack Developer",
    company: "Wise Pelican",
    period: "2024 — 2026",
    type: "Full-time",
    highlights: [
      "Built PowerFarming — a real estate CRM that automates postcard campaigns, QR tracking, and seller lead management end-to-end",
      "Automated printing, mailing, and CRM follow-up workflows, improving efficiency by 40% and driving $150K/day in postcard sales",
      "Delivered full system: architecture, REST APIs, responsive UI, and production deployment",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "TypeScript", "REST APIs", "Vercel"],
  },
  {
    role: "AI Vibe Coder",
    company: "Tawla",
    period: "2024 — 2026",
    type: "Full-time",
    highlights: [
      "Maintained and evolved Tawla's web and mobile codebase across the full product lifecycle — owning feature development, bug fixes, performance tuning, and release cycles end-to-end",
      "Automated internal workflows across POS, reservations, billing, and reporting modules, reducing manual intervention and cutting operational overhead by 35%+",
      "Implemented AI-assisted development pipelines using vibe coding techniques — accelerating delivery velocity while maintaining production-grade code quality and system stability",
      "Refactored legacy modules, enforced clean architecture patterns, and introduced CI/CD pipelines that made deployments faster, safer, and fully automated",
      "Collaborated closely with product and design teams to ship customer-facing features on both web and mobile — improving team efficiency and keeping the platform ahead of operational demand",
    ],
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "CI/CD", "AI-Assisted Dev", "REST APIs", "Mobile App"],
  },
  {
    role: "Chief Technology Officer (CTO)",
    company: "Delta Prime AI Solutions",
    period: "2025 — 2026",
    type: "Full-time",
    highlights: [
      "Leading end-to-end product development for AI-powered business automation solutions — from technical strategy to shipping production-ready platforms that replace manual workflows",
      "Building and deploying client products using Claude Code, Cursor AI, and AI-assisted development pipelines, cutting delivery time significantly while maintaining production-grade code quality",
      "Driving technical vision across multiple SaaS and automation products — owning architecture decisions, team execution, and business impact for every shipped solution",
    ],
    stack: ["Claude Code", "Cursor AI", "Next.js", "Node.js", "PostgreSQL", "AI Integration", "CI/CD", "Product Strategy"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-zinc-800/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Career Journey"
          title="Where I've Worked"
          subtitle="5+ years building products that automate workflows, scale operations, and drive real business growth."
        />

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-indigo-500/25 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={item.company + item.period}
                  delay={i * 0.08}
                  className={`relative flex items-center gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  <div className="w-full md:w-[calc(50%-28px)]">
                    <div className="group relative bg-zinc-900/70 border border-zinc-800/60 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.22)]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent rounded-t-2xl" />

                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight mb-0.5">{item.role}</h3>
                      <p className="text-sm text-indigo-400 font-semibold mb-4">@ {item.company}</p>

                      <div className="h-px bg-zinc-800/70 mb-4" />

                      <Highlights items={item.highlights} />

                      <div className="flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                          <span key={tech} className="text-[11px] font-mono text-zinc-500 bg-zinc-800/80 border border-zinc-700/40 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-14 flex-shrink-0 justify-center items-center">
                    <div className="relative w-4 h-4 rounded-full border-2 border-indigo-500 bg-zinc-900 flex items-center justify-center z-10 shadow-[0_0_12px_2px_rgba(99,102,241,0.35)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    </div>
                  </div>

                  <div className="flex md:hidden justify-center my-4">
                    <div className="w-3 h-3 rounded-full border-2 border-indigo-500 bg-zinc-900" />
                  </div>

                  <div className="hidden md:block w-[calc(50%-28px)]" />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
