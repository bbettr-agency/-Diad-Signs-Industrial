import Link from "next/link";
import { Reveal, heroStack } from "@/engine/motion";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui";
import { EngravedLabel, ExitPlateDay, MandatoryPlate, ProhibitionPlate, ScaffoldTag, StopSign, WarningPlate } from "@/components/signs";

const hero = heroStack({ character: "precise" });

/**
 * The Sign Wall: product-true plates hung at their own sizes, the way they
 * stand on DIAD's stock wall. Each plate links into its family.
 */
const wall = [
  { key: "exit", Art: ExitPlateDay, href: "/products/safety-signs/photoluminescent-signs", label: "Photoluminescent exit signs", box: "left-0 top-0 w-[66%]" },
  { key: "tag", Art: ScaffoldTag, href: "/products/safety-signs/scaffold-tags", label: "Scaffold tags", box: "left-[73%] top-[2%] w-[25%] origin-top rotate-[3deg]" },
  { key: "warn", Art: WarningPlate, href: "/products/safety-signs/symbolic-safety-signs", label: "Warning signs", box: "left-0 top-[39%] w-[20%]" },
  { key: "mand", Art: MandatoryPlate, href: "/products/safety-signs/symbolic-safety-signs", label: "Mandatory signs", box: "left-[23%] top-[39%] w-[20%]" },
  { key: "proh", Art: ProhibitionPlate, href: "/products/safety-signs/no-smoking-signs", label: "Prohibition signs", box: "left-[46%] top-[39%] w-[20%]" },
  { key: "stop", Art: StopSign, href: "/products/road-and-traffic/road-signs", label: "Road and traffic signs", box: "left-[74%] top-[60%] w-[23%]" },
  { key: "label", Art: EngravedLabel, href: "/products/custom-signs/engraved-signs-and-labels", label: "Engraved labels", box: "left-[6%] top-[76%] w-[60%]" },
] as const;

const plateShadow =
  "[filter:drop-shadow(0_16px_20px_rgba(20,22,27,0.17))_drop-shadow(0_2px_2px_rgba(20,22,27,0.10))] group-hover:[filter:drop-shadow(0_24px_26px_rgba(20,22,27,0.22))_drop-shadow(0_3px_3px_rgba(20,22,27,0.12))]";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="wrap grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6">
          <h1 id="hero-title" {...hero.lcp} className="display text-d-1 text-balance">
            Safety signs, PPE and custom signage – made and stocked in Pretoria.
          </h1>

          <Reveal {...hero.step(1)}>
            <p className="mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-brand-graphite sm:text-[1.125rem]">
              We manufacture safety, construction, mining and road signs in Waltloo, and supply the PPE and site equipment that goes with
              them – from stock at our trade counter, or made to your specification.
            </p>
          </Reveal>

          <Reveal {...hero.step(2)}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#quote" size="lg">
                Request a quote
              </ButtonLink>
              <ButtonLink href={site.whatsapp.href} variant="whatsapp" icon="whatsapp" size="lg" target="_blank" rel="noopener noreferrer">
                WhatsApp {site.whatsapp.display}
              </ButtonLink>
            </div>
            <p className="mt-6 text-[0.95rem] text-brand-graphite">
              <span aria-hidden="true" className="mr-2 tracking-[0.12em] text-sign-yellow">
                ★★★★★
              </span>
              <a
                href={site.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-ink/20 underline-offset-4 hover:text-brand-ink hover:decoration-brand-ink"
              >
                {site.rating.value.toFixed(1)} from {site.rating.count} Google reviews
              </a>
            </p>
          </Reveal>
        </div>

        {/* Desktop wall */}
        <div className="relative hidden lg:col-span-6 lg:block">
          <ul className="relative ml-auto aspect-[100/94] w-full max-w-[620px]">
            {wall.map(({ key, Art, href, label, box }, i) => (
              <li key={key} className={`absolute ${box}`}>
                <Reveal eager preset="wipe" character="precise" index={i} delay={0.2}>
                  <Link href={href} aria-label={label} className="group block outline-offset-4">
                    <span className={`block transition-[transform,filter] duration-200 ease-house group-hover:-translate-y-1 ${plateShadow}`}>
                      <Art className="block h-auto w-full" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile / tablet: one wide plate over a row of three */}
        <ul className="grid grid-cols-3 gap-3 sm:gap-5 lg:hidden">
          <li className="col-span-3">
            <Reveal eager preset="wipe" character="precise" delay={0.25}>
              <Link href={wall[0].href} aria-label={wall[0].label} className="block [filter:drop-shadow(0_12px_14px_rgba(20,22,27,0.16))]">
                <ExitPlateDay className="block h-auto w-full" />
              </Link>
            </Reveal>
          </li>
          {[wall[2], wall[3], wall[4]].map(({ key, Art, href, label }, i) => (
            <li key={key}>
              <Reveal eager preset="wipe" character="precise" index={i + 1} delay={0.25}>
                <Link href={href} aria-label={label} className="block [filter:drop-shadow(0_10px_12px_rgba(20,22,27,0.16))]">
                  <Art className="block h-auto w-full" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
