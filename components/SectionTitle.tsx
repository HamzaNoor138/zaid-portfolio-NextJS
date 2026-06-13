"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
  className = "",
}: Props) {
  const align = center ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${align} mb-16 ${className}`}>
      {/* Label */}
      <motion.div
        className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
        initial={{ opacity: 0, x: center ? 0 : -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {!center && <span className="w-5 h-px bg-indigo-500/70" />}
        <span className="text-sm font-mono text-indigo-400 tracking-[0.2em] uppercase">
          {label}
        </span>
        {center && <span className="w-5 h-px bg-indigo-500/70" />}
      </motion.div>

      {/* Main heading — single block reveal */}
      <motion.h2
        className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {title}
      </motion.h2>

      {/* Animated underline */}
      <div className={`mt-6 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <motion.div
          className="h-px bg-gradient-to-r from-indigo-500/70 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: 72 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        />
        <motion.div
          className="w-1 h-1 rounded-full bg-indigo-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.3, type: "spring" }}
        />
      </div>

      {subtitle && (
        <motion.p
          className="mt-5 text-zinc-500 text-base max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
