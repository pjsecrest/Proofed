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
            We strive to <span className="text-[var(--purple)]">empower</span>{<br/>}and raise{" "}
            <span className="text-[var(--red)]">awareness</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {/* Proofed was born from the belief that the best technology feels
            invisible—it just works. We focus on nightlife and high-energy
            experiences because that&apos;s where attention to detail matters most. */}
            Nobody should ever fall victim to drink spiking. Party with the confidence of safe consumption.
          </p>
        </section>

        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
            Our values
          </h2>
          <ul className="mt-8 grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Safety",
                desc: "Proofed delivers reliable and clear results to help you stay informed about what you consume.",
                accent: "var(--purple)",
              },
              {
                title: "Awareness",
                desc: "We promote a culture of awareness to educate poeple on the impacts of drink spiking and how we all can prevent it.",
                accent: "var(--red)",
              },
              {
                title: "Empowerment",
                desc: "We ",
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

        {/* Meet the team */}
        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <div className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:0.1s]">
            <div className="h-px w-12 bg-[var(--purple)]" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--foreground-bright)]">
              Meet the GOATS
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Alana Palter",
                role: "Founder and CEO",
                bio: "After having her drink spiked while studying abroad at 21, Alana turned a personal trauma into a mission. A University of Colorado Boulder student with a background in market research and data analysis, she leads Proofed's strategy, market development, and investor relations.",
                image: "/headshots/alana_headshot.png",
              },
              {
                name: "Parker Secrest",
                role: "CTO",
                bio: "A Computer Science student at CU Boulder, Parker brings experience in software engineering, AI, and early-stage startups — including work on AI vision systems for NASA's Jet Propulsion Laboratory. Having close friends affected by drink spiking, he leads the technical development of Proofed's spectroscopy-based detection platform.",
                image: "/headshots/parker_headshot.png",
              },
              {
                name: "Tressa Murphy",
                role: "CMO",
                bio: "A Marketing and Strategy & Entrepreneurship student at CU Boulder, Tressa brings hands-on experience in brand engagement, consumer communication, and creative strategy. She leads Proofed's marketing efforts with a deep personal commitment to consumer safety and trust.",
                image: "/headshots/tressa_headshot.png",
              },
              {
                name: "Ryan Metcalf",
                role: "Chief Engineer",
                bio: "An Aerospace Engineering Sciences student at CU Boulder, Ryan has a strong background in systems engineering and propulsion. He leads the development of Proofed's first functional prototype, a Near-Infrared spectroscopy device designed to detect drink tampering with precision and reliability.",
                image: "/headshots/ryan_headshot.png",
              },
            ].map((member, i) => (
              <li
                key={member.name}
                className="flex flex-col opacity-0 animate-fade-in-up [animation-fill-mode:forwards]"
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-[var(--muted)] text-sm"
                      aria-hidden
                    >
                      Headshot
                    </div>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[var(--foreground-bright)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--purple)]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {member.bio}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
