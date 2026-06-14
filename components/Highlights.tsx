"use client";
import { useState } from "react";

const DEFAULT = 1;

export default function Highlights({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  const hasMore = items.length > DEFAULT;
  const shown = open || !hasMore ? items : items.slice(0, DEFAULT);

  return (
    <div className="mb-5">
      <ul className="space-y-2.5">
        {shown.map((h) => (
          <li key={h} className="flex gap-2.5 text-[13px] text-zinc-400 leading-relaxed">
            <span className="text-indigo-500 flex-shrink-0 mt-[3px] text-[10px]">▹</span>
            {h}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-3 inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
        >
          {open ? "See less ↑" : "See more ↓"}
        </button>
      )}
    </div>
  );
}
