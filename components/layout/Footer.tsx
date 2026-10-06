import Link from "next/link";
import { site } from "@/config/site";
import { families, familyHref, categoryHref } from "@/content/catalogue";
import { Logo } from "@/components/ui";

const legal = [
  { label: "Terms of use", href: "/legal/terms-of-use" },
  { label: "Privacy statement", href: "/legal/privacy" },
  { label: "Terms of trade", href: "/legal/terms-of-trade" },
  { label: "Artwork specifications", href: "/resources/artwork-specifications" },
];

export function Footer() {
  const a = site.address;
  return (
    <footer className="bg-brand-paper pb-24 sm:pb-0">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Logo className="h-12 w-auto" />
          <address className="mt-8 text-[0.98rem] not-italic leading-relaxed">
            {a.unit}, {a.street}
            <br />
            {a.suburb}, {a.city} {a.postalCode}
            <br />
            <span className="text-brand-graphite">Monday to Friday, 07:30 – 16:30</span>
          </address>
          <p className="mt-5 text-[0.98rem] leading-relaxed">
            <a className="hover:text-brand-primary" href={`tel:${site.phone.tel}`}>
              {site.phone.display}
            </a>
            <br />
            <a className="hover:text-brand-primary" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.whatsapp.display}
            </a>
            <br />
            <a className="hover:text-brand-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <nav aria-label="Product families" className="lg:col-span-8">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-y-10">
            {families.map((f) => (
              <li key={f.slug}>
                <Link href={familyHref(f)} className="text-[1rem] font-semibold hover:text-brand-primary">
                  {f.name}
                </Link>
                <ul className="mt-3 hidden space-y-1.5 sm:block">
                  {f.categories
                    .filter((c) => c.featured)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link href={categoryHref(f, c)} className="text-[0.92rem] text-brand-graphite hover:text-brand-primary">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="wrap flex flex-col gap-4 py-7 text-[0.85rem] text-brand-graphite lg:flex-row lg:items-start lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed lg:text-right">
            © {new Date().getFullYear()} {site.legalName}
            <br />
            Registration {site.credentials.registration} · VAT {site.credentials.vat} · <span className="whitespace-nowrap">{site.credentials.bbbee}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
