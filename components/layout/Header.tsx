"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { site } from "@/config/site";
import { families, familyHref, categoryHref, inSentence } from "@/content/catalogue";
import { Arrow, ButtonLink, Logo, PhoneGlyph, WhatsAppGlyph, inert } from "@/components/ui";

const primaryNav = [
  { label: "Custom signs", href: "/products/custom-signs" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const scrolled = useScrollPast(THRESHOLD.header);
  const [panelOpen, setPanelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const panelId = useId();
  const menuId = useId();
  const barRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeAll = useCallback(() => {
    setPanelOpen(false);
    setMenuOpen(false);
  }, []);

  // Escape closes; focus returns to the trigger. Outside click closes the panel.
  useEffect(() => {
    if (!panelOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
        triggerRef.current?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (panelOpen && barRef.current && !barRef.current.contains(e.target as Node)) setPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [panelOpen, menuOpen, closeAll]);

  // Lock page scroll behind the mobile sheet.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const fam = families[active];

  // Night tone, driven by the photoluminescent section (see LightsOut).
  const [tone, setTone] = useState<"light" | "dark">("light");
  useEffect(() => {
    const onTone = (e: Event) => setTone((e as CustomEvent<"light" | "dark">).detail);
    window.addEventListener("diad:tone", onTone);
    return () => window.removeEventListener("diad:tone", onTone);
  }, []);
  const night = tone === "dark" && !panelOpen && !menuOpen;

  return (
    <>
      {/* Utility line – trade counter facts. Scrolls away; desktop only. */}
      <div className="hidden border-b border-brand-ink/10 lg:block">
        <div className="wrap flex h-9 items-center justify-between text-[0.82rem] text-brand-graphite">
          <p className="flex items-center gap-3">
            <span>
              Trade counter open Monday to Friday, 07:30 – 16:30 · {site.address.street}, {site.address.suburb}, {site.address.city}
            </span>
          </p>
          <p className="flex items-center gap-5">
            <a href={`tel:${site.phone.tel}`} className="hover:text-brand-ink">
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-brand-ink">
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <header
        data-tone={night ? "dark" : "light"}
        className={`group/hdr sticky top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ease-house ${
          night
            ? "on-dark bg-brand-night/90 text-brand-bone shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[6px]"
            : scrolled || panelOpen
              ? "bg-brand-substrate/95 text-brand-ink shadow-[0_1px_0_rgba(20,22,27,0.10)] backdrop-blur-[6px]"
              : "bg-brand-substrate text-brand-ink"
        }`}
      >
        <div ref={barRef}>
          <div className="wrap flex h-[4.25rem] items-center justify-between gap-6 lg:h-[4.75rem]">
            <Link href="/" className="shrink-0" aria-label="DIAD Signs – home" onClick={closeAll}>
              <span className="relative block">
                <Logo priority className="h-9 w-auto transition-opacity duration-500 group-data-[tone=dark]/hdr:opacity-0 lg:h-11" />
                <Logo reverse className="absolute inset-0 h-9 w-auto opacity-0 transition-opacity duration-500 group-data-[tone=dark]/hdr:opacity-100 lg:h-11" />
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Primary" className="hidden h-full items-center lg:flex">
              <ul className="flex h-full items-center gap-1">
                <li className="h-full">
                  <button
                    ref={triggerRef}
                    type="button"
                    aria-expanded={panelOpen}
                    aria-controls={panelId}
                    onClick={() => setPanelOpen((o) => !o)}
                    className={`group relative flex h-full items-center gap-2 px-4 text-[0.95rem] font-medium transition-colors ${
                      panelOpen ? "text-brand-primary" : "hover:text-brand-primary group-data-[tone=dark]/hdr:hover:text-sign-glow"
                    }`}
                  >
                    Products
                    <Arrow direction="down" className={`h-2 w-2.5 transition-transform duration-200 ease-house ${panelOpen ? "-scale-y-100" : ""}`} />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-[2px] origin-left bg-brand-primary transition-transform duration-300 ease-house ${
                        panelOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
                {primaryNav.map((item) => (
                  <li key={item.href} className="h-full">
                    <Link
                      href={item.href}
                      className="group relative flex h-full items-center px-4 text-[0.95rem] font-medium transition-colors hover:text-brand-primary group-data-[tone=dark]/hdr:hover:text-sign-glow"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-primary transition-transform duration-300 ease-house group-hover:scale-x-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${site.phone.tel}`}
                className="hidden items-center gap-2 px-3 text-[0.9rem] font-semibold text-brand-graphite transition-colors hover:text-brand-ink group-data-[tone=dark]/hdr:text-brand-fog xl:flex"
              >
                <PhoneGlyph className="h-3.5 w-3.5" />
                {site.phone.display}
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp DIAD on ${site.whatsapp.display}`}
                className="hidden h-11 w-11 items-center justify-center rounded-plate text-[#1DA851] ring-1 ring-inset ring-brand-ink/15 transition-colors hover:bg-brand-whatsapp hover:text-brand-ink hover:ring-transparent group-data-[tone=dark]/hdr:ring-white/20 sm:flex"
              >
                <WhatsAppGlyph className="h-5 w-5" />
              </a>
              <ButtonLink href="/#quote" className="hidden sm:inline-flex" onClick={closeAll}>
                Request a quote
              </ButtonLink>
              <button
                type="button"
                className="flex h-11 items-center gap-3 rounded-plate px-3 text-[0.9rem] font-semibold ring-1 ring-inset ring-brand-ink/15 group-data-[tone=dark]/hdr:ring-white/20 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls={menuId}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span>{menuOpen ? "Close" : "Menu"}</span>
                <span aria-hidden="true" className="relative block h-3 w-4">
                  <span className={`absolute left-0 top-0.5 h-[2px] w-4 bg-current transition-transform duration-300 ease-house ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
                  <span className={`absolute bottom-0.5 left-0 h-[2px] w-4 bg-current transition-transform duration-300 ease-house ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>

          {/* Products panel – the catalogue directory. Links stay in the DOM when closed. */}
          <div
            id={panelId}
            role="region"
            aria-label="Product families"
            {...inert(!panelOpen)}
            className={`absolute inset-x-0 top-full hidden border-t border-brand-ink/10 bg-brand-paper shadow-[0_30px_60px_-30px_rgba(20,22,27,0.35)] transition-[clip-path,opacity,visibility] duration-300 ease-house lg:block ${
              panelOpen ? "visible opacity-100 [clip-path:inset(0_0_0_0)]" : "invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
            }`}
          >
            <div className="wrap grid grid-cols-12 gap-8 py-10">
              <ol className="col-span-4 border-r border-brand-ink/10 pr-8">
                {families.map((f, i) => (
                  <li key={f.slug}>
                    <Link
                      href={familyHref(f)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={closeAll}
                      aria-current={i === active ? "true" : undefined}
                      className={`group flex items-center gap-4 border-b border-brand-ink/10 py-3.5 transition-colors ${
                        i === active ? "text-brand-ink" : "text-brand-graphite hover:text-brand-ink"
                      }`}
                    >
                      <span className="display flex-1 text-[1.3rem] leading-none tracking-[-0.02em]">{f.name}</span>
                      <Arrow className={`h-2.5 w-3.5 transition-all duration-200 ease-house ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="relative col-span-8">
                {families.map((f, i) => (
                  <div key={f.slug} hidden={i !== active} className="animate-none">
                    <div className="flex items-end justify-between gap-8">
                      <div>
                        <p className="display text-[2.1rem] leading-none tracking-[-0.03em]">{f.name}</p>
                        <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-brand-graphite">{f.summary}</p>
                      </div>
                    </div>
                    <ul className="mt-7 grid grid-cols-3 gap-x-8 border-t border-brand-ink/10 pt-5">
                      {f.categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={categoryHref(f, cat)}
                            onClick={closeAll}
                            className="group flex items-center gap-2 py-1.5 text-[0.92rem] text-brand-ink/80 transition-colors hover:text-brand-primary"
                          >
                                                        {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-6">
                      <ButtonLink href={familyHref(f)} variant="outline" onClick={closeAll}>
                        All {inSentence(f.name)}
                      </ButtonLink>
                      <Link href={`/?family=${f.slug}#quote`} onClick={closeAll} className="text-[0.92rem] font-semibold text-brand-primary underline-offset-4 hover:underline">
                        {f.quoteLabel}
                      </Link>
                    </div>
                  </div>
                ))}
                {fam && <span className="sr-only">Showing {fam.name}</span>}
              </div>
            </div>
          </div>
        </div>

      </header>
      {/* Mobile sheet – outside <header> so the header's backdrop-filter cannot re-anchor `fixed`. */}
      <div
        id={menuId}
        {...inert(!menuOpen)}
        className={`fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-brand-substrate transition-[clip-path,visibility] duration-[420ms] ease-house lg:hidden ${
          menuOpen ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <MobileMenu open={menuOpen} onNavigate={closeAll} />
      </div>
    </>
  );
}

function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-8 pt-4">
      <p className="text-[0.95rem] font-semibold text-brand-graphite">Products</p>
      <ol className="mt-2">
        {families.map((f, i) => {
          const isOpen = expanded === i;
          return (
            <li
              key={f.slug}
              className="border-b border-brand-ink/10 transition-[opacity,transform] duration-500 ease-house"
              style={{ transitionDelay: open ? `${80 + i * 35}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(10px)" }}
            >
              <div className="flex items-center">
                <Link href={familyHref(f)} onClick={onNavigate} className="flex flex-1 items-center gap-3 py-4">
                  <span className="display text-[1.45rem] leading-none tracking-[-0.02em]">{f.name}</span>
                </Link>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Hide" : "Show"} ${f.name} ranges`}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex h-11 w-11 items-center justify-center rounded-plate ring-1 ring-inset ring-brand-ink/10"
                >
                  <span className="relative block h-3 w-3" aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 bg-current" />
                    <span className={`absolute left-1/2 top-0 h-3 w-[2px] -translate-x-1/2 bg-current transition-transform duration-300 ease-house ${isOpen ? "scale-y-0" : ""}`} />
                  </span>
                </button>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-house ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <ul className="overflow-hidden" {...inert(!isOpen)}>
                  {f.categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link href={categoryHref(f, cat)} onClick={onNavigate} className="flex py-2 pl-1 text-[1rem] text-brand-graphite">
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                  <li className="h-4" />
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      <ul className="mt-6 grid grid-cols-2 gap-x-6">
        {primaryNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate} className="flex items-center justify-between border-b border-brand-ink/10 py-3.5 text-[1rem] font-semibold">
              {item.label}
              <Arrow className="h-2.5 w-3.5 text-brand-graphite" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <div className="grid grid-cols-2 gap-3">
          <ButtonLink href="/#quote" onClick={onNavigate}>
            Request a quote
          </ButtonLink>
          <ButtonLink href={site.whatsapp.href} variant="whatsapp" icon="whatsapp" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </ButtonLink>
        </div>
        <p className="mt-6 text-[0.9rem] leading-relaxed text-brand-graphite">
          {site.address.unit}, {site.address.street}
          <br />
          {site.address.suburb}, {site.address.city} {site.address.postalCode}
          <br />
          {site.hours.display} · <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
        </p>
      </div>
    </nav>
  );
}
