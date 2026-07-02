import { useState } from "react";
import { Egg } from "lucide-react";
import { site } from "../data/site";
import { useStaticMotion } from "../lib/motion";
import { SocialLinks } from "./ui/SocialLinks";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const reduce = useStaticMotion();
  // SiteBackground starts on "candles"; each click toggles it via the event below.
  const [bgOn, setBgOn] = useState(true);

  const cycle = () => {
    if (reduce) return;
    window.dispatchEvent(new CustomEvent("sitebg:cycle"));
    setBgOn((v) => !v);
  };

  return (
    <footer className="section !py-12">
      <div className="shell flex flex-col items-center gap-6 text-center">
        <SocialLinks />

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
            {bgOn ? "Charting the tape… (click to hide)" : "Background off (click for candles)"}
          </button>
        )}
      </div>
    </footer>
  );
}
