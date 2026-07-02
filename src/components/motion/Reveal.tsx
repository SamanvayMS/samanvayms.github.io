import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT, useStaticMotion } from "../../lib/motion";

const Y = 24;
const DURATION = 0.6;
const STAGGER = 0.05;

interface RevealProps {
  children: ReactNode;
  /** Index for staggered groups: delay = index * 0.05s. */
  index?: number;
  /** Animate only once, or re-trigger on each scroll-in. */
  once?: boolean;
  className?: string;
}

export default function Reveal({ children, index = 0, once = true, className }: RevealProps) {
  const staticMotion = useStaticMotion();
  if (staticMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: Y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, delay: index * STAGGER, ease: EASE_OUT },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
