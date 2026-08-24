import type {
  AvailabilityRule,
  Blackout,
  Booking,
  Captain,
  Integration,
  TripType,
} from "./types";

// Placeholder data so the dashboard renders before a database is wired up.
// Swap these exports for real queries; the shapes are the contract.

export const captain: Captain = {
  id: "cap_1",
  businessName: "Second Wind Charters",
  contactName: "Dale Rivers",
  phone: "+1 (843) 555-0142",
  forwardingNumber: "+1 (843) 555-0199",
  timezone: "America/New_York",
  greeting:
    "Thanks for calling Second Wind Charters. I can check the calendar and get you booked — what day were you thinking?",
};

export const tripTypes: TripType[] = [
  {
    id: "trip_half",
    name: "Half Day Inshore",
    durationHours: 4,
    maxGuests: 4,
    priceCents: 55000,
  },
  {
    id: "trip_full",
    name: "Full Day Offshore",
    durationHours: 8,
    maxGuests: 6,
    priceCents: 125000,
  },
  {
    id: "trip_sunset",
    name: "Sunset Cruise",
    durationHours: 2,
    maxGuests: 6,
    priceCents: 30000,
  },
];

export const bookings: Booking[] = [
  {
    id: "bk_1042",
    tripTypeId: "trip_full",
    customerName: "Marcus Webb",
    customerPhone: "+1 (704) 555-0118",
    partySize: 5,
    startsAt: "2026-08-26T10:30:00-04:00",
    bookedAt: "2026-08-19T14:12:00-04:00",
    cancelledAt: null,
    status: "confirmed",
    calendarEventId: "gcal_8812",
    rescheduleCount: 0,
    source: "phone",
    notes: "Wants to target mahi. Bringing a cooler, no license needed.",
  },
  {
    id: "bk_1041",
    tripTypeId: "trip_half",
    customerName: "Priya Raman",
    customerPhone: "+1 (843) 555-0176",
    partySize: 3,
    startsAt: "2026-08-25T07:00:00-04:00",
    bookedAt: "2026-08-05T09:40:00-04:00",
    cancelledAt: null,
    status: "rescheduled",
    calendarEventId: "gcal_8809",
    rescheduleCount: 2,
    source: "phone",
    notes: "Moved twice off the 22nd for weather. Still one charge.",
  },
  {
    id: "bk_1040",
    tripTypeId: "trip_sunset",
    customerName: "The Alvarez family",
    customerPhone: "+1 (912) 555-0133",
    partySize: 6,
    startsAt: "2026-08-24T18:45:00-04:00",
    bookedAt: "2026-08-12T19:05:00-04:00",
    cancelledAt: null,
    status: "confirmed",
    calendarEventId: "gcal_8801",
    rescheduleCount: 0,
    source: "phone",
  },
  {
    id: "bk_1039",
    tripTypeId: "trip_half",
    customerName: "Jon Petrakis",
    customerPhone: "+1 (843) 555-0155",
    partySize: 2,
    startsAt: "2026-08-28T13:00:00-04:00",
    bookedAt: "2026-08-22T16:30:00-04:00",
    cancelledAt: null,
    status: "pending",
    calendarEventId: null,
    rescheduleCount: 0,
    source: "phone",
    notes: "Holding the slot until the deposit clears. Never reached the calendar.",
  },
  {
    id: "bk_1038",
    tripTypeId: "trip_full",
    customerName: "Sandra Kohl",
    customerPhone: "+1 (305) 555-0190",
    partySize: 4,
    startsAt: "2026-08-21T06:30:00-04:00",
    bookedAt: "2026-08-18T11:20:00-04:00",
    cancelledAt: "2026-08-20T08:15:00-04:00",
    status: "cancelled",
    calendarEventId: "gcal_8794",
    rescheduleCount: 1,
    source: "phone",
    notes: "Cancelled two days after booking — inside the grace window, so it never hit the bill.",
  },
  {
    id: "bk_1037",
    tripTypeId: "trip_half",
    customerName: "Ray Okonkwo",
    customerPhone: "+1 (843) 555-0121",
    partySize: 4,
    startsAt: "2026-08-18T07:00:00-04:00",
    bookedAt: "2026-08-01T10:05:00-04:00",
    cancelledAt: "2026-08-16T21:40:00-04:00",
    status: "cancelled",
    calendarEventId: "gcal_8771",
    rescheduleCount: 0,
    source: "phone",
    notes: "Held the slot for two weeks before cancelling. Past the grace window, so it counts.",
  },
];

