"use client";

import { useState } from "react";
import Image from "next/image";
import { workSamples, workSampleCategories } from "@/lib/work-samples";

export function WorkSamplesGrid() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? workSamples
      : workSamples.filter((w) => w.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {workSampleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-mono-label uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
              filter === cat
                ? "bg-ink text-paper border-ink"
                : "border-hairline text-ink/60 hover:border-brass hover:text-brass"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((w) => (
          <div
            key={w.title}
            className="border border-hairline rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-mono-label uppercase tracking-wide px-2.5 py-1 border border-hairline rounded-full text-ink/50">
                {w.category}
              </span>
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src={w.companyLogo}
                  alt={w.company}
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-display text-xl md:text-2xl leading-snug mb-1">
              {w.title}
            </h3>
            <p className="text-sm text-brass font-mono-label uppercase tracking-wide mb-1">
              {w.company}
            </p>
            <p className="text-sm text-ink/50 mb-5">{w.role}</p>

            <ul className="space-y-2 mb-6 flex-1">
              {w.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-ink/75 leading-relaxed">
                  <span className="text-brass mt-1 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {w.audioSamples && w.audioSamples.length > 0 && (
              <div className="space-y-4 mb-6 pt-4 border-t border-hairline">
                {w.audioSamples.map((a) => (
                  <div key={a.url}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-ink">
                        {a.label}
                      </span>
                      <span className="text-xs text-ink/40 font-mono-label">
                        {a.duration}
                      </span>
                    </div>
                    <audio
                      controls
                      preload="none"
                      src={a.url}
                      className="w-full h-9"
                    />
                  </div>
                ))}
              </div>
            )}

            {w.links.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-hairline">
                {w.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brass hover:underline underline-offset-4"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
