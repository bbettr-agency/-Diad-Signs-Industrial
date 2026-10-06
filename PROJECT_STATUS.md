# DIAD Signs & Industrial Suppliers – Project Status

Built on Bbettr Website OS v2.7 · Homepage demo · 2026-10-01
Scope: homepage demo + minimal shared infrastructure. Lead generation, **not** e-commerce.
Proposal: `docs/PHASE-A-B-PROPOSAL.md` (approved with adjustments 2026-10-01).

## Run

```bash
npm install
npm run dev        # http://localhost:3900
npm run build && npm run start   # production on :3900 (or -- -p 3901)
```

Deploy: Vercel, framework Next.js, no env vars required. `config/site.ts → indexable: false` keeps the demo noindex + robots-blocked. Flip to `true` only at launch on diadsigns.co.za.

## SEO foundation (2026-10-06)
Research, architecture and technical foundation complete – see docs/seo/SEO-FOUNDATION.md (source of truth).
Launch switch: NEXT_PUBLIC_SITE_INDEXABLE=true on Vercel Production only (see .env.example). Default = noindex everywhere.
No new public pages built. Placeholder routes remain noindex and outside the sitemap.

### ⛔ Launch blockers (full list: docs/seo/SEO-FOUNDATION.md, top + §9a)
- Google Business Profile has NO website linked → add https://diadsigns.co.za/ at launch, after NAP/address/phone/hours/category checks. Never keyword-stuff the GBP name.
- Resolve Unit 08 vs Units 7 & 8 before launch.
- Only registered pages (lib/page-registry.ts) may be linked from navigation at launch.

## Visual Direction Brief

| Item | Decision |
|---|---|
| Concept | "The Sign System" – applied with restraint to grid, type, navigation, micro-detail and motion |
| Density mode | Substantive |
| Motion character | `precise` |
| Type | Libre Franklin only (400 / 600 / 800). No mono. Chosen in-browser 2026-10-01 over Archivo cond + Plex Mono, Overpass, Red Hat, Schibsted |
| Colour | Substrate neutrals 90%; DIAD navy `#233579` structure; amber `#F3A60E` primary CTA only (ink text); WhatsApp green; logo red/blue/yellow/green only as safety-sign class codes |
| Radius | One 3px "plate" radius |
| Dark spotlights | 2 – Lights Out, Quote |

### Deliberate deviations from OS defaults (with reasons)
- **Radius**: 3px plate radius everywhere instead of `rounded-2xl` cards / `rounded-full` buttons – soft pills contradict a manufacturer of precise cut plates.
- **Display scale**: condensed Archivo removes ~25% visual mass, so `d-1…d-4` run ~1.25× the OS sizes. H1 still clears the 1280×800 and 390×844 fold.
- **Sign-class colours** beyond the single accent: they carry SANS 1186 meaning (and are the logo colours), so they are information, not decoration. Never used on text below 24px (red fails 4.5:1 on light).
- **Scroll-linked motion** (one instance, Lights Out): the photoluminescent demonstration *is* the product proof, so it passes the removal test.

## Anti-AI art-direction pass (2026-10-01)
Removed: numbered section markers, mono/uppercase eyebrows and labels, plate/station/industry codes, tech-grid backgrounds, crop marks, the four-colour bar, the data-plate card, the catalogue specimen card with tiny labels, the CSS "palette" material swatches, the numbered production stations, Lights Out meter and callouts, border-left callouts.
Redesigned: credentials as one plain sentence; catalogue right side as six different physical compositions (sign wall, cropped chevron board, tape/netting/cone, PPE objects, engraved + Chromadek + ACM offcut, vinyl roll + butterfly flag); ranges as a sentence of links; materials as edge-on offcuts showing construction; process as one line of large type.
Deliberately simple: credentials, ordering, quote intro, footer.
Screenshots: docs/qa/anti-ai/.

## Final composition pass (2026-10-01)
Macro rhythm: hero (impact) → credentials (quiet sentence) → catalogue (pinned full-screen stage, objects + family-name navigation) → Made Here (oversized statement, descending process staircase, stock pile) → Lights Out (unchanged) → Industries (sector names as type navigation, product lineup on a floor line) → Ordering (smaller, quiet) → Quote (navy).
Quote form no longer shows demo wording: a valid enquiry is handed to DIAD's real email / WhatsApp prefilled (server delivery = Phase 2).
Final screenshots: docs/qa/final/. Homepage only – no inner pages built in this phase.

## Narrative (homepage)
1. Hero – Sign Wall (type-led + product-true SVG plates, each links into its family)
2. Credentials – one plain sentence (SABS / SANS 1186-5, B-BBEE Level 1, CSD) + reg/VAT
3. Catalogue Index – 6 families dominate; ranges revealed one family at a time (sticky specimen panel desktop; disclosure + thumbnail mobile)
4. Made here – materials board (CSS material swatches) + six-station production line
5. Lights Out – scroll-linked photoluminescent demonstration (dark spotlight 1)
6. Industries – directory board, ranges mapped from catalogue
7. Ordering – trade counter / WhatsApp (+QR on desktop) / quote steps from Terms of Trade
8. Reviews – reserved, renders nothing until real review text is supplied
9. Quote form – demo states, not transmitting (dark spotlight 2)

