import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillDomains } from "../data/skills";
import { EASE_OUT, useStaticMotion } from "../lib/motion";

/** Skills, one domain at a time: tabs on the left, the domain on the right. */
export default function SkillsShowcase() {
  const [active, setActive] = useState(0);
  const staticMotion = useStaticMotion();
  const d = skillDomains[active];

  return (
    <div className="glass mt-10 grid grid-cols-1 overflow-hidden md:grid-cols-[240px_1fr]">
      <div
        role="tablist"
        aria-label="Skill domains"
        className="flex gap-1 overflow-x-auto border-b border-[var(--color-glass-08)] p-2 md:flex-col md:border-b-0 md:border-r"
      >
        {skillDomains.map((dom, i) => {
          const on = i === active;
          return (
            <button
              key={dom.id}
              id={`skills-tab-${dom.id}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls="skills-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                on
                  ? "bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]"
                  : "text-[var(--color-mute-400)] hover:bg-[var(--color-glass-06)] hover:text-white"
              }`}
            >
              {dom.title}
            </button>
          );
        })}
      </div>

      <div
        id="skills-panel"
        role="tabpanel"
        aria-labelledby={`skills-tab-${d.id}`}
        className="min-h-[360px] p-6 md:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={d.id}
            initial={staticMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={staticMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-white">{d.title}</h3>
              {d.featured ? <span className="badge-accent">Focus</span> : null}
            </div>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-mute-400)]">{d.pitch}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {d.signature.map((s) => (
                <div key={s.name} className="rounded-xl border border-[var(--color-glass-08)] p-4">
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-mute-300)]">{s.proof}</p>
                </div>
              ))}
            </div>

            <p className="mb-2.5 mt-6 text-xs font-semibold uppercase tracking-wider text-[var(--color-mute-500)]">
              Also in the toolkit
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {d.toolkit.map((t) => (
                <li key={t} className="chip rounded-md px-2 py-0.5 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
