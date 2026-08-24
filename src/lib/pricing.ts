import type { Booking } from "./types";

/** $29, in cents. One charge, per booking that lands on the calendar. */
export const PRICE_PER_BOOKING_CENTS = 2900;

/**
 * A booking cancelled within this many days of being made never hits the bill.
 * Measured from when the booking was created, not from the trip date.
 */
export const CANCELLATION_GRACE_DAYS = 3;

const GRACE_MS = CANCELLATION_GRACE_DAYS * 24 * 60 * 60 * 1000;

export const PRICING_RULES = [
  "$29 per booking, counted once it is confirmed on your calendar.",
  "Moving an existing booking is free, however many times it moves.",
  "Cancelled within 3 days of booking? It never reaches your bill.",
  "One invoice a month for that month's total. No monthly fee, no per-minute charges, no setup cost.",
] as const;

/**
 * True when a cancellation landed inside the grace window. A booking cancelled
 * after the window still counts — it held a real slot on the calendar.
 *
 * If a cancelled booking is missing its timestamp we treat it as inside the
 * window: we would rather drop a charge than bill a captain we cannot justify.
 */
export function cancelledWithinGrace(booking: Booking): boolean {
  if (booking.status !== "cancelled") return false;
  if (!booking.cancelledAt) return true;
  const elapsed =
    new Date(booking.cancelledAt).getTime() - new Date(booking.bookedAt).getTime();
  return elapsed <= GRACE_MS;
}

/**
 * A booking is billable exactly once: when it has a real calendar event behind
 * it and it was not cancelled inside the grace window. Reschedules keep the
 * same event, so they never add a second charge.
 */
export function isBillable(booking: Booking): boolean {
  if (booking.calendarEventId === null) return false;
  return !cancelledWithinGrace(booking);
}

export function billableCents(bookings: Booking[]): number {
  return bookings.filter(isBillable).length * PRICE_PER_BOOKING_CENTS;
}

/**
 * Nothing is charged as it happens. Bookings accumulate and go out as a single
 * invoice for the calendar month they were booked in.
 */
export function bookingsInMonth(
  bookings: Booking[],
  year: number,
  monthIndex: number,
): Booking[] {
  return bookings.filter((b) => {
    const d = new Date(b.bookedAt);
    return d.getFullYear() === year && d.getMonth() === monthIndex;
  });
}

export function monthlyInvoiceCents(
  bookings: Booking[],
  year: number,
  monthIndex: number,
): number {
  return billableCents(bookingsInMonth(bookings, year, monthIndex));
}

export function formatUsd(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
