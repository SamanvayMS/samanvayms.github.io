/**
 * When PUBLIC_NOFX=1 at build time, motion/preloader effects are disabled so
 * the static output can be screenshotted/inspected without waiting on JS-driven
 * reveals. Defaults to off in normal builds.
 */
export const FX_DISABLED = import.meta.env.PUBLIC_NOFX === "1";
