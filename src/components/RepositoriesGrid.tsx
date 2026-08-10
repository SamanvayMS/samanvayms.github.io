import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { repositories, primaryUrl, repoUrl, hasPages, type Repo } from "../data/repositories";
import { EASE_OUT, useStaticMotion } from "../lib/motion";

const CHIP_BG = "color-mix(in srgb, var(--color-accent) 14%, transparent)";

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const staticMotion = useStaticMotion();
  return (
    <motion.article
      className="glass glass-interactive group relative flex h-full flex-col p-6 hover:scale-[1.02]"
      initial={staticMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        staticMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.08, ease: EASE_OUT }
      }
    >
      <span className="font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
        {repo.lang}
      </span>

      {/* Stretched primary link → the repo's hosted page, or its source if it has none */}
      <h2 className="mt-2 text-xl font-bold leading-tight text-white">
        <a
          href={primaryUrl(repo)}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {repo.name}
        </a>
      </h2>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-mute-300)]">
        {repo.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {repo.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--color-glass-08)] px-2.5 py-1 text-xs text-[var(--color-accent-light)]"
            style={{ backgroundColor: CHIP_BG }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-glass-08)] pt-4">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-mute-300)] transition-colors group-hover:text-white">
          {hasPages(repo) ? "Open page" : "View source"}{" "}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
        {/* Only when it adds a second destination - for repos without a hosted
            page the stretched link already points at the source. */}
        {hasPages(repo) && (
          <a
            href={repoUrl(repo.slug)}
            className="relative z-10 inline-flex items-center gap-1.5 text-xs text-[var(--color-mute-400)] transition-colors hover:text-white"
            aria-label={`${repo.name} source on GitHub`}
          >
            <Github className="h-4 w-4" aria-hidden /> Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function RepositoriesGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
      {repositories.map((repo, i) => (
        <RepoCard key={repo.slug} repo={repo} index={i} />
      ))}
    </div>
  );
}
