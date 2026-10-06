/**
 * The DIAD catalogue taxonomy: Family → Category → (Product, later).
 *
 * Source: About Us, What We Do, Website Keywords and the onboarding form,
 * consolidated and de-duplicated (docs/PHASE-A-B-PROPOSAL.md §A5).
 *
 * This file is the single source for the homepage, navigation, footer,
 * coming-soon routes and sitemap. It is shaped to migrate into a CMS/database:
 * every node has a stable `id` (`family` or `family/category`) that a future
 * multi-item quote list can reference without changing URLs or data shape.
 */

export type SignClass = "warning" | "mandatory" | "prohibition" | "safe" | "neutral";

export type BuildStatus = "planned" | "live";

export interface Category {
  slug: string;
  name: string;
  status: BuildStatus;
  /** Promoted categories appear in compact listings (footer, mobile). */
  featured?: boolean;
}

export interface Family {
  slug: string;
  code: string;
  name: string;
  /** One line, used in navigation. */
  line: string;
  /** Two sentences, used on the homepage. Factual – no claims beyond the source documents. */
  summary: string;
  signClass: SignClass;
  quoteLabel: string;
  status: BuildStatus;
  categories: Category[];
}

const c = (name: string, slug: string, featured = false): Category => ({
  name,
  slug,
  status: "planned",
  ...(featured ? { featured } : {}),
});

