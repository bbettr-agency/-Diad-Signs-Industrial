"use client";

/**
 * Reduced-motion access.
 *
 * Standard: SYSTEM/DESIGN-LANGUAGE/02-MOTION-SYSTEM.md §7
 *
 * WHY THIS EXISTS: the July 2026 audit found 96 animations across five
 * production sites running at full amplitude for users who had asked their OS
 * to stop motion. Two of those sites shipped the global CSS override
 * (`*{animation-duration:0.001ms!important}`) and believed they were covered.
 * They were not — Motion writes inline style values on animation frames, so it
 * never consults CSS `animation-duration` or `transition-duration`.
 *
 * The only reliable controls are `<MotionConfig reducedMotion="user">` (applied
 * by MotionProvider) and this hook for anything hand-rolled: rAF loops,
 * counters, autoplay, scroll effects.
 */

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * `true` when the user has asked for reduced motion.
 *
 * Returns `false` during SSR AND the first client render, then the real
 * preference after mount. Motion 12's useReducedMotion reads matchMedia
 * synchronously on the client, so returning it directly made every <Reveal>
 * render different props during hydration for reduced-motion users – React
 * then discarded the server HTML for the whole root (found on DIAD, 2026-10).
 */
export function useMotionSafe(): boolean {
  const preference = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? preference : false;
}
