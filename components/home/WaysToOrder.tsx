import Image from "next/image";
import { Reveal } from "@/engine/motion";
import { site } from "@/config/site";
import { Arrow, ButtonLink, WhatsAppGlyph } from "@/components/ui";

/**
 * How to buy. Deliberately plain: an address, a phone number, a QR code and
 * the four things that happen when you ask for a quote.
 */
export function WaysToOrder() {
  const a = site.address;
  return (
    <section id="order" aria-labelledby="order-title" className="bg-brand-substrate py-20 md:py-24">
      <div className="wrap">
        <Reveal character="precise">
          <h2 id="order-title" className="display max-w-[22ch] text-d-3">
            Walk in, WhatsApp, or send us the list.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h3 className="text-[1.05rem] font-semibold">The trade counter</h3>
            <address className="display mt-4 text-d-4 not-italic leading-[1.2]">
              {a.unit}
              <br />
              {a.street}, {a.suburb}
              <br />
              {a.city} {a.postalCode}
            </address>
            <p className="mt-5 text-[1rem] leading-relaxed text-brand-graphite">
              Open Monday to Friday, 07:30 – 16:30.
              <br />
              Closed weekends and public holidays.
            </p>
            <p className="mt-4 max-w-[38ch] text-[1rem] leading-relaxed text-brand-graphite">Safety signs, PPE and construction products from stock, ready to collect.</p>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary">
              Get directions <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[1.05rem] font-semibold">WhatsApp</h3>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="display mt-4 inline-flex items-center gap-3 text-d-4 hover:text-brand-primary"
            >
              <WhatsAppGlyph className="h-6 w-6 text-[#1DA851]" />
              {site.whatsapp.display}
            </a>
            <p className="mt-5 max-w-[30ch] text-[1rem] leading-relaxed text-brand-graphite">Send a photo of the sign you need, or your list, and we&apos;ll reply with a quote.</p>
            <figure className="mt-7 hidden md:block">
              <Image src="/brand/whatsapp-qr.png" alt="QR code to start a WhatsApp chat with DIAD" width={400} height={400} className="h-auto w-32 bg-white p-2.5" />
              <figcaption className="mt-2 text-[0.88rem] text-brand-graphite">Scan with your phone to start a chat.</figcaption>
            </figure>
            <ButtonLink href={site.whatsapp.href} variant="whatsapp" icon="whatsapp" className="mt-6 md:hidden" target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </ButtonLink>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[1.05rem] font-semibold">A written quote</h3>
            <p className="mt-4 text-[1.0625rem] leading-relaxed">
              Send your list, a drawing or print-ready artwork. We quote in writing, and the quote stays valid for 30 days. Nothing goes to
              production until you&apos;ve approved the proof. Then collect from the counter, or we arrange delivery.
            </p>
            <ButtonLink href="#quote" className="mt-8">
              Request a quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