export const availabilityRules: AvailabilityRule[] = [
  {
    id: "av_1",
    weekday: 1,
    startTime: "06:00",
    endTime: "18:00",
    tripTypeIds: ["trip_half", "trip_full"],
    enabled: true,
  },
  {
    id: "av_2",
    weekday: 2,
    startTime: "06:00",
    endTime: "18:00",
    tripTypeIds: ["trip_half", "trip_full"],
    enabled: true,
  },
  {
    id: "av_3",
    weekday: 3,
    startTime: "06:00",
    endTime: "18:00",
    tripTypeIds: ["trip_half", "trip_full"],
    enabled: true,
  },
  {
    id: "av_4",
    weekday: 4,
    startTime: "06:00",
    endTime: "20:30",
    tripTypeIds: ["trip_half", "trip_full", "trip_sunset"],
    enabled: true,
  },
  {
    id: "av_5",
    weekday: 5,
    startTime: "06:00",
    endTime: "20:30",
    tripTypeIds: ["trip_half", "trip_full", "trip_sunset"],
    enabled: true,
  },
  {
    id: "av_6",
    weekday: 6,
    startTime: "05:30",
    endTime: "20:30",
    tripTypeIds: ["trip_half", "trip_full", "trip_sunset"],
    enabled: true,
  },
  {
    id: "av_0",
    weekday: 0,
    startTime: "07:00",
    endTime: "14:00",
    tripTypeIds: ["trip_half"],
    enabled: false,
  },
];

export const blackouts: Blackout[] = [
  {
    id: "bo_1",
    startsAt: "2026-09-07T00:00:00-04:00",
    endsAt: "2026-09-11T23:59:00-04:00",
    reason: "Haulout — bottom paint",
  },
  {
    id: "bo_2",
    startsAt: "2026-08-30T00:00:00-04:00",
    endsAt: "2026-08-30T23:59:00-04:00",
    reason: "Kid's birthday",
  },
];

export const integrations: Integration[] = [
  {
    id: "google_calendar",
    name: "Google Calendar",
    blurb:
      "Two-way sync. tlk2me reads your free/busy before it ever offers a time, and writes the trip in when it books.",
    status: "connected",
    connectedAccount: "dale@secondwindcharters.com",
  },
  {
    id: "sms",
    name: "SMS confirmations",
    blurb: "Text the customer a confirmation and a reminder the night before.",
    status: "available",
  },
  {
    id: "stripe",
    name: "Stripe deposits",
    blurb: "Take a deposit on the call so a slot is never held for nothing.",
    status: "coming_soon",
  },
  {
    id: "fareharbor",
    name: "FareHarbor",
    blurb: "Keep online bookings and phone bookings on the same calendar.",
    status: "coming_soon",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    blurb: "Push each completed trip over as an invoice line.",
    status: "coming_soon",
  },
  {
    id: "outlook",
    name: "Outlook Calendar",
    blurb: "Same two-way sync, for captains running on Microsoft.",
    status: "coming_soon",
  },
];

/**
 * The month the dashboard is showing. Hard-coded because the placeholder
 * bookings above are fixed in time — derive this from the clock once real
 * data is wired up.
 */
export const currentBillingPeriod = {
  year: 2026,
  monthIndex: 7, // August
  label: "August 2026",
  invoiceSentOn: "September 1",
};
