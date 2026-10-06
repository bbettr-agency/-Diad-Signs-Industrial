/**
 * Catalogue compositions – one per product family, each built from the shapes
 * of what that family actually is. No frames, no cards, no labels: objects
 * arranged in space, cropped and overlapped the way they would be photographed.
 *
 * All artwork is drawn in-house and generic; none depicts a DIAD project.
 */

import type { CSSProperties, ReactNode } from "react";
import { useUid } from "./svg-id";
import { FirstAidPlate, MandatoryPlate, ProhibitionPlate, ScaffoldTag, StopSign, WarningPlate } from "./signs";

const INK = "#14161B";
const RED = "#E31E26";
const BLUE = "#233579";
const YELLOW = "#F3A60E";
const GREEN = "#0C713E";

const signFace: CSSProperties = { fontFamily: "var(--font-display), Arial, sans-serif", fontWeight: 800, letterSpacing: "0.01em" };

const shadow = "[filter:drop-shadow(0_18px_22px_rgba(20,22,27,0.18))_drop-shadow(0_2px_3px_rgba(20,22,27,0.12))]";

function Place({ className, children, style }: { className: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className={`absolute ${shadow} ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- objects */

export function FireExtinguisherSign({ className }: { className?: string }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 120 150" className={className} role="img" aria-label="Fire equipment sign – fire extinguisher">
      <defs>
        <linearGradient id={u} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="119" height="149" rx="4" fill={RED} />
      <rect x="0.5" y="0.5" width="119" height="149" rx="4" fill={`url(#${u})`} />
      {/* extinguisher */}
      <rect x="46" y="38" width="26" height="62" rx="9" fill="#fff" />
      <rect x="53" y="28" width="12" height="12" rx="2" fill="#fff" />
      <path d="M65 31h10l6 5M50 33c-10 2-14 10-12 22" stroke="#fff" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M38 55l-6 10h12z" fill="#fff" />
      {/* arrow to equipment */}
      <path d="M86 92l14 0M93 85l7 7-7 7" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="132" textAnchor="middle" fontSize="12.5" textLength="100" lengthAdjust="spacingAndGlyphs" fill="#fff" style={signFace}>
        FIRE EXTINGUISHER
      </text>
    </svg>
  );
}

function YieldSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 116" className={className} role="img" aria-label="Road sign – yield">
      <path d="M8 6h114L65 108Z" fill="#fff" stroke={RED} strokeWidth="14" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronBoard({ className, flip = false }: { className?: string; flip?: boolean }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 520 120" className={className} role="img" aria-label="Chevron board">
      <defs>
        <clipPath id={u}>
          <rect width="520" height="120" rx="4" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${u})`} transform={flip ? "translate(520 0) scale(-1 1)" : undefined}>
        <rect width="520" height="120" fill={YELLOW} />
        {Array.from({ length: 8 }, (_, i) => (
          <path key={i} d={`M${i * 70 - 10} 0 l46 60 -46 60 h34 l46 -60 -46 -60z`} fill={INK} />
        ))}
      </g>
    </svg>
  );
}

function Delineator({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 260" className={className} role="img" aria-label="Road delineator post">
      <rect x="8" y="0" width="24" height="250" rx="3" fill="#F7F7F3" />
      <rect x="8" y="22" width="24" height="26" fill={RED} />
      <rect x="8" y="58" width="24" height="26" fill={RED} />
      <rect x="0" y="246" width="40" height="14" rx="3" fill="#2A2C31" />
    </svg>
  );
}

export function Cone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 300" className={className} role="img" aria-label="Road cone with reflective bands">
      <path d="M92 6h36l58 262H34Z" fill="#F0602A" />
      <path d="M78 70h64l11 48H67Z" fill="#F4F4F0" />
      <path d="M58 158h104l11 48H47Z" fill="#F4F4F0" />
      <path d="M110 6h18l58 262h-30Z" fill="#000" opacity="0.08" />
      <rect x="0" y="262" width="220" height="30" rx="4" fill="#2A2C31" />
    </svg>
  );
}

export function BarrierNetting({ className }: { className?: string }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 380 210" className={className} role="img" aria-label="Orange barrier netting strung between two posts">
      <defs>
        <pattern id={u} width="18" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 7 9 0l9 7-9 7Z" fill="none" stroke="#F26A1B" strokeWidth="3" />
        </pattern>
        <clipPath id={`${u}c`}>
          <path d="M24 30Q190 52 356 30V178Q190 196 24 178Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${u}c)`}>
        <rect x="0" y="0" width="380" height="210" fill={`url(#${u})`} />
      </g>
      <path d="M24 30Q190 52 356 30M24 178Q190 196 356 178" stroke="#E2560E" strokeWidth="4" fill="none" />
      <rect x="14" y="10" width="12" height="200" rx="2" fill="#2A2C31" />
      <rect x="354" y="10" width="12" height="200" rx="2" fill="#2A2C31" />
    </svg>
  );
}

