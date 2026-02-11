import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Proofed",
  description: "Shedding light on safer drinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <Nav />
        {children}
        <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mailing List Section */}
              <div className="lg:col-span-2">
                <p className="font-bold text-[var(--foreground)]">Join our mailing list</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Stay updated on our latest developments.</p>

                <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--purple)] focus:outline-none focus:ring-1 focus:ring-[var(--purple)]"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_var(--purple-glow)]"
                  >
                    Join mailing list
                  </button>
                </form>
              </div>

              {/* Links Section */}
              <div className="flex flex-col gap-3">
                <p className="font-bold text-[var(--foreground)]">Navigate</p>
                <a
                  href="/"
                  className="text-[var(--muted)] underline-offset-2 hover:underline"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-[var(--muted)] underline-offset-2 hover:underline"
                >
                  About Us
                </a>
                <a
                  href="/our-technology"
                  className="text-[var(--muted)] underline-offset-2 hover:underline"
                >
                  Our Technology
                </a>
                <a
                  href="/contact"
                  className="text-[var(--muted)] underline-offset-2 hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Social & Copyright */}
            <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[var(--muted)]">© 2026 Proofed</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium text-[var(--foreground)]">Follow us:</span>
                <div className="flex gap-4 text-[var(--foreground)]">
                  <a href="#" className="opacity-80 hover:opacity-100">
                    Instagram
                  </a>
                  <a href="#" className="opacity-80 hover:opacity-100">
                    TikTok
                  </a>
                  <a href="#" className="opacity-80 hover:opacity-100">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body >
    </html >
  );
}