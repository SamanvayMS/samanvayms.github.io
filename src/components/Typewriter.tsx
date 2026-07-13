import { useEffect, useState } from "react";
import { useStaticMotion } from "../lib/motion";

const TYPING_SPEED = 50;
const DELETING_SPEED = 30;
const PAUSE_MS = 2000;

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const reduce = useStaticMotion();
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (reduce) {
      setText(phrases[0]);
      return;
    }
    const full = phrases[i % phrases.length];
    let timer: number;

    if (phase === "typing") {
      timer =
        text === full
          ? window.setTimeout(() => setPhase("deleting"), PAUSE_MS)
          : window.setTimeout(
              () => setText(full.slice(0, text.length + 1)),
              TYPING_SPEED + (text.length % 3) * 12, // light cadence jitter
            );
    } else {
      if (text === "") {
        setI((v) => (v + 1) % phrases.length);
        setPhase("typing");
        return;
      }
      timer = window.setTimeout(() => setText(full.slice(0, text.length - 1)), DELETING_SPEED);
    }
    return () => window.clearTimeout(timer);
  }, [text, phase, i, phrases, reduce]);

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
