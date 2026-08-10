import { useReducedMotion } from "framer-motion";
import { FX_DISABLED } from "./fx";

/** Shared ease-out cubic-bezier used by every reveal/transition. */
export const EASE_OUT = [0, 0, 0.2, 1] as const;

/**
 * True when motion should be skipped - either the user prefers reduced motion
 * or the screenshot build flag (PUBLIC_NOFX) is set. Single source of truth so
 * every island disables animation consistently.
 */
export function useStaticMotion(): boolean {
  return useReducedMotion() === true || FX_DISABLED;
}
