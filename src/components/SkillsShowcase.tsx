import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { places, skillDomains, type SkillDomain } from "../data/skills";
import { EASE_OUT, useStaticMotion } from "../lib/motion";

/**
 * Three layouts over the same data, for A/B testing before one is chosen.
 * Pick with the switcher, or link straight to one with ?skills=lens|map|terminal.
 * Once a layout wins, delete the other two and the switcher.
 */
const LAYOUTS = [
  { id: "lens", label: "Lens" },
  { id: "map", label: "Map" },
  { id: "terminal", label: "Terminal" },
] as const;
type LayoutId = (typeof LAYOUTS)[number]["id"];

function isLayout(v: string | null): v is LayoutId {
  return LAYOUTS.some((l) => l.id === v);
}

/* ------------------------------------------------------------------ */
/* Lens: one domain at a time. Tabs on the left, the domain on the right. */

function Toolkit({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="chip rounded-md px-2 py-0.5 text-xs">
          {t}
        </li>
      ))}
    </ul>
  );
}

function LensLayout() {
  const [active, setActive] = useState(0);
  const staticMotion = useStaticMotion();
  const d = skillDomains[active];
  return (
    <div className="glass grid grid-cols-1 overflow-hidden md:grid-cols-[240px_1fr]">
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
              role="tab"
              type="button"
              aria-selected={on}
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

      <div role="tabpanel" className="min-h-[360px] p-6 md:p-8">
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
            <Toolkit items={d.toolkit} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Map: skills down the side, places across the top. A dot means I used it
   there; hovering or tapping a row shows the evidence underneath. */

function MapLayout() {
  const [open, setOpen] = useState<string | null>(skillDomains[0].signature[0].name);
  const cols = [...places, "Personal"] as const;
  return (
    <div className="glass overflow-x-auto p-4 md:p-6">
      <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            <th className="w-[38%] pb-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-mute-500)]">
              Skill
            </th>
            {cols.map((c) => (
              <th
                key={c}
                className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--color-mute-500)]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        {skillDomains.map((d) => (
          <tbody key={d.id}>
            <tr>
              <td colSpan={cols.length + 1} className="pb-1 pt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-light)]">
                  {d.title}
                </span>
              </td>
            </tr>
            {d.signature.map((s) => {
              const isOpen = open === s.name;
              const used = (c: string) =>
                c === "Personal" ? s.where.length === 0 : s.where.includes(c as (typeof places)[number]);
              return [
                <tr
                  key={s.name}
                  onMouseEnter={() => setOpen(s.name)}
                  onClick={() => setOpen(s.name)}
                  className={`cursor-default transition-colors ${
                    isOpen ? "bg-[var(--color-glass-06)]" : "hover:bg-[var(--color-glass-04)]"
                  }`}
                >
                  <td className="rounded-l-lg py-2.5 pl-3 font-medium text-white">{s.name}</td>
                  {cols.map((c, i) => (
                    <td key={c} className={`py-2.5 text-center ${i === cols.length - 1 ? "rounded-r-lg" : ""}`}>
                      {used(c) ? (
                        <span
                          aria-label={`Used at ${c}`}
                          className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
                        />
                      ) : (
                        <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-[var(--color-glass-16)]" />
                      )}
                    </td>
                  ))}
                </tr>,
                isOpen ? (
                  <tr key={`${s.name}-proof`}>
                    <td colSpan={cols.length + 1} className="px-3 pb-3 pt-1 text-sm text-[var(--color-mute-300)]">
                      {s.proof}
                    </td>
                  </tr>
                ) : null,
              ];
            })}
          </tbody>
        ))}
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Terminal: a fake shell. Click a command and it types out the domain. */

function domainLines(d: SkillDomain): string[] {
  return [
    `# ${d.title}${d.featured ? "  [focus]" : ""}`,
    d.pitch,
    "",
    ...d.signature.flatMap((s) => [`> ${s.name}`, `  ${s.proof}`]),
    "",
    `toolkit: ${d.toolkit.join(", ")}`,
  ];
}

function TerminalLayout() {
  const staticMotion = useStaticMotion();
  const [cmd, setCmd] = useState(skillDomains[0].id);
  const [shown, setShown] = useState(0);
  const d = skillDomains.find((x) => x.id === cmd) ?? skillDomains[0];
  const lines = domainLines(d);

  // Reveal one line at a time; skip straight to the end under reduced motion.
  useEffect(() => {
    if (staticMotion) {
      setShown(lines.length);
      return;
    }
    setShown(0);
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n >= lines.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 70);
    return () => window.clearInterval(id);
  }, [cmd, staticMotion, lines.length]);

  return (
    <div className="glass overflow-hidden font-mono">
      <div className="flex items-center gap-2 border-b border-[var(--color-glass-08)] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-[var(--color-mute-500)]">samanvay@desk: ~</span>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-[var(--color-glass-08)] px-4 py-3">
        {skillDomains.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setCmd(x.id)}
            aria-pressed={cmd === x.id}
            className={`rounded-md px-2.5 py-1 text-xs transition-colors ${
              cmd === x.id
                ? "bg-[var(--color-accent)]/20 text-[var(--color-accent-light)]"
                : "text-[var(--color-mute-400)] hover:bg-[var(--color-glass-06)] hover:text-white"
            }`}
          >
            skills {x.id}
          </button>
        ))}
      </div>

      <div className="min-h-[380px] p-5 text-[13px] leading-relaxed" aria-live="polite">
        <p className="text-[var(--color-mute-400)]">
          <span className="text-[#28C840]">$</span> skills {d.id}
        </p>
        {lines.slice(0, shown).map((l, i) => (
          <p
            key={`${d.id}-${i}`}
            className={
              l.startsWith("#")
                ? "mt-2 font-semibold text-[var(--color-accent-light)]"
                : l.startsWith(">")
                  ? "mt-2 text-white"
                  : l.startsWith("toolkit:")
                    ? "text-[var(--color-mute-500)]"
                    : "text-[var(--color-mute-300)]"
            }
          >
            {l || " "}
          </p>
        ))}
        {shown >= lines.length ? (
          <p className="mt-2 text-[var(--color-mute-400)]">
            <span className="text-[#28C840]">$</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[var(--color-mute-300)]" />
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function SkillsShowcase() {
  const [layout, setLayout] = useState<LayoutId>("lens");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("skills");
    if (isLayout(q)) setLayout(q);
  }, []);

  const choose = (id: LayoutId) => {
    setLayout(id);
    const url = new URL(window.location.href);
    url.searchParams.set("skills", id);
    window.history.replaceState(null, "", url);
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-end gap-3">
        <span className="text-xs text-[var(--color-mute-500)]">Layout preview</span>
        <div className="chip inline-flex rounded-full p-1" role="group" aria-label="Skills layout">
          {LAYOUTS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => choose(l.id)}
              aria-pressed={layout === l.id}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                layout === l.id ? "bg-[var(--color-accent)] text-black" : "text-[var(--color-mute-300)] hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {layout === "lens" ? <LensLayout /> : layout === "map" ? <MapLayout /> : <TerminalLayout />}
    </div>
  );
}
