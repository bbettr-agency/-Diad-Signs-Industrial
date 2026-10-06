import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { MotionProvider, NOSCRIPT_FALLBACK } from "@/engine/motion";
import { site } from "@/config/site";
import { businessNode, graph, websiteNode } from "@/lib/schema";
import { INDEXABLE, SITE_ORIGIN } from "@/lib/indexing";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

/**
 * Site-wide defaults only. Each page sets its own title, description and
 * canonical through pageMetadata() (lib/seo.ts). Robots defaults to noindex;
 * only published pages on a launched deployment become indexable.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: "DIAD Signs & Industrial Suppliers", template: "%s | DIAD Signs" },
  applicationName: "DIAD Signs",
  // Fail-closed default: every route is noindex unless its own pageMetadata()
  // opts in (launched deployment + path in lib/page-registry.ts).
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: {
    icon: [{ url: "/brand/mark-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/mark-180.png", sizes: "180x180" }],
  },
  formatDetection: { telephone: false },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#F3F2EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={fontVariables}>
      <head>
        <noscript>
          <style>{NOSCRIPT_FALLBACK}</style>
        </noscript>
        <JsonLd data={graph(businessNode(), websiteNode())} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[80] rounded-plate bg-brand-ink px-4 py-3 text-sm font-semibold text-brand-bone focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
          <MobileActionBar />
        </MotionProvider>
        <Analytics enabled={INDEXABLE} />
      </body>
    </html>
  );
}
