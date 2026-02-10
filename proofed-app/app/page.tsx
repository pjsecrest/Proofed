import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <section className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)] opacity-0 animate-fade-in delay-1">
            Welcome
          </p>
          <h1 className="font-heading max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-[var(--foreground-bright)] sm:text-6xl md:text-7xl opacity-0 animate-fade-in delay-2">
            Where night meets{" "}
            <span className="text-[var(--purple)]">innovation</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] opacity-0 animate-fade-in delay-3">
            We build experiences at the intersection of technology and nightlife.
            Minimal. Bold. Unforgettable.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-in delay-4">
            <Link
              href="/our-technology"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_var(--purple-glow)]"
            >
              Our Technology
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--purple)] hover:text-[var(--purple)]"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <section className="mt-32 grid gap-8 border-t border-[var(--border)] pt-20 sm:grid-cols-2">
          <div className="group opacity-0 animate-fade-in-up delay-2">
            <div className="h-px w-12 bg-[var(--red)] transition-all group-hover:w-20" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              Built for the night
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Technology that performs when it matters—smooth, reliable, and
              designed for high-energy environments.
            </p>
          </div>
          <div className="group opacity-0 animate-fade-in-up delay-3">
            <div className="h-px w-12 bg-[var(--purple)] transition-all group-hover:w-20" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              Designed to last
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Clean architecture and attention to detail. We ship products that
              scale with you.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
