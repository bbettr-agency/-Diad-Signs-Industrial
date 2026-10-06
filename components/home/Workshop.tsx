"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { materials, type MaterialKey } from "@/content/home";
import { slabs } from "@/components/materials";
import { Arrow } from "@/components/ui";

/* ------------------------------------------------------------------------ */
/* The sign, in a 600 × 440 frame. Face: x 120–480, y 80–320.               */
/* ------------------------------------------------------------------------ */

type Sub = { face: string; faceDetail?: ReactNode; t: number; edge: ReactNode };

const FX = 120;
const FY = 80;
const FW = 360;
const FH = 240;

/** Bottom and right edges of the plate, extruded by thickness t. */
function edges(t: number, fill: string, bands?: { at: number; h: number; fill: string }[]) {
  const dx = t * 0.6;
  const bottom = `M${FX} ${FY + FH}H${FX + FW}l${dx} ${t}H${FX + dx}Z`;
  const right = `M${FX + FW} ${FY}l${dx} ${t}V${FY + FH + t}l${-dx} ${-t}Z`;
  return (
    <g>
      <path d={right} fill={fill} />
      <path d={right} fill="#000" opacity="0.12" />
      <path d={bottom} fill={fill} />
      {bands?.map((b) => (
        <path key={b.at} d={`M${FX + (b.at / t) * dx} ${FY + FH + b.at}H${FX + FW + (b.at / t) * dx}v${b.h}H${FX + (b.at / t) * dx}Z`} fill={b.fill} />
      ))}
    </g>
  );
}

const substrates: Record<MaterialKey, Sub> = {
  abs: { face: "#FBFBF8", t: 10, edge: edges(10, "#DEDED7") },
  chromadek: { face: "#F8F8F5", t: 6, edge: edges(6, "#9DA2AA", [{ at: 0, h: 1.4, fill: "#F8F8F5" }]) },
  acm: {
    face: "#F7F7F4",
    t: 12,
    edge: edges(12, "#C9CBC7", [{ at: 2.5, h: 7, fill: "#26282D" }]),
  },
  aluminium: {
    face: "url(#ws-alu)",
    t: 7,
    edge: edges(7, "#BEC0BC"),
  },
  correx: {
    face: "#EEF1F4",
    faceDetail: (
      <g opacity="0.55">
        {Array.from({ length: 36 }, (_, i) => (
          <rect key={i} x={FX + 4 + i * 10} y={FY} width="1" height={FH} fill="#D3D9E0" />
        ))}
      </g>
    ),
    t: 14,
    edge: edges(14, "#E6EAEE", [
      { at: 0, h: 1.6, fill: "#CBD1D8" },
      { at: 12.4, h: 1.6, fill: "#CBD1D8" },
    ]),
  },
  photoluminescent: { face: "#EAF3CF", t: 9, edge: edges(9, "#DEDED7", [{ at: 0, h: 1.8, fill: "#D3E3A6" }]) },
  reflective: {
    face: "url(#ws-prism)",
    t: 8,
    edge: edges(8, "#D7DAD9", [{ at: 0, h: 1.5, fill: "#EEF0EF" }]),
  },
  magnetic: { face: "#F7F7F4", t: 6, edge: edges(6, "#2A2C31", [{ at: 0, h: 1.2, fill: "#F7F7F4" }]) },
  vinyl: { face: "#FBFBF8", t: 10, edge: edges(10, "#DEDED7", [{ at: 0, h: 1.2, fill: "#E31E26" }]) },
};

const layer = "absolute inset-0 transition-[opacity,transform,clip-path] duration-700 ease-house";

