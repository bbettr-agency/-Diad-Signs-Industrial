import type { ReactNode } from "react";
import type { MaterialKey } from "@/content/home";

/* ------------------------------------------------------------------ slabs */
/* Each material drawn as a cut offcut seen from the front corner: top face,
   front edge (where its construction shows) and a shaded end. */

const W = 300;
const D = 16; // top-face depth (skew)

function Slab({ t, top, front, end, detail, extra }: { t: number; top: ReactNode; front: ReactNode; end: string; detail?: ReactNode; extra?: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${W + D + 6} ${t + D + 6}`} className="block h-auto w-full overflow-visible" aria-hidden="true">
      <g transform="translate(1 1)">
        {top}
        <g>{front}</g>
        <path d={`M${W} ${D}L${W + D} 0v${t}L${W} ${D + t}Z`} fill={end} />
        {detail}
        {extra}
      </g>
    </svg>
  );
}

const topFace = (fill: string, extra?: ReactNode) => (
  <g>
    <path d={`M${D} 0H${W + D}L${W} ${D}H0Z`} fill={fill} />
    {extra}
  </g>
);

export const slabs: Record<MaterialKey, ReactNode> = {
  abs: <Slab t={12} top={topFace("#F8F8F4")} front={<rect y={D} width={W} height={12} fill="#E3E3DD" />} end="#D6D6CF" />,
  chromadek: (
    <Slab
      t={8}
      top={topFace("#2D478F", <path d={`M${D + 40} 2H${W}`} stroke="#fff" strokeOpacity="0.18" strokeWidth="3" />)}
      front={
        <g>
          <rect y={D} width={W} height={2} fill="#2D478F" />
          <rect y={D + 2} width={W} height={6} fill="#A3A8B0" />
        </g>
      }
      end="#8D929A"
    />
  ),
  acm: (
    <Slab
      t={14}
      top={topFace("#F4F4F1")}
      front={
        <g>
          <rect y={D} width={W} height={2.5} fill="#C9CBC7" />
          <rect y={D + 2.5} width={W} height={9} fill="#26282D" />
          <rect y={D + 11.5} width={W} height={2.5} fill="#C9CBC7" />
        </g>
      }
      end="#3A3C41"
    />
  ),
  aluminium: (
    <Slab
      t={8}
      top={topFace(
        "#DCDDDA",
        <g>
          {[3, 6, 9, 12].map((y) => (
            <path key={y} d={`M${D - y + 4} ${y}H${W + D - y}`} stroke="#fff" strokeOpacity="0.45" strokeWidth="0.8" />
          ))}
          <path d={`M${D + 30} 5H${D + 150}`} stroke="#5F625E" strokeWidth="2.2" />
          <path d={`M${D + 30} 6.4H${D + 150}`} stroke="#fff" strokeOpacity="0.8" strokeWidth="0.8" />
        </g>,
      )}
      front={<rect y={D} width={W} height={8} fill="#BEC0BC" />}
      end="#A9ABA7"
    />
  ),
  correx: (
    <Slab
      t={16}
      top={topFace("#EDF0F3", <g>{Array.from({ length: 20 }, (_, i) => <path key={i} d={`M${D + 6 + i * 14} 0L${6 + i * 14} ${D}`} stroke="#D6DBE1" strokeWidth="0.8" />)}</g>)}
      front={
        <g>
          <rect y={D} width={W} height={16} fill="#F3F5F7" />
          <rect y={D} width={W} height={1.6} fill="#CBD1D8" />
          <rect y={D + 14.4} width={W} height={1.6} fill="#CBD1D8" />
          {Array.from({ length: 22 }, (_, i) => (
            <rect key={i} x={6 + i * 13.6} y={D} width={1.4} height={16} fill="#CBD1D8" />
          ))}
        </g>
      }
      end="#DDE2E7"
    />
  ),
  photoluminescent: (
    <Slab
      t={8}
      top={topFace("#E5F0C6")}
      front={
        <g>
          <rect y={D} width={W} height={2} fill="#CFE2A0" />
          <rect y={D + 2} width={W} height={6} fill="#E3E3DD" />
        </g>
      }
      end="#D3D4CC"
    />
  ),
  reflective: (
    <Slab
      t={6}
      top={topFace(
        "#EEF0EF",
        <g opacity="0.55">
          {Array.from({ length: 26 }, (_, i) => (
            <path key={i} d={`M${D + i * 12} 0l-8 ${D}M${D + i * 12} 0l4 ${D}`} stroke="#BFC4C3" strokeWidth="0.6" />
          ))}
        </g>,
      )}
      front={
        <g>
          <rect y={D} width={W} height={1.5} fill="#D7DAD9" />
          <rect y={D + 1.5} width={W} height={4.5} fill="#E3E3DD" />
        </g>
      }
      end="#CFD1CC"
    />
  ),
  magnetic: <Slab t={5} top={topFace("#2B2D32")} front={<rect y={D} width={W} height={5} fill="#1C1E22" />} end="#16181B" />,
  vinyl: (
    <Slab
      t={4}
      top={topFace("#E31E26")}
      front={
        <g>
          <rect y={D} width={W} height={1.5} fill="#B3141B" />
          <rect y={D + 1.5} width={W} height={2.5} fill="#F2F1EC" />
        </g>
      }
      end="#C9C8C2"
      extra={<path d={`M${W - 46} ${D}C${W - 30} ${D - 22} ${W - 6} ${D - 26} ${W + 4} ${D - 30}L${W + 10} ${D - 18}C${W - 8} ${D - 14} ${W - 26} ${D - 6} ${W - 34} ${D}Z`} fill="#F2F1EC" stroke="#C9C8C2" strokeWidth="0.8" />}
    />
  ),
};

