import Link from "next/link";
import { Reveal, Stagger } from "@/engine/motion";
import { site } from "@/config/site";
import { Arrow } from "@/components/ui";

const supporting = [
  { title: "B-BBEE Level 1", detail: "135% procurement recognition" },
  { title: "CSD registered", detail: "Central Supplier Database vendor" },
  { title: "34 years", detail: "Combined team experience in signage and PPE" },
];

/**
 * Proof, straight after the hero. The SABS approval is DIAD's defining
 * credential, so it leads; the procurement facts follow, each readable at a
 * glance. "34 years" is the team's combined experience – never company age.
 */
export function Credentials() {
  const c = site.credentials;
  return (
    <section aria-labelledby="credentials-title" className="bg-brand-metal">
      <div className="wrap py-16 md:py-20">
        <h2 id="credentials-title" className="sr-only">
          Accreditation and supplier registration
        </h2>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal character="precise" className="lg:col-span-5">
            <p className="display text-[clamp(2.6rem,1.8rem+3vw,4.4rem)] leading-[0.98] tracking-[-0.026em]">SABS approved</p>
            <p className="mt-4 max-w-[30ch] text-[1.2rem] leading-snug text-brand-ink">
              Manufacturer of photoluminescent signs conforming to <span className="whitespace-nowrap font-semibold">SANS 1186-5</span>.
            </p>
          </Reveal>

          <Stagger as="ul" className="lg:col-span-7 lg:border-l lg:border-brand-ink/15 lg:pl-10">
            {supporting.map((s) => (
              <Reveal
                key={s.title}
                as="li"
                preset="fadeIn"
                character="precise"
                className="flex flex-col gap-1 border-t border-brand-ink/15 py-5 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 lg:py-6"
              >
                <span className="display whitespace-nowrap text-[clamp(1.6rem,1.3rem+1vw,2.15rem)] leading-tight tracking-[-0.025em]">{s.title}</span>
                <span className="text-[1rem] text-brand-graphite sm:text-right">{s.detail}</span>
              </Reveal>
            ))}
          </Stagger>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-ink/15 pt-6 text-[0.95rem] text-brand-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>
            Diad Signs and Industrial Suppliers (Pty) Ltd · Registration {c.registration} · VAT {c.vat}
          </p>
          <Link href="/?intent=documents#quote" className="group inline-flex items-center gap-2 font-semibold text-brand-primary">
            Request our supplier documents
            <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
