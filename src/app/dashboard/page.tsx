import type { Metadata } from "next";
import { bookings, currentBillingPeriod, tripTypes } from "@/lib/mock-data";
import {
  bookingsInMonth,
  cancelledWithinGrace,
  formatUsd,
  isBillable,
  monthlyInvoiceCents,
} from "@/lib/pricing";
import { formatDateTime } from "@/lib/format";
import type { Booking, BookingStatus } from "@/lib/types";

export const metadata: Metadata = { title: "Bookings" };

const statusStyles: Record<BookingStatus, string> = {
  confirmed: "bg-brand/10 text-brand",
  rescheduled: "bg-accent/15 text-accent",
  pending: "bg-foreground/5 text-muted",
  cancelled: "bg-foreground/5 text-muted line-through",
};

export default function BookingsPage() {
  const tripName = (id: string) =>
    tripTypes.find((t) => t.id === id)?.name ?? "Trip";

  const { year, monthIndex, label, invoiceSentOn } = currentBillingPeriod;
  const thisMonth = bookingsInMonth(bookings, year, monthIndex);
  const billable = thisMonth.filter(isBillable);
  const reschedules = thisMonth.reduce((n, b) => n + b.rescheduleCount, 0);
  const invoiceCents = monthlyInvoiceCents(bookings, year, monthIndex);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label={`Booked in ${label}`} value={String(billable.length)} />
        <Stat
          label="Reschedules"
          value={String(reschedules)}
          hint="Never billed"
        />
        <Stat
          label={`${label} invoice`}
          value={formatUsd(invoiceCents)}
          hint={`${billable.length} × $29 · sent ${invoiceSentOn}`}
        />
      </div>

      <section>
        <h2 className="text-lg font-medium">Upcoming and recent</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-muted">
              <tr>
                <Th>Trip</Th>
                <Th>Customer</Th>
                <Th>When</Th>
                <Th>Party</Th>
                <Th>Status</Th>
                <Th>On this bill</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {bookings.map((b) => (
                <tr key={b.id} className="align-top">
                  <Td>
                    <div className="font-medium">{tripName(b.tripTypeId)}</div>
                    {b.notes && (
                      <div className="mt-1 max-w-xs text-xs text-muted">
                        {b.notes}
                      </div>
                    )}
                  </Td>
                  <Td>
                    <div>{b.customerName}</div>
                    <div className="text-xs text-muted">{b.customerPhone}</div>
                  </Td>
                  <Td className="whitespace-nowrap">
                    {formatDateTime(b.startsAt)}
                    {b.rescheduleCount > 0 && (
                      <div className="text-xs text-muted">
                        moved {b.rescheduleCount}×
                      </div>
                    )}
                  </Td>
                  <Td>{b.partySize}</Td>
                  <Td>
                    <StatusBadge booking={b} />
                  </Td>
                  <Td className="whitespace-nowrap">
                    <span className="font-mono text-xs">
                      {isBillable(b) ? "$29" : "—"}
                    </span>
                    {!isBillable(b) && (
                      <div className="mt-1 text-xs text-muted">
                        {cancelledWithinGrace(b)
                          ? "cancelled in 3 days"
                          : "never on calendar"}
                      </div>
                    )}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">
          Nothing is charged as it happens — these add up into one invoice for{" "}
          {label}, sent {invoiceSentOn}. Only bookings that reached your
          calendar count. Reschedules are free, and anything cancelled within 3
          days of being booked drops off the bill.
        </p>
      </section>
    </div>
  );
}

function StatusBadge({ booking }: { booking: Booking }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[booking.status]}`}
    >
      {booking.status}
    </span>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="text-sm text-muted">{label}</div>
      <div className="mt-1 text-3xl font-semibold tracking-tight">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted">{hint}</div>}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-medium">{children}</th>;
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-4 py-4 ${className}`}>{children}</td>;
}
