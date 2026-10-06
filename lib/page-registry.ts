/**
 * PUBLICATION REGISTRY – the ONE mechanism that promotes a route from
 * "unfinished" to "published". Fail-closed: any path not listed here is
 * treated as unfinished, so it is noindex, has no canonical, and is absent
 * from sitemap.xml – in every environment, including production.
 *
 * Lifecycle (docs/seo/SEO-FOUNDATION.md §14a):
 *   UNFINISHED  → not listed → noindex · no canonical · not in sitemap
 *   PUBLISHED   → listed here (after owner approval + content complete)
 *               → indexable* · self-canonical · in sitemap
 *   * only when the deployment itself is launched (lib/indexing.ts).
 *
 * To publish a page: add its path here in the same change that ships the
 * finished page. Never add a placeholder.
 */
export type PublishedPage = { path: string; lastModified: string; priority?: number };

export const publishedPages: readonly PublishedPage[] = [
  { path: "/", lastModified: "2026-10-06", priority: 1 },
];

const normalise = (p: string) => "/" + p.replace(/^\/+|\/+$/g, "").toLowerCase();

const published = new Set(publishedPages.map((p) => normalise(p.path)));

export function isPublished(path: string): boolean {
  return published.has(normalise(path));
}
