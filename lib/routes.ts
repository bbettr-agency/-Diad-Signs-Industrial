import { families, familyHref, categoryHref, inSentence, type Family, type Category } from "@/content/catalogue";
import { industries } from "@/content/home";

/**
 * Every internal destination linked from the homepage demo. Each resolves to
 * a designed, noindex "in production" page; anything else is a real 404.
 */
export interface PlannedRoute {
  path: string;
  title: string;
  summary: string;
  crumbs: { label: string; href?: string }[];
  family?: Family;
  category?: Category;
}

const statics: PlannedRoute[] = [
  {
    path: "/products",
    title: "Product catalogue",
    summary: "All six DIAD product families – safety signs, road & traffic, site safety, PPE, custom signs and print – in one catalogue.",
    crumbs: [{ label: "Products" }],
  },
  {
    path: "/industries",
    title: "Industries",
    summary: "Ranges grouped for mining, construction, healthcare, government, education, retail and telecommunications.",
    crumbs: [{ label: "Industries" }],
  },
  {
    path: "/about",
    title: "About DIAD",
    summary: "A Pretoria sign manufacturer and industrial supplier: SABS-approved photoluminescent sign manufacturer, B-BBEE Level 1, CSD registered.",
    crumbs: [{ label: "About" }],
  },
  {
    path: "/contact",
    title: "Contact & trade counter",
    summary: "Unit 08, Tomzeil, 275 Maggs Street, Waltloo, Pretoria. Monday to Friday, 07:30 – 16:30.",
    crumbs: [{ label: "Contact" }],
  },
  {
    path: "/resources/artwork-specifications",
    title: "Artwork specifications",
    summary: "How to supply print-ready artwork: EPS or PDF with fonts converted to outlines, proofing and colour matching.",
    crumbs: [{ label: "Resources" }, { label: "Artwork specifications" }],
  },
  {
    path: "/legal/terms-of-use",
    title: "Website terms of use",
    summary: "The terms governing use of this website.",
    crumbs: [{ label: "Legal" }, { label: "Terms of use" }],
  },
  {
    path: "/legal/privacy",
    title: "Privacy statement",
    summary: "How DIAD processes personal information under the Protection of Personal Information Act.",
    crumbs: [{ label: "Legal" }, { label: "Privacy statement" }],
  },
  {
    path: "/legal/terms-of-trade",
    title: "Terms of trade",
    summary: "Quotes, orders, proofs, delivery and payment terms for DIAD goods and services.",
    crumbs: [{ label: "Legal" }, { label: "Terms of trade" }],
  },
];

export const plannedRoutes: PlannedRoute[] = [
  ...statics,
  ...families.flatMap((f) => [
    {
      path: familyHref(f),
      title: f.name,
      summary: f.summary,
      crumbs: [{ label: "Products", href: "/products" }, { label: f.name }],
      family: f,
    },
    ...f.categories.map((c) => ({
      path: categoryHref(f, c),
      title: c.name,
      summary: `Part of ${inSentence(f.name)}. ${f.summary}`,
      crumbs: [{ label: "Products", href: "/products" }, { label: f.name, href: familyHref(f) }, { label: c.name }],
      family: f,
      category: c,
    })),
  ]),
  ...industries.map((ind) => ({
    path: `/industries/${ind.slug}`,
    title: `${ind.name}`,
    summary: `Signage, PPE and site equipment for ${ind.name.toLowerCase()}: ${ind.ranges.join(", ").toLowerCase()}.`,
    crumbs: [{ label: "Industries", href: "/industries" }, { label: ind.name }],
  })),
];

export const findRoute = (path: string) => plannedRoutes.find((r) => r.path === path);
