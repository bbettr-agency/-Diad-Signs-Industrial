import Script from "next/script";

/**
 * GA4 / GTM scaffold. Renders nothing unless the deployment is indexable
 * (production) AND an ID is configured – no IDs are hard-coded.
 *   NEXT_PUBLIC_GTM_ID   e.g. GTM-XXXXXXX  (preferred if marketing will add tags)
 *   NEXT_PUBLIC_GA4_ID   e.g. G-XXXXXXXXXX (direct gtag, used only if no GTM)
 * POPIA: confirm the consent approach with the client before setting either
 * ID (docs/seo/SEO-FOUNDATION.md §17).
 */
export function Analytics({ enabled }: { enabled: boolean }) {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  if (!enabled || (!gtm && !ga4)) return null;

  if (gtm) {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
      </Script>
    );
  }
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');`}
      </Script>
    </>
  );
}
