"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  isRouterLink?: boolean;
  isCurrent?: boolean;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = open ? (
    <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper z-[100] overflow-y-auto">
      <nav className="flex flex-col px-6 py-8 gap-1 text-base font-mono-label uppercase tracking-wide">
        {links.map((l) =>
          l.isCurrent ? (
            <span
              key={l.label}
              className="py-4 border-b border-hairline text-brass"
            >
              {l.label}
            </span>
          ) : l.isRouterLink ? (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-hairline text-ink hover:text-brass transition-colors"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-hairline text-ink hover:text-brass transition-colors"
            >
              {l.label}
            </a>
          )
        )}
      </nav>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="relative z-[101] p-2 -mr-2 text-ink"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
