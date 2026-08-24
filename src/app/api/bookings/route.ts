import { NextResponse } from "next/server";
import { bookings, currentBillingPeriod } from "@/lib/mock-data";
import { bookingsInMonth, isBillable, monthlyInvoiceCents } from "@/lib/pricing";

// Stub: serves in-memory data. Replace with real persistence.

export async function GET() {
  const { year, monthIndex, label, invoiceSentOn } = currentBillingPeriod;
  const thisMonth = bookingsInMonth(bookings, year, monthIndex);

  return NextResponse.json({
    bookings,
    invoice: {
      period: label,
      sentOn: invoiceSentOn,
      billableCount: thisMonth.filter(isBillable).length,
      totalCents: monthlyInvoiceCents(bookings, year, monthIndex),
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // TODO: validate the slot against availability rules and blackouts, create
  // the Google Calendar event, then record the booking. The $29 is accrued —
  // not charged — once the calendar event comes back with an id, and only
  // settles on the monthly invoice.
  return NextResponse.json(
    { error: "Not implemented", received: body },
    { status: 501 },
  );
}
