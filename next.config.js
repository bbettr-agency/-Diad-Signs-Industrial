const { canonicalOrigin, isIndexable } = require("./config/indexing.js");

const INDEXABLE = isIndexable();
const ORIGIN = canonicalOrigin();
const CANONICAL_HOST = new URL(ORIGIN).host;
// The non-canonical twin: www ↔ apex, whichever the canonical origin is not.
const ALT_HOST = CANONICAL_HOST.startsWith("www.") ? CANONICAL_HOST.slice(4) : `www.${CANONICAL_HOST}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // QA builds can use a separate output folder so they never clobber a running dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // One URL per page: no trailing slash (Next default, made explicit).
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    // Owner demo and previews: noindex at the HTTP layer for every response
    // (HTML, images, sitemap, PDFs) – robust even if a meta tag is missed.
    if (INDEXABLE) return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },

  async redirects() {
    // Hostname consolidation onto the canonical host (apex today). HTTP → HTTPS is enforced
    // by Vercel. Old WordPress URLs are not redirected: none are indexed
    // (site: search returned 0 on 2026-10-06) – see docs/seo/SEO-FOUNDATION.md §15.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ALT_HOST }],
        destination: `${ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
