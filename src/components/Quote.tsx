import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { quotes } from "../data/quotes";

function dayOfYearIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86_400_000);
  return day % quotes.length;
}

export default function Quote() {
  const reduce = useReducedMotion();
  // Deterministic SSR default; sync to "today" after mount.
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(dayOfYearIndex());
  }, []);

  const next = () => setI((v) => (v + 1) % quotes.length);
  const q = quotes[i];

  return (
    <div className="shell-wide mx-auto max-w-3xl text-center">
      <p className="eyebrow mb-6">Quote of the day</p>
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={i}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          aria-live="polite"
        >
          <p className="text-xl font-medium italic leading-relaxed text-[var(--color-mute-200)] text-white sm:text-2xl">
            “{q.text}”
          </p>
          <footer className="mt-4 text-sm text-[var(--color-mute-400)]">— {q.author}</footer>
        </motion.blockquote>
      </AnimatePresence>

      <button
        type="button"
        onClick={next}
        aria-label="New quote"
        className="glass glass-interactive mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-mute-400)]"
      >
        <RefreshCw className="h-4 w-4" />
      </button>
    </div>
  );
}
