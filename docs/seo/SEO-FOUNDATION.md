# DIAD Signs & Industrial Suppliers – SEO Foundation

Status: **research + architecture + technical foundation complete and verified; no new public pages built.**
Date: 2026-10-06 (verification pass same day) · Bbettr Agency · Source of truth for every page built after owner approval.
Scope rule: SEO infrastructure now, SEO pages later. The owner demo stays `noindex`.

> ### ⛔ LAUNCH BLOCKERS – do not flip `NEXT_PUBLIC_SITE_INDEXABLE` until every box is ticked
> - [ ] **Google Business Profile has NO website linked.** Add the final canonical URL at launch – after the GBP NAP checks in §9a.
> - [ ] Address discrepancy resolved (Unit 08 vs Units 7 & 8) and identical on site, GBP and schema.
> - [ ] Every homepage/nav link points to a **published** page (lib/page-registry.ts) – no placeholder routes reachable from navigation (§14a).
> - [ ] Search Console domain property verified; sitemap submitted (§16).
> - [ ] SABS photoluminescent certificate and B-BBEE certificate sighted (§18).

Contents
1. Executive SEO strategy · 2. Research findings · 3. Competitor landscape · 4. Keyword sources, validation & client keyword ledger ·
5. Keyword clusters & search intent · 6. URL architecture (LOCKED) · 7. Keyword → target page map · 7a. Page priority model · 7b. Photoluminescent strategy · 8. Homepage SEO ·
9. Local SEO & Google Business Profile · 10. Schema strategy · 11. Internal linking · 12. Image SEO ·
13. Technical SEO configuration · 14. Preview vs production indexation · 14a. Page publication lifecycle · 15. Migration / redirects ·
16. Search Console launch checklist · 17. Analytics launch checklist · 18. Client confirmation required ·
19. Future content opportunities · 20. Priorities (P0 / P1 / P2)

---

## 1. Executive SEO strategy

**Diagnosis.** DIAD has almost no organic footprint. `site:diadsigns.co.za` returns **zero indexed pages**; a search for `"diad signs"` returns nothing about the company; the existing domain hosts an unconfigured WordPress install (3 URLs, "Hello world!"). DIAD's only search presence is its **Google Business Profile**, which already ranks in the Pretoria local pack for manufacturer queries – but **has no website linked** ("Add website" shown).

**Strategy, in one line:** win *local, manufacturer-intent* searches in Pretoria first (where DIAD already appears and catalogue giants are weak), then build depth on the one credential competitors can't copy (SABS-approved photoluminescent signs), then expand into category pages that genuinely beat the national catalogue stores on substance.

Three pillars:
1. **Local entity strength** – website ↔ GBP link, consistent NAP, `LocalBusiness` schema, real reviews flow. Fastest win.
2. **Category depth, not page count** – ~30 genuinely useful family/range pages, not hundreds of keyword pages.
3. **Credential-led differentiation** – SABS / SANS 1186-5 photoluminescent, B-BBEE Level 1, CSD, in-house manufacture. Procurement buyers search for these.

What we will not do: location doorway pages (SADC/provinces), thin keyword pages, US terminology (OSHA), unauthorised brand terms (3M), fake review markup.

---

## 2. Research findings (live Google.co.za, `gl=za`, 2026-10-06)

Method: 26 queries run in Google South Africa (non-personalised, `pws=0`), results parsed for organic listings, local pack, ads and DIAD presence. Locale of the test browser: Pretoria/Centurion.

