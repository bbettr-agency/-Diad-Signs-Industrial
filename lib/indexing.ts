/**
 * Server-side view of the indexation switch. The rules live in
 * config/indexing.js (shared with next.config.js); see that file.
 * Import only from server code (metadata, route handlers, server components).
 */
const shared = require("../config/indexing.js") as {
  canonicalOrigin: () => string;
  isIndexable: () => boolean;
};

/** Canonical production origin, e.g. https://diadsigns.co.za (no trailing slash). */
export const SITE_ORIGIN: string = shared.canonicalOrigin();

/** True only for an explicitly launched production deployment. */
export const INDEXABLE: boolean = shared.isIndexable();

/**
 * Absolute canonical URL for an app path. The homepage is "https://host/"
 * (root always carries its slash, as Next emits for canonical); every other
 * path has no trailing slash, matching trailingSlash: false.
 */
export function absoluteUrl(path = "/"): string {
  const clean = path.replace(/^\/+|\/+$/g, "").toLowerCase();
  return clean ? `${SITE_ORIGIN}/${clean}` : `${SITE_ORIGIN}/`;
}
