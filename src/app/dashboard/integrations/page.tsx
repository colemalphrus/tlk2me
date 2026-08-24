import type { Metadata } from "next";
import { integrations } from "@/lib/mock-data";
import type { Integration } from "@/lib/types";

export const metadata: Metadata = { title: "Integrations" };

export default function IntegrationsPage() {
  const groups: { heading: string; items: Integration[] }[] = [
    {
      heading: "Connected",
      items: integrations.filter((i) => i.status === "connected"),
    },
    {
      heading: "Ready to turn on",
      items: integrations.filter((i) => i.status === "available"),
    },
    {
      heading: "Coming soon",
      items: integrations.filter((i) => i.status === "coming_soon"),
    },
  ];

  return (
    <div className="space-y-10">
      {groups.map(
        (group) =>
          group.items.length > 0 && (
            <section key={group.heading}>
              <h2 className="text-lg font-medium">{group.heading}</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {group.items.map((i) => (
                  <li
                    key={i.id}
                    className="flex flex-col rounded-xl border border-border p-5"
                  >
                    <h3 className="font-medium">{i.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{i.blurb}</p>
                    {i.connectedAccount && (
                      <p className="mt-3 font-mono text-xs text-muted">
                        {i.connectedAccount}
                      </p>
                    )}
                    <div className="mt-4">
                      <ActionButton status={i.status} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ),
      )}
    </div>
  );
}

function ActionButton({ status }: { status: Integration["status"] }) {
  if (status === "connected") {
    return (
      <button
        type="button"
        className="rounded-full border border-border px-4 py-2 text-sm hover:bg-surface"
      >
        Manage
      </button>
    );
  }
  if (status === "available") {
    return (
      <button
        type="button"
        className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-strong"
      >
        Connect
      </button>
    );
  }
  return (
    <button
      type="button"
      disabled
      className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-sm text-muted opacity-60"
    >
      Notify me
    </button>
  );
}
