import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Logo />
          <p>The AI phone line for charter captains.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/#integrations" className="hover:text-foreground">
            Integrations
          </Link>
          <Link href="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <a href="mailto:hello@tlk2.me" className="hover:text-foreground">
            hello@tlk2.me
          </a>
        </nav>
      </div>
    </footer>
  );
}
