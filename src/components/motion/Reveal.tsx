import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { FX_DISABLED } from "../../lib/fx";

interface RevealProps {
  children: ReactNode;
  /** Vertical offset to animate from (px). */
  y?: number;
  duration?: number;
  delay?: number;
  /** Index for staggered groups: delay += index * stagger. */
  index?: number;
  stagger?: number;
  /** Animate only once, or re-trigger on each scroll-in. */
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "ul" | "article" | "span";
}

export default function Reveal({
  children,
  y = 24,
  duration = 0.6,
  delay = 0,
  index = 0,
  stagger = 0.05,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  if (FX_DISABLED) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay + index * stagger,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
