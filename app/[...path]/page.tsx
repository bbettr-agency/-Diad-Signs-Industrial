import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findRoute, plannedRoutes } from "@/lib/routes";
import { categoryHref, inSentence } from "@/content/catalogue";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { Arrow, ButtonLink } from "@/components/ui";
import { compositions, CompSafety } from "@/components/compositions";

export const dynamicParams = false;

export function generateStaticParams() {
  return plannedRoutes.map((r) => ({ path: r.path.slice(1).split("/") }));
}

type Props = { params: { path: string[] } };

export function generateMetadata({ params }: Props): Metadata {
  const route = findRoute(`/${params.path.join("/")}`);
  if (!route) return {};
  // Owner-demo placeholder. Not in lib/page-registry.ts, so pageMetadata() makes it
  // noindex with no canonical, and the sitemap never lists it – in every environment.
  // `noindex` is passed as well so this stays true even if someone registers the path
  // by mistake before the real page replaces this catch-all.
  return pageMetadata({ path: route.path, title: `${route.title} | DIAD Signs`, description: route.summary, noindex: true });
}

export default function PlannedPage({ params }: Props) {
  const route = findRoute(`/${params.path.join("/")}`);
  if (!route) notFound();
  const { family, category } = route;
  const Comp = family ? compositions[family.slug as keyof typeof compositions] : CompSafety;

  return (
    <main id="main" className="bg-brand-substrate">
      <div className="wrap grid gap-14 pb-24 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-16">
        <div className="lg:col-span-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.88rem] text-brand-graphite">
              <li>
                <Link href="/" className="hover:text-brand-ink">
                  Home
                </Link>
              </li>
              {route.crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-ink">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-brand-ink">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="display mt-10 text-d-2 text-balance">{route.title}</h1>
          <p className="mt-6 max-w-[48ch] text-[1.0625rem] leading-relaxed text-brand-graphite">{route.summary}</p>
          <p className="mt-4 max-w-[48ch] text-[1rem] leading-relaxed">
            This page is being built. In the meantime, we can quote anything in the range – send us your list.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={family ? `/?family=${family.slug}#quote` : "/#quote"} size="lg">
              {family ? family.quoteLabel : "Request a quote"}
            </ButtonLink>
            <ButtonLink href={site.whatsapp.href} variant="whatsapp" icon="whatsapp" size="lg" target="_blank" rel="noopener noreferrer">
              WhatsApp {site.whatsapp.display}
            </ButtonLink>
          </div>

          {family && (
            <div className="mt-14">
              <h2 className="text-[1.05rem] font-semibold">Ranges in {inSentence(family.name)}</h2>
              <ul className="mt-4 grid border-t border-brand-ink/10 sm:grid-cols-2 sm:gap-x-8">
                {family.categories.map((c) => {
                  const current = category?.slug === c.slug;
                  return (
                    <li key={c.slug} className="border-b border-brand-ink/10">
                      <Link
                        href={categoryHref(family, c)}
                        aria-current={current ? "page" : undefined}
                        className={`group flex items-center justify-between py-3 text-[0.95rem] ${current ? "font-semibold text-brand-ink" : "text-brand-ink/80 hover:text-brand-primary"}`}
                      >
                        {c.name}
                        <Arrow className="h-2.5 w-3.5 opacity-40 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="lg:sticky lg:top-28">
            <Comp />
          </div>
        </div>
      </div>
    </main>
  );
}
