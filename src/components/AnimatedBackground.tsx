import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export type BgMode = "off" | "waves" | "birds";

/**
 * Lightweight canvas easter-egg background — two modes, no three.js/Vanta.
 * Mounts behind all content, ignores pointer events, pauses when tab hidden.
 */
export default function AnimatedBackground({ mode }: { mode: BgMode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduce = useReducedMotion();

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

    // ---- Boids (birds mode) ----
    const N = 70;
    const birds = Array.from({ length: N }, (_, k) => ({
      x: ((k * 97) % 100) / 100 * w,
      y: ((k * 53) % 100) / 100 * h,
      vx: Math.cos(k) * 0.6,
      vy: Math.sin(k * 1.3) * 0.6,
    }));

    const step = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      if (mode === "waves") {
        const layers = 5;
        for (let l = 0; l < layers; l++) {
          ctx.beginPath();
          const amp = 18 + l * 10;
          const yBase = h * (0.35 + l * 0.12);
          const phase = t / 1400 + l * 0.8;
          for (let x = 0; x <= w; x += 8) {
            const y =
              yBase +
              Math.sin(x / 220 + phase) * amp +
              Math.sin(x / 90 - phase * 1.3) * (amp * 0.4);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(14,165,233,${0.05 + l * 0.025})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      } else if (mode === "birds") {
        for (const b of birds) {
          // simple flock toward center + neighbor alignment
          let ax = 0;
          let ay = 0;
          ax += (w / 2 - b.x) * 0.0002;
          ay += (h / 2 - b.y) * 0.0002;
          b.vx = (b.vx + ax) * 0.99;
          b.vy = (b.vy + ay) * 0.99;
          const sp = Math.hypot(b.vx, b.vy) || 1;
          const max = 1.4;
          if (sp > max) {
            b.vx = (b.vx / sp) * max;
            b.vy = (b.vy / sp) * max;
          }
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < 0) b.x = w;
          if (b.x > w) b.x = 0;
          if (b.y < 0) b.y = h;
          if (b.y > h) b.y = 0;

          const ang = Math.atan2(b.vy, b.vx);
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(ang);
          ctx.fillStyle = "rgba(56,189,248,0.5)";
          ctx.beginPath();
          ctx.moveTo(5, 0);
          ctx.lineTo(-4, 3);
          ctx.lineTo(-4, -3);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }

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