export function Vest({ className }: { className?: string }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 300 360" className={className} role="img" aria-label="High-visibility reflective vest">
      <defs>
        <linearGradient id={u} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#AEB2B2" />
          <stop offset="0.45" stopColor="#F1F2F1" />
          <stop offset="1" stopColor="#A9ADAD" />
        </linearGradient>
      </defs>
      {/* body */}
      <path d="M72 8h40l38 70 38-70h40l26 22c-6 30 4 56 30 70v252H16V100c26-14 36-40 30-70Z" fill="#DCEF25" />
      {/* armholes shading + zip */}
      <path d="M150 78v274" stroke="#B9CA14" strokeWidth="3" />
      <path d="M46 30c6 30-4 56-30 70" stroke="#B9CA14" strokeWidth="3" fill="none" />
      <path d="M254 30c-6 30 4 56 30 70" stroke="#B9CA14" strokeWidth="3" fill="none" />
      {/* reflective bands */}
      <rect x="16" y="214" width="268" height="30" fill={`url(#${u})`} />
      <rect x="16" y="280" width="268" height="30" fill={`url(#${u})`} />
      <path d="M86 12l26 66" stroke={`url(#${u})`} strokeWidth="22" />
      <path d="M214 12l-26 66" stroke={`url(#${u})`} strokeWidth="22" />
    </svg>
  );
}

export function HardHat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 270 150" className={className} role="img" aria-label="Safety hard hat">
      <path d="M40 118C40 52 88 16 140 16c54 0 90 40 94 102Z" fill="#F7F7F3" />
      <path d="M40 118C40 60 74 26 116 18c-30 18-48 54-48 100Z" fill="#000" opacity="0.06" />
      <path d="M140 16c14 26 18 64 14 102" stroke="#E4E4DE" strokeWidth="16" fill="none" />
      <path d="M140 16c14 26 18 64 14 102" stroke="#fff" strokeWidth="4" fill="none" opacity="0.9" />
      <path d="M16 116h220c18 0 30 6 30 12s-10 8-24 8H20c-10 0-14-5-14-10s4-10 10-10Z" fill="#ECECE6" />
      <path d="M16 128h236" stroke="#000" strokeOpacity="0.08" strokeWidth="3" />
    </svg>
  );
}

export function Gloves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 220" className={className} role="img" aria-label="Leather work glove">
      <path d="M40 210V120L22 70c-4-10 10-16 16-6l18 34V30c0-12 16-12 16 0v62V18c0-12 16-12 16 0v74V26c0-12 16-12 16 0v70V44c0-12 16-12 16 0v96c0 30-10 50-16 70Z" fill="#C9A06A" />
      <path d="M40 170h92v40H40z" fill="#3B5BA9" />
      <path d="M72 92V30M88 92V18M104 96V26" stroke="#A9814E" strokeWidth="2" />
    </svg>
  );
}

