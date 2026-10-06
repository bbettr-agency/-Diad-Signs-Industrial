import { site } from "@/config/site";
import { reviews } from "@/content/reviews";

/**
 * Google reviews – reserved. Renders NOTHING until real review text is
 * supplied in content/reviews.ts. The aggregate rating is shown in the hero,
 * linked to the Google Business Profile.
 */
export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section aria-labelledby="reviews-title" className="bg-brand-metal py-24 md:py-32">
      <div className="wrap">
        <h2 id="reviews-title" className="display text-d-2">
          What customers say on Google.
        </h2>
        <ul className="mt-14 grid gap-12 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <li key={`${r.author}-${r.date}`}>
              <blockquote className="text-[1.15rem] leading-relaxed">“{r.text}”</blockquote>
              <p className="mt-5 text-[0.95rem] text-brand-graphite">
                {r.author}, {new Date(r.date).toLocaleDateString("en-ZA", { month: "long", year: "numeric" })}
              </p>
            </li>
          ))}
        </ul>
        <a href={site.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="mt-12 inline-block font-semibold text-brand-primary underline-offset-4 hover:underline">
          Read all {site.rating.count} reviews on Google
        </a>
      </div>
    </section>
  );
}
