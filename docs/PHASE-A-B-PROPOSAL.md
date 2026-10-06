# DIAD Signs & Industrial Suppliers – Phase A Discovery + Phase B Homepage Concept

Status: PROPOSAL – awaiting approval. No code written.
Date: 2026-10-01 · Prepared by Bbettr Agency
Scope: homepage demo only · lead-generation, NOT e-commerce (scope override applied)

---

## PHASE A – DISCOVERY

### A1. Source inventory (all 11 files read in full)

| File | Kind | What it actually contains |
|---|---|---|
| DiAd_Logo.pdf | Vector | 3 logo lockups + a CMYK/RGB swatch sheet. Fully vector: usable as SVG |
| QR_Code_for_Whatsapp.pdf | Vector | WhatsApp QR (not decoded locally – verify it resolves to 068 334 6476) |
| BUSINESS_CARD_MAGS_MAGDANI.pdf | Vector | Card for Mags Magdani: mags@, office line, personal cell, address, tagline |
| ABOUT_US.pdf | Text | Positioning, credentials, industries, Industrial Suppliers division |
| WHAT_WE_DO.docx | Text | 5 services + 12-line product range |
| Website_Keywords.docx | Text | ~80 comma-separated terms, the whole list pasted twice |
| Supplied_Artwork_Specifications.pdf | Text | Artwork rules, R750 PMS fee, EPS/PDF outlines, reg + VAT numbers, PO box |
| Terms_of_Trade.pdf | Text, 7pp | Quote/order/proof/payment/installation terms |
| WEBSITE_PRIVACY_STATEMENT (2017) | Text | POPIA-referencing privacy statement |
| WEBSITE_TERMS_AND_CONDITIONS (2017) | Text | Website terms of use |
| Website-Design-Onboarding.pdf | Text | Our onboarding form: services, USP, pages, locations, references, contact |

