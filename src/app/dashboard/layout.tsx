import Link from "next/link";
import { Logo } from "@/components/logo";
import { DashboardNav } from "@/components/dashboard-nav";
import { captain } from "@/lib/mock-data";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Logo />
            </Link>
            <span className="hidden text-sm text-muted sm:block">
              / {captain.businessName}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-muted md:block">
              Line: {captain.phone}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-medium text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Answering
            </span>
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <DashboardNav />
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