export function EngravedPlate({ className, line1, line2 }: { className?: string; line1: string; line2?: string }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 420 150" className={className} role="img" aria-label={`Engraved aluminium sign: ${line1}`}>
      <defs>
        <linearGradient id={`${u}a`} x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#C9CBC7" />
          <stop offset="0.3" stopColor="#EEEFEC" />
          <stop offset="0.55" stopColor="#D2D4D0" />
          <stop offset="0.8" stopColor="#E9EAE7" />
          <stop offset="1" stopColor="#CDCFCB" />
        </linearGradient>
        <pattern id={`${u}b`} width="420" height="3" patternUnits="userSpaceOnUse">
          <rect width="420" height="1" fill="#fff" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="0.5" y="0.5" width="419" height="149" rx="4" fill={`url(#${u}a)`} />
      <rect x="0.5" y="0.5" width="419" height="149" rx="4" fill={`url(#${u}b)`} />
      <rect x="0.5" y="0.5" width="419" height="149" rx="4" fill="none" stroke="rgba(20,22,27,0.25)" />
      {[[18, 18], [402, 18], [18, 132], [402, 132]].map(([x, y]) => (
        <g key={`${x}${y}`}>
          <circle cx={x} cy={y} r="5" fill="#A6A9A5" />
          <path d={`M${x - 3} ${y}h6`} stroke="#7E817E" strokeWidth="1.4" />
        </g>
      ))}
      {/* engraved: dark fill with a 1px highlight below, as a cut catches light */}
      <text x="210" y={line2 ? 72 : 90} textAnchor="middle" fontSize="36" textLength={Math.min(360, line1.length * 25)} lengthAdjust="spacingAndGlyphs" fill="#fff" opacity="0.7" style={signFace} dy="1.2">
        {line1}
      </text>
      <text x="210" y={line2 ? 72 : 90} textAnchor="middle" fontSize="36" textLength={Math.min(360, line1.length * 25)} lengthAdjust="spacingAndGlyphs" fill="#1C1E22" style={signFace}>
        {line1}
      </text>
      {line2 && (
        <text x="210" y="110" textAnchor="middle" fontSize="20" fill="#2B2E33" style={{ ...signFace, fontWeight: 600 }}>
          {line2}
        </text>
      )}
    </svg>
  );
}

export function ChromadekSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" className={className} role="img" aria-label="Chromadek sign – authorised personnel only">
      <rect x="0.5" y="0.5" width="299" height="199" rx="4" fill="#FBFBF8" stroke="rgba(20,22,27,0.14)" />
      <rect x="10" y="10" width="280" height="70" rx="2" fill={BLUE} />
      <text x="150" y="58" textAnchor="middle" fontSize="32" fill="#fff" style={signFace}>
        NOTICE
      </text>
      <text x="150" y="122" textAnchor="middle" fontSize="22" fill={INK} style={signFace}>
        AUTHORISED
      </text>
      <text x="150" y="152" textAnchor="middle" fontSize="22" textLength="250" lengthAdjust="spacingAndGlyphs" fill={INK} style={signFace}>
        PERSONNEL ONLY
      </text>
      <rect x="0" y="194" width="300" height="6" fill="#9097A5" />
    </svg>
  );
}

function AcmOffcut({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 60" className={className} role="img" aria-label="ACM panel offcut showing its aluminium-polyethylene-aluminium edge">
      <path d="M0 10h260v40H0z" fill="#F4F4F1" />
      <rect y="34" width="260" height="4" fill="#C9CBC7" />
      <rect y="38" width="260" height="9" fill="#26282D" />
      <rect y="47" width="260" height="3" fill="#C9CBC7" />
    </svg>
  );
}

export function ButterflyFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 440" className={className} role="img" aria-label="Printed butterfly flag">
      <path d="M20 22C70 18 120 40 128 96c10 80-10 190-108 290Z" fill={BLUE} />
      <path d="M20 250c44-10 82-6 104-2-14 50-46 96-104 138Z" fill={YELLOW} />
      <path d="M20 22C60 19 96 32 114 58" stroke="#fff" strokeWidth="3" opacity="0.2" fill="none" />
      <rect x="15" y="12" width="6" height="410" rx="3" fill="#2A2C31" />
      <path d="M2 420h32l4 12H-2Z" fill="#2A2C31" />
    </svg>
  );
}

