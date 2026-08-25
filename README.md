# tlk2me

The AI phone line for charter captains. It answers the phone, quotes your
trips, checks real availability, and writes the charter onto your calendar
before the caller hangs up.

**$29 per booking, invoiced once a month. Reschedules are free. Cancel within
3 days of booking and it never hits the bill.**

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

- `/` — marketing site
- `/dashboard` — bookings, availability, integrations, settings

## Supabase

Connection only — there is no schema yet. `.env.local` holds the credentials
and is gitignored; `.env.example` lists the variables.

Three clients in `src/lib/supabase/`:

| File | Key | Use |
| --- | --- | --- |
| `client.ts` | anon | browser |
| `server.ts` | anon + session cookies | server components, route handlers |
| `admin.ts` | service role, **bypasses RLS** | server-only; `server-only` makes a client import a build error |

Nothing imports these yet. The app still renders from `src/lib/mock-data.ts`.
No tables, no migrations, no queries — those come when the data model is
settled.

## What's real and what isn't

This is a scaffold. The UI is complete and renders from placeholder data in
`src/lib/mock-data.ts`. Everything that talks to the outside world is a stub
that returns `501`:

| Route | Status |
| --- | --- |
| `GET /api/bookings` | Serves in-memory data |
| `POST /api/bookings` | Stub |
| `GET /api/availability` | Serves in-memory data |
| `GET /api/integrations/google` | Stub — OAuth not wired |
| `POST /api/calls` | Stub — telephony webhook |

There is no database, no auth, and no payment processing yet. Buttons in the
dashboard are not wired to handlers.

## Layout

```
src/
  app/
    page.tsx              marketing page
    dashboard/            captain-facing app
    api/                  route stubs
  components/             shared UI
  lib/
    types.ts              domain model
    pricing.ts            the $29-per-booking rule
    mock-data.ts          placeholder data
    format.ts             date/time helpers
```

## The billing rule, in code

`src/lib/pricing.ts` holds the whole model:

- `isBillable()` — a booking counts exactly once, when it has a calendar event
  id behind it and wasn't cancelled inside the grace window. A reschedule keeps
  the same event, so it can never produce a second charge.
- `cancelledWithinGrace()` — cancelled within `CANCELLATION_GRACE_DAYS` (3) of
  **when it was booked**, measured from `bookedAt`, and it never reaches the
  bill. Cancelled after that, it counts: it held a real slot the captain
  couldn't sell.
- `monthlyInvoiceCents()` — nothing is charged as it happens. Bookings accrue
  and go out as one invoice per calendar month.

The placeholder bookings exercise every branch: a clean booking, one moved
twice, a pending hold that never reached the calendar, a cancellation inside
the window, and one outside it.

## Next steps

1. Design the schema, then migrations + captain auth
2. Google Calendar OAuth and free/busy reads
3. Telephony provider + the call agent loop
4. Stripe, charging on calendar-event creation
# tlk2me
