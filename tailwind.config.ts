import type { Config } from "tailwindcss";

/**
 * DIAD brand tokens (OS structure: SYSTEM/01-DESIGN-TOKENS.md).
 *
 * Deviations from OS defaults, with reasons (also in PROJECT_STATUS.md):
 *  - Radius: one 3px "plate" radius everywhere (cut sign plates), instead of
 *    rounded-2xl/3xl cards and rounded-full buttons.
 *  - Type: Inter Tight (headings, 550) + DM Sans (body 400, nav 500, buttons 600). No mono.
 *  - Sign-class colours: the four logo colours are the SANS 1186 safety-sign
 *    code. They appear only where they carry that meaning (sign artwork,
 *    family codes), never as decoration.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#233579", // DIAD navy – structure, links
          primaryLight: "#4C63B8", // focus ring on light
          accent: "#F3A60E", // amber – PRIMARY CTA ONLY (ink text)
          accentDark: "#DE9300",
          ink: "#14161B",
          charcoal: "#24272E",
          graphite: "#464A52",
          steel: "#7C818A", // non-text only on light surfaces
          substrate: "#F3F2EE", // default surface – like white sign stock
          paper: "#FAF9F6",
          metal: "#E5E6E3", // tinted surface – aluminium
          line: "#D8D7D1",
          deep: "#111A3B", // dark spotlight – derived from DIAD navy
          night: "#080C1D", // lights-out end state
          fog: "#AAB0C3", // muted text on dark
          bone: "#F3F2EE",
          whatsapp: "#25D366",
        },
        sign: {
          red: "#ED1C24",
          blue: "#233579",
          yellow: "#F3A60E",
          green: "#0C713E",
          glow: "#D9F5A3", // photoluminescent emission (pale yellow-green)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display scale – Inter Tight 550, tight leading after the Monkay reference.
        "d-1": ["clamp(2.4rem, 1.55rem + 3.4vw, 4.25rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "d-2": ["clamp(2rem, 1.45rem + 2.2vw, 3.4rem)", { lineHeight: "1.02", letterSpacing: "-0.027em" }],
        "d-3": ["clamp(1.6rem, 1.3rem + 1.2vw, 2.4rem)", { lineHeight: "1.06", letterSpacing: "-0.022em" }],
        "d-4": ["clamp(1.3rem, 1.15rem + 0.6vw, 1.7rem)", { lineHeight: "1.12", letterSpacing: "-0.016em" }],
        lead: ["clamp(1.3rem, 1.1rem + 0.8vw, 1.9rem)", { lineHeight: "1.32", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        plate: "3px",
      },
      maxWidth: {
        measure: "62ch",
      },
      boxShadow: {
        plate: "0 18px 40px -22px rgba(20,22,27,0.35), 0 2px 4px -2px rgba(20,22,27,0.12)",
        lift: "0 26px 50px -24px rgba(20,22,27,0.38), 0 3px 6px -3px rgba(20,22,27,0.14)",
        accent: "0 16px 36px -18px rgba(243,166,14,0.7)",
        ink: "0 30px 80px -30px rgba(8,12,29,0.85)",
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
