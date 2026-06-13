"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

/* ─── data ─────────────────────────────────────────────────── */
const blocks = [
  {
    row: 0,
    side: "left",
    label: "FRONTEND",
    sublabel: "Client Layer",
    headerType: "browser",
    headerMeta: "localhost:3000",
    theme: {
      border: "border-indigo-500/30",
      bg: "from-indigo-500/[0.07]",
      badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
      chip: "border-indigo-500/20 bg-indigo-500/8 text-indigo-200",
      dot: "bg-indigo-400",
      glow: "hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.5)]",
    },
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Responsive UI", "Three.js"],
  },
  {
    row: 0,
    side: "right",
    label: "API LAYER",
    sublabel: "Business Logic",
    headerType: "api",
    headerMeta: "/api/v1",
    theme: {
      border: "border-purple-500/30",
      bg: "from-purple-500/[0.07]",
      badge: "text-purple-400 bg-purple-500/10 border-purple-500/25",
      chip: "border-purple-500/20 bg-purple-500/8 text-purple-200",
      dot: "bg-purple-400",
      glow: "hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.45)]",
    },
    skills: ["Node.js", "Express.js", "REST APIs", "Firebase Auth", "Strapi CMS", "Stripe", "PayPal", "Socket.io", "WebRTC", "JWT"],
  },
  {
    row: 1,
    side: "left",
    label: "DATABASE",
    sublabel: "Data Layer",
    headerType: "db",
    headerMeta: "storage",
    theme: {
      border: "border-cyan-500/30",
      bg: "from-cyan-500/[0.07]",
      badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
      chip: "border-cyan-500/20 bg-cyan-500/8 text-cyan-200",
      dot: "bg-cyan-400",
      glow: "hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.4)]",
    },
    skills: ["PostgreSQL", "MongoDB", "Firebase Realtime", "Supabase", "Row Level Security (RLS)"],
  },
  {
    row: 1,
    side: "right",
    label: "DEVOPS",
    sublabel: "CI/CD & Delivery",
    headerType: "pipeline",
    headerMeta: "pipeline",
    theme: {
      border: "border-orange-500/30",
      bg: "from-orange-500/[0.06]",
      badge: "text-orange-400 bg-orange-500/10 border-orange-500/25",
      chip: "border-orange-500/20 bg-orange-500/8 text-orange-200",
      dot: "bg-orange-400",
      glow: "hover:shadow-[0_0_40px_-12px_rgba(249,115,22,0.35)]",
    },
    skills: ["GitHub Actions", "Vercel", "Playwright", "ESLint / Prettier", "Husky"],
  },
];

const aiSkills = ["Claude AI", "Cursor AI", "AI Code Review", "PR Quality Gates", "Prompt Engineering"];

/* ─── card header types ─────────────────────────────────────── */
function CardHeader({ type, meta }: { type: string; meta: string }) {
  if (type === "browser") {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950/70 border-b border-indigo-500/15 rounded-t-2xl">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-zinc-800/60 rounded px-2 py-0.5">
          <span className="text-[9px] font-mono text-zinc-600">{meta}</span>
        </div>
      </div>
    );
  }
  if (type === "api") {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950/70 border-b border-purple-500/15 rounded-t-2xl">
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">GET</span>
        <span className="text-[9px] font-mono text-purple-400/80">{meta}/users</span>
        <span className="text-[9px] font-mono text-yellow-400/60 ml-auto">200 OK</span>
      </div>
    );
  }
  if (type === "db") {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950/70 border-b border-cyan-500/15 rounded-t-2xl">
        <span className="text-[9px] font-mono text-cyan-400/70">▶</span>
        <span className="text-[9px] font-mono text-cyan-400/80">SELECT * FROM {meta}s</span>
      </div>
    );
  }
  if (type === "pipeline") {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950/70 border-b border-orange-500/15 rounded-t-2xl">
        <div className="flex items-center gap-1">
          {["Build", "Test", "Deploy"].map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span className="text-[8px] font-mono text-orange-400/70">{s}</span>
              {i < 2 && <span className="text-zinc-700 text-[8px]">›</span>}
            </span>
          ))}
        </div>
        <span className="ml-auto text-[8px] font-mono text-emerald-400/70">✓ passed</span>
      </div>
    );
  }
  return null;
}

