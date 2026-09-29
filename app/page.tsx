import Image from "next/image";
import Link from "next/link";
import {
  companies,
  heroStats,
  philosophyCards,
  byTheNumbers,
  competencies,
  techStack,
  certifications,
  currentCoursework,
  caseStudies,
  faqs,
  contact,
} from "@/lib/content";
import { testimonials } from "@/lib/testimonials";
import { CaseStudyAccordion } from "@/components/case-study-accordion";
import { FaqItem } from "@/components/faq-item";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Lance Braun
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono-label uppercase tracking-wide text-ink/70">
            <a href="#work" className="hover:text-brass transition-colors">
              Work
            </a>
            <a href="#skills" className="hover:text-brass transition-colors">
              Skills
            </a>
            <Link
              href="/work-samples"
              className="hover:text-brass transition-colors"
            >
              Samples
            </Link>
            <a href="#faq" className="hover:text-brass transition-colors">
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-brass transition-colors border border-hairline rounded-full px-4 py-1.5"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative bg-ink text-paper grain diag-bottom pt-32 pb-28 md:pt-40 md:pb-36"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
          <div>
            <p className="font-mono-label uppercase tracking-[0.2em] text-brass text-xs md:text-sm mb-6">
              Senior Content Marketing Leader
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-8">
              Transforming complexity into{" "}
              <span className="text-numblue">clarity</span>.
              <br />
              Content that engages, educates, converts, and wins.
            </h1>
            <p className="text-paper/70 text-lg leading-relaxed max-w-xl mb-10">
              I build content engines for SaaS, fintech, and regulated
              enterprise technology — turning risk, identity, and analytics
              into narratives that hold up with practitioners and still move
              decision-makers.
            </p>
            <div className="flex flex-wrap gap-8 mb-12">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-numblue">
                    {s.value}
                  </div>
                  <div className="text-sm text-paper/60 mt-1 max-w-[10rem]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center bg-brass text-ink font-medium px-7 py-3 rounded-full hover:brightness-110 transition"
              >
                View My Work
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center border border-paper/30 text-paper px-7 py-3 rounded-full hover:border-brass hover:text-brass transition"
              >
                Let&rsquo;s Connect
              </a>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full border border-brass/40" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-brass mx-auto">
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/73c41ede7c144594a5f25cad79659d69.png"
                alt="Lance Braun"
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="bg-paper py-14 border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-ink/40 text-center mb-8">
            Companies I&rsquo;ve Built Content For
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-lg md:text-xl text-ink/50 hover:text-ink transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            How I Think About Content
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl mb-16">
            Content that doesn&rsquo;t move a metric isn&rsquo;t strategy.{" "}
            <span className="italic text-ink/50">It&rsquo;s just copy.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {philosophyCards.map((c) => (
              <div key={c.title} className="bg-paper p-8 md:p-10">
                <h3 className="font-display text-xl mb-3">{c.title}</h3>
                <p className="text-ink/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 md:py-32 bg-ink text-paper grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            By the Numbers
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mb-16">
            Impact that shows up in the right places.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {byTheNumbers.map((n) => (
              <div key={n.label} className="border-l border-brass/40 pl-4">
                <div className="font-display text-3xl md:text-4xl text-numblue mb-1">
                  {n.value}
                </div>
                <div className="text-sm text-paper/60 leading-snug">
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETENCIES */}
      <section id="skills" className="py-24 md:py-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            Core Capabilities
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mb-16">
            What I do, and how I do it.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((c, i) => (
              <div key={c.title} className="pt-6 border-t-2 border-ink/10">
                <span className="font-mono-label text-xs text-numblue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg mt-2 mb-2">{c.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="py-20 md:py-24 bg-ink text-paper grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            Tech Stack
          </p>
          <h2 className="font-display text-2xl md:text-4xl leading-tight max-w-2xl mb-10">
            Platforms, tools and AI systems I run content through.
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full border border-paper/25 text-paper/80 hover:border-brass hover:text-brass transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE WORK */}
      <section id="work" className="py-24 md:py-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            The Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mb-4">
            Seven roles. Real editorial systems.
          </h2>
          <p className="text-ink/60 max-w-2xl mb-12">
            Every engagement below is a content operation I owned end-to-end.
            The results are drawn directly from my professional record.
          </p>
          <div className="border-t border-hairline">
            {caseStudies.map((s) => (
              <CaseStudyAccordion key={s.number} study={s} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/work-samples"
              className="inline-flex items-center gap-2 text-sm font-mono-label uppercase tracking-wide border border-hairline rounded-full px-6 py-2.5 hover:border-brass hover:text-brass transition-colors"
            >
              View Full Work Samples &amp; Published Assets →
            </Link>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 bg-ink text-paper grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            Education
          </p>
          <h3 className="font-display text-xl md:text-2xl mb-1">
            University of Wisconsin&ndash;Milwaukee
          </h3>
          <p className="text-paper/60">
            Bachelor of Arts, Mass Communication &amp; Journalism
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-20 md:py-24 bg-paper border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            Certifications
          </p>
          <h2 className="font-display text-2xl md:text-4xl leading-tight max-w-2xl mb-10">
            Credentials behind the craft.
          </h2>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span
                key={c}
                className="text-sm px-4 py-2 rounded-full border border-hairline text-ink/70 hover:border-brass hover:text-brass transition-colors"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-dashed border-hairline">
            <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-ink/40 mb-2">
              Currently Expanding
            </p>
            <p className="text-ink/60 text-sm mb-6 max-w-xl">
              Active coursework in platforms built for scaling on-brand
              content and sales enablement workflows.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {currentCoursework.map((c) => (
                <div
                  key={c.name}
                  className="border border-dashed border-hairline rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-lg">{c.name}</span>
                    <span className="text-[10px] font-mono-label uppercase tracking-wide text-brass border border-brass/40 rounded-full px-2 py-0.5">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {c.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-24 md:py-32 bg-paper">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
              What Others Say
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mb-16">
              From the people who&rsquo;ve seen it firsthand.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="border border-hairline rounded-2xl p-8"
                >
                  <p className="text-ink/80 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-sm text-ink/50">{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-4">
            Frequently Asked
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-14">
            Questions worth answering.
          </h2>
          <div className="border-t border-hairline">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 md:py-36 bg-ink text-paper grain diag-top"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono-label uppercase tracking-[0.2em] text-xs text-brass mb-6">
            Let&rsquo;s Work Together
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">
            Ready for content that carries the weight
            <br className="hidden md:block" /> of the strategy behind it?
          </h2>
          <p className="text-paper/60 mb-4">{contact.location}</p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a
              href={`mailto:${contact.email}`}
              className="text-brass hover:underline underline-offset-4"
            >
              &rarr; {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-brass hover:underline underline-offset-4"
            >
              &rarr; {contact.phone}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-brass hover:underline underline-offset-4"
            >
              &rarr; LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper/40 text-center text-xs py-8 font-mono-label uppercase tracking-wide">
        &copy; {new Date().getFullYear()} Lance Braun &mdash; Content Strategy Portfolio
      </footer>
    </main>
  );
}
