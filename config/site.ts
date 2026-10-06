/**
 * NAP + business facts – the single source of truth for every page, the
 * structured data and the footer. Every value traces to a client document or
 * to the Google Business Profile (checked 2026-10-01 and 2026-10-06).
 * Open discrepancies: docs/seo/SEO-FOUNDATION.md §18 (client confirmation).
 *
 * Canonical origin and indexation are NOT here – they are deployment config:
 * see config/indexing.js and lib/indexing.ts.
 */

export const site = {
  name: "DIAD Signs",
  legalName: "Diad Signs and Industrial Suppliers (Pty) Ltd",
  shortDescription: "Sign manufacturer and industrial supplier, Waltloo, Pretoria",
  /** Display domain only. Canonical URLs come from lib/indexing.ts (SITE_ORIGIN). */
  domain: "diadsigns.co.za",
  locale: "en-ZA",

  phone: { display: "012 803 0980", tel: "+27128030980" },
  whatsapp: {
    display: "068 334 6476",
    href: "https://wa.me/27683346476",
    /** The client's own QR resolves to their WhatsApp Business short link. */
    qrHref: "https://wa.me/message/PF34W3D3VSEYJ1",
  },
  email: "sales@diadsigns.co.za",

  /**
   * Address as shown on the Google Business Profile (2026-10-01).
   * Onboarding form says "Unit 7 and 8": still to be confirmed by the client.
   */
  address: {
    unit: "Unit 08, Tomzeil",
    street: "275 Maggs Street",
    suburb: "Waltloo",
    city: "Pretoria",
    region: "Gauteng",
    postalCode: "0184",
    country: "ZA",
  },
  hours: {
    display: "Mon–Fri 07:30–16:30",
    rows: [
      { days: "Monday – Friday", time: "07:30 – 16:30" },
      { days: "Saturday, Sunday & public holidays", time: "Closed" },
    ],
    schema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "16:30" },
  },

  /** Share link supplied in onboarding (resolves to Knowledge Graph entity /g/11dx9g2_jg). */
  googleBusinessProfile: "https://share.google/pMMxoqcS0Yp9DwXuR",
  /** Stable Google entity URL for structured data sameAs. GBP primary category: "Sign shop". */
  googleEntity: "https://www.google.com/search?kgmid=/g/11dx9g2_jg",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Diad+Signs+%26+Industrial+Suppliers%2C+275+Maggs+Street%2C+Waltloo%2C+Pretoria",

  /** Google Business Profile aggregate, supplied by Bbettr 2026-10-01. Review text is NOT held. */
  rating: { value: 5.0, count: 42, asOf: "2026-10-01" },

  credentials: {
    sabs: "SABS-approved manufacturer of photoluminescent signs conforming to SANS 1186-5",
    bbbee: "B-BBEE Level 1",
    bbbeeRecognition: "135% procurement recognition",
    csd: "Registered vendor on the Central Supplier Database (CSD)",
    registration: "2016/493136/07",
    vat: "4750277347",
    /** Collective team experience – never present as company age (registered 2016). */
    experience: "Over 34 years' combined experience in signage and PPE",
  },
} as const;

export type Site = typeof site;
