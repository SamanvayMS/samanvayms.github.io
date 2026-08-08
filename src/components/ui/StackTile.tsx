import { getTechIcon, getTechColor, getTechLabel } from "../../lib/techIcons";

/** A single tech tile for the "My Stack" grid: brand icon (in brand color) + label, or branded label fallback. */
export function StackTile({ name }: { name: string }) {
  const Icon = getTechIcon(name);
  const color = getTechColor(name);
  const label = getTechLabel(name);
  return (
    <div
      className="glass glass-interactive flex h-[88px] w-[88px] flex-col items-center justify-center gap-2 p-2 text-center"
      title={name}
    >
      {Icon ? (
        <Icon className="h-7 w-7" style={{ color: color ?? "var(--color-mute-300)" }} aria-hidden />
      ) : (
        <span
          className="font-mono text-base font-semibold"
          style={{ color: color ?? "var(--color-accent-light)" }}
        >
          {label ?? name.replace(/[^A-Za-z0-9+]/g, "").slice(0, 3).toUpperCase()}
        </span>
      )}
      <span className="text-[11px] leading-tight text-[var(--color-mute-400)]">{name}</span>
    </div>
  );
}
