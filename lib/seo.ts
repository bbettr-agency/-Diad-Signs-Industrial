import type { Metadata } from "next";
import { INDEXABLE, absoluteUrl } from "@/lib/indexing";
import { isPublished } from "@/lib/page-registry";

/**
 * Per-page metadata. Every page calls this:
 *
 *   export const metadata = pageMetadata({ path: "/safety-signs", title: "…", description: "…" });
 *
 * Indexing is decided here, fail-closed. A page is `index, follow` only when
 *   1. the deployment is launched          (lib/indexing.ts → INDEXABLE), AND
 *   2. the path is in the registry          (lib/page-registry.ts → isPublished), AND
 *   3. the page hasn't opted out            (`noindex: true`, e.g. a thank-you page).
 * Otherwise it is `noindex, nofollow`. Unpublished pages also get NO canonical
 * and NO og:url, so they never emit a "this is the preferred URL" signal.
 */
export function pageMetadata({
  path,
  title,
  description,
  noindex = false,
}: {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}): Metadata {
  const published = isPublished(path) && !noindex;
  const allow = INDEXABLE && published;
  const canonical = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    ...(published ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      locale: "en_ZA",
      ...(published ? { url: canonical } : {}),
      siteName: "DIAD Signs & Industrial Suppliers",
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: allow
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}
