import { useEffect, useRef, useState } from "react";
import { useStaticMotion } from "../lib/motion";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export default function Typewriter({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseMs = 2000,
}: TypewriterProps) {
  const reduce = useStaticMotion();
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduce) {
      setText(phrases[0]);
      return;
    }
    const full = phrases[i % phrases.length];
    let delay: number;

    if (phase === "typing") {
      if (text === full) {
        delay = pauseMs;
        timer.current = window.setTimeout(() => setPhase("deleting"), delay);
        return;
      }
      delay = typingSpeed + (text.length % 3) * 12; // light cadence jitter
      timer.current = window.setTimeout(
        () => setText(full.slice(0, text.length + 1)),
        delay,
      );
    } else if (phase === "deleting") {
      if (text === "") {
        setI((v) => (v + 1) % phrases.length);
        setPhase("typing");
        return;
      }
      delay = deletingSpeed;
      timer.current = window.setTimeout(
        () => setText(full.slice(0, text.length - 1)),
        delay,
      );
    }
    return () => window.clearTimeout(timer.current);
  }, [text, phase, i, phrases, typingSpeed, deletingSpeed, pauseMs, reduce]);

  return (
    <span aria-hidden="true">
      <span className="text-[var(--color-accent-light)]">{text}</span>
      {!reduce && (
        <span className="blink ml-0.5 inline-block w-[2px] -translate-y-0.5 self-stretch bg-[var(--color-accent-light)] align-middle">
          &nbsp;
        </span>
      )}
    </span>
  );
}
