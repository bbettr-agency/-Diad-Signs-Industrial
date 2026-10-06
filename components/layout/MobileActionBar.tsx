"use client";

import { useEffect, useState } from "react";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { site } from "@/config/site";
import { ButtonLink, inert } from "@/components/ui";

/** Mobile-only: quote + WhatsApp within thumb reach once the hero is behind the visitor. */
export function MobileActionBar() {
  const past = useScrollPast(THRESHOLD.floatingCta);
  const [dark, setDark] = useState(false);
  const [atQuote, setAtQuote] = useState(false);

  // Step aside during the lights-out demonstration and over the quote form itself.
  useEffect(() => {
    const onTone = (e: Event) => setDark((e as CustomEvent<string>).detail === "dark");
    window.addEventListener("diad:tone", onTone);
    const quote = document.getElementById("quote");
    const io = quote ? new IntersectionObserver(([entry]) => setAtQuote(entry.isIntersecting), { rootMargin: "0px 0px -30% 0px" }) : null;
    if (quote && io) io.observe(quote);
    return () => {
      window.removeEventListener("diad:tone", onTone);
      io?.disconnect();
    };
  }, []);
  const visible = past && !dark && !atQuote;
  return (
    <div
      {...inert(!visible)}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-brand-ink/10 bg-brand-substrate/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-[6px] transition-[transform,opacity] duration-300 ease-house sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-3">
        <ButtonLink href={site.whatsapp.href} variant="whatsapp" icon="whatsapp" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </ButtonLink>
        <ButtonLink href="/#quote">Get a quote</ButtonLink>
      </div>
    </div>
  );
}
