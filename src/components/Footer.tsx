import { Suspense, lazy, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Egg } from "lucide-react";
import { site } from "../data/site";
import type { BgMode } from "./AnimatedBackground";

const AnimatedBackground = lazy(() => import("./AnimatedBackground"));

const ORDER: BgMode[] = ["off", "waves", "birds"];
const YEAR = new Date().getFullYear();

export default function Footer() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<BgMode>("off");

  const cycle = () => {
    if (reduce) return;
    setMode((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]);
  };

  return (
    <>
      {mode !== "off" && (
        <Suspense fallback={null}>
          <AnimatedBackground mode={mode} />
        </Suspense>
      )}

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
              aria-pressed={mode !== "off"}
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-mute-600)] transition-colors hover:text-[var(--color-accent-light)]"
            >
              <Egg className="h-3.5 w-3.5" />
              {mode === "off"
                ? "Have you found the easter egg?"
                : mode === "waves"
                  ? "Riding the waves… (click again)"
                  : "Flocking… (click to stop)"}
            </button>
          )}
        </div>
      </footer>
    </>
  );
}