export const families: Family[] = [
  {
    slug: "safety-signs",
    code: "01",
    name: "Safety signs",
    line: "Symbolic, fire, exit and photoluminescent signs",
    summary:
      "Prohibition, mandatory, warning and safe-condition signs for workplaces, sites and public buildings – including photoluminescent signs made to SANS 1186-5.",
    signClass: "warning",
    quoteLabel: "Quote safety signs",
    status: "planned",
    categories: [
      c("Symbolic safety signs", "symbolic-safety-signs", true),
      c("Fire equipment & emergency exit", "fire-and-exit-signs", true),
      c("Photoluminescent signs", "photoluminescent-signs", true),
      c("First aid signs", "first-aid-signs"),
      c("No smoking signs", "no-smoking-signs"),
      c("Security signs", "security-signs"),
      c("Scaffold tags", "scaffold-tags", true),
      c("Lockout tags", "lockout-tags"),
      c("Wet floor & free-standing signs", "wet-floor-signs"),
      c("Posters & charts", "posters-and-charts"),
      c("Message boards", "message-boards"),
    ],
  },
  {
    slug: "road-and-traffic",
    code: "02",
    name: "Road & traffic",
    line: "Road signs, chevrons, delineators and markers",
    summary:
      "Road and traffic signs with their posts and fittings, school and scholar-patrol signs, chevrons, delineators, hazard markers and reflective tape.",
    signClass: "prohibition",
    quoteLabel: "Quote road signs",
    status: "planned",
    categories: [
      c("Road & traffic signs", "road-signs", true),
      c("Sign posts & accessories", "sign-posts-and-accessories"),
      c("School & scholar-patrol signs", "school-signs", true),
      c("Chevrons", "chevrons", true),
      c("Delineators", "delineators"),
      c("Hazard markers", "hazard-markers"),
      c("Reflective tape", "reflective-tape"),
      c("Revolving amber lights", "revolving-amber-lights"),
    ],
  },
  {
    slug: "site-safety-and-barriers",
    code: "03",
    name: "Site safety & barriers",
    line: "Cones, barriers, tape, netting and site equipment",
    summary:
      "Everything that marks out a site or a hazard: road cones, water barriers, barrier and demarcation tape, netting, safety chain and anti-slip tape.",
    signClass: "prohibition",
    quoteLabel: "Quote site equipment",
    status: "planned",
    categories: [
      c("Road & traffic cones", "road-cones", true),
      c("Water barriers", "water-barriers", true),
      c("Barrier & demarcation tape", "barrier-tape", true),
      c("Barrier netting", "barrier-netting", true),
      c("Safety chain", "safety-chain"),
      c("Hazard tape", "hazard-tape"),
      c("Anti-slip tape", "anti-slip-tape"),
      c("Emergency horns", "emergency-horns"),
      c("Megaphones", "megaphones"),
    ],
  },
  {
    slug: "ppe-and-workwear",
    code: "04",
    name: "PPE & workwear",
    line: "Gloves, hard hats, hi-vis, overalls and footwear",
    summary:
      "Personal protective equipment from stock at the trade counter: head, hand, eye and respiratory protection, hi-vis, overalls and safety footwear.",
    signClass: "mandatory",
    quoteLabel: "Quote a PPE order",
    status: "planned",
    categories: [
      c("Gloves", "gloves", true),
      c("Hard hats", "hard-hats", true),
      c("Dust masks", "dust-masks"),
      c("Goggles & eye protection", "goggles"),
      c("Reflective vests & bibs", "reflective-vests", true),
      c("Overalls", "overalls", true),
      c("Aprons", "aprons"),
      c("Safety boots & shoes", "safety-footwear"),
      c("Reflective vest printing", "reflective-vest-printing"),
    ],
  },
  {
    slug: "custom-signs",
    code: "05",
    name: "Custom signs & engraving",
    line: "Made to order in ABS, Chromadek, ACM and aluminium",
    summary:
      "Signs made to your specification in our Waltloo workshop – cut, printed, screen-printed or laser-engraved, on the substrate the job calls for.",
    signClass: "safe",
    quoteLabel: "Quote a custom sign",
    status: "planned",
    categories: [
      c("ABS plastic signs", "abs-signs", true),
      c("Chromadek signs", "chromadek-signs", true),
      c("Correx boards", "correx-boards"),
      c("ACM / Dibond signs", "acm-dibond-signs"),
      c("Aluminium signs & frames", "aluminium-signs"),
      c("Magnetic signs", "magnetic-signs"),
      c("Engraved signs & labels", "engraved-signs-and-labels", true),
      c("Screen-printed signs", "screen-printed-signs"),
      c("3D signs & light boxes", "3d-signs-and-light-boxes"),
      c("Construction site boards", "construction-site-boards", true),
      c("Mining signs", "mining-signs"),
      c("Factory & warehouse signs", "factory-and-warehouse-signs"),
      c("Office & facility signs", "office-and-facility-signs"),
    ],
  },
  {
    slug: "print-display-and-branding",
    code: "06",
    name: "Print, display & branding",
    line: "Wide-format print, banners, flags and vehicle branding",
    summary:
      "Large-format digital and screen printing, banners and flags, decals, floor graphics, point-of-sale displays and vehicle branding.",
    signClass: "neutral",
    quoteLabel: "Quote a print job",
    status: "planned",
    categories: [
      c("Wide-format digital printing", "wide-format-printing", true),
      c("Screen printing", "screen-printing"),
      c("Banners", "banners", true),
      c("Flags, incl. butterfly flags", "flags"),
      c("Posters", "posters"),
      c("Window & vinyl decals", "vinyl-decals", true),
      c("Floor graphics", "floor-graphics"),
      c("Printed wallpaper", "printed-wallpaper"),
      c("Rigid & textured substrate prints", "rigid-substrate-prints"),
      c("Point-of-sale & display systems", "display-systems"),
      c("Vehicle branding", "vehicle-branding", true),
      c("Shipping & truck signs", "truck-signs"),
      c("Corporate promotional items", "promotional-items"),
    ],
  },
];

export const familyHref = (f: Pick<Family, "slug">) => `/products/${f.slug}`;
export const categoryHref = (f: Pick<Family, "slug">, cat: Pick<Category, "slug">) =>
  `/products/${f.slug}/${cat.slug}`;

/** Stable ids for a future quote list – never derived from display names. */
export const nodeId = (f: Pick<Family, "slug">, cat?: Pick<Category, "slug">) =>
  cat ? `${f.slug}/${cat.slug}` : f.slug;

export const getFamily = (slug: string) => families.find((f) => f.slug === slug);

/** Lower-case a family name for mid-sentence use, keeping acronyms (PPE) intact. */
export const inSentence = (name: string) => (/^[A-Z]{2}/.test(name) ? name : name.charAt(0).toLowerCase() + name.slice(1));