| Cluster | Query sample | Local pack | DIAD visible | Dominant page type | Who ranks |
|---|---|---|---|---|---|
| Safety signs – local | safety signs pretoria | **Yes (DIAD knowledge panel)** | **Yes – GBP panel** | Local businesses, directories, social | Combrinkium, Signage 360 (Snupit/Infoisinfo), Millennium Signs, Signs4Safety |
| Safety signs – national | safety signs south africa | No | No | **Ecommerce category pages** | safetysignonline, supplyshop, alfire, suresign, signs4safety |
| Safety signs – manufacturer | safety sign manufacturers pretoria | **Yes** | **Yes – in pack** | Local pack + directories | DIAD, ATK Signs, Signworks |
| Near me | safety signs near me | Yes | No | Product/category pages | expressprint, safetysignonline, makrosafe, coresigns |
| Photoluminescent | photoluminescent signs south africa | Yes | No | **Individual product pages** (sign codes F50, E30…) | printex, progressoffice, signs4safety, safetysigns.co.za |
| SABS photoluminescent | SABS approved photoluminescent signs | Yes | No | Category + product pages | safetysignonline, printex, jalite, signs4safety |
| SANS 1186-5 | SANS 1186-5 signs | No | No | Office-supply product pages, weak | parrot, officenational, geewiz – **thin SERP, opportunity** |
| Glow in the dark | glow in the dark safety signs | Yes | No | Product pages | parrot, printex, safetycart |
| Road signs – local | road signs pretoria | No | Yes (panel) | Mixed: shop, contractors, tenders, PDFs | expressprint, constructionconnection, etenders |
| Road sign manufacturers | road sign manufacturers south africa | Yes | No | Manufacturer sites, social | Road Signage Africa, National Road Signs, SA Road Signs |
| Construction signs | construction signs pretoria | Yes | Yes (pack) | Local signage shops | ABC Signs, expressprint, combrinkium |
| Mining signs | mining safety signs south africa | Yes | Yes | **Manufacturer category pages** | mysafetysign, coresigns |
| Custom signs | custom signs pretoria | Yes | Yes (pack) | Local sign shops, social | Millennium, RM Signs, Signworks, Signing Power |
| Sign manufacturers | sign manufacturers pretoria | Yes | **Yes – in pack** | Local pack; organic is job boards (weak) | DIAD, Signworks |
| Signage company | signage company pretoria | Yes | No | Shopfront/3D signage firms | ABC Signs, Signworks, Signarama |
| Engraved | engraved signs / labels pretoria | Yes | No | Small engravers, trophy shops | Ex`lint Signs, Liebner, Hope Engravers – **weak SERP** |
| Chromadek | chromadek signs | No | Yes | Product tags, marketplaces | expressprint, takealot, graphicsolution |
| Correx | correx signs pretoria | Yes | Yes | Print shops (estate-agent boards) | printpartners, expressprint, coraldesigns |
| ABS | ABS safety signs | No | No | **Marketplaces** (takealot, Leroy Merlin, Amazon) | not worth a dedicated page |
| Dibond | dibond signs pretoria | Yes | Yes | Print shops, very weak | posterworx, colourhub |
| PPE suppliers | PPE suppliers pretoria | Yes | No | PPE shops, directories | Pansula Workwear, Robot Industrial, Snupit |
| Safety equipment | safety equipment suppliers pretoria | Yes | No | Würth, All-Quip, directories | Würth Silverton, All-Quip |
| Scholar patrol | scholar patrol signs | No | No | Informational (Arrive Alive), govt RFQs | safetysignonline – **gap for a product page** |
| Vehicle branding | vehicle branding pretoria | Yes | No | Branding/wrap specialists | Signarama, Corporate Swag, Hot Print |

**Key findings**
- **National head terms are owned by catalogue stores** (Shopify/WooCommerce with hundreds of SKUs). DIAD will not out-catalogue them at launch; compete on local intent, manufacturing and credentials.
- **Local pack is the main battleground.** It appears for almost every "…pretoria" query; DIAD already appears for *manufacturer* queries without any website. Linking a strong site to the GBP is the single highest-leverage action.
- **Photoluminescent SERPs are product-code led** (SANS sign codes F50, E28, E30). Google expects a category page with real sign-code depth – a strong P0/P1 opportunity tied to DIAD's SABS approval.
- **Several SERPs are weak** (SANS 1186-5, engraved labels Pretoria, Dibond Pretoria, scholar-patrol signs): directories, social posts and office-supply listings – quality pages can rank.
- **ABS, "signs near me" and national PPE** are marketplace/ecommerce-dominated: support terms, not dedicated pages.
- **People Also Ask** for safety signs: *How much do safety signs cost? What are the 10 safety signs? What are the regulations for safety signage in South Africa?* → informational opportunity (see §19).

---

## 3. Competitor landscape

### Direct business competitors (make and/or supply signage + safety products, Gauteng)
| Competitor | Location | Model | SEO notes |
|---|---|---|---|
| **Signs4Safety** (signs4safety.co.za, K2 Graphix) | Pretoria | Online catalogue, SABS/NOSA signs | Ranks widely incl. photoluminescent and fire; flat keyword URLs (`/photoluminescent-signs`); no schema; dated |
| **Core Signs** (coresigns.co.za) | Gauteng | Manufacturer: road, safety, mining, construction | WooCommerce, `LocalBusiness` + `Organization` schema, sign-code product pages (TGS, TW series) |
| **My Safety Sign** (mysafetysign.co.za) | – | "Safety Sign Manufacturer South Africa", 850+ signs on Chromadek/ABS/Poly | Ranks for mining signs; WooCommerce `/product-category/` |
| **Safety Signs & Equipment** (safetysigns.co.za) | Bridgeway Business Park | Signs + safety equipment, GBP 4.8 (117) | Runs Google Ads on "safety signs pretoria"; no schema |
| **Signworks**, **ABC Signs**, **Millennium Signs**, **Signarama** (Pretoria franchises) | Pretoria | Commercial/shopfront signage | Compete for *custom/signage company* terms, not safety |
| **ATK Signs** | Gauteng | Signage | Appears in manufacturer local pack |

### SERP competitors (not like-for-like, but occupy rankings)
- **Safety Sign Online** (Shopify) – the national leader: `/collections/sans`, "SABS approved", Organization + Breadcrumb schema, appears in local packs via ads.
- **Printex**, **Supply Shop**, **Express Print** – print/office ecommerce with deep product pages.
- **Marketplaces** – Takealot, Leroy Merlin, Amazon.co.za (ABS sign products).
- **Directories** – Snupit, Infoisinfo, Cylex, pretoria.co.za, Construction Connection.
- **Würth**, **All-Quip** – national safety-equipment suppliers (PPE local pack).

### Exploitable gaps
1. Nobody combines **manufacturer + SABS photoluminescent approval + PPE trade counter + B-BBEE Level 1/CSD** in one credible local brand.
2. Competitor sites are catalogue-shaped with thin category copy; few explain *which sign/material for which site*.
3. Local schema is mostly absent (only Core Signs has `LocalBusiness`).
4. Weak SERPs listed in §2 can be won with one solid page each.

---

## 4. Keyword sources & validation

Three sources are kept separate throughout this document and labelled **ONBOARDING INTENT**, **KEYWORD DOCUMENT** and **LIVE RESEARCH**. Sources were extracted from the repository files themselves (re-read 2026-10-06):

- **A · ONBOARDING** – `Diad-Signs-Industrial-Suppliers-Pty-Ltd-Website-Design-Onboarding (1).pdf`. The onboarding **has no dedicated keyword field**: its "SEO & Marketing" section only records *"Currently Running Ads? No"*. The client's search-intent signals are the **"Services You Offer"** list (verbatim below), the USP *"Over 10000 signs in stock"*, CTA *"Request Quote"*, target locations (9 provinces + 7 SADC countries) and reference sites (safetysign.com, compliancesigns.com, safetysigns.ie, safetysigns.co.za, signs4safety.co.za, safetysignonline.co.za).
  > Sign Manufacturers, Safety Signs, PPE, Personal Protective Equipment, Gloves, Hard Hats, Road Signs, Overalls, Road Cones, Water Barrier, Barrier Tape, Barrier Netting, Wet Floor Signs, Construction Signs, Mining Signs, Industry Safety Signs, Factory Signs, Display Signs, Printing, Digitally Printed Signs, Vinyl Decals, Magnetic Signs, Chromadek Signs, ABS Plastic Signs, Traffic Cones, Road Cone, Anti Slip Tape, Hazard Tape, Hazard Marker, Emergency Horn, Megaphone, Glow in the dark sign, SABS Photoluminescent Sign, Aluminium Frame, Scaffold Signs, Lock out tags, Safety Chain, Aluminium Engraved Signs, Engraved Labels, SABS Approved, SANS 1186-5, Reflective Vest Printing, Vehicle Branding, Reflective Tape, Chevron, Revolving Amber Light
  The same list is used verbatim as the GBP description.
- **B · KEYWORD DOCUMENT** – `1789217616562-Website_Keywords (1).docx`: one comma list (~78 terms) **pasted twice**; ~62 unique. Includes US-catalogue category names (OSHA Safety Signs, Message Boards, Posters & Charts, Shipping and Truck Signs, Facility Signs), a misspelling ("Lazer Engraving") and a brand ("3M").
- **C · RESEARCH** – live SERPs (§2), competitors (§3), DIAD's verified offer (About Us, What We Do, artwork specs, Terms of Trade, business card, GBP).

**Cross-check against what DIAD actually sells** (About Us / What We Do / onboarding / GBP): every product term below is supported by at least one source **except** "3M" (no evidence of authorisation), "OSHA" (US regulator), and "corporate promotional gifts" (mentioned only as team experience in About Us).

### Validation table

Actions: **PRIMARY TARGET** · **SECONDARY TARGET** · **SUPPORTING TERM** · **RESEARCH FURTHER** · **DO NOT TARGET**. Client priority: ★ = in both client sources or USP/GBP; ☆ = one client source. Volumes not yet measured (no keyword-volume tool connected – see §20 P1).

| Keyword / phrase | Source | Client priority | DIAD relevance | Search intent | Geo intent | SERP observations | Recommended action | Target page | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Sign manufacturers | ONBOARDING + RESEARCH | ★ | Core ("primarily a sign manufacturing company") | Commercial, local | Pretoria | Local pack incl. DIAD; organic weak (job boards) | **PRIMARY TARGET** | `/` | Homepage title leads with "Safety Sign Manufacturer" |
| Safety signs | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Core | Commercial | Pretoria / SA | Local: pack + DIAD panel. National: ecommerce | **PRIMARY TARGET** | `/` (local) + `/safety-signs` (category) | Don't split "safety signs pretoria" into a location page |
| Safety signs Pretoria | RESEARCH | – | Core | Local commercial | Pretoria | DIAD GBP panel shows | **PRIMARY TARGET** | `/` | Won via GBP + homepage, not a separate page |
| SABS Photoluminescent Sign / SABS Approved | ONBOARDING + RESEARCH | ★ | Verified credential | Commercial | SA | Product-code SERP; safetysignonline/printex | **PRIMARY TARGET** | `/safety-signs/photoluminescent-signs` | Strongest differentiator |
| SANS 1186-5 | ONBOARDING + RESEARCH | ☆ | Verified | Commercial/spec | SA | Thin, office-supply listings | **SECONDARY TARGET** | same photoluminescent page | Use the standard in copy & H2, not a separate page |
| Glow in the dark sign | ONBOARDING + RESEARCH | ☆ | Yes (photoluminescent) | Commercial | SA | Product pages | **SUPPORTING TERM** | photoluminescent page | Lay synonym |
| Fire & Exit Signs / Fire Extinguisher | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | Ecommerce fire categories | **SECONDARY TARGET** | `/safety-signs/fire-and-exit-signs` | |
| First Aid Signs | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | Ecommerce | **SUPPORTING TERM** | `/safety-signs` (section) | Own page only with depth |
| No Smoking Signs / Security Signs | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | Ecommerce | **SUPPORTING TERM** | `/safety-signs` | |
| Industry Safety Signs / Factory Signs / Warehouse Signs | ONBOARDING + KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | Overlaps "safety signs" | **SUPPORTING TERM** | `/safety-signs` | Cannibalisation risk if split |
| Construction Signs / Construction Site Sign | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes | Commercial, local | Pretoria | Local pack incl. DIAD | **SECONDARY TARGET** | `/custom-signs/construction-site-boards` + `/industries/construction` (P2) | Site boards are made-to-order |
| Mining Signs | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes | Commercial | SA | Manufacturer category pages (mysafetysign, coresigns) | **SECONDARY TARGET** | `/industries/mining` (P2) | Needs real product depth to compete |
| Scaffold Signs / Scaffold-Tags | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | Not researched in depth | **SECONDARY TARGET** | `/safety-signs/scaffold-tags` | |
| Lock out tags | ONBOARDING | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/safety-signs` | |
| Wet Floor Signs / Yellow Free Standing Sign | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/safety-signs` | |
| Road Signs / Traffic Signs | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes | Commercial + tenders | Pretoria/SA | Mixed: shops, tenders, manuals | **PRIMARY TARGET** | `/road-signs` | "Road signs" is the SA head term; "traffic signs" secondary |
| Sign Posts and Accessories / Chevron / Delineators / Hazard Marker / Revolving Amber Light | ONBOARDING + KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/road-signs` | |
| Scholar Patrol / School Signs | KEYWORD DOCUMENT (×2) + RESEARCH | ☆ | Yes | Commercial (schools, municipalities) | SA | Informational + RFQs; weak commercial | **SECONDARY TARGET** | `/road-signs/scholar-patrol-signs` | Weak SERP = opportunity |
| Road Cones / Traffic Cones / Road Cone | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | Not researched in depth | **SECONDARY TARGET** | `/site-safety-equipment/road-cones` | One page; three phrasings |
| Water Barrier | ONBOARDING | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/site-safety-equipment` | |
| Barrier Tape / Demarcation Tape / Hazard Tape | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SECONDARY TARGET** | `/site-safety-equipment/barrier-tape` | One page covers all three |
| Barrier Netting | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/site-safety-equipment` | |
| Anti Slip Tape / Safety Chain / Emergency Horn / Megaphone | ONBOARDING | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/site-safety-equipment` | |
| PPE / Personal Protective Equipment | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes (trade counter) | Commercial, local | Pretoria | PPE shops + directories; DIAD absent | **PRIMARY TARGET** | `/ppe` + `/` (local) | Positioned as "with your signs", not a PPE superstore |
| PPE suppliers Pretoria | RESEARCH | – | Yes | Local commercial | Pretoria | Local pack (Pansula, Robot Industrial) | **SECONDARY TARGET** | `/ppe` + GBP category | |
| Gloves / Pig Skin | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/ppe/gloves` (P2) | "Pig skin gloves" is the SA phrasing |
| Hard Hats | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/ppe/hard-hats` (P2) | |
| Overalls | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/ppe` | |
| Reflective Vests / Bibs | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/ppe/reflective-vests` (P2) | |
| Reflective Vest Printing | ONBOARDING | ☆ | Yes (service) | Commercial | Pretoria | – | **RESEARCH FURTHER** | `/ppe/reflective-vests` section | Confirm volume |
| Boots / Safety Shoes / Goggles / Dust Masks / Aprons | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | Ecommerce/PPE stores | **SUPPORTING TERM** | `/ppe` | |
| Custom signs | RESEARCH | – | Yes (daily production) | Commercial, local | Pretoria | Local pack incl. DIAD | **PRIMARY TARGET** | `/custom-signs` | |
| Chromadek Signs | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes (material) | Commercial | SA | Product tags/marketplaces; weak | **SECONDARY TARGET** | `/custom-signs/chromadek-signs` | SA-specific material term – good fit |
| ABS Plastic Signs | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes | Product purchase | SA | Marketplaces dominate | **SUPPORTING TERM** | `/custom-signs` (materials) | Not worth a page |
| Correx | KEYWORD DOCUMENT + RESEARCH | ☆ | Yes | Commercial (estate/construction boards) | Pretoria | Print shops | **SUPPORTING TERM** | `/custom-signs` | Page later if demand proven |
| Dibond / ACM | KEYWORD DOCUMENT + RESEARCH | ☆ | Yes | Commercial | Pretoria | Very weak SERP | **RESEARCH FURTHER** | `/custom-signs` | Possible P2 page |
| Aluminium Engraved Signs / Engraved Labels / Engraved / Lazer Engraving | ONBOARDING + KEYWORD DOCUMENT + RESEARCH | ★ | Yes | Commercial (industrial labelling) | Pretoria | Weak: trophy/engraving shops | **SECONDARY TARGET** | `/custom-signs/engraved-signs-and-labels` | Use "laser engraving" (correct spelling) |
| Aluminium Frame | ONBOARDING | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/custom-signs` | |
| Magnetic Signs | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/custom-signs` or `/vehicle-branding` | |
| Screen Printed Signs / Silk Screen Printing | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/printing-and-branding` | "Silk screen" is a legacy phrasing |
| Printing / Digital Printing / Wide Format Printing / Digitally Printed Signs | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial, local | Pretoria | Print shops | **SECONDARY TARGET** | `/printing-and-branding` | |
| Vinyl Decals | ONBOARDING | ☆ | Yes | Commercial | Pretoria | – | **SUPPORTING TERM** | `/printing-and-branding` | |
| Vehicle Branding | ONBOARDING + RESEARCH | ☆ | Yes | Commercial, local | Pretoria | Branding specialists in pack | **SECONDARY TARGET** | `/printing-and-branding/vehicle-branding` | Competitive; P2 |
| Banners / Flags / Butterfly | KEYWORD DOCUMENT | ☆ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/printing-and-branding` | "Butterfly flags" |
| Display Signs / Posters & Charts / Message Boards | ONBOARDING + KEYWORD DOCUMENT | ☆ | Partly | Mixed | – | – | **SUPPORTING TERM** | `/safety-signs` / printing | "Message Boards" is US-catalogue wording |
| Office Signs / Facility Signs | KEYWORD DOCUMENT | ☆ | Yes | Commercial | – | – | **SUPPORTING TERM** | `/custom-signs` | |
| Shipping and Truck Signs | KEYWORD DOCUMENT | ☆ | Partly (vehicle branding, chevrons) | – | – | US-catalogue category name | **RESEARCH FURTHER** | – | Confirm what DIAD means |
| Reflective Tape | ONBOARDING + KEYWORD DOCUMENT | ★ | Yes | Commercial | SA | – | **SUPPORTING TERM** | `/road-signs` | |
| **3M** | KEYWORD DOCUMENT | ☆ | **Unverified** | Brand navigational | – | – | **DO NOT TARGET** | – | Trademark; needs proof of authorised reseller/converter status |
| **OSHA Safety Signs** | KEYWORD DOCUMENT | ☆ | No | US regulator | US | – | **DO NOT TARGET** | – | SA equivalent: OHS Act, SANS 1186 |
| Barrier (alone) | KEYWORD DOCUMENT | ☆ | Yes | Ambiguous | – | – | **SUPPORTING TERM** | `/site-safety-equipment` | Too broad on its own |
| Over 10000 signs in stock | ONBOARDING (USP) | ★ | **Unverified** | – | – | – | **RESEARCH FURTHER** | – | Not published until meaning confirmed (§18) |
| SADC / province locations | ONBOARDING (target locations) | ★ | **Unverified** delivery | Local | 7 countries + 9 provinces | – | **DO NOT TARGET** (as pages) | – | No location doorway pages; revisit if delivery confirmed |

### 4b. Client keyword ledger – every client term, with its fate

Decision vocabulary: **TARGETED** (has its own target page) · **MERGED** (covered on another page as a section/synonym – term preserved in copy) · **DEPRIORITISED** (P2/P3 or awaiting evidence) · **REJECTED** (will not be used, reason given). Generated from the source files: 46 onboarding terms and 62 unique keyword-document terms, 0 unmapped.

| # | Client term (ONBOARDING – “Services You Offer”) | Decision | Destination | Why |
|---|---|---|---|---|
| 1 | Sign Manufacturers | **TARGETED** | `/` (homepage title) | Matches local-pack queries where DIAD already ranks |
| 2 | Safety Signs | **TARGETED** | `/safety-signs` + `/` (local) | Core head term |
| 3 | PPE | **TARGETED** | `/ppe` | Core; local PPE intent |
| 4 | Personal Protective Equipment | **MERGED** | `/ppe` | Long form of PPE – same page |
| 5 | Gloves | **MERGED** | `/ppe` (section; `/ppe/gloves` P2 gated) | Item term |
| 6 | Hard Hats | **MERGED** | `/ppe` (section; `/ppe/hard-hats` P2 gated) | Item term |
| 7 | Road Signs | **TARGETED** | `/road-signs` | SA head term for the family |
| 8 | Overalls | **MERGED** | `/ppe` | Item term |
| 9 | Road Cones | **TARGETED** | `/site-safety-equipment/road-cones` | One page for all cone phrasings |
| 10 | Water Barrier | **MERGED** | `/site-safety-equipment` | Item term |
| 11 | Barrier Tape | **TARGETED** | `/site-safety-equipment/barrier-tape` | Covers barrier/demarcation/hazard tape |
| 12 | Barrier Netting | **MERGED** | `/site-safety-equipment/barrier-tape` (section) | Close intent to barrier tape |
| 13 | Wet Floor Signs | **MERGED** | `/safety-signs` | Sub-type; page only if depth justifies |
| 14 | Construction Signs | **MERGED** | `/custom-signs/construction-site-boards` + `/industries/construction` | Split by intent: board product vs sector |
| 15 | Mining Signs | **MERGED** | `/industries/mining` (P2 gated) | Needs a curated mining range to compete |
| 16 | Industry Safety Signs | **MERGED** | `/safety-signs` | Generic variant – cannibalisation risk if split |
| 17 | Factory Signs | **MERGED** | `/safety-signs` | Generic variant |
| 18 | Display Signs | **MERGED** | `/printing-and-branding` | Display/POS |
| 19 | Printing | **TARGETED** | `/printing-and-branding` | Family hub (P2) |
| 20 | Digitally Printed Signs | **MERGED** | `/printing-and-branding` | Variant |
| 21 | Vinyl Decals | **MERGED** | `/printing-and-branding` | Item term |
| 22 | Magnetic Signs | **MERGED** | `/custom-signs` (materials) / vehicle branding | Material/use term |
| 23 | Chromadek Signs | **TARGETED** | `/custom-signs/chromadek-signs` | SA-specific material term; weak SERP |
| 24 | ABS Plastic Signs | **DEPRIORITISED** | `/custom-signs` (materials section); own page P3 | Marketplace-dominated SERP |
| 25 | Traffic Cones | **MERGED** | `/site-safety-equipment/road-cones` | Synonym of road cones |
| 26 | Road Cone | **MERGED** | `/site-safety-equipment/road-cones` | Singular variant |
| 27 | Anti Slip Tape | **MERGED** | `/site-safety-equipment` | Item term |
| 28 | Hazard Tape | **MERGED** | `/site-safety-equipment/barrier-tape` | Synonym cluster |
| 29 | Hazard Marker | **MERGED** | `/road-signs` | Road accessory |
| 30 | Emergency Horn | **MERGED** | `/site-safety-equipment` | Item term |
| 31 | Megaphone | **MERGED** | `/site-safety-equipment` | Item term |
| 32 | Glow in the dark sign | **MERGED** | `/safety-signs/photoluminescent-signs` | Lay synonym – noisy SERP (neon/decor) |
| 33 | SABS Photoluminescent Sign | **TARGETED** | `/safety-signs/photoluminescent-signs` | Verified credential – P0 |
| 34 | Aluminium Frame | **MERGED** | `/custom-signs` | Accessory/material |
| 35 | Scaffold Signs | **TARGETED** | `/safety-signs/scaffold-tags` (P2) | Same intent as scaffold tags |
| 36 | Lock out tags | **MERGED** | `/safety-signs` | Item term |
| 37 | Safety Chain | **MERGED** | `/site-safety-equipment` | Item term |
| 38 | Aluminium Engraved Signs | **MERGED** | `/custom-signs/engraved-signs-and-labels` | Same page |
| 39 | Engraved Labels | **TARGETED** | `/custom-signs/engraved-signs-and-labels` | Weak SERP; manufacturing advantage |
| 40 | SABS Approved | **MERGED** | `/safety-signs/photoluminescent-signs` + credentials copy | Credential, applies to photoluminescent signs only |
| 41 | SANS 1186-5 | **MERGED** | `/safety-signs/photoluminescent-signs` (H2 section) | Spec term; thin SERP; no separate page (cannibalisation) |
| 42 | Reflective Vest Printing | **DEPRIORITISED** | `/ppe` section; research volume | Service; demand unverified |
| 43 | Vehicle Branding | **TARGETED** | `/printing-and-branding/vehicle-branding` (P2) | Competitive local SERP |
| 44 | Reflective Tape | **MERGED** | `/road-signs` | Accessory |
| 45 | Chevron | **MERGED** | `/road-signs` | Accessory |
| 46 | Revolving Amber Light | **MERGED** | `/road-signs` | Accessory |

| # | Client term (KEYWORD DOCUMENT – de-duplicated) | Decision | Destination | Why |
|---|---|---|---|---|
| 1 | ABS Plastic | **DEPRIORITISED** | `/custom-signs` (materials section) | Same |
| 2 | Correx | **DEPRIORITISED** | `/custom-signs` section; `/custom-signs/correx-boards` P2 | Print-shop SERP |
| 3 | Chromadek | **MERGED** | `/custom-signs/chromadek-signs` | Same term |
| 4 | Engraved | **MERGED** | `/custom-signs/engraved-signs-and-labels` | Fragment |
| 5 | Lazer Engraving | **MERGED** | `/custom-signs/engraved-signs-and-labels` as "laser engraving" | Misspelling corrected |
| 6 | Dibond | **DEPRIORITISED** | `/custom-signs/acm-dibond-signs` (P2) | Very weak SERP, demand unproven |
| 7 | ACM | **DEPRIORITISED** | `/custom-signs/acm-dibond-signs` (P2) | Same |
| 8 | Safety Signs | **TARGETED** | `/safety-signs` + `/` (local) | Core head term |
| 9 | Wet Floor Signs | **MERGED** | `/safety-signs` | Sub-type; page only if depth justifies |
| 10 | Scaffold-Tags | **TARGETED** | `/safety-signs/scaffold-tags` (P2) | — |
| 11 | Barrier | **MERGED** | `/site-safety-equipment` | Too broad alone |
| 12 | Fire Extinguisher | **MERGED** | `/safety-signs/fire-and-exit-signs` | Fire sign cluster |
| 13 | First Aid | **MERGED** | `/safety-signs` | Sub-type |
| 14 | PPE | **TARGETED** | `/ppe` | Core; local PPE intent |
| 15 | Road Signs | **TARGETED** | `/road-signs` | SA head term for the family |
| 16 | Scholar Patrol | **TARGETED** | `/road-signs/scholar-patrol-signs` (P2) | Weak commercial SERP |
| 17 | School Signs | **MERGED** | `/road-signs/scholar-patrol-signs` | Same audience |
| 18 | Construction Signs | **MERGED** | `/custom-signs/construction-site-boards` + `/industries/construction` | Split by intent: board product vs sector |
| 19 | Screen Printed Signs | **MERGED** | `/printing-and-branding` | Process term |
| 20 | Overalls | **MERGED** | `/ppe` | Item term |
| 21 | Road Cones | **TARGETED** | `/site-safety-equipment/road-cones` | One page for all cone phrasings |
| 22 | Construction Site Sign | **TARGETED** | `/custom-signs/construction-site-boards` | Made-to-order product |
| 23 | Barrier Netting | **MERGED** | `/site-safety-equipment/barrier-tape` (section) | Close intent to barrier tape |
| 24 | Barrier Tape | **TARGETED** | `/site-safety-equipment/barrier-tape` | Covers barrier/demarcation/hazard tape |
| 25 | Demarcation Tape | **MERGED** | `/site-safety-equipment/barrier-tape` | Synonym cluster |
| 26 | Flags | **MERGED** | `/printing-and-branding` | Item term |
| 27 | Butterfly | **MERGED** | `/printing-and-branding` as "butterfly flags" | Fragment |
| 28 | Wet Floor Sign | **MERGED** | `/safety-signs` | Singular variant |
| 29 | Yellow Free Standing Sign | **MERGED** | `/safety-signs` (wet floor) | Describes wet-floor A-frames |
| 30 | Banners | **MERGED** | `/printing-and-branding` | Item term |
| 31 | Printing | **TARGETED** | `/printing-and-branding` | Family hub (P2) |
| 32 | Silk Screen Printing | **MERGED** | `/printing-and-branding` as "screen printing" | Legacy phrasing |
| 33 | Digital Printing | **MERGED** | `/printing-and-branding` | Variant |
| 34 | Wide Format Printing | **MERGED** | `/printing-and-branding` | Variant |
| 35 | Fire & Exit Signs | **TARGETED** | `/safety-signs/fire-and-exit-signs` | P1 |
| 36 | First Aid Signs | **MERGED** | `/safety-signs` | Sub-type |
| 37 | Mining Signs | **MERGED** | `/industries/mining` (P2 gated) | Needs a curated mining range to compete |
| 38 | Message Boards | **DEPRIORITISED** | — | US-catalogue category; confirm DIAD offers it (§18) |
| 39 | No Smoking Signs | **MERGED** | `/safety-signs` | Sub-type |
| 40 | Office Signs | **MERGED** | `/custom-signs` | Made to order |
| 41 | OSHA Safety Signs | **REJECTED** | — | US regulator; SA equivalents (OHS Act, SANS 1186) used instead |
| 42 | Posters & Charts | **MERGED** | `/safety-signs` | Sub-type |
| 43 | Security Signs | **MERGED** | `/safety-signs` | Sub-type |
| 44 | Shipping and Truck Signs | **DEPRIORITISED** | — | US-catalogue category; confirm meaning (§18) |
| 45 | Magnetic Signs | **MERGED** | `/custom-signs` (materials) / vehicle branding | Material/use term |
| 46 | Warehouse Signs | **MERGED** | `/safety-signs` | Generic variant |
| 47 | Traffic Signs | **MERGED** | `/road-signs` | Secondary synonym |
| 48 | Sign Posts and Accessories | **MERGED** | `/road-signs` | Accessory |
| 49 | Facility Signs | **MERGED** | `/custom-signs` | Made to order |
| 50 | Gloves | **MERGED** | `/ppe` (section; `/ppe/gloves` P2 gated) | Item term |
| 51 | Hard Hats | **MERGED** | `/ppe` (section; `/ppe/hard-hats` P2 gated) | Item term |
| 52 | Dust Masks | **MERGED** | `/ppe` | Item term |
| 53 | Reflective Vests | **MERGED** | `/ppe` (section; `/ppe/reflective-vests` P2 gated) | Item term |
| 54 | Bibs | **MERGED** | `/ppe` | Item term |
| 55 | Boots | **MERGED** | `/ppe` as "safety boots" | Item term |
| 56 | Safety Shoes | **MERGED** | `/ppe` | Item term |
| 57 | Goggles | **MERGED** | `/ppe` | Item term |
| 58 | Aprons | **MERGED** | `/ppe` | Item term |
| 59 | Pig Skin | **MERGED** | `/ppe` as "pig-skin gloves" | Fragment |
| 60 | Delineators | **MERGED** | `/road-signs` | Accessory |
| 61 | Reflective Tape | **MERGED** | `/road-signs` | Accessory |
| 62 | 3M | **REJECTED** | — | Trademark; no evidence of authorised use (§18) |

**Onboarding intents that are not keywords:**
| ONBOARDING INTENT | Decision | Why |
|---|---|---|
| USP "Over 10000 signs in stock" | DEPRIORITISED | Unverified meaning (units vs product lines) – §18 |
| Target/shipping locations: 9 provinces + Zambia, Lesotho, Namibia, Botswana, Eswatini, Zimbabwe, Mozambique | REJECTED as location pages | Doorway-page risk; delivery unverified. Revisit as one delivery page if confirmed |
| Required page "Shop / E-commerce" | REJECTED (scope) | Lead-generation site; catalogue + quote instead |
| Required page "Portfolio / Gallery" | DEPRIORITISED | Only with real, permitted project photography |
| Required page "Services" | MERGED | Into `/custom-signs` (manufacturing services) |
| Testimonials "From our Google Profile" | MERGED | Link to GBP; no review markup (§10) |
| Reference sites (safetysign.com, compliancesigns.com, safetysigns.ie, safetysigns.co.za, signs4safety.co.za, safetysignonline.co.za) | Used as research input | US/IE sites are catalogue stores; SA ones analysed in §3 |

---

## 5. Keyword clusters & search intent

| Cluster | Intent | Page Google expects | DIAD stance |
|---|---|---|---|
| Brand + local ("diad signs", "safety signs pretoria", "sign manufacturers pretoria") | Local commercial / navigational | Local business + homepage | Homepage + GBP |
| Safety signs (general) | Commercial, category browse | Category page with many sign types | `/safety-signs` hub |
| Photoluminescent / SABS / SANS 1186-5 / glow-in-the-dark | Commercial, spec-driven | Category page with sign codes | Dedicated page (credential) |
| Fire & exit | Commercial | Category | Child page |
| Road & traffic, scholar patrol | Commercial + procurement | Category / manufacturer | `/road-signs` hub + scholar-patrol child |
| Site safety (cones, tape, netting, barriers) | Commercial, quantity buyers | Category / product | `/site-safety-equipment` hub, few children |
| PPE (local + items) | Commercial, local | Local PPE stores, category | `/ppe` hub; items as sections first |
| Custom / made-to-order by material | Commercial, local | Local sign shops, material pages | `/custom-signs` hub + Chromadek, engraved, construction boards |
| Print & branding | Commercial, local | Print shops / branding firms | `/printing-and-branding` hub (lower priority) |
| Regulations / "what are the safety signs" | Informational | Guides, government PDFs | Resource page (P2) |

Cannibalisation rules: one page per cluster; synonyms (traffic/road cones, barrier/demarcation/hazard tape, photoluminescent/glow-in-the-dark) live on one page; "Pretoria" is carried by the homepage and NAP, never by duplicate location pages.

---

## 6. URL architecture – LOCKED convention (NOT BUILT)

### Options evaluated
| Criterion | A · families at root `/safety-signs/photoluminescent-signs` | B · `/products/safety-signs/photoluminescent-signs` | C · flat ranges `/photoluminescent-signs` |
|---|---|---|---|
| Search intent / SERPs | Matches how buyers phrase queries; rankers in §2 use flat keyword or one-level category URLs. URL keywords are a minor signal either way | Neutral; "products" adds nothing for intent | Matches, but loses family context |
| Information architecture | Family → range is the real taxonomy | Same taxonomy, one extra level | No hierarchy – everything is a sibling |
| Breadcrumbs | Home › Safety signs › Photoluminescent signs – each crumb a real page | Home › Products › Safety signs › … – adds a generic crumb | Home › Photoluminescent signs – loses the parent |
| User understanding | Readable, shareable, short | Longer, still clear | Clear but ambiguous for generic ranges (`/gloves`?) |
| Internal linking | Hubs and ranges link naturally up/down | Same | Hard to express parents |
| Maintainability | Six fixed, reserved root slugs; implemented as explicit static route folders (no root catch-all, so no collision with `/about`, `/contact`) | Single `/products/[family]/[range]` route – simplest | Every range competes for the root namespace |
| Future catalogue growth | Product level = depth 3 (`/safety-signs/photoluminescent-signs/<product>`) | Depth 4 | No room for products |
| Cannibalisation | Low – one canonical home per range | Low | Higher (families vs ranges at the same level) |
| Migration flexibility | Hubs can be re-parented via redirects; slugs stable | Same | Hard to add hierarchy later |

### Decision: **Option A – product families at the root, ranges below, products only when earned.**
B's only real advantage is one route file; that is an implementation detail, not a reason to put an extra generic level in every URL and breadcrumb for the life of the site. C throws away the hierarchy DIAD's catalogue genuinely has.

### Locked conventions
- **Family hubs (reserved root slugs):** `/safety-signs` · `/road-signs` · `/site-safety-equipment` · `/ppe` · `/custom-signs` · `/printing-and-branding`. No other route may use these slugs.
- **Ranges:** `/<family>/<range>` – e.g. `/safety-signs/photoluminescent-signs`, `/custom-signs/chromadek-signs`.
- **Products:** `/<family>/<range>/<product>` only when a product has unique content (own photo, specification, options). Never template-only pages.
- **Catalogue hub:** `/products` – a browse-everything index page, **not** a URL prefix and not a breadcrumb level.
- **Other sections:** `/industries/<sector>`, `/resources/<slug>`, `/about`, `/contact`, `/quote`, `/legal/<slug>`.
- **Format:** lowercase, hyphenated, ASCII, no trailing slash, no dates, no `/pretoria` or location suffixes, max depth 3.
- **Breadcrumbs:** mirror the path; every crumb is a published page.
- **Renaming:** once published, a slug only changes with a 308 redirect recorded in this document.
- **Implementation:** switch `familyHref`/`categoryHref` in `content/catalogue.ts` (the single source for every catalogue link) to this pattern when the first real page ships, and delete the `/products/...` placeholder catch-all. The placeholders have never been public, so no redirects are needed unless they get shared.

```
/                                          Homepage                        P0 (live)
/products                                  Catalogue hub                   P1
/safety-signs                              Family hub                      P0
  /safety-signs/photoluminescent-signs     SABS / SANS 1186-5              P0
  /safety-signs/fire-and-exit-signs                                        P1
  /safety-signs/scaffold-tags                                              P2
