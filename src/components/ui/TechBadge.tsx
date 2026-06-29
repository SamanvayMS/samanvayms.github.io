import { getTechIcon } from "../../lib/techIcons";

interface TechBadgeProps {
  name: string;
}

/** Small pill: brand icon (when available) + label. Used for project/role tech tags. */
export function TechBadge({ name }: TechBadgeProps) {
  const Icon = getTechIcon(name);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-glass-08)] bg-[var(--color-glass-04)] px-2.5 py-1 text-xs text-[var(--color-mute-300)]">
      {Icon ? <Icon className="h-3.5 w-3.5 opacity-80" aria-hidden /> : null}
      {name}
    </span>
  );
}

export function TechRow({
  items,
  label = "Tech stack",
  className = "",
}: {
  items: string[];
  label?: string;
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-wrap gap-1.5 ${className}`.trim()}
      aria-label={`${label}: ${items.join(", ")}`}
    >
      {items.map((t) => (
        <li key={t}>
          <TechBadge name={t} />
        </li>
      ))}
    </ul>
  );
}
