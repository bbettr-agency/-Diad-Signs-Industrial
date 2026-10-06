"use client";

/**
 * PROJECT EXTENSION – DIAD Signs (2026-10). Candidate for the OS ENGINE.
 *
 * Scroll-linked progress for ONE signature moment per page (the photoluminescent
 * "lights out" demonstration). The engine README excludes scroll-linked timelines
 * because they usually fail the removal test; this one is the product
 * demonstration itself, so it passes. Written reason in PROJECT_STATUS.md.
 *
 * Rules: progress drives opacity/transform/colour on a handful of elements via
 * MotionValues (no React re-render per frame), the page scrolls natively (no
 * hijack), and callers MUST render a still end-state when useMotionSafe() is true.
 */

import { useMotionValue, useTransform, type MotionValue } from "motion/react";
import { useEffect, type RefObject } from "react";

export type { MotionValue };

/**
 * 0 → 1 as the target travels from "top of target at top of viewport" to
 * "bottom of target at bottom of viewport" (i.e. across its sticky span).
 *
 * Measured with one rAF-throttled scroll read rather than Motion's useScroll:
 * useScroll may hand off to a native ScrollTimeline, which in testing (Chrome,
 * motion 12) mis-mapped multi-window transforms and re-lit the scene at the
 * end of the section. This path is plain, predictable and still compositor-only
 * on the write side.
 */
export function useSectionProgress(target: RefObject<HTMLElement>) {
  const progress = useMotionValue(0);
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const el = target.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? -r.top / span : r.top <= 0 ? 1 : 0;
      progress.set(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [target, progress]);
  return progress;
}

/** Map a progress window [from, to] to an output range, clamped. */
export function useProgressTransform<T extends number | string>(
  progress: MotionValue<number>,
  input: number[],
  output: T[],
): MotionValue<T> {
  return useTransform(progress, input, output, { clamp: true });
}

/** Derive a formatted value (e.g. a percentage readout) from progress. */
export function useProgressFormat(
  progress: MotionValue<number>,
  input: [number, number],
  output: [number, number],
  format: (v: number) => string,
): MotionValue<string> {
  const value = useTransform(progress, input, output, { clamp: true });
  return useTransform(value, format);
}
