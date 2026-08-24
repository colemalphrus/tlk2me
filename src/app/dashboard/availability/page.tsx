import type { Metadata } from "next";
import { availabilityRules, blackouts, tripTypes } from "@/lib/mock-data";
import { WEEKDAYS, formatDate, formatTime12h } from "@/lib/format";
import { formatUsd } from "@/lib/pricing";

export const metadata: Metadata = { title: "Availability" };

export default function AvailabilityPage() {
  const byWeekday = [...availabilityRules].sort((a, b) => a.weekday - b.weekday);
  const tripName = (id: string) =>
    tripTypes.find((t) => t.id === id)?.name ?? id;

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-lg font-medium">Weekly hours</h2>
        <p className="mt-1 text-sm text-muted">
          tlk2me will only offer times inside these windows. Everything else
          gets a “let me have the captain call you back.”
        </p>
        <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
          {byWeekday.map((rule) => (
            <li
              key={rule.id}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-4"
            >
              <span className="w-24 font-medium">{WEEKDAYS[rule.weekday]}</span>
              {rule.enabled ? (
                <>
                  <span className="font-mono text-sm">
                    {formatTime12h(rule.startTime)} – {formatTime12h(rule.endTime)}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {rule.tripTypeIds.map((id) => (
                      <span
                        key={id}
                        className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-muted ring-1 ring-border"
                      >
                        {tripName(id)}
                      </span>
                    ))}
                  </span>
                </>
              ) : (
                <span className="text-sm text-muted">Closed</span>
              )}
              <button
                type="button"
                className="ml-auto text-sm text-brand hover:underline"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium">Blackout dates</h2>
        <p className="mt-1 text-sm text-muted">
          Beats the weekly hours. Nothing gets booked in here, ever.
        </p>
        <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
          {blackouts.map((b) => (
            <li key={b.id} className="flex items-center gap-4 px-4 py-4">
              <span className="font-mono text-sm whitespace-nowrap">
                {formatDate(b.startsAt)} – {formatDate(b.endsAt)}
              </span>
              <span className="text-muted">{b.reason}</span>
              <button
                type="button"
                className="ml-auto text-sm text-brand hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-4 rounded-full border border-border px-4 py-2 text-sm hover:bg-surface"
        >
          Add blackout
        </button>
      </section>

      <section>
        <h2 className="text-lg font-medium">Trip types</h2>
        <p className="mt-1 text-sm text-muted">
          What the AI is allowed to sell, and for how much.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {tripTypes.map((t) => (
            <li key={t.id} className="rounded-xl border border-border p-5">
              <h3 className="font-medium">{t.name}</h3>
              <dl className="mt-3 space-y-1 text-sm text-muted">
                <div className="flex justify-between">
                  <dt>Length</dt>
                  <dd>{t.durationHours} hrs</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Max guests</dt>
                  <dd>{t.maxGuests}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Price</dt>
                  <dd className="text-foreground">{formatUsd(t.priceCents)}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
