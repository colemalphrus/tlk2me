import { NextResponse } from "next/server";
import { availabilityRules, blackouts, tripTypes } from "@/lib/mock-data";

// Stub: the AI agent calls this mid-conversation to find offerable slots.
// A real implementation intersects these rules with live calendar free/busy.

export async function GET() {
  return NextResponse.json({ availabilityRules, blackouts, tripTypes });
}
