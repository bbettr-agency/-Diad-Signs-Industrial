import { DM_Sans, Inter_Tight } from "next/font/google";

/**
 * Typography direction (2026-10-06): after monkay.co, inspected in-browser.
 * Monkay sets headings in the visitor's system Helvetica Neue (500, −0.05em,
 * line-height 1) and everything else in DM Sans. Helvetica Neue is commercial
 * and absent on Windows/Android, so headings use Inter Tight – the closest
 * freely licensed (SIL OFL) match in shape and colour, set at 550 on its
 * variable axis. Body, navigation and buttons use DM Sans exactly (OFL).
 * Both are self-hosted by next/font.
 */
export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${interTight.variable} ${dmSans.variable}`;
