import { Hero } from "@/components/home/Hero";
import { Credentials } from "@/components/home/Credentials";
import { Catalogue } from "@/components/home/Catalogue";
import { MadeHere } from "@/components/home/MadeHere";
import { LightsOut } from "@/components/home/LightsOut";
import { Industries } from "@/components/home/Industries";
import { WaysToOrder } from "@/components/home/WaysToOrder";
import { Reviews } from "@/components/home/Reviews";
import { QuoteSection } from "@/components/home/QuoteSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { graph, webPageNode } from "@/lib/schema";

/** Chosen from SERP research – docs/seo/SEO-FOUNDATION.md §8. */
const TITLE = "Safety Sign Manufacturer & PPE Supplier in Pretoria | DIAD Signs";
const DESCRIPTION =
  "DIAD makes safety, road and custom signs in Waltloo, Pretoria, and supplies PPE and site safety equipment from stock. SABS-approved photoluminescent signs. Request a quote.";

export const metadata = pageMetadata({ path: "/", title: TITLE, description: DESCRIPTION });

/**
 * Narrative: what & where → can I procure from you → do you have mine →
 * can you make it → how good is your standard → do you know my sector →
 * how do I get it → do it now.
 */
export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={graph(webPageNode({ path: "/", name: TITLE, description: DESCRIPTION }))} />
      <Hero />
      <Credentials />
      <Catalogue />
      <MadeHere />
      <LightsOut />
      <Industries />
      <WaysToOrder />
      <Reviews />
      <QuoteSection />
    </main>
  );
}
