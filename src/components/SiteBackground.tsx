import { useEffect, useState } from "react";
import AnimatedBackground, { type BgMode } from "./AnimatedBackground";

const CYCLE: BgMode[] = ["candles", "off"];

/**
 * Always-on animated background for the home page. Defaults to "candles".
 * The footer easter egg dispatches a `sitebg:cycle` window event to switch modes.
 */
export default function SiteBackground({ initial = "candles" as BgMode }) {
  const [mode, setMode] = useState<BgMode>(initial);

  useEffect(() => {
    const onCycle = () => setMode((m) => CYCLE[(CYCLE.indexOf(m) + 1) % CYCLE.length]);
    window.addEventListener("sitebg:cycle", onCycle);
    return () => window.removeEventListener("sitebg:cycle", onCycle);
  }, []);

  return <AnimatedBackground mode={mode} />;
}
