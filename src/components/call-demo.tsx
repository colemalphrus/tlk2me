const transcript = [
  { who: "caller", text: "Hey, do you have anything open Saturday for four of us?" },
  {
    who: "tlk2me",
    text: "I do — Saturday the 26th. Half day inshore at 7am, or full day offshore at 6:30. Both fit four.",
  },
  { who: "caller", text: "Let’s do the full day." },
  {
    who: "tlk2me",
    text: "Booked. 6:30am Saturday, full day offshore, four guests. I’ll text Marcus the dock address.",
  },
] as const;

export function CallDemo() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Live call · 41 seconds
      </div>
      <ul className="space-y-3">
        {transcript.map((line, i) => (
          <li
            key={i}
            className={line.who === "caller" ? "flex" : "flex justify-end"}
          >
            <span
              className={
                line.who === "caller"
                  ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-background px-4 py-2.5 text-sm ring-1 ring-border"
                  : "max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-white"
              }
            >
              {line.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-background px-4 py-3 text-sm ring-1 ring-border">
        <span className="text-accent">✓</span>
        <span>
          Added to Google Calendar — <strong>Sat Aug 26, 6:30am</strong>
        </span>
        <span className="ml-auto font-mono text-xs text-muted">$29</span>
      </div>
    </div>
  );
}
