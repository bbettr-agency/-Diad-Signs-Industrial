import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Glyphs                                                                     */
/* -------------------------------------------------------------------------- */

/** Wayfinding arrow – solid shaft and head, as cut on a directional sign. */
export function Arrow({ className = "h-3 w-4", direction = "right" }: { className?: string; direction?: "right" | "down" | "up-right" }) {
  const rotate = direction === "down" ? "rotate(90 8 6)" : direction === "up-right" ? "rotate(-45 8 6)" : undefined;
  return (
    <svg viewBox="0 0 16 12" className={className} aria-hidden="true" fill="currentColor">
      <path d="M0 4.6h9.2V1L16 6l-6.8 5V7.4H0z" transform={rotate} />
    </svg>
  );
}

export function WhatsAppGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.2a9.8 9.8 0 0 0-8.5 14.7L2.2 21.8l5-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.5.1.2 1.7 2.7 4.2 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.3Z" />
    </svg>
  );
}

export function PhoneGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3.5h3.2l1.6 4.2-2 1.4a11 11 0 0 0 7.1 7.1l1.4-2 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z" strokeLinejoin="round" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Buttons                                                                    */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "accent" | "outline" | "outline-dark" | "whatsapp" | "whatsapp-dark" | "text";

const variants: Record<ButtonVariant, string> = {
  accent:
    "bg-brand-accent text-brand-ink hover:bg-brand-accentDark hover:shadow-accent active:translate-y-px",
  outline:
    "bg-transparent text-brand-ink ring-1 ring-inset ring-brand-ink/25 hover:ring-brand-ink hover:bg-brand-ink hover:text-brand-bone active:translate-y-px",
  "outline-dark":
    "bg-transparent text-brand-bone ring-1 ring-inset ring-brand-bone/30 hover:ring-brand-bone hover:bg-brand-bone hover:text-brand-ink active:translate-y-px",
  whatsapp:
    "bg-transparent text-brand-ink ring-1 ring-inset ring-brand-ink/25 hover:ring-[#1DA851] hover:bg-brand-whatsapp hover:text-brand-ink active:translate-y-px",
  "whatsapp-dark":
    "bg-brand-whatsapp text-brand-ink hover:bg-[#3BE07A] active:translate-y-px",
  text: "text-brand-primary underline-offset-4 hover:underline",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: ButtonVariant;
  icon?: "arrow" | "whatsapp" | "phone" | "none";
  className?: string;
  children: ReactNode;
  size?: "md" | "lg";
}

export function ButtonLink({ variant = "accent", icon = "arrow", className = "", size = "md", children, ...props }: ButtonLinkProps) {
  const sizing = variant === "text" ? "" : size === "lg" ? "h-[3.25rem] px-6 text-[0.975rem]" : "h-12 px-5 text-[0.9375rem]";
  return (
    <Link
      {...props}
      className={`group inline-flex select-none items-center justify-center gap-3 rounded-plate font-semibold tracking-[-0.005em] transition-[background-color,color,box-shadow,transform] duration-200 ease-house ${sizing} ${variants[variant]} ${className}`}
    >
      {icon === "whatsapp" && <WhatsAppGlyph className={`h-[1.1rem] w-[1.1rem] ${variant === "whatsapp" ? "text-[#1DA851] group-hover:text-brand-ink" : ""}`} />}
      {icon === "phone" && <PhoneGlyph className="h-4 w-4" />}
      <span>{children}</span>
      {icon === "arrow" && <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />}
    </Link>
  );
}

export function Logo({ reverse = false, className = "h-10 w-auto", priority = false }: { reverse?: boolean; className?: string; priority?: boolean }) {
  return (
    <Image
      src={reverse ? "/brand/diad-lockup-reverse.png" : "/brand/diad-lockup.png"}
      alt="DIAD Signs and Industrial Suppliers"
      width={720}
      height={202}
      priority={priority}
      sizes="180px"
      className={className}
    />
  );
}

/**
 * `inert` for React 18 (no typed boolean prop until React 19). Inert content
 * stays in the DOM – and crawlable – but cannot be focused or clicked.
 */
export function inert(on: boolean): Record<string, string> {
  return on ? { inert: "" } : {};
}
