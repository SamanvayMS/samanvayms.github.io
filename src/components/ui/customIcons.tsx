import type { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}

/**
 * Brand glyphs for tools that have no Simple Icons entry. Drawn with
 * currentColor so the brand color is applied by the caller.
 */
export function BloombergIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" role="img" {...props}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 6.5h4.4c1.6 0 2.6.8 2.6 2.1 0 1-.6 1.7-1.5 1.9 1.1.2 1.8.9 1.8 2.1 0 1.5-1.1 2.4-2.9 2.4H7V6.5Zm3.9 3.4c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9H9v1.8h1.9Zm.2 3.6c.8 0 1.2-.3 1.2-1s-.4-1-1.2-1H9v2h2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function OandaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" role="img" {...props}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