export function VinylRoll({ className }: { className?: string }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 520 260" className={className} role="img" aria-label="Roll of wide-format printed vinyl, unrolled">
      <defs>
        <pattern id={`${u}h`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="5.5" fill={RED} />
        </pattern>
        <linearGradient id={`${u}m`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="1" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <mask id={`${u}k`}>
          <rect x="60" y="40" width="460" height="200" fill="#fff" />
          <rect x="260" y="40" width="260" height="200" fill={`url(#${u}m)`} />
        </mask>
      </defs>
      {/* unrolled sheet */}
      <rect x="60" y="40" width="460" height="200" fill="#FDFDFB" />
      <rect x="60" y="40" width="460" height="200" fill={`url(#${u}h)`} mask={`url(#${u}k)`} opacity="0.95" />
      <rect x="60" y="40" width="460" height="200" fill="none" stroke="rgba(20,22,27,0.10)" />
      {/* roll */}
      <rect x="20" y="28" width="68" height="224" rx="6" fill="#F2F2EE" />
      <ellipse cx="54" cy="28" rx="34" ry="10" fill="#E2E2DC" />
      <ellipse cx="54" cy="28" rx="12" ry="4" fill="#9C9F9B" />
      <rect x="20" y="28" width="16" height="224" fill="#000" opacity="0.05" />
    </svg>
  );
}

function BarrierTape({ className, colours }: { className?: string; colours: [string, string] }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 900 44" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <pattern id={u} width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="22" height="44" fill={colours[0]} />
          <rect x="22" width="22" height="44" fill={colours[1]} />
        </pattern>
      </defs>
      <rect width="900" height="44" fill={`url(#${u})`} />
      <rect width="900" height="44" fill="#fff" opacity="0.06" />
    </svg>
  );
}

export function WetFloorSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 250" className={className} role="img" aria-label="Free-standing wet floor sign">
      <path d="M40 8h70l34 236H6Z" fill={YELLOW} />
      <path d="M75 8h35l34 236H75Z" fill="#000" opacity="0.07" />
      <path d="M75 60 108 118H42Z" fill="none" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      <rect x="72" y="78" width="6" height="22" rx="2" fill={INK} />
      <circle cx="75" cy="107" r="3.4" fill={INK} />
      <text x="75" y="160" textAnchor="middle" fontSize="19" fill={INK} style={signFace}>
        CAUTION
      </text>
      <text x="75" y="186" textAnchor="middle" fontSize="15" fill={INK} style={signFace}>
        WET FLOOR
      </text>
      <rect x="55" y="0" width="40" height="12" rx="4" fill="#E0960A" />
    </svg>
  );
}

export function ScholarPatrolSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 330" className={className} role="img" aria-label="Scholar patrol stop sign on a pole">
      <rect x="49" y="96" width="12" height="226" rx="3" fill="#2A2C31" />
      <circle cx="55" cy="55" r="52" fill="#fff" />
      <circle cx="55" cy="55" r="45" fill={RED} />
      <text x="55" y="66" textAnchor="middle" fontSize="28" fill="#fff" style={signFace}>
        STOP
      </text>
      <rect x="35" y="318" width="40" height="10" rx="3" fill="#2A2C31" />
    </svg>
  );
}

export function TapeRoll({ className, colours = [RED, "#FBFBF8"] }: { className?: string; colours?: [string, string] }) {
  const u = useUid();
  return (
    <svg viewBox="0 0 160 150" className={className} role="img" aria-label="Roll of barrier tape">
      <defs>
        <pattern id={u} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="8" height="16" fill={colours[0]} />
          <rect x="8" width="8" height="16" fill={colours[1]} />
        </pattern>
      </defs>
      <rect x="16" y="40" width="128" height="100" rx="6" fill={`url(#${u})`} />
      <ellipse cx="80" cy="40" rx="64" ry="26" fill={colours[0]} />
      <ellipse cx="80" cy="40" rx="64" ry="26" fill="#fff" opacity="0.15" />
      <ellipse cx="80" cy="40" rx="26" ry="11" fill="#DCD8CC" />
      <ellipse cx="80" cy="40" rx="20" ry="8" fill="#B8B3A6" />
    </svg>
  );
}

/* ----------------------------------------------------------- compositions */

