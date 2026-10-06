import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="main" className="wrap pb-28 pt-16 lg:pt-24">
            <h1 className="display max-w-[16ch] text-d-2">This page doesn&apos;t exist.</h1>
      <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-brand-graphite">
        The link may be old or mistyped. The catalogue and the quote form are a click away.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/#catalogue" variant="outline">
          Browse the catalogue
        </ButtonLink>
        <ButtonLink href="/#quote">Request a quote</ButtonLink>
      </div>
    </main>
  );
}
