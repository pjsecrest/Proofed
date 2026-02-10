export const metadata = {
  title: "Our Technology | Proofed",
  description: "The tech that powers our experiences.",
};

const techItems = [
  {
    title: "Performance first",
    description:
      "Every interaction is optimized for speed. We use the latest runtimes and minimal JavaScript so your experience stays smooth under load.",
    highlight: "var(--purple)",
  },
  {
    title: "Scalable infrastructure",
    description:
      "Built to handle spikes—whether it's a launch night or a global rollout. Our systems scale without breaking a sweat.",
    highlight: "var(--red)",
  },
  {
    title: "Night-ready design",
    description:
      "Dark themes, reduced motion options, and accessibility built in. We design for real environments and real users.",
    highlight: "var(--purple)",
  },
];

export default function OurTechnologyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <section className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Our Technology
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground-bright)] sm:text-5xl md:text-6xl">
            Built for the{" "}
            <span className="text-[var(--purple)]">edge</span> of night.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            We use modern stacks and proven patterns so our products are fast,
            reliable, and a joy to use—even at 3 AM.
          </p>
        </section>

        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <ul className="space-y-16">
            {techItems.map((item, i) => (
              <li
                key={item.title}
                className="group animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div
                  className="h-px w-16 transition-all group-hover:w-24"
                  style={{ background: item.highlight }}
                />
                <h2 className="mt-6 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[var(--muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-32 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]">
          <h2 className="font-heading text-xl font-semibold text-[var(--foreground-bright)]">
            Want to learn more?
          </h2>
          <a href="../contact">
          <p className="mt-4 text-[var(--muted)]">
            Send us a message!
          </p>
          </a>
        </section>
      </div>
    </main>
  );
}
