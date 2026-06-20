import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data/experience";
import { getTechIcon } from "../lib/techIcons";

function TechTag({ name }: { name: string }) {
  const Icon = getTechIcon(name);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-glass-08)] bg-[var(--color-glass-04)] px-2.5 py-1 text-xs text-[var(--color-mute-300)]">
      {Icon ? <Icon className="h-3.5 w-3.5 opacity-80" aria-hidden /> : null}
      {name}
    </span>
  );
}

export default function ExperienceAccordion() {
  const reduce = useReducedMotion();
  // First entry open by default.
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <ul className="mt-12 space-y-4">
      {timeline.map((entry, i) => {
        const isOpen = openIndex === i;
        const panelId = `tl-panel-${i}`;
        const btnId = `tl-btn-${i}`;
        const Icon = entry.kind === "education" ? GraduationCap : Briefcase;
        const hasDetail = !!(entry.summary || entry.bullets?.length || entry.tech?.length);
        return (
          <li key={`${entry.org}-${i}`} className="glass glass-interactive overflow-hidden">
            <button
              id={btnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center gap-4 p-6 text-left md:p-7"
            >
              {entry.logo ? (
                <span
                  className="flex h-10 shrink-0 items-center justify-center rounded-md bg-white px-1.5"
                  aria-hidden
                >
                  <img
                    src={entry.logo}
                    alt=""
                    className="h-7 w-auto max-w-[104px] object-contain"
                  />
                </span>
              ) : (
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-glass-08)] bg-[var(--color-glass-04)] text-[var(--color-accent)]"
                  aria-hidden
                >
                  <Icon className="h-4 w-4" />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {entry.title}
                    <span className="text-[var(--color-mute-400)]"> · </span>
                    <span className="text-[var(--color-accent-light)]">{entry.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-mute-500)]">{entry.period}</span>
                </div>
                {entry.location && (
                  <p className="mt-1 text-sm text-[var(--color-mute-400)]">{entry.location}</p>
                )}
              </div>
              {hasDetail && (
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--color-mute-400)] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && hasDetail && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-7 md:pb-7">
                    {entry.summary && (
                      <p className="text-sm text-[var(--color-mute-300)]">{entry.summary}</p>
                    )}
                    {entry.bullets?.length ? (
                      <ul className="mt-3 space-y-2">
                        {entry.bullets.map((b, k) => (
                          <li
                            key={k}
                            className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-mute-300)]"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {entry.tech?.length ? (
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {entry.tech.map((tname) => (
                          <li key={tname}>
                            <TechTag name={tname} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
