"use client";

import { useEffect, useRef } from "react";
import { m, useMotionSafe, useProgressTransform, useSectionProgress } from "@/engine/motion";
import { ButtonLink } from "@/components/ui";
import { ExitPlateDay, ExitPlateGlow } from "@/components/signs";

/**
 * LIGHTS OUT – the photoluminescent demonstration.
 *
 * A tall section with a sticky stage. Native scroll drives one progress value:
 * the room dims, an ambient-light readout falls to zero, and the exit sign
 * changes from its daylight face to the glow of the photoluminescent pigment.
 * Only opacity, transform and one colour are animated, all via MotionValues
 * (no React re-render per frame). Reduced motion renders the dark end state.
 *
 * Claims are limited to the verified credential: SABS-approved manufacturer of
 * photoluminescent signs conforming to SANS 1186-5. No luminance or duration
 * figures are stated.
 */
export function LightsOut() {
  const reduced = useMotionSafe();
  return reduced ? <LightsOutStill /> : <LightsOutScroll />;
}

function Copy() {
  return (
    <div className="max-w-[30rem]">
      <h2 id="lights-title" className="display text-d-2 text-balance">
        When the power fails, the way out stays visible.
      </h2>
      <p className="mt-5 text-[1rem] leading-relaxed opacity-80 lg:mt-6 lg:text-[1.0625rem] [@media(max-height:760px)_and_(max-width:1023px)]:hidden">
        Photoluminescent signs charge from ordinary light, then glow in the dark to mark exits, escape routes and fire equipment when
        the lights go out.
      </p>
      <p className="mt-4 text-[1rem] leading-relaxed lg:text-[1.0625rem]">
        DIAD is an <span className="font-semibold">SABS-approved manufacturer</span> of photoluminescent signs conforming to{" "}
        <span className="whitespace-nowrap">SANS 1186-5</span>.
      </p>
      <div className="mt-7 lg:mt-9">
        <ButtonLink href="/?family=safety-signs#quote">Specify photoluminescent signs</ButtonLink>
      </div>
    </div>
  );
}

function LightsOutScroll() {
  const ref = useRef<HTMLElement>(null);
  const p = useSectionProgress(ref);

  const dark = useProgressTransform(p, [0.12, 0.48], [0, 1]);
  const ink = useProgressTransform(p, [0.25, 0.31], ["#14161B", "#F3F2EE"]);
  const day = useProgressTransform(p, [0.3, 0.56], [1, 0]);
  const glow = useProgressTransform(p, [0.36, 0.62], [0, 1]);
  const spill = useProgressTransform(p, [0.45, 0.75], [0, 0.55]);
  const signScale = useProgressTransform(p, [0, 0.6], [0.96, 1]);
  const hint = useProgressTransform(p, [0.02, 0.2], [1, 0]);
  // Lights out for the header too: once the room is dark and the stage covers
  // the header, it switches to its night tone. One event, sent only on change.
  useEffect(() => {
    let tone: "light" | "dark" = "light";
    let frame = 0;
    const read = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const next = r.top <= 0 && r.bottom > 80 && dark.get() > 0.6 ? "dark" : "light";
      if (next !== tone) {
        tone = next;
        window.dispatchEvent(new CustomEvent("diad:tone", { detail: tone }));
      }
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(read);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const unsubscribe = dark.on("change", onScroll);
    read();
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      window.dispatchEvent(new CustomEvent("diad:tone", { detail: "light" }));
    };
  }, [dark]);


  return (
    <section ref={ref} id="photoluminescent" aria-labelledby="lights-title" className="on-dark relative h-[240vh] lg:h-[290vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-brand-substrate">
        {/* Environment */}
        <m.div aria-hidden="true" className="absolute inset-0 bg-brand-night" style={{ opacity: dark }} />
        <m.div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ opacity: dark, background: "radial-gradient(120% 90% at 65% 45%, transparent 35%, rgba(0,0,0,0.55) 100%)" }}
        />

        <m.div style={{ color: ink }} className="wrap relative grid h-full content-center gap-6 pb-6 pt-[4.75rem] sm:gap-8 lg:grid-cols-12 lg:grid-rows-1 lg:items-center lg:gap-10 lg:py-0">
          {/* Sign stage */}
          <div className="relative order-first lg:order-last lg:col-span-7">
            <m.div style={{ scale: signScale }} className="relative mx-auto w-[86%] max-w-[40rem] sm:w-full">
              <m.div
                aria-hidden="true"
                className="absolute -inset-[30%] rounded-full"
                style={{ opacity: spill, background: "radial-gradient(closest-side, rgba(217,245,163,0.22), transparent 70%)" }}
              />
              <m.div style={{ opacity: day }} className="relative [filter:drop-shadow(0_24px_30px_rgba(20,22,27,0.22))]">
                <ExitPlateDay className="block h-auto w-full" />
              </m.div>
              <m.div
                style={{ opacity: glow }}
                className="absolute inset-0 will-change-[opacity] [filter:drop-shadow(0_0_6px_rgba(217,245,163,0.7))_drop-shadow(0_0_28px_rgba(217,245,163,0.35))]"
              >
                <ExitPlateGlow className="block h-auto w-full" />
              </m.div>
            </m.div>
            <m.p style={{ opacity: hint }} className="mt-5 text-center text-[1rem] text-brand-graphite lg:mt-8 lg:text-[1.05rem]">
              Scroll down. We&apos;ll switch off the lights.{" "}
              <span aria-hidden="true" className="inline-block animate-[diad-nudge_1.8s_ease-in-out_infinite] motion-reduce:animate-none">
                ↓
              </span>
            </m.p>
          </div>

          <div className="lg:col-span-5">
            <Copy />
          </div>
        </m.div>
      </div>
    </section>
  );
}

/** Reduced motion: the demonstration's end state, still. */
function LightsOutStill() {
  return (
    <section id="photoluminescent" aria-labelledby="lights-title" className="on-dark relative bg-brand-night py-20 text-brand-bone md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:order-last lg:col-span-7">
          <div className="mx-auto max-w-[40rem] [filter:drop-shadow(0_0_6px_rgba(217,245,163,0.7))_drop-shadow(0_0_28px_rgba(217,245,163,0.35))]">
            <ExitPlateGlow className="block h-auto w-full" />
          </div>
          
        </div>
        <div className="lg:col-span-5">
          <Copy />
        </div>
      </div>
    </section>
  );
}