/road-signs                                Family hub                      P1
  /road-signs/scholar-patrol-signs                                         P2
/site-safety-equipment                     Family hub                      P1
  /site-safety-equipment/road-cones                                        P1
  /site-safety-equipment/barrier-tape                                      P1
/ppe                                       Family hub                      P1
  /ppe/hard-hats · /ppe/gloves · /ppe/reflective-vests                     P2 (gated)
/custom-signs                              Family hub – made to order      P0
  /custom-signs/engraved-signs-and-labels                                  P1
  /custom-signs/construction-site-boards                                   P1
  /custom-signs/chromadek-signs                                            P1
  /custom-signs/acm-dibond-signs · /custom-signs/correx-boards             P2
/printing-and-branding                     Family hub                      P2
  /printing-and-branding/vehicle-branding                                  P2
/industries/mining · /industries/construction                              P2 (gated)
/resources/artwork-specifications                                          P2
/resources/photoluminescent-signage-requirements                           P2 (gated)
/about · /contact · /quote                                                 P0 (launch-critical utility)
```

---

## 7. Keyword → search intent → target page map

Priorities follow the scoring model in §7a.

| Primary keyword | Secondary terms | Intent | URL | Page type | Parent | Cannibalisation notes | Priority |
|---|---|---|---|---|---|---|---|
| safety sign manufacturer pretoria | sign manufacturers pretoria, safety signs pretoria, PPE supplier pretoria | Local commercial | `/` | Homepage / local business | – | Only page carrying "Pretoria" in the title | **P0** |
| photoluminescent signs | SABS approved photoluminescent signs, SANS 1186-5, glow in the dark safety signs, escape route signs | Commercial / spec | `/safety-signs/photoluminescent-signs` | Category with sign-code detail | `/safety-signs` | Lightsout section on homepage links here | **P0** |
| safety signs | symbolic safety signs, mandatory / prohibition / warning signs, first aid, no smoking, security, wet floor, factory/warehouse signs | Commercial | `/safety-signs` | Family hub | – | Sub-types stay as sections until they earn pages | **P0** |
| road signs | traffic signs, sign posts, chevrons, delineators, reflective tape, revolving amber lights | Commercial / procurement | `/road-signs` | Family hub | – | – | **P1** |
| custom signs | made to order signs, signage pretoria, custom photoluminescent signs, ABS/Correx/ACM/aluminium signs | Commercial local | `/custom-signs` | Family hub + materials | – | Homepage "Made here" links here | **P0** |
| PPE | personal protective equipment, PPE suppliers pretoria, overalls, safety boots | Commercial local | `/ppe` | Family hub | – | – | **P1** |
| fire and exit signs | fire extinguisher signs, emergency exit signs | Commercial | `/safety-signs/fire-and-exit-signs` | Category | `/safety-signs` | Photoluminescent page cross-links | **P1** |
| chromadek signs | chromadek boards | Commercial | `/custom-signs/chromadek-signs` | Material page | `/custom-signs` | – | **P1** |
| engraved signs | engraved labels, laser engraving, aluminium engraved signs | Commercial | `/custom-signs/engraved-signs-and-labels` | Category | `/custom-signs` | – | **P1** |
| road cones | traffic cones, road cone | Commercial | `/site-safety-equipment/road-cones` | Category | `/site-safety-equipment` | One page for all phrasings | **P1** |
| barrier tape | demarcation tape, hazard tape, barrier netting | Commercial | `/site-safety-equipment/barrier-tape` | Category | `/site-safety-equipment` | Netting as section | **P1** |
| site safety equipment | water barriers, safety chain, anti-slip tape, emergency horns, megaphones | Commercial | `/site-safety-equipment` | Family hub | – | – | **P1** |
| construction site boards | construction signs pretoria | Commercial local | `/custom-signs/construction-site-boards` | Category | `/custom-signs` | vs `/industries/construction`: board = product, industry = curated | **P1** |
| scaffold tags | scaffold signs | Commercial | `/safety-signs/scaffold-tags` | Category | `/safety-signs` | – | **P2** |
| scholar patrol signs | school signs | Commercial | `/road-signs/scholar-patrol-signs` | Category | `/road-signs` | – | **P2** |
| mining signs | mining safety signs south africa | Commercial | `/industries/mining` | Curated industry hub | `/industries` | Must contain real mining products, not a rewrite of /safety-signs | **P2** |
| printing pretoria | wide format printing, banners, flags, vinyl decals, screen printing | Commercial local | `/printing-and-branding` | Family hub | – | – | **P2** |
| vehicle branding pretoria | magnetic signs, reflective chevrons for fleet | Commercial local | `/printing-and-branding/vehicle-branding` | Service | `/printing-and-branding` | Competitive | **P2** |
| artwork specifications | print-ready artwork, EPS PDF outlines | Informational / supports conversion | `/resources/artwork-specifications` | Resource | – | – | **P2** |
| photoluminescent signage requirements | are photoluminescent exit signs compliant, how long do they glow, SANS 1186-5 meaning | Informational | `/resources/photoluminescent-signage-requirements` | Guide (gated: fact-checked) | – | Must not duplicate the category page – answers questions, links to it | **P2** |
| safety sign colours / regulations SA | what are the safety signs | Informational | `/resources/safety-sign-guide` | Guide | – | Link to commercial pages | **P3** |

---

## 7a. Page priority model

Volume alone does not decide priority. Each future page is scored 1–5 on eight criteria, weighted, max **70**:

| Criterion | Weight | What 5 means | Evidence used |
|---|---|---|---|
| Demand (proxy) | ×2 | Strong evidence of searches | **No volume tool is connected – no volumes are claimed.** Proxy = SERP investment observed live: ads, local pack, AI Overview, People-Also-Ask, number of competitors with dedicated pages |
| Commercial intent | ×2 | Buyer ready to request a quote | SERP page types (category/product vs informational) |
| Local intent | ×1 | Pretoria/local pack dominates | Local pack + "pretoria" variants |
| Winnability | ×2 | Weak SERP (directories, social, thin listings) | §2 observations |
| DIAD relevance | ×2 | Core of what DIAD makes/sells | About Us, What We Do, onboarding |
| Competitive / credential advantage | ×2 | Something competitors can't claim | SABS photoluminescent approval, in-house manufacture, B-BBEE/CSD |
| Conversion likelihood | ×2 | High-value quotes likely | Product/service type |
| Strategic importance | ×1 | Shapes the brand/architecture | Business positioning |

**Bands:** P0 ≥ 58 (launch-critical) · P1 46–57 (high opportunity) · P2 36–45 (expansion) · P3 ≤ 35, or **gated** until evidence/content exists.
**Rules:** (1) the parent hub of a P0 page is promoted to P0 so breadcrumbs resolve; (2) a **gated** page (needs verified facts, real range data or photography) is capped at P2 until the gate clears; (3) `/about`, `/contact`, `/quote` are P0 as launch-critical utility pages and are not scored; (4) re-score when Search Console / keyword-volume data arrives – demand proxies are replaced by measured data.

| Page | Demand (proxy) ×2 | Commercial ×2 | Local ×1 | Winnability ×2 | Relevance ×2 | Advantage ×2 | Conversion ×2 | Strategic ×1 | **Score /70** | **Priority** | Rule / gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/custom-signs` | 4 | 5 | 5 | 3 | 5 | 5 | 5 | 5 | **64** | **P0** |  |
| `/safety-signs/photoluminescent-signs` | 4 | 5 | 3 | 3 | 5 | 5 | 5 | 5 | **62** | **P0** |  |
| `/safety-signs` | 5 | 5 | 4 | 2 | 5 | 3 | 4 | 5 | **57** | **P0** | parent of a P0 page → promoted to P0 |
| `/custom-signs/engraved-signs-and-labels` | 3 | 4 | 4 | 5 | 5 | 4 | 4 | 3 | **57** | **P1** |  |
| `/custom-signs/construction-site-boards` | 3 | 5 | 4 | 3 | 5 | 4 | 5 | 3 | **57** | **P1** |  |
| `/road-signs` | 4 | 5 | 3 | 3 | 5 | 3 | 4 | 4 | **55** | **P1** |  |
| `/safety-signs/fire-and-exit-signs` | 4 | 5 | 2 | 2 | 5 | 4 | 4 | 4 | **54** | **P1** |  |
| `/custom-signs/chromadek-signs` | 3 | 4 | 3 | 4 | 5 | 4 | 4 | 3 | **54** | **P1** |  |
| `/ppe` | 4 | 5 | 5 | 2 | 4 | 2 | 4 | 4 | **51** | **P1** |  |
| `/site-safety-equipment` | 3 | 5 | 3 | 3 | 4 | 2 | 4 | 3 | **48** | **P1** |  |
| `/products (catalogue hub)` | 2 | 4 | 2 | 3 | 5 | 3 | 3 | 5 | **47** | **P1** |  |
| `/resources/photoluminescent-signage-requirements` | 3 | 2 | 1 | 3 | 5 | 5 | 3 | 4 | **47** | **P2** | GATED: fact-checked regulatory content → capped at P2 |
| `/site-safety-equipment/road-cones` | 3 | 5 | 2 | 3 | 4 | 2 | 4 | 2 | **46** | **P1** |  |
| `/site-safety-equipment/barrier-tape` | 3 | 5 | 2 | 3 | 4 | 2 | 4 | 2 | **46** | **P1** |  |
| `/road-signs/scholar-patrol-signs` | 1 | 4 | 1 | 5 | 5 | 3 | 3 | 2 | **45** | **P2** |  |
| `/custom-signs/acm-dibond-signs` | 1 | 4 | 3 | 5 | 4 | 3 | 3 | 2 | **45** | **P2** |  |
| `/industries/mining` | 3 | 4 | 1 | 3 | 4 | 3 | 3 | 3 | **44** | **P2** | GATED: real curated mining range |
| `/industries/construction` | 3 | 4 | 3 | 2 | 4 | 3 | 3 | 3 | **44** | **P2** | GATED: real curated range |
| `/printing-and-branding` | 3 | 4 | 5 | 2 | 3 | 3 | 3 | 2 | **43** | **P2** |  |
| `/printing-and-branding/vehicle-branding` | 4 | 5 | 5 | 1 | 3 | 2 | 3 | 2 | **43** | **P2** |  |
| `/safety-signs/scaffold-tags` | 2 | 4 | 1 | 3 | 5 | 3 | 3 | 2 | **43** | **P2** | SERP not yet researched |
| `Photoluminescent sign-code product pages (E/F codes)` | 3 | 4 | 1 | 2 | 4 | 4 | 3 | 2 | **43** | **P3** | GATED: per-code photo/spec data; thin-page risk → P3 |
| `/resources/artwork-specifications` | 1 | 2 | 1 | 4 | 5 | 3 | 4 | 3 | **42** | **P2** |  |
| `/custom-signs/correx-boards` | 3 | 4 | 4 | 2 | 3 | 2 | 3 | 1 | **39** | **P2** |  |
| `/ppe/hard-hats · /ppe/gloves · /ppe/reflective-vests` | 3 | 5 | 2 | 1 | 3 | 1 | 3 | 2 | **36** | **P2** | GATED: real stocked range + photos |
| `/custom-signs/abs-signs` | 3 | 4 | 1 | 1 | 3 | 2 | 2 | 1 | **32** | **P3** | marketplace SERP |
| `/resources/safety-sign-guide` | 3 | 1 | 1 | 2 | 4 | 2 | 2 | 2 | **31** | **P3** |  |
| `/industries (hub) + healthcare, government, education, retail, telecoms` | 1 | 2 | 1 | 3 | 3 | 2 | 2 | 2 | **29** | **P3** |  |

