"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { families } from "@/content/catalogue";
import { site } from "@/config/site";
import { Arrow } from "@/components/ui";

type Status = "idle" | "error" | "ready";

type Draft = { name: string; message: string; file?: string };

const field =
  "mt-2 block w-full rounded-plate bg-white/[0.04] px-4 py-3 text-[0.98rem] text-brand-bone ring-1 ring-inset ring-white/15 placeholder:text-brand-fog/60 transition-[box-shadow,background-color] duration-200 hover:ring-white/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-sign-glow aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#FF7A7F]";

/**
 * Quote request. Until server-side delivery is wired (Phase 2: email/CRM), a
 * valid enquiry is handed to DIAD's real channels – a prefilled email or
 * WhatsApp message – rather than pretending to have been sent. Shaped to accept
 * a multi-item quote list later: `families` is already an array of node ids.
 */
export function QuoteForm() {
  const id = useId();
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [replyBy, setReplyBy] = useState("email");
  const [docs, setDocs] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);

  // Preselect from deep links: /?family=ppe-and-workwear#quote or ?intent=documents
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fam = params.get("family");
    if (fam && families.some((f) => f.slug === fam)) setSelected([fam]);
    if (params.get("intent") === "documents") setDocs(true);
  }, []);

  const toggle = (slug: string) => setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please add your name.";
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!email && !phone) next.email = "Add an email address or a phone number so we can reply.";
    else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address doesn't look right.";
    if (!String(data.get("details") ?? "").trim() && selected.length === 0 && !docs) next.details = "Tell us what you need, or choose a product family.";
    setErrors(next);
    if (!Object.keys(next).length) {
      const get = (k: string) => String(data.get(k) ?? "").trim();
      const fams = families.filter((f) => selected.includes(f.slug)).map((f) => f.name);
      const file = data.get("artwork");
      const lines = [
        `Name: ${get("name")}`,
        get("company") && `Company: ${get("company")}`,
        email && `Email: ${email}`,
        phone && `Phone: ${phone}`,
        fams.length > 0 && `Interested in: ${fams.join(", ")}`,
        docs && "Please send your supplier documents.",
        get("details") && `\n${get("details")}`,
        `\nPlease reply by ${replyBy === "whatsapp" ? "WhatsApp" : replyBy}.`,
      ].filter(Boolean);
      setDraft({ name: get("name"), message: lines.join("\n"), file: file instanceof File && file.name ? file.name : undefined });
    }
    setStatus(Object.keys(next).length ? "error" : "ready");
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(`${id}-${first}`)?.focus();
    }
  };

  const readyPanel = (() => {
    if (status !== "ready" || !draft) return null;
    const subject = `Quote request – ${draft.name}`;
    const mail = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft.message)}`;
    const wa = `${site.whatsapp.href}?text=${encodeURIComponent(draft.message)}`;
    return (
      <div role="status" className="rounded-plate p-8 ring-1 ring-inset ring-white/15 lg:p-10">
        <p className="display text-d-4">Your enquiry is ready, {draft.name.split(" ")[0]}.</p>
        <p className="mt-4 max-w-[46ch] text-[1rem] leading-relaxed text-brand-fog">
          Choose how to send it to our sales team – everything you entered is already filled in.
          {draft.file && ` Remember to attach ${draft.file} to the email.`}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={mail}
            className="group inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-plate bg-brand-accent px-6 font-semibold text-brand-ink transition-colors hover:bg-brand-accentDark"
          >
            Send by email
            <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-plate bg-brand-whatsapp px-6 font-semibold text-brand-ink transition-colors hover:bg-[#3BE07A]"
          >
            Send on WhatsApp
          </a>
        </div>
        <button type="button" onClick={() => setStatus("idle")} className="mt-7 text-[0.92rem] font-semibold text-brand-bone underline underline-offset-4">
          Edit the enquiry
        </button>
      </div>
    );
  })();

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${id}-${k}-err`} className="mt-2 text-[0.85rem] text-[#FF9EA2]">
        {errors[k]}
      </p>
    ) : null;

  return (
    <>
    {readyPanel}
    <form hidden={!!readyPanel} noValidate onSubmit={onSubmit} aria-describedby={`${id}-note`} className="space-y-7">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.92rem] text-brand-fog">Name *</span>
          <input id={`${id}-name`} name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
          {err("name")}
        </label>
        <label className="block">
          <span className="text-[0.92rem] text-brand-fog">Company</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="text-[0.92rem] text-brand-fog">Email</span>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-err` : undefined} />
          {err("email")}
        </label>
        <label className="block">
          <span className="text-[0.92rem] text-brand-fog">Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>

      <fieldset>
        <legend className="text-[0.92rem] text-brand-fog">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {families.map((f) => {
            const on = selected.includes(f.slug);
            return (
              <button
                key={f.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(f.slug)}
                className={`inline-flex h-10 items-center gap-2 rounded-plate px-3.5 text-[0.88rem] transition-colors duration-200 ${
                  on ? "bg-brand-bone text-brand-ink" : "text-brand-bone ring-1 ring-inset ring-white/20 hover:ring-white/45"
                }`}
              >
                {f.name}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={docs}
            onClick={() => setDocs((d) => !d)}
            className={`inline-flex h-10 items-center gap-2 rounded-plate px-3.5 text-[0.88rem] transition-colors duration-200 ${
              docs ? "bg-brand-bone text-brand-ink" : "text-brand-bone ring-1 ring-inset ring-white/20 hover:ring-white/45"
            }`}
          >
            Supplier documents
          </button>
        </div>
      </fieldset>

      <label className="block">
        <span className="text-[0.92rem] text-brand-fog">What you need – items, sizes and quantities</span>
        <textarea
          id={`${id}-details`}
          name="details"
          rows={4}
          placeholder="e.g. 20 × fire extinguisher signs, 10 × hard hats (white), 1 × site board 1200 × 900"
          className={field}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? `${id}-details-err` : undefined}
        />
        {err("details")}
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.92rem] text-brand-fog">Artwork, if you have it (PDF, EPS or AI)</span>
          <input
            name="artwork"
            type="file"
            accept=".pdf,.eps,.ai"
            className="mt-2 block w-full text-[0.88rem] text-brand-fog file:mr-4 file:h-10 file:cursor-pointer file:rounded-plate file:border-0 file:bg-white/10 file:px-4 file:text-[0.88rem] file:font-semibold file:text-brand-bone hover:file:bg-white/20"
          />
        </label>
        <fieldset>
          <legend className="text-[0.92rem] text-brand-fog">Reply by</legend>
          <div className="mt-2 flex gap-2">
            {["email", "whatsapp", "phone"].map((r) => (
              <label key={r} className={`flex h-10 cursor-pointer items-center rounded-plate px-3.5 text-[0.88rem] capitalize transition-colors ${replyBy === r ? "bg-brand-bone text-brand-ink" : "ring-1 ring-inset ring-white/20 hover:ring-white/45"}`}>
                <input type="radio" name="replyBy" value={r} checked={replyBy === r} onChange={() => setReplyBy(r)} className="sr-only" />
                {r === "whatsapp" ? "WhatsApp" : r}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${id}-note`} className="max-w-[40ch] text-[0.8rem] leading-relaxed text-brand-fog">
          We use these details only to reply to your enquiry.
        </p>
        <button
          type="submit"
          className="group inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-plate bg-brand-accent px-6 text-[0.975rem] font-semibold text-brand-ink transition-[background-color,box-shadow,transform] duration-200 ease-house hover:bg-brand-accentDark hover:shadow-accent active:translate-y-px"
        >
          Send enquiry
          <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="sr-only">
          Please check the highlighted fields.
        </p>
      )}
    </form>
    </>
  );
}
