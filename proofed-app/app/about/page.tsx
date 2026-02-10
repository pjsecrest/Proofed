export const metadata = {
  title: "About Us | Proofed",
  description: "Who we are and what we stand for.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <section className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            About Us
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground-bright)] sm:text-5xl md:text-6xl">
            We are a team obsessed with{" "}
            <span className="text-[var(--purple)]">craft</span> and{" "}
            <span className="text-[var(--red)]">impact</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Proofed was born from the belief that the best technology feels
            invisible—it just works. We focus on nightlife and high-energy
            experiences because that&apos;s where attention to detail matters most.
          </p>
        </section>

        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
            Our values
          </h2>
          <ul className="mt-8 grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Minimalism",
                desc: "Strip away the noise. Every pixel and line of code earns its place.",
                accent: "var(--purple)",
              },
              {
                title: "Reliability",
                desc: "When the lights go down, our systems stay up. No compromises.",
                accent: "var(--red)",
              },
              {
                title: "Atmosphere",
                desc: "We design for feeling—smooth animations, thoughtful interactions.",
                accent: "var(--purple)",
              },
            ].map((item, i) => (
              <li
                key={item.title}
                className="group animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div
                  className="h-px w-12 transition-all group-hover:w-20"
                  style={{ background: item.accent }}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
