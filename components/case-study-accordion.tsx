"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyAccordion({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-8 md:py-10 flex items-start gap-6 md:gap-10 group"
      >
        <span className="font-display text-4xl md:text-6xl text-numblue/70 font-light leading-none shrink-0 tabular-nums">
          {study.number}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono-label text-[11px] uppercase tracking-[0.15em] text-ink/50">
              {study.company}
            </span>
          </div>
          <h3 className="font-display text-xl md:text-3xl leading-snug pr-8 group-hover:text-brass transition-colors">
            {study.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {study.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono-label uppercase tracking-wide px-2.5 py-1 border border-hairline rounded-full text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <span
          className={`shrink-0 font-display text-3xl md:text-4xl text-brass transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 pl-0 md:pl-[calc(3.75rem+2.5rem)] grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-[11px] font-mono-label uppercase tracking-[0.15em] text-brass mb-1">
                  {study.role}
                </p>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wide text-ink/50 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-ink/80 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wide text-ink/50 mb-2">
                    What I Built
                  </h4>
                  <ul className="space-y-2">
                    {study.built.map((b) => (
                      <li key={b} className="flex gap-2 text-ink/80 leading-relaxed">
                        <span className="text-brass mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wide text-ink/50 mb-2">
                    What I Did
                  </h4>
                  <p className="text-ink/80 leading-relaxed">{study.did}</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-4 md:pt-9">
                <h4 className="font-display text-sm uppercase tracking-wide text-ink/50">
                  Results
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {study.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-ink text-paper rounded-xl px-6 py-5 grain"
                    >
                      <div className="font-display text-3xl md:text-4xl text-numblue">
                        {r.value}
                      </div>
                      <div className="text-sm text-paper/70 mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
