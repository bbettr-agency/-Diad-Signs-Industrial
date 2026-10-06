/**
 * Product-true sign artwork, drawn in-house as SVG.
 *
 * These represent the kinds of products DIAD manufactures – they are NOT
 * photographs of DIAD work and imply no specific project or client. Pictograms
 * are simplified generic drawings, not reproductions of ISO 7010 artwork.
 *
 * All plates share one geometry language: 3px-radius plate (scaled), a fine
 * edge highlight, and optional fixing holes.
 */

import type { CSSProperties } from "react";
import { useUid } from "./svg-id";

const INK = "#14161B";
const PLATE = "#FBFBF8";
const RED = "#E31E26";
const BLUE = "#233579";
const YELLOW = "#F3A60E";
const GREEN = "#0C713E";

const signText: CSSProperties = {
  fontFamily: "var(--font-display), Arial, sans-serif",
  fontWeight: 800,
  letterSpacing: "0",
};

type SvgProps = { className?: string; title?: string };

function Holes({ points, r = 2.2 }: { points: [number, number][]; r?: number }) {
  return (
    <g>
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={r} fill="#C9CAC5" />
          <circle cx={x} cy={y} r={r * 0.55} fill="#8E918F" />
        </g>
      ))}
    </g>
  );
}

/** Plate body with a subtle face sheen and a hairline edge. */
function Plate({ w, h, fill = PLATE, rx = 4, sheen }: { w: number; h: number; fill?: string; rx?: number; sheen: string }) {
  return (
    <g>
      <rect x="0.5" y="0.5" width={w - 1} height={h - 1} rx={rx} fill={fill} />
      <rect x="0.5" y="0.5" width={w - 1} height={h - 1} rx={rx} fill={`url(#${sheen})`} />
      <rect x="0.5" y="0.5" width={w - 1} height={h - 1} rx={rx} fill="none" stroke="rgba(20,22,27,0.14)" />
    </g>
  );
}

function SheenDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
        <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  );
}

function Svg({ w, h, title, className, children, sheen }: { w: number; h: number; sheen: string } & SvgProps & { children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <SheenDefs id={sheen} />
      {children}
    </svg>
  );
}

/* ----------------------------- Warning ---------------------------------- */

export function WarningPlate({ className, title = "Warning sign – general caution" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={120} h={160} className={className} title={title}>
      <Plate sheen={sheen} w={120} h={160} />
      <path d="M60 18 105 98H15Z" fill={YELLOW} stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <rect x="55.5" y="44" width="9" height="32" rx="3" fill={INK} />
      <circle cx="60" cy="86" r="5" fill={INK} />
      <rect x="10" y="114" width="100" height="36" rx="2" fill={YELLOW} />
      <text x="60" y="140" textAnchor="middle" fontSize="20" fill={INK} style={signText}>
        CAUTION
      </text>
      <Holes points={[[10, 10], [110, 10]]} />
    </Svg>
  );
}

/* ----------------------------- Mandatory -------------------------------- */

export function MandatoryPlate({ className, title = "Mandatory sign – hard hats must be worn" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={120} h={160} className={className} title={title}>
      <Plate sheen={sheen} w={120} h={160} />
      <circle cx="60" cy="58" r="42" fill={BLUE} />
      {/* head + hard hat */}
      <circle cx="60" cy="66" r="12" fill="#fff" />
      <path d="M41 52a19 19 0 0 1 38 0z" fill="#fff" />
      <rect x="37" y="51" width="46" height="5" rx="2.5" fill="#fff" />
      <rect x="58" y="31" width="4" height="10" rx="2" fill={BLUE} />
      <path d="M42 96c2-10 9-15 18-15s16 5 18 15z" fill="#fff" />
      <rect x="10" y="110" width="100" height="40" rx="2" fill={BLUE} />
      <text x="60" y="127" textAnchor="middle" fontSize="12.5" textLength="82" lengthAdjust="spacingAndGlyphs" fill="#fff" style={signText}>
        HARD HATS
      </text>
      <text x="60" y="143" textAnchor="middle" fontSize="12.5" textLength="90" lengthAdjust="spacingAndGlyphs" fill="#fff" style={signText}>
        MUST BE WORN
      </text>
      <Holes points={[[10, 10], [110, 10]]} />
    </Svg>
  );
}

/* ----------------------------- Prohibition ------------------------------ */

