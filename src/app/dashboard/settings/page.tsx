import type { Metadata } from "next";
import { bookings, captain, currentBillingPeriod } from "@/lib/mock-data";
import { PRICING_RULES, formatUsd, monthlyInvoiceCents } from "@/lib/pricing";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  const invoiceCents = monthlyInvoiceCents(
    bookings,
    currentBillingPeriod.year,
    currentBillingPeriod.monthIndex,
  );

  return (
    <div className="max-w-2xl space-y-10">
      <section>
        <h2 className="text-lg font-medium">Your line</h2>
        <dl className="mt-4 divide-y divide-border rounded-xl border border-border">
          <Row label="Business">{captain.businessName}</Row>
          <Row label="Captain">{captain.contactName}</Row>
          <Row label="Your number">{captain.phone}</Row>
          <Row label="Forward calls to">{captain.forwardingNumber}</Row>
          <Row label="Timezone">{captain.timezone}</Row>
        </dl>
      </section>

      <section>
        <h2 className="text-lg font-medium">Greeting</h2>
        <p className="mt-1 text-sm text-muted">
          The first thing a caller hears. Keep it short — they called to book a
          trip.
        </p>
        <textarea
          className="mt-4 w-full rounded-xl border border-border bg-surface p-4 text-sm"
          rows={4}
          defaultValue={captain.greeting}
        />
        <button
          type="button"
          className="mt-3 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-strong"
        >
          Save greeting
        </button>
      </section>

      <section>
        <h2 className="text-lg font-medium">Billing</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-5">
          <p className="text-2xl font-semibold tracking-tight">
            $29 <span className="text-base font-normal text-muted">per booking</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Next invoice: {formatUsd(invoiceCents)} on{" "}
            {currentBillingPeriod.invoiceSentOn}, covering{" "}
            {currentBillingPeriod.label}.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {PRICING_RULES.map((rule) => (
              <li key={rule} className="flex gap-2">
                <span className="text-accent">✓</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