/** 01 – a wall of real safety signs, hung at their own sizes. */
export function CompSafety() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="left-[2%] top-[6%] w-[30%]">
        <FireExtinguisherSign className="block h-auto w-full" />
      </Place>
      <Place className="left-[35%] top-[0%] w-[26%]">
        <WarningPlate className="block h-auto w-full" />
      </Place>
      <Place className="left-[64%] top-[10%] w-[26%]">
        <MandatoryPlate className="block h-auto w-full" />
      </Place>
      <Place className="left-[14%] top-[58%] w-[22%]">
        <FirstAidPlate className="block h-auto w-full" />
      </Place>
      <Place className="left-[40%] top-[52%] w-[22%]">
        <ProhibitionPlate className="block h-auto w-full" />
      </Place>
      <Place className="left-[68%] top-[54%] w-[17%] origin-top rotate-[4deg]">
        <ScaffoldTag className="block h-auto w-full" />
      </Place>
    </div>
  );
}

/** 02 – a chevron board running off the edge, stop and yield in front. */
export function CompRoad() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="-right-[8%] top-[8%] w-[100%]">
        <ChevronBoard className="block h-auto w-full" />
      </Place>
      <Place className="left-[4%] top-[42%] w-[34%]">
        <StopSign className="block h-auto w-full" />
      </Place>
      <Place className="left-[42%] top-[50%] w-[30%]">
        <YieldSign className="block h-auto w-full" />
      </Place>
      <Place className="left-[82%] top-[34%] w-[7%]">
        <Delineator className="block h-auto w-full" />
      </Place>
    </div>
  );
}

/** 03 – tape strung across the frame, a cone and a water barrier on the ground. */
export function CompSite() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="-left-[4%] top-[12%] w-[108%] -rotate-[6deg]">
        <BarrierTape className="block h-[2.4rem] w-full" colours={[RED, "#FBFBF8"]} />
      </Place>
      <Place className="left-[2%] top-[34%] w-[60%]">
        <BarrierNetting className="block h-auto w-full" />
      </Place>
      <Place className="left-[64%] top-[30%] w-[28%]">
        <Cone className="block h-auto w-full" />
      </Place>
      <Place className="-left-[4%] top-[88%] w-[108%] rotate-[2deg]">
        <BarrierTape className="block h-[1.6rem] w-full" colours={[INK, YELLOW]} />
      </Place>
    </div>
  );
}

/** 04 – PPE as objects: the vest large, hat and glove resting against it. */
export function CompPPE() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="left-[30%] top-[0%] w-[44%]">
        <Vest className="block h-auto w-full" />
      </Place>
      <Place className="left-[0%] top-[58%] w-[44%]">
        <HardHat className="block h-auto w-full" />
      </Place>
      <Place className="left-[72%] top-[46%] w-[20%] rotate-[14deg]">
        <Gloves className="block h-auto w-full" />
      </Place>
    </div>
  );
}

/** 05 – made-to-order: an engraved plate, a Chromadek notice and an ACM offcut. */
export function CompCustom() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="left-[4%] top-[0%] w-[50%]">
        <ChromadekSign className="block h-auto w-full" />
      </Place>
      <Place className="left-[36%] top-[52%] w-[60%]">
        <EngravedPlate className="block h-auto w-full" line1="MAIN SWITCHROOM" line2="Level 2 · Block B" />
      </Place>
      <Place className="left-[60%] top-[12%] w-[34%] rotate-[-4deg]">
        <AcmOffcut className="block h-auto w-full" />
      </Place>
    </div>
  );
}

/** 06 – print: a roll of wide-format vinyl unrolled, a butterfly flag standing beside it. */
export function CompPrint() {
  return (
    <div className="relative aspect-[14/10] w-full">
      <Place className="left-[0%] top-[30%] w-[68%]">
        <VinylRoll className="block h-auto w-full" />
      </Place>
      <Place className="left-[74%] top-[0%] w-[20%]">
        <ButterflyFlag className="block h-auto w-full" />
      </Place>
    </div>
  );
}

export const compositions = {
  "safety-signs": CompSafety,
  "road-and-traffic": CompRoad,
  "site-safety-and-barriers": CompSite,
  "ppe-and-workwear": CompPPE,
  "custom-signs": CompCustom,
  "print-display-and-branding": CompPrint,
} as const;