**Result:**
- **P0 (launch):** `/custom-signs` (64), `/safety-signs/photoluminescent-signs` (62), `/safety-signs` (57, promoted as parent), plus utility pages `/about`, `/contact`, `/quote`.
- **P1:** engraved signs & labels, construction site boards, road signs, fire & exit signs, Chromadek signs, PPE, site safety equipment, `/products` hub, road cones, barrier tape.
- **P2:** photoluminescent requirements guide (gated), scholar patrol, ACM/Dibond, mining & construction industries (gated), printing & branding, vehicle branding, scaffold tags, artwork specifications, Correx, PPE item pages (gated).
- **P3:** photoluminescent sign-code product pages (gated), ABS signs page, general safety-sign guide, remaining industry pages, location pages (rejected).

---

## 7b. Photoluminescent strategy (credential advantage)

**Live evidence (2026-10-06, google.co.za):**
| Query | SERP | Implication |
|---|---|---|
| photoluminescent signs | AI Overview + local pack + ads; category pages (Tower, Safety Sign Online, Sure Signs) and sign-code product pages (Printex F27); PAA: *How long do photoluminescent exit signs work? What are the requirements for a photoluminescent exit sign?* | Commercial **category** intent with real demand signals |
| photoluminescent signs pretoria | Local pack; weak organic (product tags, social, directories); related search *custom photoluminescent signs pretoria* | Local win available; "custom" fits a manufacturer |
| SABS approved photoluminescent signs / SABS … escape route signs | Category + sign-code products (E2, E28, F34) | Buyers search by approval and by sign code |
| SANS 1186-5 | Only office-supply product listings; no explanatory page; no PAA | Spec term – own it inside the category page, not a separate page |
| photoluminescent signage requirements south africa | Informational; PAA on regulations/compliance; SA articles (Total Print, Millennium) | Justifies ONE supporting guide |
| glow in the dark signs | Polluted by neon/décor products | Synonym only |
| photoluminescent exit signs | Mostly US/UK informational content | SA-specific gap the category page + guide can fill |

