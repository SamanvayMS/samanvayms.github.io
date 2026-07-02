import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FX_DISABLED } from "../lib/fx";
import { EASE_OUT, useStaticMotion } from "../lib/motion";
import { useScrollLock } from "../lib/useScrollLock";

const LINES = [
  "Calibrating the yield curve…",
  "Backtesting on tick data…",
  "Warming up the GPUs…",
  "Sampling the order book…",
  "Optimizing the portfolio…",
  "Compiling alpha…",
];

// Pick deterministically per page load without Math.random in module scope.
function pickLine() {
  return LINES[new Date().getSeconds() % LINES.length];
}

const MIN_DURATION_MS = 1500;

export default function Preloader() {
  const staticMotion = useStaticMotion();
  const [pct, setPct] = useState(FX_DISABLED ? 100 : 0);
  const [done, setDone] = useState(FX_DISABLED);
  // Default line for SSR; randomize after mount to avoid hydration mismatch.
  const [line, setLine] = useState(LINES[0]);

  useEffect(() => {
    setLine(pickLine());
  }, []);

  useEffect(() => {
    if (staticMotion) {
      setPct(100);
      setDone(true);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / MIN_DURATION_MS));
      // ease-out so it decelerates toward 100
      const eased = 1 - Math.pow(1 - t, 2);
      setPct(Math.max(0, Math.min(100, Math.round(eased * 100))));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [staticMotion]);

  // Lock scroll while the overlay is up.
  useScrollLock(!done);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[1000] grid place-items-center bg-black"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <div className="flex flex-col items-center">
            <motion.span
              className="text-6xl font-bold tracking-tight tabular-nums sm:text-7xl"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              {pct}
              <span className="text-[var(--color-accent)]">%</span>
            </motion.span>
            <p className="mt-4 text-sm text-[var(--color-mute-500)]">{line}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