export function ProhibitionPlate({ className, title = "Prohibition sign – no smoking" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={120} h={160} className={className} title={title}>
      <Plate sheen={sheen} w={120} h={160} />
      <circle cx="60" cy="58" r="38" fill="#fff" stroke={RED} strokeWidth="9" />
      {/* cigarette */}
      <rect x="30" y="61" width="44" height="9" fill={INK} />
      <rect x="74" y="61" width="13" height="9" fill="#5A5D63" />
      <path d="M36 54c-4-5 4-8 0-14M44 54c-4-5 4-8 0-14" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M33 31 87 85" stroke={RED} strokeWidth="9" />
      <rect x="10" y="114" width="100" height="36" rx="2" fill={RED} />
      <text x="60" y="139" textAnchor="middle" fontSize="15" textLength="90" lengthAdjust="spacingAndGlyphs" fill="#fff" style={signText}>
        NO SMOKING
      </text>
      <Holes points={[[10, 10], [110, 10]]} />
    </Svg>
  );
}

/* ----------------------------- Safe condition --------------------------- */

export function FirstAidPlate({ className, title = "Safe-condition sign – first aid" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={120} h={120} className={className} title={title}>
      <Plate sheen={sheen} w={120} h={120} fill={GREEN} />
      <rect x="49" y="22" width="22" height="58" fill="#fff" />
      <rect x="31" y="40" width="58" height="22" fill="#fff" />
      <text x="60" y="104" textAnchor="middle" fontSize="14" fill="#fff" style={signText}>
        FIRST AID
      </text>
      <Holes points={[[9, 9], [111, 9], [9, 111], [111, 111]]} r={2} />
    </Svg>
  );
}

/* ----------------------------- Exit (photoluminescent) ------------------ */

/** Running figure + door + arrow, in a 200 × 100 box. Shared by day and glow states. */
function ExitPictogram({ fill }: { fill: string }) {
  return (
    <g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round">
      {/* door */}
      <path d="M96 14v72M96 14h40v72" strokeWidth="5" strokeLinecap="square" />
      <rect x="99" y="17" width="34" height="66" fill={fill} stroke="none" opacity="0.18" />
      {/* figure */}
      <circle cx="74" cy="22" r="7.5" fill={fill} stroke="none" />
      <path d="M71 33 63 56" strokeWidth="9" />
      <path d="M70 37 83 45l9-6" strokeWidth="6.5" />
      <path d="M69 36 57 44l-9-3" strokeWidth="6.5" />
      <path d="M63 56 77 65l-2 17h6" strokeWidth="7" />
      <path d="M63 56 55 72l-14 4" strokeWidth="7" />
      {/* arrow */}
      <path d="M150 50h34M170 36l15 14-15 14" strokeWidth="8.5" />
      {/* left arrow-panel divider */}
      <path d="M22 50h22M34 40l-12 10 12 10" strokeWidth="0" />
    </g>
  );
}

export function ExitPlateDay({ className, title = "Photoluminescent emergency exit sign in daylight" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={200} h={100} className={className} title={title}>
      <Plate sheen={sheen} w={200} h={100} fill={GREEN} rx={3} />
      <ExitPictogram fill="#F2F4E6" />
      <Holes points={[[8, 8], [192, 8], [8, 92], [192, 92]]} r={1.8} />
    </Svg>
  );
}

/**
 * The same sign with the lights off. Green ink reads near-black; the
 * photoluminescent pigment in the pictogram emits its pale yellow-green light.
 * Bloom is applied by the parent (CSS drop-shadow on a composited layer).
 */
export function ExitPlateGlow({ className, title = "Photoluminescent emergency exit sign glowing in darkness" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={200} h={100} className={className} title={title}>
      <rect x="0.5" y="0.5" width="199" height="99" rx="3" fill="#0B1A13" />
      <rect x="0.5" y="0.5" width="199" height="99" rx="3" fill="none" stroke="rgba(217,245,163,0.10)" />
      <ExitPictogram fill="#D9F5A3" />
    </Svg>
  );
}

/* ----------------------------- Scaffold tag ----------------------------- */

