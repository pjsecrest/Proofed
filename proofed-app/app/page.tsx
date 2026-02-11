import Link from "next/link";
import SpikingStat from "@/app/components/spikingStat";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        {/* Hero */}
        <section className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)] opacity-0 animate-fade-in delay-1">
            Proofed
          </p>
          <h1 className="font-heading max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-[var(--foreground-bright)] sm:text-6xl md:text-7xl opacity-0 animate-fade-in delay-2">
            Shedding Light on{" "}
            <span className="text-[var(--purple)]">Safe Drinking</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] opacity-0 animate-fade-in delay-3">
            Proofed puts you in control. Scan your drink at designated stations
            in seconds. Know it&apos;s safe before you sip.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-in delay-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_var(--purple-glow)]"
            >
              Stay updated
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--purple)] hover:text-[var(--purple)]"
            >
              How it works
            </a>
          </div>
        </section>

        {/* The Problem */}
        <section className="mt-32 grid gap-12 border-t border-[var(--border)] pt-20 md:grid-cols-2">
          <div className="opacity-0 animate-fade-in-up delay-2">
            <div className="h-px w-16 bg-[var(--red)]" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              The problem
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Drink spiking can happen anytime, and most victims don&apos;t
              know until symptoms start. Proofed changes that.
            </p>
            <div className="flex items-center gap-4">
            <SpikingStat />
            <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
              93% of drink-spiking incidents occur in bars and nightclubs,
              making these venues the highest-risk environments.
              </p>
            </div>
            <p className="mt-6 text-[var(--foreground)] font-heading font-bold">
              You deserve better.
            </p>
            <p className="mt-2 text-[var(--muted)]">
              It's hard enough to remember your keys and wallet when you go to
              the bars — why add another item?
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 opacity-0 animate-fade-in-up delay-3">
            <h3 className="font-heading text-lg font-semibold text-[var(--foreground-bright)]">
              A rapid drink scanner at the bar
            </h3>
            <p className="mt-4 text-[var(--muted)]">
              Proofed is a rapid drink scanner that provides a quick safety
              check before you take a sip. Located directly at the bar, giving guests and staff a way to instantly check drinks.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              No fuss — just peace of mind before your first sips.
            </p>
          </div>
        </section>
        <section>
          
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="mt-32 border-t border-[var(--border)] pt-20"
        >
          <div className="opacity-0 animate-fade-in-up delay-2">
            <div className="h-px w-16 bg-[var(--purple)]" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              How it works
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Look for the Proofed station and place your drink in the scanning
              area. The device uses infrared light technology to detect harmful
              substances and delivers results in 5 seconds.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="opacity-0 animate-fade-in-up delay-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Step 1
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[var(--foreground-bright)]">
                Place your drink
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Place your drink in the scanner at the Proofed station.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up delay-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Step 2
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[var(--foreground-bright)]">
                Scan in 5 seconds
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Infrared light detects harmful substances in just 5 seconds—no
                contact with your drink.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up delay-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Step 3
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[var(--foreground-bright)]">
                Read your results
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                See a simple ✔ (safe) or ✗ (alert) instantly on the station, and
                scan the QR code for full results on your phone.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--muted)] opacity-0 animate-fade-in delay-5">
            No equipment. No contact. No waste.
          </p>
        </section>

        {/* Why Proofed */}
        <section className="mt-32 border-t border-[var(--border)] pt-20">
          <div className="opacity-0 animate-fade-in-up delay-2">
            <div className="h-px w-16 bg-[var(--purple)]" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              Why Proofed?
            </h2>
            <p className="mt-2 font-heading text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Scan. Know. Enjoy.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ul className="space-y-4 opacity-0 animate-fade-in-up delay-3">
              <li className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">
                  Results in 5 seconds —
                </span>{" "}
                Know instantly, not later.
              </li>
              <li className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">
                  Discreet &amp; easy to use —
                </span>{" "}
                No judgment, no fuss.
              </li>
              <li className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">
                  No contact with your drink —
                </span>{" "}
                Scan from outside the cup.
              </li>
            </ul>
            <ul className="space-y-4 opacity-0 animate-fade-in-up delay-4">
              <li className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">Zero waste —</span> Reusable
                technology, no single-use materials.
              </li>
              <li className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">Builds venue trust —</span>{" "}
                Venues that use Proofed show they care about guest safety.
              </li>
            </ul>
          </div>
        </section>

        {/* Social Proofed / Waitlist */}
        <section
          id="waitlist"
          className="mt-32 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 opacity-0 animate-fade-in-up delay-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Social Proofed
          </p>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
            Proofed is coming to an event near you.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Join our early supporters waitlist to be the first to know when
            Proofed launches in your city.
          </p>
          <form className="mt-6 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--purple)] focus:outline-none focus:ring-1 focus:ring-[var(--purple)]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_var(--purple-glow)] sm:w-auto"
            >
              Join mailing list
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
