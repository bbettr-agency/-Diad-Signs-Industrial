import Link from "next/link";
import type { ComponentType } from "react";
import { Reveal } from "@/engine/motion";
import { industries } from "@/content/home";
import { EngravedLabel, ExitPlateDay, FirstAidPlate, MandatoryPlate, WarningPlate } from "@/components/signs";
import { ButterflyFlag, Cone, FireExtinguisherSign, ScholarPatrolSign, TapeRoll, Vest, WetFloorSign } from "@/components/compositions";

type Item = { C: ComponentType<{ className?: string }>; w: number; label: string };

const HazardTape = ({ className }: { className?: string }) => <TapeRoll className={className} colours={["#14161B", "#F3A60E"]} />;

/**
 * The seven sectors named in DIAD's About Us, grouped by environment. Every
 * object stands for a range listed against those sectors in content/home.ts.
 * Shares are % of the landscape; object widths are % of their environment.
 */
const environments: { name: string; slugs: string[]; share: number; items: Item[] }[] = [
  {
    name: "Heavy industry",
    slugs: ["mining", "construction"],
    share: 30,
    items: [
      { C: MandatoryPlate, w: 29, label: "Mining signs" },
      { C: Vest, w: 36, label: "Reflective vests" },
      { C: Cone, w: 24, label: "Cones" },
    ],
  },
  {
    name: "Public & institutional",
    slugs: ["government", "education", "healthcare"],
    share: 36,
    items: [
      { C: ScholarPatrolSign, w: 11, label: "Scholar-patrol signs" },
      { C: FireExtinguisherSign, w: 19, label: "Fire equipment signs" },
      { C: ExitPlateDay, w: 40, label: "Exit signs" },
      { C: FirstAidPlate, w: 19, label: "First aid signs" },
    ],
  },
  {
    name: "Commercial",
    slugs: ["retail"],
    share: 15,
    items: [
      { C: ButterflyFlag, w: 34, label: "Flags" },
      { C: WetFloorSign, w: 44, label: "Wet floor signs" },
    ],
  },
  {
    name: "Infrastructure",
    slugs: ["telecommunications"],
    share: 19,
    items: [
      { C: WarningPlate, w: 31, label: "Warning signs" },
      { C: EngravedLabel, w: 44, label: "Engraved labels" },
      { C: HazardTape, w: 19, label: "Barrier tape" },
    ],
  },
];

const bySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));

function rangesFor(slugs: string[]) {
  // A few ranges from each sector in the environment, so no sector is dropped.
  const per = Math.max(2, Math.ceil(4 / slugs.length));
  const all = slugs.flatMap((s) => (bySlug[s]?.ranges ?? []).slice(0, per));
  const unique = Array.from(new Set(all)).slice(0, 5);
  return unique.map((r, i) => (i === 0 ? r : r.charAt(0).toLowerCase() + r.slice(1))).join(", ");
}

/**
 * Where DIAD's products are used – one landscape, read by scrolling. Four
 * environments stand side by side on a single floor line; nothing to click
 * through. On phones the same landscape scrolls sideways.
 */
export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="overflow-x-clip bg-brand-paper py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal character="precise" className="lg:col-span-6">
            <h2 id="industries-title" className="display text-d-2">
              From mine sites to classrooms.
            </h2>
          </Reveal>
          <p className="max-w-[44ch] text-[1.0625rem] leading-relaxed text-brand-graphite lg:col-span-5 lg:col-start-8">
            We supply businesses, corporates and government across these sectors – and the same range works across all of them.
          </p>
        </div>
      </div>

      {/* The landscape */}
      <div className="no-scrollbar mt-12 overflow-x-auto overscroll-x-contain lg:mt-20 lg:overflow-visible" tabIndex={0} aria-label="Sectors DIAD supplies">
        <div className="mx-auto w-[1500px] px-5 sm:px-6 lg:w-auto lg:max-w-7xl lg:px-8">
          <div className="flex">
            {environments.map((env, e) => (
              <div key={env.name} className="relative flex flex-col" style={{ width: `${env.share}%` }}>
                <div className="pr-6">
                  <h3 className="display text-[1.45rem] leading-tight tracking-[-0.02em] lg:text-[1.6rem]">{env.name}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-brand-graphite">
                    {env.slugs.map((s, i) => (
                      <span key={s}>
                        {i > 0 && <span aria-hidden="true"> · </span>}
                        <Link href={`/industries/${s}`} className="hover:text-brand-primary hover:underline">
                          {bySlug[s].name}
                        </Link>
                      </span>
                    ))}
                  </p>
                </div>

                {/* objects standing on the shared floor */}
                <ul className="mt-6 flex h-[12rem] items-end gap-[3%] pr-[3%] lg:h-[13.5rem]">
                  {env.items.map(({ C, w, label }, k) => (
                    <li key={label} style={{ width: `${w}%` }} className="shrink-0">
                      <Reveal
                        preset="fadeUpItem"
                        character="precise"
                        index={k}
                        delay={e * 0.12}
                        className="[filter:drop-shadow(0_14px_16px_rgba(20,22,27,0.16))_drop-shadow(0_2px_2px_rgba(20,22,27,0.10))]"
                      >
                        <C className="block h-auto w-full" />
                      </Reveal>
                    </li>
                  ))}
                </ul>

                {/* floor + what this environment uses */}
                <div className="border-t-2 border-brand-ink pt-4 pr-6">
                  <p className="max-w-[34ch] text-[0.92rem] leading-relaxed text-brand-graphite">{rangesFor(env.slugs)}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="wrap mt-6 text-[0.92rem] text-brand-graphite lg:hidden" aria-hidden="true">
        Swipe along the line →
      </p>
    </section>
  );
}
