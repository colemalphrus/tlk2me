"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/dashboard", label: "Bookings" },
  { href: "/dashboard/availability", label: "Availability" },
  { href: "/dashboard/integrations", label: "Integrations" },
  { href: "/dashboard/settings", label: "Settings" },
] as const;

export function DashboardNav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-border">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`-mb-px border-b-2 px-4 py-2.5 text-sm whitespace-nowrap transition-colors ${
              active
                ? "border-brand font-medium text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