**Decision: one strong parent category page + one supporting guide. No separate SANS / glow-in-the-dark / SABS pages. Sign-code product pages only when earned.**

1. **`/safety-signs/photoluminescent-signs` (P0, the commercial page)** – targets *photoluminescent signs*, *SABS approved photoluminescent signs*, *SANS 1186-5*, *glow in the dark safety signs*, *photoluminescent signs pretoria*, *custom photoluminescent signs*. Contents (all from verified facts or DIAD-supplied data):
   - The credential up front: SABS-approved manufacturer, signs conforming to SANS 1186-5 (certificate scope confirmed – §18).
   - What photoluminescent signs are and where they're used (escape routes, fire equipment, stairwells).
   - The range organised by sign class – escape-route/emergency and fire-equipment signs – shown as an **in-page code index** (sign codes, sizes, substrates) with anchors, rather than dozens of thin URLs.
   - Custom photoluminescent signs made to order (manufacturing advantage).
   - Ordering/quote by sign list; procurement facts (B-BBEE Level 1, CSD).
   - FAQ answering the PAA questions **only with DIAD-supplied, verified data** (e.g. glow duration/luminance class from the SANS 1186-5 certificate).
   - Real photography: signs glowing in a blacked-out room (shot list item 3).
   - Schema: `WebPage` + `BreadcrumbList`; optional `ItemList` of sign types. **No `Product`/`Offer`** (no prices).
