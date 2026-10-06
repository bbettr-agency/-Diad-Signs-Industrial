import { Reveal } from "@/engine/motion";
import { site } from "@/config/site";
import { QuoteForm } from "./QuoteForm";

export function QuoteSection() {
  return (
    <section id="quote" aria-labelledby="quote-title" className="on-dark bg-brand-deep py-24 text-brand-bone md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal character="precise">
            <h2 id="quote-title" className="display text-d-2">
              Tell us what you need.
            </h2>
            <p className="mt-7 max-w-[38ch] text-[1.0625rem] leading-relaxed text-brand-fog">
              One enquiry can cover signs, PPE and site equipment together. Prefer to talk? Call{" "}
              <a href={`tel:${site.phone.tel}`} className="whitespace-nowrap text-brand-bone underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {site.phone.display}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.email}`} className="text-brand-bone underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {site.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
