/** Icon-only outbound link button; the label is shown as a tooltip and read by screen readers. */
export default function LinkChip({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-accent/60 hover:text-accent"
    >
      {icon}
    </a>
  );
}
