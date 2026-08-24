import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CallDemo } from "@/components/call-demo";
import { integrations } from "@/lib/mock-data";
import { PRICING_RULES } from "@/lib/pricing";

const steps = [
  {
    n: "01",
    title: "Forward your number",
    body: "Keep the number on your truck and your website. Send it to tlk2me when you’re on the water, after hours, or all the time.",
  },
  {
    n: "02",
    title: "Set what you run",
    body: "Trip types, lengths, party sizes, and the hours you’ll actually leave the dock. Block out haulouts and birthdays.",
  },
  {
    n: "03",
    title: "It books the trip",
    body: "tlk2me checks your real free/busy, offers only times that work, and writes the trip onto your calendar before the call ends.",
  },
];

const features = [
  {
    title: "It answers on the first ring",
    body: "Every call, including the ones that come in at 5:40am while you’re running out the inlet. No voicemail tag, no lost charter.",
  },
  {
    title: "It knows your calendar",
    body: "Free/busy is read live before a time is ever offered, so it can’t double-book you or put a full day on top of a sunset cruise.",
  },
  {
    title: "It quotes your prices",
    body: "Your trip types, your rates, your party limits. It won’t invent a discount or take a party of nine on a six-person boat.",
  },
  {
    title: "It handles the shuffle",
    body: "Weather moves half your season. Callers reschedule themselves, the calendar updates, and you’re never charged twice.",
  },
  {
    title: "It writes it all down",
    body: "Name, number, party size, what they want to target, and a transcript of the call sitting on the booking.",
  },
  {
    title: "It hands off when it should",
    body: "Anything it can’t answer goes to you as a text with the caller’s number and what they were after.",
  },
];

const faqs = [
  {
    q: "What counts as a booking?",
    a: "A trip that made it onto your calendar. That’s the whole test. If it never got booked, there’s nothing to bill.",
  },
  {
    q: "What if a customer moves the trip?",
    a: "Free, every time. A reschedule keeps the same booking, so it never triggers a second charge — however many times weather pushes it.",
  },
  {
    q: "What if they cancel?",
    a: "Cancelled within 3 days of when it was booked, it never reaches your bill. After that it counts — it held a real slot on your calendar that you couldn’t sell to anyone else.",
  },
  {
    q: "When do I actually pay?",
    a: "Once a month. Everything that got booked that month adds up into a single invoice. Nothing is charged mid-call, and there’s no card hit every time the phone rings.",
  },
  {
    q: "Do I keep my phone number?",
    a: "Yes. You forward it. Your number stays yours, on your truck, your shirts, and your listings.",
  },
  {
    q: "Will people know it’s AI?",
    a: "It says so if it’s asked, and it never pretends to be you. Most callers just want a date and a price.",
  },
  {
    q: "What if I only want it after hours?",
    a: "Forward conditionally — nights, weekends, or only when you don’t pick up in four rings. It’s your line.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              Built for charter captains
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Your phone keeps ringing while you’re running the boat.
            </h1>
            <p className="mt-5 text-lg text-muted">
              tlk2me answers it. It quotes your trips, checks your real
              availability, and puts the charter on your calendar before the
              caller hangs up.
            </p>
            <p className="mt-4 text-lg">
              <strong>$29 per booking.</strong>{" "}
              <span className="text-muted">
                Reschedules are free. You don’t pay us until it’s on your
                calendar.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-strong"
              >
                Get your number
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              No monthly fee. No contract. Nothing to install on the boat.
            </p>
          </div>
          <CallDemo />
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-20 border-y border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              Three things to set up, then it runs itself
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n}>
                  <div className="font-mono text-sm text-accent">{step.n}</div>
                  <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            What it does on the call
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-2 text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section
          id="integrations"
          className="scroll-mt-20 border-y border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              Connects to Google Calendar. More coming soon.
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Calendar sync is live today — that’s the one that has to work.
              The rest are on the way.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((i) => (
                <li
                  key={i.id}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium">{i.name}</h3>
                    <StatusPill status={i.status} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{i.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              You don’t pay us until it’s on your calendar
            </h2>
            <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-left">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">
                  $29
                </span>
                <span className="text-muted">per booking</span>
              </div>
              <p className="mt-2 text-muted">
                Billed once a month, for that month’s bookings.
              </p>
              <ul className="mt-6 space-y-3">
                {PRICING_RULES.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className="mt-8 block rounded-full bg-brand px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-strong"
              >
                Get your number
              </Link>
              <p className="mt-4 text-center text-sm text-muted">
                One full-day charter covers about forty bookings.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-20 border-t border-border bg-surface"
        >
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              Questions captains ask
            </h2>
            <dl className="mt-10 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-medium">{faq.q}</dt>
                  <dd className="mt-2 text-muted">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function StatusPill({ status }: { status: (typeof integrations)[number]["status"] }) {
  const map = {
    connected: { label: "Live", cls: "bg-brand/10 text-brand" },
    available: { label: "Available", cls: "bg-accent/15 text-accent" },
    coming_soon: { label: "Soon", cls: "bg-foreground/5 text-muted" },
  } as const;
  const { label, cls } = map[status];
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}
    >
      {label}
    </span>
  );
}