/* ─── architecture card ─────────────────────────────────────── */
function ArchCard({ block, delay }: { block: typeof blocks[0]; delay: number }) {
  const t = block.theme;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`border ${t.border} ${t.glow} rounded-2xl overflow-hidden bg-gradient-to-br ${t.bg} to-transparent transition-all duration-300 h-full`}
    >
      <CardHeader type={block.headerType} meta={block.headerMeta} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${t.badge.split(" ")[0]}`}>
              {block.label}
            </span>
            <p className="text-[10px] text-zinc-600 mt-0.5">{block.sublabel}</p>
          </div>
          <span className={`text-[8px] font-mono px-2 py-0.5 rounded-full border ${t.badge}`}>
            ACTIVE
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {block.skills.map((s) => (
            <span key={s} className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${t.chip}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── horizontal connector ──────────────────────────────────── */
function HConnector({ label, delay }: { label: string; delay: number }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 self-center px-2">
      <div className="relative flex items-center w-full">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-zinc-700/40 via-zinc-500/60 to-zinc-700/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-zinc-400/80 blur-[1px]"
          animate={{ x: ["-300%", "300%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay }}
        />
      </div>
      <span className="text-[8px] font-mono text-zinc-700 tracking-widest uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* ─── vertical row-to-row connector ────────────────────────── */
function VConnector({ leftDot, rightDot }: { leftDot: string; rightDot: string }) {
  return (
    <div className="grid grid-cols-[1fr_80px_1fr] py-1">
      {[leftDot, rightDot].map((dot, idx) => (
        <div key={idx} className={idx === 1 ? "col-start-3" : ""}>
          <div className="flex justify-center relative h-8">
            <div className="w-px h-full bg-gradient-to-b from-zinc-700/50 to-zinc-700/50" />
            <motion.div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${dot}`}
              animate={{ y: [0, 30] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: idx * 0.4 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── main component ────────────────────────────────────────── */
export default function Skills() {
  const row0 = blocks.filter((b) => b.row === 0);
  const row1 = blocks.filter((b) => b.row === 1);

  return (
    <section id="skills" className="py-28 border-t border-zinc-800/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          label="Architecture"
          title="Tech Stack & Skills"
          subtitle="Full-stack delivery — from browser to database, CI/CD pipeline to AI-accelerated workflows."
        />

        {/* Row 0 */}
        <div className="grid grid-cols-[1fr_80px_1fr] items-stretch gap-0">
          <ArchCard block={row0[0]} delay={0.05} />
          <HConnector label="HTTP / REST" delay={0.3} />
          <ArchCard block={row0[1]} delay={0.1} />
        </div>

        {/* Vertical connectors row 0 → row 1 */}
        <VConnector leftDot="bg-indigo-400" rightDot="bg-purple-400" />

        {/* Row 1 */}
        <div className="grid grid-cols-[1fr_80px_1fr] items-stretch gap-0">
          <ArchCard block={row1[0]} delay={0.15} />
          <HConnector label="ORM Queries" delay={0.4} />
          <ArchCard block={row1[1]} delay={0.2} />
        </div>

        {/* Converging connector → AI */}
        <div className="relative h-10 my-1">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="25%" y1="0" x2="50%" y2="100%" stroke="#27272a" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="75%" y1="0" x2="50%" y2="100%" stroke="#27272a" strokeWidth="1" strokeDasharray="4 3" />
          </svg>
          <motion.div
            className="absolute top-0 left-1/4 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 blur-[1px]"
            animate={{ x: [0, 75], y: [0, 36] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-0 left-3/4 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 blur-[1px]"
            animate={{ x: [0, -75], y: [0, 36] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
        </div>

        {/* AI — full-width featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="border border-emerald-500/30 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/[0.07] to-transparent hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] transition-all duration-300"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-zinc-950/70 border-b border-emerald-500/15">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[9px] font-mono text-emerald-400/80">ai-workflow.active</span>
            <span className="ml-auto text-[9px] font-mono text-emerald-400/50">accelerating development...</span>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-emerald-400">
                  AI LAYER
                </span>
                <p className="text-[10px] text-zinc-600 mt-0.5">AI-Accelerated · Reviewed · Automated</p>
              </div>
              <span className="text-[8px] font-mono px-2 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/25">
                ACTIVE
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiSkills.map((s) => (
                <span key={s} className="text-[11px] font-medium px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/8 text-emerald-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
