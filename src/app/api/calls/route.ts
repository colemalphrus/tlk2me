import { NextResponse } from "next/server";

// Stub webhook for the telephony provider. Each turn of a live call posts
// here; the response drives what the AI says next.

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // TODO: verify the provider signature before trusting anything here.
  // TODO: run the booking agent — check availability, quote the trip, and on
  // agreement write the calendar event.
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
