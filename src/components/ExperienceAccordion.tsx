import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "../data/experience";
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
  // First (current) role open by default.
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <ul className="mt-12 space-y-4">
      {experience.map((job, i) => {
        const isOpen = openIndex === i;
        const panelId = `exp-panel-${i}`;
        const btnId = `exp-btn-${i}`;
        return (
          <li key={`${job.company}-${i}`} className="glass glass-interactive overflow-hidden">
            <button
              id={btnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center gap-4 p-6 text-left md:p-7"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {job.role}
                    <span className="text-[var(--color-mute-400)]"> · </span>
                    <span className="text-[var(--color-accent-light)]">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-mute-500)]">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-mute-400)]">{job.location}</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--color-mute-400)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
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
                    {job.summary && (
                      <p className="text-sm text-[var(--color-mute-300)]">{job.summary}</p>
                    )}
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-mute-300)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <li key={t}>
                          <TechTag name={t} />
                        </li>
                      ))}
                    </ul>
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