## Motion rhythm
Signature: hero plate wipe (vinyl squeegee), catalogue specimen wipe + floor indicator, Lights Out.
Quiet: data plate (fade only), industries (fade), ordering (fade), form (none).
Rule draws on section markers and the production line. H1 never animates (LCP).
Reduced motion: every reveal renders final state; Lights Out renders its dark end-state as a normal section.

## ENGINE changes in this project (raise to the OS via the learning loop)
1. **BUG – `useMotionSafe` hydration mismatch (affects every site on the engine).** Motion 12's `useReducedMotion` reads `matchMedia` on the first client render, so reduced-motion users got different `<Reveal>` props than the server HTML and React discarded the whole root. Fixed: returns `false` until mounted. `engine/motion/useMotionSafe.ts`.
2. **BUG – `<Reveal>` above-fold dev warning** false-positives on `display:none` copies (desktop-only elements on mobile). Fixed: zero-size nodes skipped.
3. **NEW presets** `wipe` (clip-path reveal, artwork only) and `rule` (scaleX hairline). `NOSCRIPT_FALLBACK` now also clears `clip-path`.
4. **NEW** `scroll.ts` – `useSectionProgress` (rAF-measured, not `useScroll`: Motion's native ScrollTimeline path mis-mapped multi-window transforms and re-lit the scene at section end), `useProgressTransform`, `useProgressFormat`. `m` re-exported so components never import `motion/react` directly.

## Verified (2026-10-01)
- `npm run lint` ✔ · `tsc --noEmit` ✔ · `next build` ✔ (90 static pages)
- No horizontal overflow at 390 / 768 / 1024 / 1440
- 84 internal links from the homepage, all 200 (planned routes → designed noindex page; unknown → 404)
- LCP element = H1. Local production: desktop 116 ms; mobile (4× CPU, ~1.6 Mbps, 150 ms RTT) 732 ms. CLS 0 desktop / 0.025 mobile
- One H1, seven H2s, JSON-LD Organization+LocalBusiness+WebSite, canonical, noindex while demo
- Reduced motion: no hydration errors; Lights Out renders still
- Keyboard: Products panel opens/closes, Esc returns focus; mobile menu inert when closed

## Known limitations
- **First-load JS 176 kB** (framework 87 kB + Motion + page). Over the ~120 kB target in the proposal. Next step if needed: lazy-load LightsOut/Catalogue client code below the fold.
- **Quote form does not send** (explicit demo state). Phase 2: delivery to sales@ (Resend or CRM), artwork upload storage, POPIA consent wording reviewed.
- **No photography** – the demo is type-led + SVG product artwork by design. The WaysToOrder placeholder frame was removed (it read as unfinished).
- Header lockup's secondary serif line ("Signs and Industrial Suppliers Pty Ltd") is barely legible at header size – client artwork limitation; recommend a lockup tidy.
- Sign pictograms are simplified in-house drawings, not ISO 7010 artwork.
- Legal pages, About, Contact, family/category/industry pages: designed "in production" placeholders only.

## Open client items (do not ship claims until confirmed)
1. Address: GBP shows **Unit 08**; onboarding says **Units 7 and 8** – confirm one NAP.
2. "Over 10,000 signs in stock" – units or product lines? **Not used.**
3. SADC / cross-border delivery – **not claimed**.
4. Google reviews: aggregate 5.0 / 42 (GBP, 2026-10-01) shown; **review text needed** to render the reviews section (`content/reviews.ts`).
5. SABS photoluminescent certificate (scope + validity) and current B-BBEE certificate (expiry) – sight before launch.
6. Corporate promotional items – currently a category inside Print, display & branding.
7. Social profiles ("DiadSigns" – which platforms?).
8. Legal: 2017 website T&Cs clause 6.1 (permission required to link) and POPIA-era privacy statement need attorney review.

## Photography shot list (request from client)
Priority 1 – before launch
1. Trade counter + stocked shelving (wide + detail) – proves "ex-stock"
2. Production: wide-format printer, vinyl cutter, laminator, laser engraver, screen-print bed – hands at work
3. Photoluminescent signs glowing in a blacked-out room (long exposure) – replaces nothing on the homepage; becomes the hero of /photoluminescent-signs
4. Material macros: ABS, Chromadek, Correx, ACM edge, brushed/engraved aluminium, reflective sheeting
5. Building exterior + signage at Tomzeil Unit 08 (GBP + Contact)

Priority 2
6. Consistent PPE / site-product photography (neutral ground, same light/angle), by family
7. 6–10 finished installations at client sites (written permission to publish)
8. Team at work (optional)

## Future: multi-item quote list (approved, not built)
Catalogue nodes carry stable ids (`nodeId()` → `family` / `family/category`); the form already holds its selected families as an array of ids. A quote list adds client state of node ids + quantities and posts them with the same form – no URL or data-shape changes.
