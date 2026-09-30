import Link from "next/link";
import type { Metadata } from "next";
import { WorkSamplesGrid } from "@/components/work-samples-grid";
import { MobileNav } from "@/components/mobile-nav";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work Samples | Lance Braun",
  description:
    "Published B2B content strategy work samples from Fiserv, FICO, and Ellsworth Adhesives — case studies, podcasts, point-of-view papers, infographics, and video.",
};

export default function WorkSamplesPage() {
  return (
    <main className="overflow-x-hidden">
      <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-tight">
            Lance Braun
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono-label uppercase tracking-wide text-ink/70">
            <Link href="/#work" className="hover:text-brass transition-colors">
              Work
            </Link>
            <Link href="/#skills" className="hover:text-brass transition-colors">
              Skills
            </Link>
            <span className="text-brass">Samples</span>
            <Link href="/#faq" className="hover:text-brass transition-colors">
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="hover:text-brass transition-colors border border-hairline rounded-full px-4 py-1.5"
            >
              Contact
            </Link>
          </nav>
          <MobileNav
            links={[
              { label: "Work", href: "/#work" },
              { label: "Skills", href: "/#skills" },
              { label: "Samples", href: "/work-samples", isCurrent: true },
              { label: "FAQ", href: "/#faq" },
              { label: "Contact", href: "/#contact" },
            ]}
          />
        </div>
      </header>

      <section className="bg-ink text-paper grain diag-bottom pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-brass text-xs md:text-sm mb-6">
            Selected Work Samples
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">
            Published assets from Fiserv, FICO &amp; beyond.
          </h1>
          <p className="text-paper/70 text-lg leading-relaxed max-w-2xl">
            B2B content strategy, thought leadership, podcast production, and
            video — the published work behind the case studies. Browse by
            format, or view everything.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <WorkSamplesGrid />

          <div className="mt-16 pt-10 border-t border-hairline text-center">
            <p className="text-ink/60 mb-4">
              Want the full accomplishments-first breakdown, role by role?
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-mono-label uppercase tracking-wide bg-ink text-paper rounded-full px-6 py-2.5 hover:brightness-110 transition"
            >
              ← Back to Case Studies
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper/40 text-center text-xs py-8 font-mono-label uppercase tracking-wide">
        &copy; {new Date().getFullYear()} Lance Braun &mdash; {contact.email}
      </footer>
    </main>
  );
}