export function ScaffoldTag({ className, title = "Scaffold inspection tag – safe for use" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={90} h={170} className={className} title={title}>
      <path d="M8 4h74a4 4 0 0 1 4 4v158H4V8a4 4 0 0 1 4-4Z" fill={PLATE} stroke="rgba(20,22,27,0.14)" />
      <rect x="4" y="34" width="82" height="44" fill={GREEN} />
      <circle cx="45" cy="19" r="7" fill="#E6E6E1" stroke="rgba(20,22,27,0.25)" />
      <text x="45" y="53" textAnchor="middle" fontSize="13" fill="#fff" style={signText}>
        SAFE
      </text>
      <text x="45" y="69" textAnchor="middle" fontSize="13" fill="#fff" style={signText}>
        FOR USE
      </text>
      {[94, 112, 130, 148].map((y, i) => (
        <g key={y}>
          <text x="12" y={y} fontSize="6.4" fill="#5B5F66" style={{ ...signText, fontWeight: 600, letterSpacing: "0.08em" }}>
            {["DATE", "INSPECTED BY", "SIGNATURE", "NEXT DUE"][i]}
          </text>
          <path d={`M12 ${y + 6}h66`} stroke="rgba(20,22,27,0.3)" strokeWidth="0.8" />
        </g>
      ))}
    </Svg>
  );
}

/* ----------------------------- Chevron board ---------------------------- */

export function ChevronBoard({ className, title = "Chevron board" }: SvgProps) {
  const sheen = useUid();
  return (
    <Svg sheen={sheen} w={240} h={80} className={className} title={title}>
      <defs>
        <clipPath id={`${sheen}c`}>
          <rect x="0" y="0" width="240" height="80" rx="3" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${sheen}c)`}>
        <rect width="240" height="80" fill={YELLOW} />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${i * 50 + 6} 4 l30 36 -30 36 h22 l30 -36 -30 -36z`} fill={INK} />
        ))}
        <rect width="240" height="80" fill={`url(#${sheen})`} />
      </g>
    </Svg>
  );
}

/* ----------------------------- Engraved label --------------------------- */

export function EngravedLabel({ className, title = "Laser-engraved aluminium label" }: SvgProps) {
  const sheen = useUid();
  return (
    <svg viewBox="0 0 240 64" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={`${sheen}a`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#CFD1CE" />
          <stop offset="0.35" stopColor="#ECEDEA" />
          <stop offset="0.6" stopColor="#D6D8D4" />
          <stop offset="1" stopColor="#E7E8E5" />
        </linearGradient>
        <pattern id={`${sheen}b`} width="240" height="3" patternUnits="userSpaceOnUse">
          <rect width="240" height="1" fill="#fff" opacity="0.25" />
        </pattern>
      </defs>
      <rect x="0.5" y="0.5" width="239" height="63" rx="3" fill={`url(#${sheen}a)`} />
      <rect x="0.5" y="0.5" width="239" height="63" rx="3" fill={`url(#${sheen}b)`} />
      <rect x="0.5" y="0.5" width="239" height="63" rx="3" fill="none" stroke="rgba(20,22,27,0.22)" />
      <circle cx="12" cy="32" r="3.2" fill="#9A9D99" />
      <circle cx="228" cy="32" r="3.2" fill="#9A9D99" />
      <text x="28" y="27" fontSize="9" fill="#2A2D33" style={{ ...signText, fontWeight: 600, letterSpacing: "0.12em" }}>
        DB-04
      </text>
      <text x="28" y="45" fontSize="13.5" textLength="196" lengthAdjust="spacingAndGlyphs" fill="#1B1D22" style={{ ...signText, letterSpacing: "0.06em" }}>
        MAIN DISTRIBUTION BOARD
      </text>
    </svg>
  );
}

/* ----------------------------- Road sign -------------------------------- */

export function StopSign({ className, title = "Road sign – stop" }: SvgProps) {
  const sheen = useUid();
  // Regular octagon, r = 50 around (55,55)
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 8) * (2 * i + 1);
    return `${(55 + 52 * Math.cos(a)).toFixed(2)},${(55 + 52 * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  const inner = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 8) * (2 * i + 1);
    return `${(55 + 46 * Math.cos(a)).toFixed(2)},${(55 + 46 * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 110 110" className={className} role="img" aria-label={title}>
      <SheenDefs id={sheen} />
      <polygon points={pts} fill="#fff" stroke="rgba(20,22,27,0.14)" />
      <polygon points={inner} fill={RED} />
      <polygon points={inner} fill={`url(#${sheen})`} />
      <text x="55" y="65" textAnchor="middle" fontSize="26" fill="#fff" style={{ ...signText, letterSpacing: "0.04em" }}>
        STOP
      </text>
    </svg>
  );
}
