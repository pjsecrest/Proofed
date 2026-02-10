export const metadata = {
  title: "Contact | Proofed",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <section className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground-bright)] sm:text-5xl md:text-6xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[var(--muted)]">
            Have a project in mind or want to learn more? We&apos;d love to hear
            from you.
          </p>
        </section>

        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.1s]">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Email
              </h2>
              <a
                href="mailto:hello@proofed.com"
                className="mt-2 block text-xl font-medium text-[var(--foreground-bright)] transition-colors hover:text-[var(--purple)]"
              >
                hello@proofed.com
              </a>
            </div>
            <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Location
              </h2>
              <p className="mt-2 text-xl text-[var(--foreground)]">
                Remote-first · Worldwide
              </p>
            </div>
          </div>

          <form className="mt-20 max-w-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
            <div className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--muted)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--purple)] focus:outline-none focus:ring-1 focus:ring-[var(--purple)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--muted)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--purple)] focus:outline-none focus:ring-1 focus:ring-[var(--purple)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--purple)] focus:outline-none focus:ring-1 focus:ring-[var(--purple)]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-fit rounded-full bg-[var(--red)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_var(--red-glow)]"
              >
                Send message
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
