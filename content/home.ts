/**
 * Homepage content that is not catalogue data. Sources noted per block.
 */

/** About Us – industries named by the client. "Relevant ranges" are mapped from the catalogue, not claimed projects. */
export const industries = [
  { code: "MIN", name: "Mining", slug: "mining", ranges: ["Mining signs", "Hard hats & gloves", "Reflective vests", "Barrier netting"] },
  { code: "CON", name: "Construction", slug: "construction", ranges: ["Construction site boards", "Cones & water barriers", "Scaffold tags", "Barrier tape"] },
  { code: "HLT", name: "Healthcare", slug: "healthcare", ranges: ["Fire & exit signs", "Photoluminescent signs", "Wet floor signs", "Facility signs"] },
  { code: "GOV", name: "Government", slug: "government", ranges: ["Road & traffic signs", "Office & facility signs", "Engraved signs", "Fire & exit signs"] },
  { code: "EDU", name: "Education", slug: "education", ranges: ["School & scholar-patrol signs", "First aid signs", "Fire & exit signs", "Posters & charts"] },
  { code: "RET", name: "Retail", slug: "retail", ranges: ["Point-of-sale displays", "Window decals", "Banners & flags", "Wet floor signs"] },
  { code: "TEL", name: "Telecommunications", slug: "telecommunications", ranges: ["Warning & security signs", "Engraved labels", "Barrier tape", "Reflective vests"] },
] as const;

/** What We Do – services, rewritten for concision without changing meaning. */
export const process = [
  {
    code: "01",
    name: "Artwork & pre-press",
    body: "Layout and artwork creation, hi-res scanning and colour management. Send print-ready EPS or PDF with fonts outlined, or let our art department set it up.",
  },
  {
    code: "02",
    name: "Print, cut & engrave",
    body: "Wide-format digital and screen printing, cut vinyl and laser engraving – produced in our Waltloo workshop.",
  },
  {
    code: "03",
    name: "Laminate",
    body: "Matte, gloss or non-slip finishes for durability, UV stability and chemical and graffiti resistance.",
  },
  {
    code: "04",
    name: "Mount",
    body: "Mounted to the substrate that suits the job, for internal or external use.",
  },
  {
    code: "05",
    name: "Pack & deliver",
    body: "Packed in-house by our finishing team and delivered by our partner couriers, or collected from the counter.",
  },
  {
    code: "06",
    name: "Install",
    body: "Installation can be arranged. Council approvals and site inductions are confirmed on the quote.",
  },
] as const;

/** Materials named across the client documents. Descriptions are general material facts, not DIAD specifications. */
export const materials = [
  { key: "abs", name: "ABS", use: "Rigid plastic sheet – the everyday face for indoor and outdoor safety signs." },
  { key: "chromadek", name: "Chromadek", use: "Colour-coated steel – a hard-wearing face for outdoor and site signs." },
  { key: "acm", name: "ACM / Dibond", use: "Aluminium composite panel – flat, rigid and clean-edged." },
  { key: "aluminium", name: "Aluminium", use: "Plate for road signs and frames, and the base for engraved labels." },
  { key: "correx", name: "Correx", use: "Fluted polypropylene – light and economical for temporary signs." },
  { key: "photoluminescent", name: "Photoluminescent", use: "Charges from ambient light and glows when the lights fail." },
  { key: "reflective", name: "Reflective", use: "Retro-reflective sheeting for road signs, chevrons and hi-vis." },
  { key: "magnetic", name: "Magnetic", use: "Flexible magnetic sheet for removable vehicle signs." },
  { key: "vinyl", name: "Vinyl", use: "Printed or cut self-adhesive vinyl for decals and vehicle branding." },
] as const;

export type MaterialKey = (typeof materials)[number]["key"];
