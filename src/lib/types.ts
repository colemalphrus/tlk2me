export type BookingStatus = "pending" | "confirmed" | "rescheduled" | "cancelled";

export type TripType = {
  id: string;
  name: string;
  durationHours: number;
  maxGuests: number;
  priceCents: number;
};

export type Booking = {
  id: string;
  tripTypeId: string;
  customerName: string;
  customerPhone: string;
  partySize: number;
  startsAt: string; // ISO 8601, when the trip leaves the dock
  /** When the booking was created. The cancellation grace window runs from here. */
  bookedAt: string;
  /** Set when it comes off the calendar. Null while the booking still stands. */
  cancelledAt: string | null;
  status: BookingStatus;
  /** Set once the event exists on the connected calendar. Billing hangs off this. */
  calendarEventId: string | null;
  /** How many times the captain or customer moved it. Reschedules are never billed. */
  rescheduleCount: number;
  source: "phone" | "manual";
  notes?: string;
};

/** A recurring weekly window the AI is allowed to book inside of. */
export type AvailabilityRule = {
  id: string;
  /** 0 = Sunday ... 6 = Saturday */
  weekday: number;
  /** "HH:mm" local to the captain's timezone */
  startTime: string;
  endTime: string;
  tripTypeIds: string[];
  enabled: boolean;
};

/** A one-off closure that beats any availability rule — weather, haulout, family. */
export type Blackout = {
  id: string;
  startsAt: string;
  endsAt: string;
  reason: string;
};

export type IntegrationStatus = "connected" | "available" | "coming_soon";

export type Integration = {
  id: string;
  name: string;
  blurb: string;
  status: IntegrationStatus;
  connectedAccount?: string;
};

export type Captain = {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  forwardingNumber: string;
  timezone: string;
  greeting: string;
};