function SignStage({ step, mat }: { step: number; mat: MaterialKey }) {
  const sub = substrates[mat];
  const engraved = mat === "aluminium";
  return (
    <div className="relative aspect-[430/400] w-full">
      {/* 1 · the artwork – full size first, then pinned up as the reference */}
      <div
        className={layer}
        style={{
          opacity: step >= 5 ? 0 : 1,
          transform: step === 0 ? "none" : "translate(-40%, -40%) scale(0.32)",
          zIndex: step === 0 ? 5 : 1,
        }}
      >
        <svg viewBox="90 30 430 400" className="h-full w-full" aria-hidden="true">
          <g style={{ filter: "drop-shadow(0 10px 14px rgba(20,22,27,0.14))" }}>
            <rect x="140" y="54" width="320" height="300" fill="#FFFFFF" />
          </g>
          <g fill="none" stroke="#233579" strokeWidth="2">
            <rect x="170" y="94" width="260" height="173" strokeDasharray="7 5" />
            <rect x="182" y="106" width="236" height="52" />
            <path d="M226 200h148M244 226h112" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
          </g>
          <text x="300" y="142" textAnchor="middle" fontSize="30" fill="none" stroke="#233579" strokeWidth="1.2" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
            NOTICE
          </text>
          <path d="M182 300h120M182 318h80" stroke="#D4D7DD" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2 · the substrate plate */}
      <div
        className={layer}
        style={{
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? (step >= 5 ? "translateY(-12%)" : "none") : "translateY(14%)",
          zIndex: 2,
        }}
      >
        <svg viewBox="90 30 430 400" className="h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="ws-alu" x1="0" y1="0" x2="1" y2="0.2">
              <stop offset="0" stopColor="#CDCFCB" />
              <stop offset="0.35" stopColor="#EEEFEC" />
              <stop offset="0.6" stopColor="#D5D7D3" />
              <stop offset="1" stopColor="#E7E8E5" />
            </linearGradient>
            <pattern id="ws-prism" width="14" height="14" patternUnits="userSpaceOnUse">
              <rect width="14" height="14" fill="#F2F3F2" />
              <path d="M0 7 7 0l7 7-7 7Z" fill="none" stroke="#D4D8D7" strokeWidth="0.8" />
            </pattern>
          </defs>
          {/* post – appears when the sign is finished */}
          <g style={{ transformOrigin: "300px 440px", transform: step >= 5 ? "scaleY(1)" : "scaleY(0)", transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
            <rect x="292" y="320" width="16" height="170" fill="#5A5D63" />
            <rect x="286" y="300" width="28" height="9" rx="1.5" fill="#3A3D42" />
            <rect x="286" y="338" width="28" height="9" rx="1.5" fill="#3A3D42" />
          </g>
          <g style={{ filter: `drop-shadow(0 ${step >= 4 ? 26 : 14}px ${step >= 4 ? 28 : 18}px rgba(20,22,27,${step >= 4 ? 0.26 : 0.16}))`, transition: "filter 700ms" }}>
            {sub.edge}
            <rect x={FX} y={FY} width={FW} height={FH} fill={sub.face} />
            {sub.faceDetail}
            <rect x={FX} y={FY} width={FW} height={FH} fill="none" stroke="rgba(20,22,27,0.10)" />
          </g>
        </svg>
      </div>

      {/* 3 · the sign face – printed (or engraved) in a single pass */}
      <div
        className={layer}
        style={{
          opacity: step >= 2 ? 1 : 0,
          clipPath: step >= 2 ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transform: step >= 5 ? "translateY(-12%)" : "none",
          zIndex: 3,
        }}
      >
        <svg viewBox="90 30 430 400" className="h-full w-full" aria-hidden="true">
          {engraved ? (
            <g style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
              <text x="300" y="168" textAnchor="middle" fontSize="54" fill="#fff" opacity="0.7" dy="1.5">
                NOTICE
              </text>
              <text x="300" y="168" textAnchor="middle" fontSize="54" fill="#1C1E22">
                NOTICE
              </text>
              <text x="300" y="236" textAnchor="middle" fontSize="25" fill="#1C1E22">
                AUTHORISED
              </text>
              <text x="300" y="270" textAnchor="middle" fontSize="25" fill="#1C1E22">
                PERSONNEL ONLY
              </text>
            </g>
          ) : (
            <g style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
              <rect x="136" y="96" width="328" height="78" fill="#233579" />
              <text x="300" y="150" textAnchor="middle" fontSize="44" fill="#fff">
                NOTICE
              </text>
              <text x="300" y="232" textAnchor="middle" fontSize="27" fill="#14161B">
                AUTHORISED
              </text>
              <text x="300" y="268" textAnchor="middle" fontSize="27" fill="#14161B">
                PERSONNEL ONLY
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* 4 · laminate – a sheen passes across the face and stays as gloss */}
      <div
        className={`${layer} overflow-hidden`}
        style={{ clipPath: "inset(12.5% 9.3% 27.5% 7%)", transform: step >= 5 ? "translateY(-12%)" : "none", zIndex: 4 }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-y-0 w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-[1400ms] ease-house"
          style={{ transform: step >= 3 ? "translateX(260%)" : "translateX(-120%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent transition-opacity duration-700" style={{ opacity: step >= 3 ? 1 : 0 }} />
      </div>
      <div className={layer} style={{ opacity: step === 3 ? 1 : 0, zIndex: 6 }} aria-hidden="true">
        <svg viewBox="90 30 430 400" className="h-full w-full">
          <path d="M420 320h60v-58c-10 30-34 52-60 58Z" fill="#F4F5F2" />
          <path d="M420 320c26-6 50-28 60-58" fill="none" stroke="rgba(20,22,27,0.25)" />
          <path d="M432 314c18-6 34-22 42-40" fill="none" stroke="#fff" strokeWidth="3" opacity="0.8" />
        </svg>
      </div>

      {/* 5 · fixings */}
      <div className={layer} style={{ opacity: step >= 4 ? 1 : 0, transform: step >= 5 ? "translateY(-12%)" : step >= 4 ? "none" : "scale(1.04)", zIndex: 5 }}>
        <svg viewBox="90 30 430 400" className="h-full w-full" aria-hidden="true">
          {[
            [134, 94],
            [466, 94],
            [134, 306],
            [466, 306],
          ].map(([x, y]) => (
            <g key={`${x}${y}`}>
              <circle cx={x} cy={y} r="6.5" fill="#B9BCB8" />
              <circle cx={x} cy={y} r="6.5" fill="none" stroke="#8F928E" strokeWidth="1" />
              <path d={`M${x - 3.5} ${y}h7`} stroke="#6F726F" strokeWidth="1.6" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const steps: { title: string; body: string }[] = [
  { title: "Start with an idea", body: "A sketch, a requirement or print-ready artwork. Our art department handles layout and colour, or works from your EPS or PDF." },
  { title: "Choose the substrate", body: "The material depends on where the sign will live and how long it has to last." },
  { title: "Print, cut or engrave", body: "Wide-format digital and screen printing, cut vinyl and laser engraving – in our Waltloo workshop." },
  { title: "Laminate", body: "Matte, gloss or non-slip finishes for UV, chemical and graffiti resistance." },
  { title: "Mount", body: "Fixed to suit internal or external use." },
  { title: "Finished", body: "Packed in-house, collected or delivered by our partner couriers – and installation can be arranged." },
];

/**
 * The workshop. One sign stays in view while six short captions scroll past;
 * the sign changes with each one – artwork, substrate, print, laminate,
 * fixings, finished on its post. Choosing a material at the substrate step
 * changes the plate itself. Native scroll; nothing is hijacked.
 */
export function Workshop() {
  const [step, setStep] = useState(0);
  const [mat, setMat] = useState<MaterialKey>("abs");
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const line = window.innerHeight * 0.6;
      let best = 0;
      let dist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - line);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setStep(best);
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const selected = materials.find((m) => m.key === mat)!;

  return (
    <div className="relative lg:grid lg:grid-cols-12 lg:gap-10">
      {/* The sign – sticky beside (desktop) or above (mobile) the captions */}
      <div className="sticky top-[4.5rem] z-10 -mx-5 bg-brand-metal px-5 pb-3 pt-2 sm:-mx-6 sm:px-6 lg:order-last lg:col-span-7 lg:mx-0 lg:self-start lg:h-[100svh] lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0 lg:[top:0]">
        <div className="mx-auto flex h-full max-w-[20rem] items-center sm:max-w-[28rem] lg:max-w-[min(100%,calc(100svh-9rem))] lg:pt-16">
          <SignStage step={step} mat={mat} />
        </div>
      </div>

      <ol className="relative lg:col-span-5">
        {steps.map((s, i) => {
          const on = i === step;
          return (
            <li
              key={s.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-[62vh] flex-col justify-center py-8 lg:min-h-[78vh]"
            >
              {/* Inactive steps recede through the heading colour only (ink/60 ≈ 4.4:1 on metal),
                  so every caption stays readable – a 30% opacity fade measured 1.6:1. */}
              <div>
                <h3 className={`display text-d-3 transition-colors duration-500 ease-house ${on ? "text-brand-ink" : "text-brand-ink/60"}`}>{s.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[1.0625rem] leading-relaxed text-brand-graphite">{s.body}</p>

                {i === 1 && (
                  <div className="mt-7">
                    <ul className="max-w-[24rem]" aria-label="Substrates">
                      {materials.map((m, k) => {
                        const sel = m.key === mat;
                        return (
                          <li key={m.key}>
                            <button
                              type="button"
                              aria-pressed={sel}
                              onClick={() => setMat(m.key)}
                              onMouseEnter={() => {
                                if (window.matchMedia("(hover: hover)").matches) setMat(m.key);
                              }}
                              onFocus={() => setMat(m.key)}
                              className="group grid w-full grid-cols-[9.5rem_1fr] items-center gap-4 py-[0.2rem] text-left"
                            >
                              <span
                                className="block transition-transform duration-300 ease-house [filter:drop-shadow(0_5px_5px_rgba(20,22,27,0.12))]"
                                style={{ transform: `translateX(${sel ? 14 : (k % 3) * 4}px)` }}
                              >
                                {slabs[m.key]}
                              </span>
                              <span className={`text-[0.98rem] transition-colors ${sel ? "font-semibold text-brand-ink" : "text-brand-graphite group-hover:text-brand-ink"}`}>{m.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-4 max-w-[38ch] text-[0.98rem] leading-relaxed text-brand-ink" aria-live="polite">
                      <span className="font-semibold">{selected.name}.</span> {selected.use}
                    </p>
                  </div>
                )}

                {i === steps.length - 1 && (
                  <Link href="/?family=custom-signs#quote" className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary">
                    Quote a custom sign
                    <Arrow className="h-2.5 w-3.5 transition-transform duration-200 ease-house group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
