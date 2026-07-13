import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../../data/site";

const LINKS = [
  { href: site.socials.github, label: "GitHub profile", Icon: Github, external: true },
  { href: site.socials.linkedin, label: "LinkedIn profile", Icon: Linkedin, external: true },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail, external: false },
];

/** GitHub / LinkedIn / Email icon buttons, rendered from site data. */
export function SocialLinks({
  glass = false,
  includeEmail = true,
  className = "",
}: {
  /** Glass-tile style (Contact) vs. plain icon style (Hero, Footer). */
  glass?: boolean;
  includeEmail?: boolean;
  className?: string;
}) {
  const links = includeEmail ? LINKS : LINKS.filter((l) => l.external);
  const itemClass = glass
    ? "glass glass-interactive inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-mute-300)]"
    : "inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white";
  return (
    <div className={`flex gap-2 ${className}`.trim()}>
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={itemClass}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