2. **`/resources/photoluminescent-signage-requirements` (P2, gated)** – answers *requirements / compliance / how long they work* questions in an SA context and links to the category page. Gate: content fact-checked against the standards and DIAD's certificate; no legal or compliance advice DIAD can't stand behind.
3. **Sign-code product pages `/safety-signs/photoluminescent-signs/<code-slug>` (P3, gated)** – competitors rank with them, but only build a code page when it carries unique content (own photo, dimensions, substrate options, application notes). Template-only code pages = thin content; keep them in the in-page index instead.
4. **Homepage "Lights out" section** links to the category page (anchor: *photoluminescent signs*). Fire & exit page cross-links; no other page targets the photoluminescent terms.

**Cannibalisation guard:** the category page owns all commercial photoluminescent terms; the guide owns informational questions only; `/safety-signs` links down with one short section; `/safety-signs/fire-and-exit-signs` covers non-photoluminescent fire signs and links across.

**Client confirmation for this page (§18):** the photoluminescent sign codes, sizes and substrates DIAD actually manufactures; the SABS certificate scope and validity; luminance/afterglow class from the certificate.

---

## 8. Homepage SEO decisions

**Title** (implemented) – options considered:

| Option | Assessment |
|---|---|
| `Safety Signs, PPE & Custom Signage in Pretoria \| DIAD Signs` (previous) | Good coverage; generic, doesn't use DIAD's strongest differentiator |
| **`Safety Sign Manufacturer & PPE Supplier in Pretoria \| DIAD Signs`** ✔ | Matches the queries where DIAD already ranks locally ("sign manufacturers pretoria", "safety sign manufacturers pretoria"), adds the PPE local query, "manufacturer" separates DIAD from resellers. ~64 chars |
| `DIAD Signs – Safety Signs, Road Signs, PPE & Custom Signs, Pretoria` | Brand-first wastes the lead position: the brand has no search demand yet |
| `Safety Signs Pretoria \| PPE Pretoria \| Signs Pretoria \| DIAD` | Keyword stuffing – rejected |

**Meta description** (implemented): *"DIAD makes safety, road and custom signs in Waltloo, Pretoria, and supplies PPE and site safety equipment from stock. SABS-approved photoluminescent signs. Request a quote."* – factual, includes the location, the credential and the CTA.

**Audit of the approved homepage (no visual changes):**
- One H1 (*Safety signs, PPE and custom signage – made and stocked in Pretoria.*) – already strong; unchanged.
- H2/H3 outline logical: credentials (H2, visually hidden), catalogue (H2 hidden + six family H3s), Made here (H2 + six step H3s), Lights out (H2), Industries (H2 + four environment H3s), Ordering (H2 + three H3s), Quote (H2).
- ~1,100 words of crawlable server-rendered text; all 63 range links in HTML.
- `lang="en-ZA"`, viewport, skip link, header/main/footer + 3 labelled navs, tel/mailto links, `<address>` for NAP.
- Images: logo `fetchpriority=high` (above the fold), others lazy; descriptive non-stuffed alt; decorative SVGs `aria-hidden`; product illustrations described as product types (never as DIAD projects).
- Canonical, OG (title/description/url/image), Twitter `summary_large_image`, robots – all from `pageMetadata()`.
- **Copy changes for SEO: none made.** Recommended later (with owner approval): mention *"SANS 1186-5"* already present; consider *"road signs"* explicitly in the hero lead (it is) – no change needed.
- Fixed: inactive manufacturing-step captions measured 1.6:1 contrast; now recede via heading colour only (≈4.4:1).

---

## 9. Local SEO & Google Business Profile alignment

**Central NAP source:** `config/site.ts` (name, legal name, address, phone, WhatsApp, email, hours, registration, VAT, GBP links). Every component and the schema read from it.

Website NAP (current, consistent everywhere):
> DIAD Signs & Industrial Suppliers · Unit 08, Tomzeil, 275 Maggs Street, Waltloo, Pretoria 0184 · 012 803 0980 · sales@diadsigns.co.za · Mon–Fri 07:30–16:30

GBP observed 2026-10-06 (Knowledge Graph `/g/11dx9g2_jg`): *Diad Signs & Industrial Suppliers Pty Ltd · Sign shop in Pretoria · Unit 08, Tomzeil, 275 Maggs St, Waltloo, Pretoria, 0184 · 012 803 0980 · 5.0 (42 reviews) · Closes 4:30 pm · "Add website" · LinkedIn profile linked · Updates posted.*

