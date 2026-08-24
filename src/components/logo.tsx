export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline gap-0.5 text-lg font-semibold tracking-tight ${className}`}
    >
      <span>tlk</span>
      <span className="text-accent">2</span>
      <span>me</span>
    </span>
  );
}
