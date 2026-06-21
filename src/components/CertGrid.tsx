import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Eye, X, ExternalLink } from "lucide-react";
import { certifications, type Certification } from "../data/certifications";
import { EASE_OUT, useStaticMotion } from "../lib/motion";
import { useScrollLock } from "../lib/useScrollLock";

export default function CertGrid() {
  const reduce = useStaticMotion();
  const [active, setActive] = useState<Certification | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useScrollLock(!!active);

  return (
    <>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {certifications.map((cert) => (
          <article key={cert.title} className="glass glass-interactive flex h-full flex-col p-6">
            <Award className="h-6 w-6 text-[var(--color-accent)]" />
            <h3 className="mt-4 text-base font-semibold text-white">{cert.title}</h3>
            <p className="mt-0.5 text-sm text-[var(--color-mute-400)]">{cert.issuer}</p>

            {cert.summary && (
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mute-300)]">
                {cert.summary}
              </p>
            )}

            {cert.courses && (
              <ul className="mt-4 space-y-1.5">
                {cert.courses.map((c) => (
                  <li key={c} className="flex gap-2 text-xs text-[var(--color-mute-400)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            )}

            {cert.url && (
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="mt-5 inline-flex items-center gap-1.5 border-t border-[var(--color-glass-08)] pt-4 text-sm text-[var(--color-mute-300)] transition-colors hover:text-white"
              >
                <Eye className="h-4 w-4" /> View certificate
              </button>
            )}
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active && active.url && (
          <motion.div
            className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate`}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              className="glass relative z-10 flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: reduce ? 0 : 0.25, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--color-glass-08)] px-5 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{active.title}</p>
                  <p className="truncate text-xs text-[var(--color-mute-400)]">{active.issuer}</p>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in new tab"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-mute-400)] transition-colors hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <iframe
                src={active.url}
                title={`${active.title} certificate`}
                className="h-full w-full flex-1 bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