### 9a. ⛔ P0 LAUNCH ACTION – link the website on Google Business Profile
DIAD's GBP currently has **no website linked**. Do **not** change GBP now. At final production launch, once `https://diadsigns.co.za` is live, verified in Search Console and indexable, run in this order:
1. [ ] **Verify NAP consistency first** – name, address, phone identical on site (`config/site.ts`), schema and GBP.
2. [ ] **Resolve the address discrepancy first** – Unit 08 vs Units 7 & 8 (§18 #1); update site and GBP together.
3. [ ] **Verify phone and hours** – 012 803 0980; Mon–Fri 07:30–16:30, closed weekends/public holidays; add public-holiday special hours.
4. [ ] **Verify primary category** – keep *Sign shop* unless DIAD's GBP offers a closer real category.
5. [ ] **Review secondary categories** – only categories DIAD genuinely offers (candidates in the table below).
6. [ ] **Review services/products** – six families as Products; services: custom signs, engraving, installation.
7. [ ] **Add the canonical website URL** – `https://diadsigns.co.za/` (optionally `?utm_source=gbp&utm_medium=organic`).
8. [ ] **Do not keyword-stuff the business name** – keep *Diad Signs & Industrial Suppliers Pty Ltd* (adding keywords breaches Google guidelines and risks suspension).
9. [ ] Replace the keyword-list description with the prose draft below.
This list is also referenced in the launch blockers at the top of this document and in PROJECT_STATUS.md.

**GBP checklist (recommendations only – no changes made):**
| Item | Current | Recommendation | Priority |
|---|---|---|---|
| Website | **Missing** | Add `https://diadsigns.co.za` at launch (add UTM `?utm_source=gbp&utm_medium=organic` for attribution) | **P0** |
| Ownership | "Own this business?" shown publicly | Confirm DIAD has owner/manager access (Updates exist, so likely yes) | **P0** |
| Business name | "Diad Signs & Industrial Suppliers Pty Ltd" | Keep the real-world name; do not add keywords (guideline violation). Site uses "DIAD Signs & Industrial Suppliers" + legal name – consistent | P1 |
| Primary category | Sign shop | Keep (closest match; competitors use it) | – |
| Secondary categories | Unknown | Consider: *Safety equipment supplier*, *Sign manufacturer* (if offered in GBP), *Screen printer*, *Engraver*, *Work clothes store* – only those DIAD truly offers | P1 |
| Address | Unit 08 | Matches site; resolve Unit 7 & 8 question (§18) and update both together | P0 |
| Hours | Closes 4:30 pm | Matches (07:30–16:30); add public-holiday special hours each year | P1 |
| Description | Raw keyword list | Rewrite as prose (≤750 chars) – draft below | P1 |
| Products / Services | Unknown | Add the six families as Products with one photo each; services: custom signs, engraving, installation | P1 |
| Photos | Unknown | Upload Priority-1 shot list (PROJECT_STATUS.md) | P1 |
| Reviews | 5.0 / 42 | Keep asking after each job; reply to every review | Ongoing |

Draft GBP description: *DIAD Signs & Industrial Suppliers manufactures safety, construction, mining and road signs at our workshop in Waltloo, Pretoria, and supplies PPE and site safety equipment from stock at our trade counter. We are an SABS-approved manufacturer of photoluminescent signs (SANS 1186-5), a B-BBEE Level 1 supplier and a registered vendor on the Central Supplier Database. Custom signs are made to order on ABS, Chromadek, ACM, aluminium and more – send your list or artwork for a quote.*

---

## 10. Schema strategy

Implemented (`lib/schema.ts`, rendered via `components/JsonLd.tsx`):
- **Site-wide** (`app/layout.tsx`): `LocalBusiness` (`#business`) + `WebSite` (`#website`).
- **Homepage** (`app/page.tsx`): `WebPage` linked to both.
- Ready for future pages: `webPageNode()`, `breadcrumbNode()`.

**Type decision (re-evaluated 2026-10-06): `LocalBusiness`, not `Store`.** Google asks for the most specific subtype *possible*; accuracy comes first. schema.org defines `Store` as *"A retail good store"* – true only of DIAD's trade counter, not of its primary identity as a sign manufacturer and fabricator working to order for business and government. None of the 35 `LocalBusiness` subtypes covers manufacturing, fabrication, sign-making or industrial supply (`HomeAndConstructionBusiness` = building trades, `ProfessionalService` = advisory, `WholesaleStore` = retail). `LocalBusiness` – *"a particular physical business"* – is the accurate type and is fully supported for Google's local business features (it inherits all `Organization` and `Place` properties used). Revisit only if schema.org adds a fitting type. Properties: name, legalName, alternateName, description, url, logo, image, telephone (+27), email, vatID, identifier (CIPC reg.), address, openingHoursSpecification, contactPoint, hasMap, sameAs (GBP entity).

**Validated** 2026-10-06 against the official schema.org vocabulary (every type/property valid on its type, no dangling `@id`, required LocalBusiness `name` + `address` present). Run Google's Rich Results Test on the production URL at launch.

**Deliberately not used:**
| Markup | Reason |
|---|---|
| `AggregateRating` / `Review` | Google: pages where the entity controls reviews about itself are *ineligible* for review stars on LocalBusiness/Organization, and reviews must not be aggregated from other sites (the GBP 5.0/42). Verified in Google's review-snippet documentation 2026-10-06. |
| `Product` / `Offer` | Homepage illustrations are not products with offers; no prices (lead-gen, no ecommerce). Revisit on real range pages – likely `ItemList`/`CollectionPage`, not `Product`. |
| `geo` | Coordinates not verified (Google wants ≥5 decimals). Client to confirm pin. |
| `areaServed`, `foundingDate`, credentials (`hasCredential`) | Not verified / no certificates sighted. |
| `OfferCatalog` (previous build) | Removed – pointed at noindex placeholder pages. |

---

## 11. Internal linking architecture

- **Homepage → families**: catalogue section (six family links + 63 range links), hero sign plates (deep links to ranges), Made here → `/custom-signs` + artwork specs, Lights out → photoluminescent page, Industries → industry hubs.
- **Family hub → ranges → quote**: every range page links up to its family, sideways to 2–4 related ranges, and to `/quote?family=…` (pre-selects the form).
- **Industries → families/ranges**: curated lists with contextual anchors ("mining signs", "reflective vests"), never boilerplate.
- **Custom signs ↔ materials ↔ artwork specifications**.
- **Resources → commercial pages** only where genuinely useful (e.g. safety-sign guide → each sign class's category).
- **Footer**: stays as approved (families + featured ranges). No exact-match keyword footer blocks.
- **Anchors**: descriptive product names, not "click here"; vary naturally.
- **Breadcrumbs** (visible + `BreadcrumbList`) on every page below the homepage.

---

## 12. Image SEO rules

1. Real DIAD photography replaces illustrations when supplied; filenames descriptive and hyphenated (`photoluminescent-exit-sign-glowing.jpg`, not `IMG_2041.jpg`).
2. Alt text describes what is shown, once; no keyword lists. Illustrations are described as product types ("Photoluminescent emergency exit sign"), **never** as DIAD client work.
3. Decorative SVG/graphics: `aria-hidden="true"` and no alt.
4. Use `next/image` for raster images (width/height set, AVIF/WebP, responsive `sizes`); `priority` only on the above-the-fold LCP candidate.
5. Below-the-fold images lazy-load (default).
6. Keep hero LCP as text or a single priority image – never fade it in.
7. Product photos for range pages: consistent background/angle; one hero image per range ≥1200px wide for OG.
8. OG image: default generated at `/opengraph-image` (1200×630, Inter Tight/DM Sans, real logo). Range pages should get their own when photography exists.

---

## 13. Technical SEO configuration (implemented)

| Area | Implementation | File |
|---|---|---|
| Canonical origin | `NEXT_PUBLIC_SITE_URL` (default `https://diadsigns.co.za`, lowercased, no trailing slash) | `config/indexing.js`, `lib/indexing.ts` |
| Canonical URLs | `absoluteUrl(path)` – root `https://diadsigns.co.za/`, other paths without trailing slash, lowercase | `lib/indexing.ts` |
| Per-page metadata | `pageMetadata({ path, title, description, noindex? })` – canonical/og:url only when published; robots from registry | `lib/seo.ts` |
| Site defaults | metadataBase, title template, icons, Search Console token from env | `app/layout.tsx` |
| Robots meta | fail-closed: site default noindex; `index, follow, max-image-preview:large` only for registered pages on a launched deployment | `lib/seo.ts`, `lib/page-registry.ts`, `app/layout.tsx` |
| X-Robots-Tag | `noindex, nofollow` on **every** response unless launched | `next.config.js` |
| robots.txt | demo: allow (so noindex is seen); production: allow + `Sitemap:` | `app/robots.ts` |
| Sitemap | publication registry (homepage only); empty while not launched | `lib/page-registry.ts`, `app/sitemap.ts` |
| Placeholder routes | unregistered + explicit `noindex` → noindex, **no canonical, no og:url**, never in sitemap, no WebPage/Breadcrumb schema | `app/[...path]/page.tsx` |
| Host | 308 non-canonical host (www ↔ apex) → canonical; HTTP→HTTPS by Vercel | `next.config.js` |
| Trailing slash | `trailingSlash: false` → 308 to slashless | `next.config.js` |
| 404 | `app/not-found.tsx` returns HTTP 404 + noindex | – |
| OG / Twitter image | generated 1200×630 PNG | `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `assets/fonts/` |
| Structured data | `LocalBusiness` + `WebSite` + `WebPage` @graph | `lib/schema.ts`, `components/JsonLd.tsx` |
| Analytics | GA4 / GTM only when launched + ID set | `components/Analytics.tsx`, `.env.example` |
| Misc | `poweredByHeader: false`; QA builds via `NEXT_DIST_DIR` (never clobber dev server) | `next.config.js` |
| Lowercase | all generated links lowercase; uppercase variants 404 (no middleware rewrite – not needed) | – |

**Performance** (Lighthouse 12, demo build, 2026-10-06):
| | Mobile (simulated 4G) | Mobile (DevTools throttling) | Desktop |
|---|---|---|---|
| Performance | 94 | – | 100 |
| FCP / LCP | 1.1 s / 3.0 s* | 1.5 s / **1.5 s** | 0.3 s / 0.7 s |
| TBT / CLS | 0 ms / 0 | 0 ms / 0 | 0 ms / 0 |
| Accessibility · Best practices | 96 → contrast fixed · 100 | | 96 → fixed · 100 |
| SEO | 69 (only `is-crawlable` – the intended noindex) | | see QA: production build = 100 |

\*Simulated LCP attributes script time to the server-rendered H1 ("render delay" 2.6 s); observed LCP equals FCP. The H1 is the LCP element (text, unanimated, fonts preloaded by next/font).
Remaining opportunities (deliberately not done now): ~34 KB unused JS in the motion chunk (approved motion system), ~11 KB legacy polyfills (could set a modern browserslist), DOM ≈ 2,660 nodes (detailed SVG artwork + desktop/mobile catalogue variants) – reduce when illustrations are replaced by photography.

---

## 14. Preview vs production indexation

| | Owner demo / Vercel preview / local | Production (launched) |
|---|---|---|
| Switch | `NEXT_PUBLIC_SITE_INDEXABLE` unset/false (default) | `true` **and** `VERCEL_ENV=production` **and** https non-vercel.app origin |
| HTTP header | `X-Robots-Tag: noindex, nofollow` on all responses | none |
| Meta robots | `noindex, nofollow` | `index, follow` (placeholders still noindex) |
| robots.txt | `Allow: /` (so crawlers can *see* noindex) | `Allow: /` + `Sitemap:` |
| sitemap.xml | empty | finished pages only |
| Canonical | always the production origin – never preview/localhost | same |
| Analytics | never loads | loads if ID set |

Why robots.txt allows crawling in demo: Google can only honour a noindex it is allowed to fetch; a `Disallow` would hide the noindex and still allow URL-only indexing from links. Verified combinations (2026-10-06): flag only → indexable; flag + `VERCEL_ENV=preview|development` → no; flag + `*.vercel.app` origin → no; flag + `http://` or localhost origin → no; `TRUE` (wrong case) → no.

**Launch procedure:** set env vars on the Vercel *Production* environment only → deploy → verify headers/robots/sitemap (§16).

### 14a. Page publication lifecycle (one mechanism)

```
UNFINISHED  (default for every route)
  → not in lib/page-registry.ts
  → <meta robots> noindex, nofollow      (site default + pageMetadata)
  → no <link rel=canonical>, no og:url   (no "preferred URL" signal)
  → excluded from sitemap.xml
  → no WebPage / BreadcrumbList schema (only the site-wide business node)
  → demo/preview: also X-Robots-Tag: noindex, nofollow

APPROVED + COMPLETED
  → path added to publishedPages in lib/page-registry.ts, in the same change as the finished page
  → page uses pageMetadata()  → index, follow (only on a launched deployment)
  → self-canonical + og:url
  → included in sitemap.xml
  → WebPage (+ BreadcrumbList) schema
```

Guarantees (verified on production-state build, 2026-10-06):
- `NEXT_PUBLIC_SITE_INDEXABLE=true` does **not** override page-level noindex: placeholders render `noindex, nofollow` with the launch switch on.
- Placeholders have no canonical and no og:url; they are absent from sitemap.xml; they emit no WebPage/Breadcrumb nodes.
- The placeholder catch-all also passes `noindex: true`, so even an accidental registry entry for a placeholder path cannot make it indexable.
- Fail-closed by design: a new page that forgets `pageMetadata()` inherits the layout's noindex; a page that uses it but isn't registered stays noindex.
- Soft-404 risk: placeholders return 200 with real navigation content but are noindex, so they cannot enter the index as soft 404s. Launch rule: no navigation link may point to an unregistered route (launch blocker).

---

## 15. Migration / redirect requirements

Evidence (2026-10-06):
- `diadsigns.co.za` = WordPress (Twenty Twenty-Three, "back soon"). Published URLs: `/`, `/sample-page/`, `/2023/03/11/hello-world/`. No XML sitemap. `www` and `http` already 301 to `https://diadsigns.co.za/` (apex).
- `site:diadsigns.co.za` → **0 indexed pages**. No backlinks found to specific inner URLs.

Requirements:
1. **No redirect map needed** for WordPress URLs (nothing indexed, no equity). They will 404 – correct.
2. Keep **apex** as canonical (matches current behaviour). Configure both apex and www in Vercel; the app 308s www→apex.
3. DNS at **Xneelo**: point apex A/ALIAS + www CNAME to Vercel; keep MX records for email untouched. Confirm who controls DNS (§18).
4. Before switching DNS, re-run `site:` and check Search Console (if a property exists) for any newly indexed URLs.
5. If the owner-demo `/products/...` URLs are shared publicly before launch, add 308s to the final root-level URLs.

---

## 16. Search Console launch checklist

- [ ] Create **Domain property** `diadsigns.co.za` (DNS TXT at Xneelo) – preferred. Fallback: URL-prefix property with `GOOGLE_SITE_VERIFICATION` env (meta tag).
- [ ] Confirm production response: no `X-Robots-Tag`, `<meta name="robots" content="index, follow">`, canonical = `https://diadsigns.co.za`.
- [ ] `https://diadsigns.co.za/robots.txt` lists the sitemap; submit `/sitemap.xml`.
- [ ] URL Inspection → homepage → Request indexing.
- [ ] Rich Results Test + Schema Markup Validator on the homepage (expect LocalBusiness detected).
- [ ] Link GBP ↔ website; add the website on GBP.
- [ ] Monitor: Pages report (indexed vs excluded – placeholders must not appear), Core Web Vitals (field data once traffic exists), Enhancements.
- [ ] Add each new approved page to `lib/indexable-pages.ts`; resubmit sitemap.

## 17. Analytics launch checklist

- [ ] Decide GA4 direct vs GTM (GTM if ads/Meta pixel are planned). Set **one** of `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` in Vercel Production.
- [ ] **POPIA:** agree consent approach (banner vs analytics without advertising features/IP anonymisation); update privacy statement accordingly (current 2017 statement predates POPIA enforcement).
- [ ] Key events to configure: `quote_ready` (form validated), `email_handoff`, `whatsapp_click`, `tel_click`, `directions_click`. (Instrumentation hooks to be added when analytics is approved.)
- [ ] Link GA4 ↔ Search Console.
- [ ] Mark GBP website link with UTM so GBP traffic is attributable.

---

## 18. Client confirmation required

| # | Item | Discrepancy / gap | Why it matters |
|---|---|---|---|
| 1 | **Address unit** | Onboarding: *"Unit 7 and 8, Tomzeil"*. Business card, Terms of Trade, artwork spec, GBP: *"Unit 08"*. Site uses Unit 08. | NAP consistency (local ranking) |
| 2 | **"Over 10000 signs in stock"** | Units or product lines? | Strong USP if true and specific |
| 3 | **Delivery / service area** | Onboarding lists 9 provinces + 7 SADC countries as target & shipping areas; no other source confirms delivery | `areaServed`, delivery copy; no location pages either way |
| 4 | **3M** | Keyword doc lists "3M" | Trademark – only with authorised reseller/converter proof |
| 5 | **SABS photoluminescent certificate** | Claim verified from About Us; certificate not sighted | Before credential page / schema |
| 6 | **B-BBEE certificate** | Level 1 stated; expiry unknown | Displayed on homepage |
| 7 | **GBP access** | Profile shows "Own this business?" publicly; Updates exist | Needed to add website/categories |
| 8 | **GBP pin coordinates** | Not supplied | `geo` in schema (≥5 decimals) |
| 9 | **Domain/DNS control** | Xneelo; who holds login? | Launch |
| 10 | **Social profiles** | Onboarding "DiadSigns" (platform unknown); GBP links a LinkedIn profile | `sameAs` |
| 11 | **"Shipping and Truck Signs", "Message Boards"** | Keyword-doc terms copied from US catalogues | Whether DIAD offers them |
| 12 | **Corporate promotional gifts** | About Us mentions experience only | Scope of print family |
| 13 | **Reflective vest printing / vehicle branding volume** | Offered per onboarding | Page priority |
| 14 | **Founding / trading date** | Registration 2016; "34 years" is combined team experience | Never present as company age |
| 15 | **Mobile number on business card (072…)** | Personal line? | Keep off the site unless approved |
| 16 | **Canonical host** | Apex assumed (matches current WordPress redirects) | Confirm no www-only marketing material |

---

## 19. Future content opportunities (after owner approval)

1. **Photoluminescent signs** (P0): sign classes (E/F codes), where SANS 1186-5 applies, how photoluminescence works, installation heights, maintenance – with real product photos.
2. **Safety sign guide** (P2): the four sign classes and colours, SA regulatory context (OHS Act, SANS 1186) – answers PAA questions; link to categories.
3. **Choosing a sign material** (P2): ABS vs Chromadek vs ACM vs aluminium vs Correx – by environment and lifespan; supports custom-signs.
4. **Construction site board requirements** (P2) – if DIAD can speak with authority (NHBRC/municipal boards).
5. **Artwork specifications** (P1) – from the supplied PDF; practical, reduces friction.
6. **Case studies** – only with real photographed projects and client permission.

No blog-for-volume. Every article must link to a commercial page and answer a real buyer question.

---

## 20. SEO priorities

Page priorities: see the scoring model in **§7a** (source of truth). Programme priorities:

**P0 – before / at launch**
- Owner approval of homepage → build P0 pages: `/safety-signs`, `/safety-signs/photoluminescent-signs`, `/custom-signs`, `/about`, `/contact`, `/quote`; register each in `lib/page-registry.ts`.
- Clear every launch blocker (top of document), including the GBP website link (§9a).
- Launch switch + Search Console + sitemap; Rich Results / schema validation on production.

**P1 – first 1–3 months**
- P1 pages from §7a; GBP categories, description, products, photos.
- Connect keyword-volume data (Search Console after launch; optionally DataForSEO) and re-score §7a.
- Photography replaces illustrations on key pages.

**P2 – 3–6 months**
- P2 pages from §7a as their gates clear; reviews programme; local citation NAP audit (Snupit, Cylex, Infoisinfo).
- Performance: modern browserslist; trim DOM once photography replaces SVG illustrations.

**P3 – only if evidence justifies**
- Photoluminescent sign-code product pages, ABS signs page, remaining industry pages, general safety-sign guide.
