"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { Reveal } from "@/engine/motion";
import { families, familyHref, categoryHref, inSentence, type Family } from "@/content/catalogue";
import { Arrow, inert } from "@/components/ui";
import { compositions } from "@/components/compositions";

const classColour: Record<string, string> = {
  warning: "#F3A60E",
  mandatory: "#233579",
  prohibition: "#ED1C24",
  safe: "#0C713E",
  neutral: "#14161B",
};

/** Viewport-heights of scroll given to each family while the stage is pinned. */
const STEP_VH = 55;

/** Ranges as a sentence of links – reads like a catalogue, not a grid. */
function RangeSentence({ f, className = "" }: { f: Family; className?: string }) {
  return (
    <p className={`text-[0.98rem] leading-[1.7] text-brand-graphite ${className}`}>
      {f.categories.map((c, i) => (
        <Fragment key={c.slug}>
          <Link href={categoryHref(f, c)} className="text-brand-ink underline-offset-[5px] transition-colors hover:text-brand-primary hover:underline">
            {c.name}
          </Link>
          {i < f.categories.length - 2 ? ", " : i === f.categories.length - 2 ? " and " : "."}
        </Fragment>
      ))}
    </p>
  );
}

/**
 * The catalogue – the page's largest experience.
 *
 * Desktop: a pinned stage. The product composition fills most of the screen;
 * the six family names are the navigation. Native scroll moves through the
 * families (no hijack – the page simply holds still while you browse), and a
 * click on a name scrolls to it. Each change wipes the next composition in.
 * Mobile: a plain sequence – each family with its composition and its ranges.
 * All family and range links are server-rendered.
 */
export function Catalogue() {
  return (
    <section id="catalogue" aria-labelledby="catalogue-title" className="relative overflow-x-clip bg-brand-substrate">
      <h2 id="catalogue-title" className="sr-only">
        Everything a compliant site needs, in six product families
      </h2>
      <CatalogueStage />
      <CatalogueMobile />
    </section>
  );
}

function CatalogueStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const el = ref.current;
      if (!el || el.offsetParent === null) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(0.9999, Math.max(0, -r.top / span)) : 0;
      setActive(Math.floor(p * families.length));
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
  }, []);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / families.length) * span });
  };

  const f = families[active];

  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `calc(${families.length * STEP_VH}vh + 100vh)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col pb-10 pt-[7rem]">
        <div className="wrap grid min-h-0 flex-1 grid-cols-12 gap-10">
          {/* Navigation: the six families, and what the active one covers */}
          <div className="col-span-4 flex min-h-0 flex-col justify-center">
            <p aria-hidden="true" className="display text-[1.55rem] leading-tight tracking-[-0.02em]">
              Six product families
            </p>
            <ol className="mt-5 border-t border-brand-ink/15">
              {families.map((fam, i) => {
                const on = i === active;
                return (
                  <li key={fam.slug} className="border-b border-brand-ink/15">
                    <h3>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-current={on ? "true" : undefined}
                        className={`group flex w-full items-center gap-4 py-[0.7rem] text-left transition-colors duration-300 ease-house ${on ? "text-brand-ink" : "text-brand-graphite hover:text-brand-ink"}`}
                      >
                        <span
                          aria-hidden="true"
                          className="h-5 w-[3px] shrink-0 origin-center transition-[transform,background-color] duration-300 ease-house"
                          style={{ backgroundColor: on ? classColour[fam.signClass] : "transparent", transform: on ? "scaleY(1)" : "scaleY(0)" }}
                        />
                        <span className={`font-display text-[1.25rem] leading-tight tracking-[-0.02em] ${on ? "font-semibold" : "font-medium"}`}>{fam.name}</span>
                        <Arrow className={`ml-auto h-2.5 w-3.5 transition-[opacity,transform] duration-300 ease-house ${on ? "opacity-100" : "-translate-x-2 opacity-0"}`} />
                      </button>
                    </h3>
                  </li>
                );
              })}
            </ol>

            <div className="mt-7 grid">
              {families.map((fam, i) => {
                const on = i === active;
                return (
                  <div
                    key={fam.slug}
                    aria-hidden={!on}
                    {...inert(!on)}
                    className={`[grid-area:1/1] transition-[opacity,transform] duration-500 ease-house ${on ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
                  >
                    <p className="text-[1rem] leading-relaxed text-brand-ink">{fam.summary}</p>
                    <RangeSentence f={fam} className="mt-3 text-[0.92rem] leading-[1.65]" />
                    <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
                      <Link href={familyHref(fam)} className="group inline-flex items-center gap-2 font-semibold text-brand-ink">
                        All {inSentence(fam.name)}
                        <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
                      </Link>
                      <Link href={`/?family=${fam.slug}#quote`} className="font-semibold text-brand-primary underline-offset-4 hover:underline">
                        {fam.quoteLabel}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* The active family's products, given the room */}
          <div className="relative col-span-8 grid min-h-0 place-items-center" aria-label={`${f.name} products`}>
            {families.map((fam, i) => {
              const Comp = compositions[fam.slug as keyof typeof compositions];
              const on = i === active;
              return (
                <div
                  key={fam.slug}
                  aria-hidden={!on}
                  className={`[grid-area:1/1] w-full max-w-[min(100%,calc((100svh-11rem)*1.4))] transition-[clip-path,opacity] duration-700 ease-house ${
                    on ? "opacity-100 [clip-path:inset(-12%_-12%_-12%_-12%)]" : "pointer-events-none opacity-0 [clip-path:inset(-12%_112%_-12%_-12%)]"
                  }`}
                >
                  <Comp />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogueMobile() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="wrap pb-12 pt-24 lg:hidden">
      <Reveal character="precise">
        <p className="display max-w-[19ch] text-d-2 text-balance" aria-hidden="true">
          Everything a compliant site needs, in six product families.
        </p>
      </Reveal>
      <ol className="mt-10">
        {families.map((f, i) => {
          const Comp = compositions[f.slug as keyof typeof compositions];
          const isOpen = open === i;
          return (
            <li key={f.slug} className="border-t border-brand-ink/10 py-9 first:border-t-0">
              <p className="display text-[2.1rem] leading-[1.02] tracking-[-0.03em] sm:text-[2.5rem]">
                <Link href={familyHref(f)}>{f.name}</Link>
              </p>
              <p className="mt-2 text-[1rem] text-brand-graphite">{f.line}</p>
              <div className="mx-auto mt-6 w-full max-w-[26rem]">
                <Comp />
              </div>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`ranges-${f.slug}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-[0.98rem] font-semibold text-brand-primary"
              >
                {isOpen ? "Hide the ranges" : `See all ${f.categories.length} ranges`}
                <Arrow direction="down" className={`h-2.5 w-3 transition-transform duration-300 ease-house ${isOpen ? "-scale-y-100" : ""}`} />
              </button>
              <div id={`ranges-${f.slug}`} className={`grid transition-[grid-template-rows] duration-300 ease-house ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden" {...inert(!isOpen)}>
                  <RangeSentence f={f} className="pt-2" />
                  <Link href={`/?family=${f.slug}#quote`} className="mt-3 inline-flex items-center gap-2 pb-1 text-[0.95rem] font-semibold text-brand-ink">
                    {f.quoteLabel} <Arrow className="h-2.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
