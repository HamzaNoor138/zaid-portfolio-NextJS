"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    num: "01",
    title: "Smart Farming Automation: Leads, Tracking & CRM in One Platform",
    description:
      "An end-to-end real estate marketing automation platform where agents select target areas and schedule mailers while the system handles printing, mailing, tracking, and lead capture automatically. The solution delivered up to 40% efficiency improvement and increased automated postcard sales to $150K per day, with all responses managed through a built-in CRM for faster follow-ups and clear ROI.",
    tags: ["React", "CRM Automation", "CRM Development", "FastAPI", "Payment Gateway Integration", "AI Chatbot", "CI/CD Pipeline"],
    live: "https://app.wisepelican.com/",
    image: "/p1.jpg",
    url: "app.wisepelican.com",
    featured: true,
  },
  {
    num: "02",
    title: "Tawla — Web & Mobile Restaurant OS: POS, QR Ordering, Reservations & Analytics",
    description:
      "Built Tawla as a cross-platform web and mobile application — a full-stack restaurant management solution that unifies POS billing, QR menu ordering, table reservations, payment processing, and advanced analytics in one intuitive system. The web portal gives venue owners a complete management dashboard, while the mobile app keeps staff and customers connected on the go. Restaurant owners onboard in minutes — add menu items, arrange tables, set pricing, and go live immediately. Customers scan a QR code to browse and order directly from their phones while staff process dine-in and takeaway orders with speed and accuracy. Integrated invoicing handles card, cash, and digital payments across both platforms. Built-in reporting surfaces sales trends and performance data, helping operators make smarter decisions. Tawla replaces multiple fragmented tools with one unified web + mobile platform purpose-built for the fast-paced F&B industry — scalable from a single venue to multi-location operations.",
    tags: ["Web App", "Mobile App", "POS System", "QR Menu Ordering", "Table Reservations", "Payment Gateway", "Analytics & Reporting", "Multi-location SaaS"],
    live: "https://tawla.io/",
    image: "/p7.jpg",
    url: "tawla.io",
    featured: false,
  },
  {
    num: "03",
    title: "AI HRMS & Workforce Automation Platform",
    description:
      "Built an end-to-end AI-powered HR and workforce automation platform covering the full employee lifecycle — from hiring to payroll. Eliminates manual HR work entirely: CV parsing, AI-based candidate scoring, recruitment workflows, employee onboarding, project and ticket management, task assignment, work tracking, performance monitoring, and automated payroll. Role-based portals for Admin, Company, Employees, and Managers bring every team operation into one centralized platform — boosting efficiency and removing human bottlenecks at every step.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AI/ML", "Role-Based Auth", "Payroll Automation", "TypeScript"],
    live: "https://employeease.netlify.app/",
    image: "/p2.jpg",
    url: "employeease.netlify.app",
    featured: false,
  },
  {
    num: "04",
    title: "AI-Powered Email Outreach & Follow-Up Automation Platform",
    description:
      "Built a complete email campaign automation CRM that replaces all manual marketing work. Users create campaigns, build custom or AI-generated templates, schedule emails, connect multiple SMTP accounts, manage recipients, and track opens, replies, bounce rate, and campaign performance — all from one platform. Automated follow-up sequences (F1, F2, F3+) run without any manual intervention, helping teams handle high-volume outreach and improving workflow efficiency by up to 40%.",
    tags: ["React", "PostgreSQL", "SMTP", "Payment Processing", "AI Content Creation", "Claude AI", "Cursor AI", "CI/CD"],
    live: "https://email.deltaprimeaisolutions.com/",
    image: "/p3.jpg",
    url: "email.deltaprimeaisolutions.com",
    featured: false,
  },
  {
    num: "05",
    title: "AI Startup Investment Platform with KYC & Pitch Scoring",
    description:
      "Built an AI-driven startup investment platform connecting entrepreneurs and investors in a secure digital Shark Tank-style environment. The system includes KYC verification, AI-based pitch review, content-based pitch scoring, investor recommendations, AI chatbot support, real-time messaging, file sharing, audio/video calls, scheduled meetings, one-to-one chat, group chat, and analytics to make investment evaluation faster, transparent, and more data-driven.",
    tags: ["Next.js", "AI Chatbot", "Payment Gateway Integration", "AI Model Training", "WebRTC"],
    live: "https://capitalfusion.jehanzaib.dev/",
    image: "/p4.jpg",
    url: "capitalfusion.jehanzaib.dev",
    featured: false,
  },
  {
    num: "06",
    title: "Direct Mail Marketing CRM with Canva-Like Design Automation",
    description:
      "Built a Canva-like creative suite integrated with CRM, QR tracking, campaign automation, and workflow management for real estate direct mail. Teams can design, personalize, approve, track, and manage print campaigns inside their own platform without relying on Canva. It includes reusable templates, lead workflows, analytics, and automation tools. The solution improved automation efficiency by 25–30% and made the team fully independent from Canva. Used Cursor, Claude Code, and Claude-assisted code review for faster delivery and quality checks.",
    tags: ["React", "Fabric.js", "CRM Development", "Claude 3.5 Sonnet", "CI/CD"],
    live: "https://app.wisepelican.com/",
    image: "/p5.jpg",
    url: "app.wisepelican.com",
    featured: false,
  },
  {
    num: "07",
    title: "Sports Venue Booking & Club Management ERP Platform",
    description:
      "Built PlayBase, an online venue booking and club management platform for padel/sports venues. Players can search venues by city, book courts online, join clubs, and participate in tournaments. Venue owners get a complete portal with dashboard, booking management, venue management, customers, billing, invoices, finance tracking, payment processing, cafe invites, and revenue reports. The system helps clubs manage daily operations, bookings, and payments from one centralized platform.",
    tags: ["Enterprise Software Development", "Payment Gateway", "Invoicing", "Calendar Management", "Dashboard"],
    live: "https://playbase.deltaprimeaisolutions.com/",
    image: "/p6.jpg",
    url: "playbase.deltaprimeaisolutions.com",
    featured: false,
  },
  {
    num: "09",
    title: "Modern Beverage Storefront | Next.js/React + Strapi + PayPal",
    description:
      "Developed a full-stack e-commerce platform using Next.js, TypeScript, Tailwind CSS, and Strapi CMS with PayPal integration, dynamic cart, animated UI, and CMS-driven product management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "PayPal Integration", "E-Commerce", "Animated UI"],
    live: "https://aurabora.com/",
    image: "/p9.jpg",
    url: "aurabora.com",
    featured: false,
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const TRUNCATE = 130;
const DEFAULT_VISIBLE = 3;

/* ── Expandable description ──────────────────────────────── */
function Description({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const isLong = text.length > TRUNCATE;
  const shown = open || !isLong ? text : text.slice(0, TRUNCATE).trimEnd() + "…";

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.p
          key={shown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-zinc-400 leading-relaxed"
        >
          {shown}
        </motion.p>
      </AnimatePresence>
      {isLong && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-2 inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
        >
          {open ? "See less ↑" : "See more ↓"}
        </button>
      )}
    </div>
  );
}

/* ── Tags ────────────────────────────────────────────────── */
function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* ── Links ───────────────────────────────────────────────── */
function Links({ live }: { live: string | null }) {
  if (!live) return null;
  return (
    <div className="flex items-center gap-2">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 px-4 py-1.5 rounded-full transition-all duration-200"
      >
        View Live <ArrowUpRight size={11} />
      </a>
    </div>
  );
}

/* ── Browser-frame screenshot ────────────────────────────── */
function ScreenFrame({ src, url }: { src?: string; url: string }) {
  return (
    <div className="w-full h-full min-h-[240px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 bg-zinc-800 rounded-md px-3 py-1 text-[9px] font-mono text-zinc-500 truncate">
          {url}
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={url}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
              Preview coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Project card (alternating layout) ──────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const rev = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease }}
    >
      <div className="grad-border p-px rounded-3xl">
        <div className="rounded-3xl bg-[#0d0d0f] overflow-hidden grid lg:grid-cols-[1fr_1.4fr]">
          <div
            className={`p-7 flex flex-col justify-center gap-5 border-b lg:border-b-0 border-zinc-800/50 ${
              rev ? "lg:order-2 lg:border-l lg:border-r-0" : "lg:order-1 lg:border-r"
            }`}
          >
            <div className="flex items-center gap-3">
              {project.featured && (
                <span className="text-[10px] font-mono text-indigo-400 border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 rounded-full">
                  ★ Featured
                </span>
              )}
              <span className="text-[10px] font-mono text-zinc-700">#{project.num}</span>
            </div>

            <h3 className="text-xl font-bold text-white leading-snug">{project.title}</h3>

            <Description text={project.description} />

            <Tags tags={project.tags} />

            <Links live={project.live} />
          </div>

          <div className={`relative p-5 bg-zinc-900/30 ${rev ? "lg:order-1" : "lg:order-2"}`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-transparent pointer-events-none ${
                rev ? "rounded-l-3xl" : "rounded-r-3xl"
              }`}
            />
            <div className="relative h-full min-h-[240px]">
              <ScreenFrame src={project.image} url={project.url} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main ────────────────────────────────────────────────── */
export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const visible = expanded ? projects : projects.slice(0, DEFAULT_VISIBLE);

  function handleSeeLess() {
    setExpanded(false);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-28 border-t border-zinc-800/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-5">
        <SectionTitle label="Projects" title="Selected Work" />

        <AnimatePresence initial={false}>
          {visible.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pt-4"
        >
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="group flex items-center gap-2.5 px-7 py-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-white transition-all duration-200"
            >
              Explore More
              <span className="text-indigo-400 group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              className="group flex items-center gap-2.5 px-7 py-3 rounded-full border border-zinc-700/50 bg-zinc-800/40 text-zinc-400 text-sm font-medium hover:bg-zinc-700/40 hover:text-white transition-all duration-200"
            >
              See Less
              <span className="group-hover:-translate-y-0.5 transition-transform duration-200">↑</span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
