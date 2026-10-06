import type { MetadataRoute } from "next";
import { INDEXABLE, absoluteUrl } from "@/lib/indexing";
import { publishedPages } from "@/lib/page-registry";

/** Production: published pages only (lib/page-registry.ts). Demo/preview: empty. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!INDEXABLE) return [];
  return publishedPages.map((p) => ({ url: absoluteUrl(p.path), lastModified: new Date(p.lastModified), priority: p.priority }));
}
