"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 700,
        height: 700,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.055) 0%, transparent 60%)",
        willChange: "transform",
      }}
    />
  );
}
