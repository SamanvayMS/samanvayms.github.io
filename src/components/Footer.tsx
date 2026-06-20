import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Egg } from "lucide-react";
import { site } from "../data/site";

// Mirrors SiteBackground's cycle order (which starts on "waves").
const LABELS = ["Riding the waves… (click for birds)", "Flocking… (click to hide)", "Background off (click for waves)"];
const YEAR = new Date().getFullYear();

export default function Footer() {
  const reduce = useReducedMotion();
  const [labelIndex, setLabelIndex] = useState(0);

  const cycle = () => {
    if (reduce) return;
    window.dispatchEvent(new CustomEvent("sitebg:cycle"));
    setLabelIndex((i) => (i + 1) % LABELS.length);
  };

  return (
    <footer className="section !py-12">
      <div className="shell flex flex-col items-center gap-6 text-center">
        <div className="flex gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-[var(--color-mute-500)]">
          © {YEAR} {site.name}. Built with Astro.
        </p>

        {!reduce && (
          <button
            type="button"
            onClick={cycle}
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-mute-600)] transition-colors hover:text-[var(--color-accent-light)]"
          >
            <Egg className="h-3.5 w-3.5" />
            {LABELS[labelIndex]}
          </button>
        )}
      </div>
    </footer>
  );
}
