/**
 * Indexation switch – the ONE place that decides whether this deployment may
 * be indexed by search engines. Plain CommonJS so next.config.js (headers,
 * redirects) and the app (metadata, robots, sitemap) share identical logic.
 *
 * A deployment is indexable only when ALL of these hold:
 *   1. NEXT_PUBLIC_SITE_INDEXABLE === "true"   (an explicit launch decision)
 *   2. on Vercel, VERCEL_ENV === "production"  (previews can never index)
 *   3. the canonical origin is https and is not localhost or *.vercel.app
 *
 * Anything else – the owner demo, Vercel previews, local builds – is noindex.
 */

const DEFAULT_ORIGIN = "https://diadsigns.co.za";

function canonicalOrigin() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_ORIGIN).trim().replace(/\/+$/, "");
  return raw.toLowerCase();
}

function isIndexable() {
  if (process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "true") return false;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return false;
  const origin = canonicalOrigin();
  if (!origin.startsWith("https://")) return false;
  if (/localhost|127\.0\.0\.1|\.vercel\.app$/.test(origin)) return false;
  return true;
}

module.exports = { DEFAULT_ORIGIN, canonicalOrigin, isIndexable };
