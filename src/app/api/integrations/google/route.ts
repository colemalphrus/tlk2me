import { NextResponse } from "next/server";

// Stub for the Google Calendar OAuth handshake.
// Real flow: redirect to Google's consent screen, handle the callback, store
// refresh tokens per captain, then use free/busy + events.insert.

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.freebusy",
];

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json(
      {
        error: "Google Calendar is not configured",
        hint: "Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REDIRECT_URI",
        scopes: SCOPES,
      },
      { status: 501 },
    );
  }

  return NextResponse.json({ error: "Not implemented", scopes: SCOPES }, { status: 501 });
}
