import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_ORIGIN } from "@/lib/indexing";

/**
 * Demo/preview: crawling is ALLOWED on purpose. Every response already carries
 * `X-Robots-Tag: noindex, nofollow` (next.config.js) plus a robots meta tag,
 * and Google can only obey a noindex it is allowed to fetch – a robots.txt
 * Disallow would hide it and still permit URL-only indexing from links.
 * Production: allow all, declare the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: [{ userAgent: "*", allow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE_ORIGIN}/sitemap.xml`, host: SITE_ORIGIN };
}