Not in the repo: Google reviews (brief says they exist – they don't), any photography, any product imagery.
Existing site diadsigns.co.za: an unconfigured WordPress "back soon" page (Twenty Twenty-Three, "Hello world!" post, title typo "qality"). Zero SEO equity to preserve, zero assets to inherit, no redirect map needed.

### A2. Business understanding

DIAD is two businesses under one roof in Waltloo, Pretoria East:

1. **A sign manufacturer** ("primarily a sign manufacturing company") – safety, construction, mining and road signs, custom signs, large-format digital print, display. Has an art department, pre-press, laminating, mounting, in-house packaging, installation on request.
2. **A walk-in industrial supplier** ("Industrial Suppliers" division) – ex-stock PPE and construction-site products customers can buy at the premises.

The link between the two is **compliance**: a site, factory, school or government building has to be signed AND its people equipped to meet the OHS Act, National Building Regulations, NHBRC etc. DIAD sells both halves.

Verified credentials (About Us + logo collateral):
- SABS-approved manufacturer of photoluminescent signs conforming to SANS 1186-5
- B-BBEE Level 1 (135% procurement recognition)
- Registered vendor on the CSD (Central Supplier Database)
- Team with "over 34 years" **collective** experience (NOT company age – company reg is 2016)
- Reg. 2016/493136/07 · VAT 4750277347

### A3. Target audiences

| Audience | Trigger | What they need to know fast |
|---|---|---|
| Procurement / buyers (corporate, government, SOE) | RFQ, tender, approved-supplier list | BEE level, CSD, reg/VAT, can they quote the whole list |
| SHEQ / safety officers | Audit finding, new site, OHS inspection | Correct compliant signs, PPE, quickly, from stock |
| Contractors / site managers | Site establishment | Site boards, cones, barriers, tape, PPE, delivery |
| Facilities managers (healthcare, education, retail, telecoms) | Occupancy, fire inspection, refit | Fire & exit, photoluminescent, wayfinding, office signs |
| Marketing / branding buyers | Event, fleet, store | Banners, flags, decals, vehicle branding, POS |
| Walk-in trade (Pretoria East) | Need it today | Address, hours, what's on the shelf |

Industries named by the client: Telecommunications, Healthcare, Government, Retail, Mining, Construction, Education.

### A4. Products & services discovered (union of all documents)

Services (What We Do): pre-press & design (hi-res scanning, image library, layout/artwork, colour management) · laminating (matte, gloss, non-slip; UV, chemical, graffiti resistance) · mounting to substrates (internal/external) · packaging & distribution (partner couriers) · installation (arranged).

Products, consolidated and de-duplicated across About Us, What We Do, Keywords and Onboarding – see taxonomy below for placement. Materials named: ABS plastic, Correx, Chromadek, ACM/Dibond, aluminium (frames, engraved), photoluminescent, reflective (3M mentioned), magnetic, vinyl.

### A5. Proposed product taxonomy (Family → Category → Product)

Six families. Industry is a *second lens*, not a seventh family.

| # | Family | Categories (evidence-based only) |
|---|---|---|
| 01 | **Safety Signs** | Symbolic safety signs (prohibition · mandatory · warning · safe condition) · Fire equipment & emergency exit · Photoluminescent (SANS 1186-5) · First aid · No smoking · Security · Scaffold tags · Lockout tags · Wet floor & free-standing · Posters & charts · Message boards |
| 02 | **Road & Traffic** | Road & traffic signs · Sign posts & accessories · School & scholar-patrol signs · Chevrons · Delineators · Hazard markers · Reflective tape · Revolving amber lights |
| 03 | **Site Safety & Barriers** | Road/traffic cones · Water barriers · Barrier & demarcation tape · Barrier netting · Safety chain · Hazard tape · Anti-slip tape · Emergency horns · Megaphones |
| 04 | **PPE & Workwear** | Gloves (incl. pig-skin) · Hard hats · Dust masks · Goggles · Reflective vests & bibs · Overalls · Aprons · Safety boots & shoes · Reflective vest printing |
| 05 | **Custom Signs & Engraving** | By material: ABS · Chromadek · Correx · ACM/Dibond · Aluminium & frames · Magnetic. By process: engraved signs & labels (laser) · screen-printed signs · 3D signs · light boxes. By use: construction site boards · mining signs · factory/warehouse · office & facility signs |
| 06 | **Print, Display & Branding** | Wide-format digital printing · Screen printing · Banners · Flags (incl. butterfly) · Posters · Window & vinyl decals · Floor graphics · Printed wallpaper · Rigid/textured substrate prints · Point-of-sale & display systems · Vehicle branding · Shipping & truck signs |

Design decision: mining/construction/factory signs appear as *use cases* inside families 01/05 and as *industry lenses* (/industries/mining) – not as duplicated categories. One canonical URL per thing.

### A6. Proposed eventual sitemap

```
/                                   Home (this phase)
/products                           Catalogue index (all families)
/products/[family]                  6 family pages
/products/[family]/[category]       ~60 category pages – built only when each has real content
/products/[family]/[category]/[product]   only where a product has its own spec/imagery
/industries/[industry]              7 curated collection pages (mining, construction, healthcare,
                                    government, education, retail, telecommunications)
/manufacturing                      Capability: processes, materials, finishes, installation
/photoluminescent-signs             Credential-led landing page (SANS 1186-5) – highest-value unique page
/resources/artwork-specifications   From the supplied PDF (+ downloadable)
/resources/how-to-order             Quote → order form → proof → production → delivery/collection
/resources/safety-sign-colour-code  Explainer of the 4 sign classes – linkable resource
/about                              Incl. procurement credentials block
/work                               Only once real project photography exists
/delivery                           ONE page covering provinces + SADC (if confirmed) – no city pages
/contact                            Trade counter, map, hours, WhatsApp
/quote                              Request a quote (family pre-select, artwork upload)
/legal/{terms-of-use, privacy, terms-of-trade}
```

Onboarding asked for "Services" and "Shop / E-commerce": Services becomes /manufacturing + the services strip (they're processes, not the product); Shop becomes /products (catalogue) + /quote.

### A7. SEO findings from the keyword document

The list is a raw paste, duplicated, and partly copied from US competitor navigation (compliancesigns.com's category names: "Message Boards", "Posters & Charts", "Shipping and Truck Signs", "Facility Signs", "OSHA Safety Signs").

Corrections:
- **"OSHA Safety Signs"** – OSHA is the US regulator. SA searchers use "OHS Act signs", "SANS 1186 signs". Re-target.
- **"Lazer Engraving"** → laser engraving. **"Scholar Patrol"** duplicated. **"Butterfly"** → butterfly banners/flags. **"Pig Skin"** → pig-skin gloves.
- **"3M"** – only target if DIAD is an authorised 3M reflective converter/reseller. Confirm.
- Duplicates removed: ~80 terms → ~62 unique.

Opportunities (volumes to be validated with DataForSEO before Phase 2 content):
- **Homepage:** brand + "safety signs Pretoria", "sign manufacturer Pretoria", "PPE supplier Pretoria", "safety signs and PPE South Africa".
- **Credential moat:** "photoluminescent signs", "SANS 1186-5 signs", "SABS approved photoluminescent signs" – few SA competitors can truthfully claim this. Highest-priority page.
- **Material long-tail (high intent, low competition):** chromadek signs, ABS safety signs, correx boards, ACM/dibond signs, engraved labels, magnetic signs, construction site boards.
- **Product-commodity terms:** road cones, barrier netting, barrier tape, wet floor signs, scaffold tags, reflective vests – compete with catalogue sites; win with category depth + Pretoria trade counter.
- **Service intent:** vehicle branding Pretoria, reflective vest printing, wide format printing Pretoria.
- **Resource links:** a proper safety-sign colour-code explainer and artwork-specs page earn links from SHEQ blogs and procurement teams.

Do NOT: build pages per SADC country or per province; mark up AggregateRating on own site; claim 3M/SABS on product lines not covered.

### A8. Brand & colour findings

Logo artwork values (extracted from the vector file):

| Colour | Artwork hex | On-white contrast | Note |
|---|---|---|---|
| DIAD navy | `#233579` | 11.3:1 | Strongest, most usable; already dominant on the business card |
| Signal red | `#ED1C24` | 4.4:1 | **Fails body text** – large type / graphics only |
| Amber | `#F3A60E` | 2.0:1 (white text) · 8.8:1 (ink text) | Ink text on amber only |
| Safety green | `#0C713E` | 6.1:1 | Distinct from WhatsApp `#25D366` |
| Ink | `#231F20` | – | Wordmark black |

**The insight that drives the whole design:** the four logo colours – red, blue, yellow, green – are exactly the four colours of the safety-sign colour code (SANS 1186 / ISO 7010): **red = prohibition & fire, blue = mandatory, yellow = warning, green = safe condition.** DIAD's brand is, unintentionally, the system it manufactures. So the palette rule writes itself: *colour on this site only appears when it means something*, the way it does on a sign. Neutral substrate + navy carry 90% of the page; red/blue/amber/green appear only on sign artwork and as category codes.

Contradictions in the brand files:
- The swatch sheet's RGB values (`0,25,184` / `240,8,0` / `250,166,0` / `0,151,6`) do NOT match the logo artwork (they're over-saturated screen conversions). Use the artwork values above.
- Business card introduces a teal (`#3DA1B8`) and navy swooshes (`#1A2C4C`) found nowhere in the logo. Drop teal; keep the deep navy as our dark surface.
- Lockup secondary line "Signs and Industrial Suppliers Pty Ltd" is set in a dated Bookman-style serif and becomes illegible below ~48px height. For the header we use the vector lockup as supplied (we do not redraw a client's logo), sized so the wordmark leads. Recommend a light lockup tidy as a future brand task.
- The "Λ" with red star in the wordmark is a nice signage-like detail – the star is the only red in the identity, reinforcing "red is rare and meaningful".

### A9. Available visual assets

- Vector logo (3 lockups) – usable ✔
- WhatsApp QR – usable (desktop "scan to chat") ✔ after verification
- Business card – reference only
- **Photography: none. Product imagery: none. Premises, team, machinery, installations: none.**

Consequence: the demo cannot honestly be photography-led. It must be **type-led + product-true vector artwork** (DIAD manufactures signs; rendering sign plates is showing the product itself, not faking work). Photography slots are kept to a minimum and marked as pending.

### A10. Photography / asset request (shoot brief for the client)

Priority 1 (needed before launch):
1. Trade counter + stock shelving – proves "ex-stock" and range (wide + detail)
2. Production: wide-format printer, vinyl plotter/cutter, laminator, laser engraver, screen-print bed – hands at work, not posed
3. Photoluminescent signs glowing in a blacked-out room (long exposure) – the hero asset for the credential page
4. Material macros: ABS, Chromadek, Correx, ACM, brushed aluminium engraving, reflective sheeting
5. Building exterior + signage at Tomzeil Unit 8 – for GBP and Contact

Priority 2:
6. Consistent product photography for PPE & site products (neutral ground, same light, same angle) – phase by family
7. 6–10 finished installations at client sites (with written permission to publish)
8. Team at work (optional, natural)

Also needed: real Google reviews export (or permission to quote named reviews), SABS photoluminescent certificate (scope + validity), current B-BBEE certificate/affidavit (expiry), CSD supplier number (optional display), social profile URLs ("DiadSigns" – which platforms?).

### A11. Contradictions & gaps requiring client confirmation

1. **Address:** "Unit 8" (card, ToT, artwork spec) vs "Unit 7 and 8" (onboarding). NAP must be identical everywhere – which?
2. **Hours:** onboarding says Mon–Fri 07:30–16:30; ToT says quotes assume 08:00–17:00 labour hours (production basis, not trading hours). Use 07:30–16:30 for the trade counter – confirm.
3. **"Over 10,000 signs in stock"** – 10,000 units or 10,000 product lines? Very different claims. Not used until confirmed.
4. **"34 years"** is collective team experience – will never be written as company age.
5. **Service area:** onboarding lists 9 provinces + 7 SADC countries as target/shipping areas. Do they actually deliver cross-border (customs, couriers)? Until confirmed: "Delivered nationwide from Pretoria" is the most we state, and even that needs a yes.
6. **Phones:** office 012 803 0980, WhatsApp 068 334 6476. Mags's personal cell (072…) stays off the site unless asked. Fax (086…) omitted – obsolete.
7. **Email:** sales@diadsigns.co.za is the public address.
8. **Corporate promotional gifts** appear in About Us experience but nowhere in the range. Still offered?
9. **SABS & PPE claims:** "SABS and/or EU compliant PPE" – fine as a range statement, never per product without the product's own certification.
10. **Legal documents:** Website T&Cs (2017) clause 6.1 requires written permission before anyone links to the site – hostile to SEO and unenforceable in practice; recommend removal. Privacy statement predates POPIA enforcement (2021): needs an Information Officer, cookie/analytics and WhatsApp/forms disclosure. Terms of Trade reference "state legislation" and the Australian-style "Trade Practices Act" – appears template-derived. Recommend attorney review; we publish as supplied, but flag.
11. **Reviews:** not in repo. Section omitted until real reviews are supplied.
12. **Canonical domain:** currently redirects www → apex (diadsigns.co.za). We keep apex as canonical unless told otherwise.

---

## PHASE B – HOMEPAGE CONCEPT

### B1. The Blocking Question

> **"Will they have what I need – compliant, on the shelf or made quickly – and can I procure from them?"**

Three doubts packed into one: range, compliance, procurement legitimacy. Every section answers one part of it.

### B2. Visual direction (Visual Direction Brief)

**Concept: "The Sign System."** The site is designed the way a good safety sign is designed: a neutral substrate, a disciplined grid, one message per plate, colour that only ever carries meaning. Secondary vocabulary comes from DIAD's own production floor: print registration marks, the CMYK colour bar, engraved aluminium labels, wayfinding directory boards.

- **Density mode:** Substantive (industrial supplier with a broad range – minimal would read small). Rhythmic, not cramped.
- **Motion character:** `precise` (0.45s sections / 0.05 stagger) – engineered, efficient.
- **Surface:** "substrate white" (warm off-white like white ABS/Chromadek, ~`#F4F3EF`) as default; a cooler grey step for grouping; **deep DIAD navy (~`#111A3A`) for dark spotlights – not black.** Max two dark spotlights.
- **Colour roles:**
  - Primary (structure, links, rules): DIAD navy `#233579`
  - Accent (primary CTA only): amber `#F3A60E` with ink text – the "act here" signal, literally warning-yellow
  - WhatsApp `#25D366` – the only other action colour
  - Red/blue/amber/green as **sign-class codes** – on sign artwork and catalogue codes only, never decoration. Red never for text under 24px.
- **Typography (2 families):**
  - Display + body: **Archivo** (variable, with width axis) – condensed widths for big headlines (signage-like, efficient), normal width for body. A grotesque built for legibility, without the cliché of DIN/Highway Gothic.
  - Technical: **IBM Plex Mono** – catalogue codes, spec lines, credential numbers ("SANS 1186-5", "REG 2016/493136/07"). Small sizes only.
  - Alternative pairing if you prefer: Inter Tight + JetBrains Mono (safer, less character).
- **Radius:** a single **3px "plate" radius** – the radius of a real cut sign plate. Rectangular buttons. *Deliberate, documented deviation* from the OS default (`rounded-2xl` / `rounded-full`): pills and soft cards would contradict a manufacturer of precise flat plates.
- **Signature details (used sparingly):** hairline rules with registration ticks at section starts; a 4-segment colour bar (the logo colours = the SANS colour code = a print colour bar) used at most twice; mono catalogue codes (`01 · SAFETY SIGNS`); engraved-label plate for credentials.
- **Explicitly not:** black backgrounds with hazard stripes, diagonal tape bands, rounded card grids, gradients, glow (except the one physically accurate photoluminescent moment), stock photography.

### B3. Section-by-section

#### 0 · Header + navigation
- **Purpose:** orientation, constant quote/WhatsApp access, hint at catalogue depth.
- **Content:** logo · Products (opens catalogue panel) · Custom signs · Industries · About · Contact | 012 803 0980 · WhatsApp icon · **Request a quote** (amber). A slim utility line above: "Trade counter · Unit 8 Tomzeil, 275 Maggs Street, Waltloo · Mon–Fri 07:30–16:30".
- **Composition:** full-width, hairline bottom rule, substrate background.
- **Catalogue panel (desktop mega-menu):** six families as a numbered directory with their categories listed beneath in mono/sans – essentially the building directory board. Every link resolves to a designed coming-soon state (see B5).
- **Mobile:** full-screen sheet; families as large rows with sign-class colour tab; categories expand inline; quote + WhatsApp pinned at the bottom of the sheet.
- **Motion:** header background/rule settle on scroll (OS sticky pattern, never height). Panel opens with a 200ms clip reveal downward; items stagger 0.03s. Esc closes, focus trapped, arrow-key navigation.
- **SEO:** real `<nav>` with crawlable `<a href>` to every family – descriptive internal links from day one.

#### 1 · Hero – "The Sign Wall" (Archetype C Capability, type-led)
- **Purpose:** answer "what is this" and start answering the Blocking Question in 5 seconds.
- **Content:**
  - Eyebrow (mono): `SIGN MANUFACTURER · INDUSTRIAL SUPPLIER · PRETORIA`
  - H1 (one, ~2 lines): **"Safety signs, PPE and custom signage – made and stocked in Pretoria."**
  - Lead: "We manufacture safety, construction, mining and road signs in Waltloo, and supply the PPE and site equipment that goes with them. Off the shelf at our trade counter, or made to your specification."
  - Proof (max 3, right at the CTA): SABS-approved photoluminescent sign manufacturer (SANS 1186-5) · B-BBEE Level 1 · Registered CSD supplier
  - CTAs: **Request a quote** (amber) · Chat on WhatsApp (green outline)
- **Composition (desktop):** 12-col; copy 5 cols left, H1 large condensed. Right 7 cols: a wall of sign plates on the grid – the four sign classes, a fire/exit plate, a road-sign shape, a chevron, a scaffold tag, an engraved label – drawn in SVG as product-true artwork. It reads as DIAD's stock wall. Each plate is a link into its family (hero becomes the first discovery surface).
- **Mobile:** H1 + lead + CTAs above the fold at 390×844; the wall becomes a single horizontally scrollable row of plates directly beneath the CTAs (overlapping the fold by ~60px as a scroll cue).
- **Motion:** H1 never animates (LCP). Sign plates "apply" one by one with a **vinyl-squeegee wipe** – a masked left-to-right reveal at 0.45s, staggered, transform/clip only, total under 1s. Hover/focus on a plate: it lifts 4px and a mono label slides in ("Warning signs → 01"). No parallax, no cursor effects.
- **Conversion:** quote + WhatsApp above the fold on both breakpoints.
- **SEO:** H1 carries "safety signs", "PPE", "custom signage", "Pretoria" in natural English; all copy server-rendered; SVG plates have accessible names.
- **Pictograms:** drawn in-house as simplified generic symbols – we do not reproduce ISO 7010 artwork verbatim.

#### 2 · Supplier data plate – procurement credentials
- **Purpose:** answer "can I procure from them?" for buyers before they invest time. Most competitors hide this in a PDF.
- **Content:** a single horizontal plate styled like an engraved aluminium rating label (a product DIAD actually makes): `SABS APPROVED · PHOTOLUMINESCENT SIGNS · SANS 1186-5` | `B-BBEE LEVEL 1 · 135% PROCUREMENT RECOGNITION` | `CSD REGISTERED VENDOR` | `REG 2016/493136/07` | `VAT 4750277347`. Plus one line: "A team with over 34 years' combined experience in signage and PPE."
- **Composition:** full-width band, brushed-metal neutral tone, mono type, fine rules between cells, corner "rivets" (tiny circles) – restrained.
- **Mobile:** 2-column grid of cells, not a horizontal scroll.
- **Motion:** none beyond a rule draw. This is a reference band – it should feel fixed.
- **Conversion:** link "Request supplier documents" (opens quote form with that intent).
- **SEO:** reinforces entity facts that also go in Organization schema.

#### 3 · The Catalogue Index – product discovery (core section)
- **Purpose:** show the breadth without dumping 60 cards; let every visitor find "their" category in seconds.
- **Concept:** a sticky directory. Left column (4 cols, sticky): the six families as a numbered index – `01 Safety Signs … 06 Print, Display & Branding` – with a moving indicator (like a lift floor indicator) on the active family. Right column (8 cols, scrolls normally): one panel per family, each with a large family title, a one-paragraph plain description, its category list as a dense two-column ruled list (every category a real link), a sign-artwork specimen for that family, and a family-specific CTA ("Quote a PPE order", "Send us your site-board artwork").
- **Why this over tabs/carousels:** every family and category is visible in HTML and on screen – nothing hidden behind tabs (SEO + scanning), no scroll hijack, and it scales to any number of categories. Directly adapted from the Bbettr Progressive Capability pattern (Vision Motors), but turned into a catalogue rather than a services list.
- **Mobile:** sticky index collapses to a horizontal chip bar pinned under the header (current family highlighted, tap to jump); panels stack. Category lists stay fully visible.
- **Motion:** active-family indicator slides along the index (rAF-throttled position check, `aria-current`). Panel titles reveal with the standard fade-up; specimen artwork uses the vinyl wipe once. Arrow glyphs on category links nudge 4px on hover/focus (wayfinding).
- **Conversion:** a quote CTA per family, pre-selecting that family in the form.
- **SEO:** the homepage's main keyword surface – six H2s (family names), ~60 descriptive internal links to category URLs. This is where the future hub-and-spoke structure begins.
- **No-JS fallback:** a normal two-column list; the index still works as anchor links.

#### 4 · Made here – manufacturing capability
- **Purpose:** answer "can they make what isn't on the shelf?" and separate DIAD from pure resellers.
- **Content (from What We Do + Artwork Specs + ToT):** a six-step production line: *Artwork & pre-press → Print / cut / engrave → Laminate (matte, gloss, non-slip) → Mount → Pack & deliver → Install (arranged)*, each with one specific line. Beneath, a **materials rail**: ABS · Chromadek · Correx · ACM/Dibond · Aluminium · Photoluminescent · Reflective · Magnetic · Vinyl – each a swatch with what it's used for.
- **Composition:** asymmetric; heading 5 cols left with a short statement; process as a horizontal ruled sequence (numbered stations) on desktop, a vertical line on mobile. One placeholder photo slot, clearly labelled "Photography pending – wide-format print room".
- **Motion:** the process rule draws progressively as the section scrolls into view (scroll-linked scaleX on one line – cheap, not hijacked). Material swatches reveal with a short stagger.
- **Conversion:** "Supply print-ready artwork (EPS/PDF, fonts outlined)" → artwork specs; "Request a custom sign quote".
- **SEO:** material terms (chromadek signs, ABS signs, correx, dibond, engraved) in natural context.

#### 5 · Lights out – the photoluminescent moment (dark spotlight 1)
- **Purpose:** prove DIAD's standard with its one unique, verifiable credential. This is the page's centre of gravity and its memorable moment.
- **Content:** H2 along the lines of "When the power fails, our signs keep working." Short explanation of photoluminescent signs (they charge from ambient light and glow during a power failure to guide evacuation), the SABS approval and SANS 1186-5, and where they're used (escape routes, stairwells, fire equipment). No luminance or glow-duration figures unless DIAD supplies them.
- **Composition:** full-bleed deep navy section, the one deliberate break from the grid. A large emergency-exit plate rendered at scale in SVG.
- **Motion:** as the section enters, the surface goes from substrate to dark (scroll-linked, background only) and the exit plate shifts from its daylight colours to the pale yellow-green glow of real photoluminescent material. It's physically accurate, not a neon effect. Reduced motion: the dark state, static.
- **Conversion:** "Specify photoluminescent signs" → quote with family pre-selected.
- **SEO:** owns the credential keywords; links to the future /photoluminescent-signs page.

#### 6 · Industries – the directory board
- **Purpose:** answer "do they understand my sector?" without inventing projects or client logos.
- **Content:** the seven industries from About Us as rows of a building directory board: *Mining → mining signs, PPE, reflective vests, barrier netting* … *Education → school & scholar-patrol signs, fire & exit, first aid* … Each row shows what that sector typically orders from the existing range (derived from the catalogue, not from claimed projects).
- **Composition:** full-width ruled table, mono row codes, arrow right-aligned. Light surface.
- **Motion:** row hover/focus: arrow travels 6px, row background shifts one tone. Rows reveal with a tight stagger.
- **SEO:** links to future /industries pages (mining safety signs, construction site signage…).
- **Conversion:** soft. Each row links to its industry page (coming soon) with a quote CTA.

#### 7 · Three ways to order – trade counter, WhatsApp, quote
- **Purpose:** answer "how do I actually get it?" and turn the ordering terms into reassurance.
- **Content:** three channels in one composed block:
  - **Walk in:** address, hours, map (static image + link, no heavy embed), "Ex-stock safety signs and PPE at the counter".
  - **WhatsApp:** number + QR (desktop scan-to-chat), "Send a photo of what you need".
  - **Quote:** "Send your list or artwork – quotes are valid for 30 days; nothing goes to production before you approve the proof." (from Terms of Trade)
- **Composition:** 12-col split, Walk-in gets the largest cell (location is a real advantage for Pretoria buyers). One small labelled photo slot for the building exterior.
- **SEO:** NAP in HTML, matching the schema exactly. Local-intent signal.
- **Conversion:** the strongest mid-page conversion block.

#### 8 · Reviews – conditional
Only built once real Google reviews are supplied. If not, the section doesn't exist; we don't ship an empty frame. When present: 3 verbatim reviews with names, dates and a link to the Google profile. No decorative stars, no review schema on our own site.

#### 9 · Request a quote (dark spotlight 2)
- **Purpose:** the single primary conversion.
- **Content:** a short form – name, company, email/phone, "What do you need?" (family multi-select), quantity/notes, artwork upload (PDF/EPS/AI), preferred reply channel (email / WhatsApp / call). Beside it: phone, WhatsApp, email, hours.
- **Demo behaviour:** fully designed states (focus, error, success); submission wired later (Phase 2 decides between Resend and a CRM). The demo shows a clear "demo – not yet sending" success state so nobody submits into a void.
- **Motion:** none beyond field focus states and the button press. Forms should feel still.

#### 10 · Footer
NAP · hours · phone/WhatsApp/email · six families + key categories (descriptive links) · About / Contact / Resources · legal (Terms of use, Privacy, Terms of trade) · Reg + VAT · B-BBEE Level 1. The colour bar appears here a second (final) time.

### B4. Narrative check (Law 5)

Hero: what & where → Data plate: can I buy from you → Catalogue: do you have mine → Made here: can you make what isn't stocked → Lights out: how good is your standard → Industries: do you know my world → Three ways to order: how do I get it → Quote: do it now.
Eight sections, each answers one question. Surface rhythm: light · metal · light · tint · **dark** · light · tint · **dark**. No two adjacent sections share a tone.

### B5. Coming-soon routes

`/products/[family]`, `/industries/[industry]`, `/manufacturing`, `/about`, `/contact`, `/quote`: one shared, well-made template driven by the same catalogue data – family title, its category list (useful already), "This page is being built", quote + WhatsApp. All `noindex` until real content ships. No 404s from any link on the homepage.

### B6. Technical & SEO architecture

- **Stack:** Next.js App Router · TypeScript · Tailwind · motion via `ENGINE/motion` presets (new behaviours – vinyl wipe, scroll-linked surface dim, index indicator – get added to the ENGINE in the OS, not inline). Fonts via `next/font` (Archivo variable + IBM Plex Mono subset). Vercel.
- **Data layer:** `content/catalogue.ts` – typed `Family → Category → Product` with `slug`, `name`, `summary`, `signClass`, `materials`, `industries`, `keywords`, `status: 'planned' | 'live'`. Homepage, nav, footer, coming-soon pages and sitemap all read from it. Migrates cleanly to a CMS/DB later.
- **Rendering:** homepage fully server-rendered; motion is enhancement only. SVG sign artwork inline as components (no image requests for the hero).
- **Metadata:** title ~"Safety Signs, PPE & Custom Signage in Pretoria | DIAD Signs"; description written per page; OG image built from the sign wall; canonical `https://diadsigns.co.za/`.
- **Schema (verified facts only):** `Organization` + `LocalBusiness` (name, legal name, logo, address, geo, telephone, email, openingHours Mo–Fr 07:30–16:30, sameAs GBP), `WebSite`. `hasOfferCatalog` listing the six families (no prices). No AggregateRating, no awards/certification properties until certificates are seen.
- **Demo protection:** Vercel demo is `noindex, nofollow` + robots disallow, so it can't compete with the real launch later.
- **Performance budget:** LCP = H1 text (no hero image), JS for motion lazy-hydrated, CLS 0, total JS for the homepage < ~120KB gz.
- **Accessibility:** keyboard-complete mega-menu and index; visible focus on every surface; 44px targets; reduced motion = everything static and fully visible; sign artwork with real accessible names; colour never the only carrier of meaning (every sign-class code also has a text label).

### B7. What I'm challenging

- **In the onboarding:** "Shop / E-commerce" → catalogue + quote (scope override). "Portfolio / Gallery" → deferred until real project photos exist; an empty gallery is worse than none. Reference sites (safetysign.com, compliancesigns.com…) are product-search-first catalogue stores – we keep their *findability* (catalogue depth, category navigation) and drop their aesthetic (dense, generic retail). Keyword list cleaned of US terms and duplicates.
- **In the brief to me:** "large-scale product/signage photography" isn't possible yet, so the concept is built to be excellent without it and to get better when the shoot happens. Rather than a ticker/marquee, I'd keep motion to the four purposeful moments above. The OS default of rounded cards and pill buttons is set aside for this brand, with a written reason.

### B8. Open questions (please answer or delegate to the client)

1. Google reviews: supply an export / permission, or omit section 8 for the demo?
2. "10,000+ signs in stock": units or product lines? Use it in the hero once confirmed?
3. Address: Unit 8, or Units 7 & 8?
4. Cross-border delivery to the SADC countries: real, or aspiration?
5. Typography: Archivo + IBM Plex Mono (recommended) or the safer alternative?
6. Later phase: a multi-item **quote list** (add categories to one enquiry, no prices, no checkout). Useful for procurement lists, but it's cart-shaped, so I won't build it without your yes.
7. Corporate promotional gifts: include as a family or drop?
