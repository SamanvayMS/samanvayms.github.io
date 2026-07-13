import { useEffect, useRef } from "react";
import { useStaticMotion } from "../lib/motion";

export type BgMode = "off" | "candles";

/**
 * Lightweight canvas background — a scrolling candlestick chart.
 * Mounts behind all content, ignores pointer events, pauses when tab hidden.
 */
export default function AnimatedBackground({ mode }: { mode: BgMode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduce = useStaticMotion();

  useEffect(() => {
    if (mode === "off" || reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // ---- Candlesticks ----
    type Candle = { o: number; h: number; l: number; c: number; up: boolean };
    const SPACING = 18;
    const CANDLE_W = 9;
    const PX_PER_UNIT = 20; // price units → px
    const VOL = 0.9;
    const SCROLL = 0.35; // px/frame rightward drift
    const candles = new Map<number, Candle>();
    let offset = 0;
    let minGen = 0;
    let maxGen = -1;
    // approx standard normal from summed uniforms
    const randn = () => (Math.random() + Math.random() + Math.random() - 1.5) / 0.866;
    const wick = () => Math.random() * VOL * 0.9;

    const makeFrom = (open: number): Candle => {
      const close = open + randn() * VOL - open * 0.05; // mean-revert toward 0
      return {
        o: open,
        c: close,
        h: Math.max(open, close) + wick(),
        l: Math.min(open, close) - wick(),
        up: close >= open,
      };
    };
    const extendRight = () => {
      const prev = maxGen >= minGen ? candles.get(maxGen)!.c : 0;
      candles.set(++maxGen, makeFrom(prev));
    };
    const extendLeft = () => {
      const rightOpen = candles.get(minGen)!.o; // continuity: left candle closes into this open
      const open = rightOpen - randn() * VOL;
      candles.set(--minGen, {
        o: open,
        c: rightOpen,
        h: Math.max(open, rightOpen) + wick(),
        l: Math.min(open, rightOpen) - wick(),
        up: rightOpen >= open,
      });
    };
    // seed initial coverage
    candles.set(0, makeFrom(0));
    minGen = 0;
    maxGen = 0;
    while (maxGen * SPACING + offset < w + SPACING) extendRight();
    while (minGen * SPACING + offset > -SPACING) extendLeft();

    const drawCandles = () => {
      offset += SCROLL;
      // grow on the left as the field drifts right; cull off the right edge
      while (minGen * SPACING + offset > -SPACING) extendLeft();
      while (maxGen * SPACING + offset > w + SPACING * 2) {
        candles.delete(maxGen--);
      }
      const cy = h * 0.52;
      for (let i = minGen; i <= maxGen; i++) {
        const cdl = candles.get(i);
        if (!cdl) continue;
        const x = i * SPACING + offset;
        if (x < -CANDLE_W || x > w + CANDLE_W) continue;
        const cx = x + CANDLE_W / 2;
        const yTop = cy - cdl.h * PX_PER_UNIT;
        const yBot = cy - cdl.l * PX_PER_UNIT;
        const bodyTop = cy - Math.max(cdl.o, cdl.c) * PX_PER_UNIT;
        const bodyBot = cy - Math.min(cdl.o, cdl.c) * PX_PER_UNIT;
        const stroke = cdl.up ? "rgba(46,86,140,0.55)" : "rgba(70,78,92,0.5)";
        const fill = cdl.up ? "rgba(30,58,96,0.5)" : "rgba(48,54,66,0.5)";
        // wick
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, yTop);
        ctx.lineTo(cx, yBot);
        ctx.stroke();
        // body
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        const bh = Math.max(1.5, bodyBot - bodyTop);
        ctx.fillRect(x, bodyTop, CANDLE_W, bh);
        ctx.strokeRect(x + 0.5, bodyTop + 0.5, CANDLE_W - 1, bh - 1);
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      drawCandles();
      raf = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mode, reduce]);

  if (mode === "off" || reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
