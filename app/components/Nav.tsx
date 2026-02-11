import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-[var(--foreground-bright)] transition-colors hover:text-[var(--purple)]"
        >
          Proofed
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
