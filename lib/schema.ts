import { site } from "@/config/site";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/indexing";

/**
 * JSON-LD builders – verified facts only. Nodes are linked by @id so every
 * page can emit one @graph without repeating the business.
 *
 * Type choice: "LocalBusiness" (re-evaluated 2026-10-06). Google asks for the
 * most specific subtype *possible*, but accuracy comes first. schema.org's
 * Store is "A retail good store" – true only of DIAD's trade counter, not of
 * its primary identity as a sign manufacturer/fabricator. None of the 35
 * LocalBusiness subtypes covers manufacturing, fabrication, sign-making or
 * industrial supply (HomeAndConstructionBusiness = trades, ProfessionalService =
 * advisory, WholesaleStore = retail). LocalBusiness – "a particular physical
 * business" – is the accurate choice. Revisit if schema.org adds a fitting type.
 *
 * Deliberately omitted (see docs/seo/SEO-FOUNDATION.md §10):
 *  - aggregateRating / review: Google treats ratings a business shows about
 *    itself as self-serving – ineligible on LocalBusiness/Organization – and
 *    forbids aggregating reviews from other sites (e.g. the GBP 5.0 / 42).
 *  - geo: coordinates not yet verified with the client (needs 5+ decimals).
 *  - areaServed: no verified service area beyond the Pretoria trade counter.
 *  - foundingDate, credentials, OfferCatalog/Product: no published pages or
 *    certificates to support them yet.
 */

export const ids = {
  business: `${SITE_ORIGIN}/#business`,
  website: `${SITE_ORIGIN}/#website`,
  logo: `${SITE_ORIGIN}/#logo`,
};

type Node = Record<string, unknown>;

export function businessNode(): Node {
  const a = site.address;
  return {
    "@type": "LocalBusiness",
    "@id": ids.business,
    name: "DIAD Signs & Industrial Suppliers",
    legalName: site.legalName,
    alternateName: ["DIAD Signs", "Diad Signs & Industrial Suppliers Pty Ltd"],
    description:
      "Sign manufacturer and industrial supplier in Waltloo, Pretoria: safety, construction, mining and road signs, custom signs and engraving, print, and PPE and site safety equipment from stock.",
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", "@id": ids.logo, url: absoluteUrl("/brand/mark-512.png"), width: 512, height: 512 },
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phone.tel,
    email: site.email,
    vatID: site.credentials.vat,
    identifier: { "@type": "PropertyValue", propertyID: "CIPC company registration number", value: site.credentials.registration },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${a.unit}, ${a.street}`,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.schema.days,
        opens: site.hours.schema.opens,
        closes: site.hours.schema.closes,
      },
    ],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", telephone: site.phone.tel, email: site.email, areaServed: "ZA", availableLanguage: ["en"] },
    ],
    hasMap: site.mapsHref,
    sameAs: [site.googleEntity],
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: "DIAD Signs & Industrial Suppliers",
    inLanguage: site.locale,
    publisher: { "@id": ids.business },
  };
}

export function webPageNode({ path, name, description }: { path: string; name: string; description: string }): Node {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: site.locale,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.business },
  };
}

/** For future internal pages. Items are ordered from the homepage down. */
export function breadcrumbNode(path: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
