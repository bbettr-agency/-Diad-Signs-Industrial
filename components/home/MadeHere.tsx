import Link from "next/link";
import { Reveal } from "@/engine/motion";
import { Workshop } from "./Workshop";
import { Arrow, ButtonLink } from "@/components/ui";

export function MadeHere() {
  return (
    <section id="made-here" aria-labelledby="made-title" className="overflow-x-clip bg-brand-metal pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal character="precise" className="lg:col-span-8">
            <h2 id="made-title" className="display text-[clamp(2.75rem,1.6rem+4.6vw,5.5rem)] leading-[0.96] tracking-[-0.026em]">
              Not on the shelf?
              <br />
              We make it.
            </h2>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-brand-graphite">
              Bring us an idea, a drawing or finished artwork. Custom-made signs are part of our daily production – we take them from file
              to fixed sign.
            </p>
            <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7 lg:flex-col lg:items-start lg:gap-4">
              <ButtonLink href="/?family=custom-signs#quote">Quote a custom sign</ButtonLink>
              <Link href="/resources/artwork-specifications" className="group inline-flex items-center gap-2 font-semibold text-brand-primary">
                How to supply artwork
                <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* The workshop: one sign, made in front of you */}
        <div className="mt-16 lg:mt-24">
          <Workshop />
        </div>
      </div>
    </section>
  );
}
