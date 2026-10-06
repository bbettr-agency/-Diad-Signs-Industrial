import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Default social-share image (1200 × 630), generated at build. Used site-wide unless a page overrides it. */
export const alt = "DIAD Signs & Industrial Suppliers – safety signs, PPE and custom signage, Waltloo, Pretoria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const root = process.cwd();
  const [logo, display, body] = await Promise.all([
    readFile(join(root, "public/brand/diad-lockup.png")),
    readFile(join(root, "assets/fonts/inter-tight-600.ttf")), // OFL – headings
    readFile(join(root, "assets/fonts/dm-sans-400.ttf")), // OFL – body
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const colours = ["#ED1C24", "#233579", "#F3A60E", "#0C713E"];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#F3F2EE", padding: "64px 72px", color: "#14161B" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={360} height={101} alt="" />
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ fontFamily: "Inter Tight", fontSize: 78, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: 980 }}>
            Safety signs, PPE and custom signage – made and stocked in Pretoria.
          </div>
          <div style={{ display: "flex", marginTop: 30, fontFamily: "DM Sans", fontSize: 28, color: "#464A52" }}>
            SABS-approved photoluminescent signs · B-BBEE Level 1 · Waltloo, Pretoria
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", left: 0, right: 0, bottom: 0, height: 12 }}>
          {colours.map((c) => (
            <div key={c} style={{ flex: 1, background: c }} />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: display, weight: 600, style: "normal" },
        { name: "DM Sans", data: body, weight: 400, style: "normal" },
      ],
    },
  );
}
