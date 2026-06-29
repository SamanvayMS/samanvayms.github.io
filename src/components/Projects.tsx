import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { SiGitlab } from "react-icons/si";
import { projects, type Project } from "../data/projects";
import { TechBadge } from "./ui/TechBadge";
import { EASE_OUT, useStaticMotion } from "../lib/motion";

const INITIAL = 6;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const staticMotion = useStaticMotion();
  const motionProps = staticMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5, delay: (index % INITIAL) * 0.05, ease: EASE_OUT },
      };
  return (
    <motion.article className="glass glass-interactive flex h-full flex-col p-6" {...motionProps}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-white">{project.title}</h3>
        {project.featured ? (
          <span className="shrink-0 rounded-full bg-[var(--color-accent)]/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-accent-light)]">
            Featured
          </span>
        ) : null}
      </div>

      {project.context ? (
        <p className="mt-1 font-mono text-xs text-[var(--color-mute-500)]">{project.context}</p>
      ) : null}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-mute-300)]">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <li key={t}>
            <TechBadge name={t} />
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[var(--color-glass-08)] pt-4">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-mute-300)] transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        ) : null}
        {project.gitlab ? (
          <a
            href={project.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-mute-300)] transition-colors hover:text-white"
          >
            <SiGitlab className="h-4 w-4" /> GitLab
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-mute-300)] transition-colors hover:text-white"
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
        ) : null}
        {project.proprietary ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-mute-500)]">
            <Lock className="h-4 w-4" /> Available on request
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}

// Filter pills: "All" plus unique tags across all projects, ordered by frequency then name.
const FILTERS = (() => {
  const counts = new Map<string, number>();
  for (const p of projects) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  const tags = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([t]) => t);
  return ["All", ...tags];
})();

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));
  const shown = expanded ? filtered : filtered.slice(0, INITIAL);
  const hasMore = filtered.length > INITIAL;

  const selectFilter = (tag: string) => {
    setFilter(tag);
    setExpanded(false);
  };

  return (
    <div className="mt-10">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by topic">
        {FILTERS.map((tag) => {
          const active = filter === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => selectFilter(tag)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]"
                  : "border-[var(--color-glass-08)] bg-[var(--color-glass-04)] text-[var(--color-mute-300)] hover:border-[var(--color-glass-16)] hover:text-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="glass glass-interactive rounded-full px-6 py-2.5 text-sm font-medium text-white"
          >
            {expanded ? "Show less" : `Show all ${filtered.length}`}
          </button>
        </div>
      ) : null}
    </div>
  );
}
