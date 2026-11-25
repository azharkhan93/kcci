"use client";

import React, { useId } from "react";

export interface MotifProps {
  className?: string;
}


export const ChinarLeafSvg: React.FC<MotifProps> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M32 6C30.8 11.8 29 16.5 26.8 19.6C24.5 16.2 21.8 13.6 18.2 12.2C18.8 16.4 18.2 20.4 16.5 23.6C12.8 22.1 8.8 21.6 5.2 22.4C7.9 25.8 9.8 29.4 10.6 32.8C7.6 34.4 5.2 36.8 4 39.8C8.6 40.6 13.4 40.4 17.8 39.2C16.2 42.6 15.8 46.2 17 49.4C21.2 47.4 25.2 44.8 28.4 41.8C29.4 41 30.2 40.6 30.8 40.6V57.5C30.8 58.3 31.3 59 32 59C32.7 59 33.2 58.3 33.2 57.5V40.6C33.8 40.6 34.6 41 35.6 41.8C38.8 44.8 42.8 47.4 47 49.4C48.2 46.2 47.8 42.6 46.2 39.2C50.6 40.4 55.4 40.6 60 39.8C58.8 36.8 56.4 34.4 53.4 32.8C54.2 29.4 56.1 25.8 58.8 22.4C55.2 21.6 51.2 22.1 47.5 23.6C45.8 20.4 45.2 16.4 45.8 12.2C42.2 13.6 39.5 16.2 37.2 19.6C35 16.5 33.2 11.8 32 6Z"
      fill="currentColor"
      fillOpacity="0.16"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path
      d="M32 13V40.5M32 33L19.5 19.5M32 33L44.5 19.5M32 38L12.5 34.5M32 38L51.5 34.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Traditional Kashmiri Sozni / Pashmina Paisley (Kalka / Badam) motif
 * filled with fine saffron-lotus internal filigree.
 */
export const KashmirPaisleySvg: React.FC<MotifProps> = ({
  className = "w-16 h-24",
}) => (
  <svg
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M42 12C52 10 61 17 57 27C53 36 42 35 45 45C48 54 67 60 68 81C69 98 55 110 38 110C21 110 10 96 12 77C14 58 29 44 33 29C35 20 35 13 42 12Z"
      fill="currentColor"
      fillOpacity="0.06"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M40 34C36 48 22 61 21 77C20 90 29 99 39 99C49 99 57 91 56 79C55 66 43 58 40 46"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="2.5 2.5"
      opacity="0.7"
    />
    <path
      d="M39 58C35 66 32 74 33 82C34 88 39 91 44 88C48 85 48 77 44 71C42 67 40 62 39 58Z"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.85"
    />
    <circle cx="39.5" cy="77.5" r="2.2" fill="currentColor" opacity="0.85" />
    <circle cx="39" cy="49" r="1.5" fill="currentColor" opacity="0.7" />
    <circle cx="48" cy="21" r="1.5" fill="currentColor" opacity="0.7" />
  </svg>
);

/**
 * Subtle geometric Kashmiri Khatamband ceiling wood-lattice SVG pattern overlay.
 * Renders crisp octagonal & 8-pointed star joinery hairlines cleanly at low opacity.
 */
export const KhatambandPatternOverlay: React.FC<MotifProps> = ({
  className = "opacity-[0.06] text-[#FFD37C]",
}) => {
  const rawId = useId();
  const patternId = `khatamband-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width="88"
          height="88"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M44 4L56 32L84 44L56 56L44 84L32 56L4 44L32 32Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
          />
          <path
            d="M22 22L66 22L66 66L22 66Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.65"
            opacity="0.7"
          />
          <path
            d="M44 0V14M44 74V88M0 44H14M74 44H88"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.6"
          />
          <circle cx="44" cy="44" r="4" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

/**
 * Handcrafted Kashmiri Sozni vine & Chinar filigree border SVG for wide dark/warm sections
 * (replaces generic circuit lines with flowing saffron, rust & chinar craftsmanship).
 */
export const SozniCornerFiligree: React.FC<{
  side?: "left" | "right";
  className?: string;
}> = ({ side = "left", className = "" }) => {
  const gradId = useId().replace(/:/g, "");
  const isRight = side === "right";

  return (
    <svg
      className={`pointer-events-none select-none ${
        isRight ? "-scale-x-100" : ""
      } ${className}`}
      viewBox="0 0 280 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sozni-grad-${gradId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD37C" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D8992E" stopOpacity="0.65" />
          <stop offset="80%" stopColor="#BB5D0E" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#A61A28" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Flowing Dhaal vine stems */}
      <path
        d="M-10 35C65 40 120 85 125 145C130 205 70 250 105 315C120 342 155 360 185 370"
        stroke={`url(#sozni-grad-${gradId})`}
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M-10 85C45 95 85 135 80 185C75 235 30 270 60 330"
        stroke={`url(#sozni-grad-${gradId})`}
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
      />

      {/* Stylized Kalka / Paisley bud at upper curl */}
      <path
        d="M126 138C145 130 162 140 156 158C150 175 126 178 118 162C113 152 117 142 126 138Z"
        stroke="#FFD37C"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        fill="#BB5D0E"
        fillOpacity="0.1"
      />
      <circle cx="137" cy="154" r="2.5" fill="#FFD37C" fillOpacity="0.75" />

      {/* 5-point Chinar accent leaf along lower stem */}
      <path
        d="M106 248L98 228L114 238L124 220L128 240L146 238L131 252L140 268L122 260L110 274L108 256L90 256Z"
        stroke="#D8992E"
        strokeWidth="1.1"
        strokeOpacity="0.6"
        fill="#A61A28"
        fillOpacity="0.14"
      />

      {/* Micro saffron crocus dots */}
      <circle cx="72" cy="70" r="2" fill="#D8992E" fillOpacity="0.7" />
      <circle cx="80" cy="185" r="2.2" fill="#FFD37C" fillOpacity="0.65" />
      <circle cx="145" cy="348" r="2" fill="#7E393F" fillOpacity="0.65" />
    </svg>
  );
};

const ANGLES_12 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const ANGLES_8 = [0, 45, 90, 135, 180, 225, 270, 315];

/**
 * Advanced 12-Fold Kashmiri Shamsa / Dawazah-Gul-Aftab Sunburst Medallion SVG.
 * Inspired by traditional Jamawar center medallions & Dawazah Khatamband star ceilings.
 */
export const KashmirShamsaMedallionSvg: React.FC<MotifProps> = ({
  className = "w-44 h-44 text-[#FFD37C]",
}) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Sozni pearl stitch ring & scalloped frame */}
    <circle
      cx="120"
      cy="120"
      r="108"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeDasharray="2 4.5"
      opacity="0.7"
    />
    <circle
      cx="120"
      cy="120"
      r="100"
      stroke="currentColor"
      strokeWidth="1.1"
      opacity="0.55"
    />

    {/* 12 Scalloped Papier-Mâché Petals */}
    {ANGLES_12.map((deg) => (
      <g key={`outer-petal-${deg}`} transform={`rotate(${deg} 120 120)`}>
        <path
          d="M120 16 C126 26, 130 34, 120 44 C110 34, 114 26, 120 16 Z"
          fill="currentColor"
          fillOpacity="0.14"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="120" cy="28" r="1.4" fill="currentColor" opacity="0.85" />
      </g>
    ))}

    {/* Triple Interlocking Squares -> Traditional 12-Pointed Khatamband Dawazah Star */}
    {[0, 30, 60].map((deg) => (
      <rect
        key={`star-sq-${deg}`}
        x="62"
        y="62"
        width="116"
        height="116"
        rx="2"
        transform={`rotate(${deg} 120 120)`}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.65"
      />
    ))}

    {/* Inner Circular Framing Ring */}
    <circle
      cx="120"
      cy="120"
      r="56"
      fill="currentColor"
      fillOpacity="0.06"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* 12 Inner Gul-Aftab Lotus Rays */}
    {ANGLES_12.map((deg) => (
      <g key={`inner-ray-${deg}`} transform={`rotate(${deg} 120 120)`}>
        <path
          d="M120 68 C124 80, 124 92, 120 102 C116 92, 116 80, 120 68 Z"
          fill="currentColor"
          fillOpacity="0.24"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </g>
    ))}

    {/* Central 8-Fold Sunburst Core */}
    {ANGLES_8.map((deg) => (
      <line
        key={`core-spoke-${deg}`}
        x1="120"
        y1="104"
        x2="120"
        y2="136"
        transform={`rotate(${deg} 120 120)`}
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.8"
      />
    ))}
    <circle
      cx="120"
      cy="120"
      r="16"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <circle cx="120" cy="120" r="5" fill="currentColor" />
  </svg>
);

/**
 * Advanced Kashmiri Pinjrakari (Mortise-and-Tenon Lattice) & Scalloped Mehrab Arch SVG.
 * Evokes traditional Kashmiri Zoondan windows and geometric wood joinery.
 */
export const KashmirPinjrakariArchSvg: React.FC<MotifProps> = ({
  className = "w-36 h-44 text-[#64691D]",
}) => (
  <svg
    viewBox="0 0 180 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Architectural Border */}
    <rect
      x="10"
      y="10"
      width="160"
      height="200"
      rx="6"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.6"
    />

    {/* Scalloped Kashmiri Cusped Mehrab Arch */}
    <path
      d="M24 202 V92 C24 82, 34 75, 42 66 C49 58, 57 48, 66 42 C75 35, 84 26, 90 18 C96 26, 105 35, 114 42 C123 48, 131 58, 138 66 C146 75, 156 82, 156 92 V202 Z"
      fill="currentColor"
      fillOpacity="0.06"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />

    {/* Corner Spandrel Kalkas */}
    <path
      d="M24 44 C32 32, 46 24, 58 22 C46 32, 38 42, 24 44 Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <path
      d="M156 44 C148 32, 134 24, 122 22 C134 32, 142 42, 156 44 Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="0.9"
    />

    {/* Interlocking 8-Fold Pinjrakari Star Rosette inside Arch */}
    <rect
      x="54"
      y="88"
      width="72"
      height="72"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.7"
    />
    <rect
      x="54"
      y="88"
      width="72"
      height="72"
      transform="rotate(45 90 124)"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.7"
    />
    <circle
      cx="90"
      cy="124"
      r="22"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
    <path
      d="M90 66 V182 M38 124 H142"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.55"
    />
    <polygon
      points="90,104 97,117 110,124 97,131 90,144 83,131 70,124 83,117"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="90" cy="124" r="3.5" fill="currentColor" />
  </svg>
);

/**
 * Advanced Nested Kashmiri Jamawar Mother-and-Child Kalka (Boteh / Paisley)
 * enriched with Hazaar Posh micro-blossoms and Chinar base finial.
 */
export const KashmirJamawarKalkaSvg: React.FC<MotifProps> = ({
  className = "w-36 h-40 text-[#7E393F]",
}) => (
  <svg
    viewBox="0 0 180 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Mother Kalka (Boteh) Silhouette */}
    <path
      d="M94 18 C114 14, 130 28, 121 48 C113 64, 95 62, 101 81 C108 100, 142 110, 144 142 C145 170, 120 188, 90 188 C58 188, 38 164, 42 132 C46 99, 73 74, 80 48 C84 32, 82 21, 94 18 Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Scalloped Inner Border Contour */}
    <path
      d="M94 30 C106 28, 114 36, 108 49 C101 62, 87 62, 91 80 C97 101, 130 112, 131 140 C132 162, 113 176, 90 176 C66 176, 51 157, 54 131 C57 104, 79 81, 86 55 C89 43, 87 32, 94 30 Z"
      stroke="currentColor"
      strokeWidth="0.95"
      strokeDasharray="3 3"
      opacity="0.7"
    />

    {/* Inner Nested Child Kalka */}
    <path
      d="M92 84 C100 84, 105 92, 101 101 C98 108, 113 118, 114 137 C114 152, 103 162, 90 162 C76 162, 67 149, 69 133 C71 117, 84 105, 86 93 C87 87, 88 84, 92 84 Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* Central Hazaar-Posh Floral Stem inside Child Kalka */}
    <path
      d="M90 156 C89 140, 91 124, 92 106"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M90 138 C82 132, 78 126, 79 120 M90 132 C98 126, 102 120, 101 114"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="92" cy="103" r="3" fill="currentColor" opacity="0.85" />
    <circle cx="79" cy="119" r="2.2" fill="currentColor" opacity="0.7" />
    <circle cx="101" cy="113" r="2.2" fill="currentColor" opacity="0.7" />
    <circle cx="90" cy="144" r="2.5" fill="currentColor" opacity="0.8" />

    {/* Flanking Dhaal Vine & Micro Blossoms */}
    <path
      d="M36 164 C24 148, 22 124, 34 106 M146 162 C158 144, 158 122, 146 106"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    <circle cx="34" cy="105" r="2.2" fill="currentColor" opacity="0.65" />
    <circle cx="146" cy="105" r="2.2" fill="currentColor" opacity="0.65" />
    <circle cx="109" cy="36" r="2" fill="currentColor" opacity="0.75" />
  </svg>
);

/**
 * Detailed botanical autumn leaf inspired by the user's hanging Chinar/Oak reference:
 * Deep rounded sinuses, sharp serrated lobe tips, curved midrib + lateral veins,
 * and organic olive-to-amber-to-sienna autumn gradient.
 */
export const AutumnLeafDetailedSvg: React.FC<MotifProps> = ({
  className = "w-28 h-36",
}) => {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 180 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`leaf-grad-${uid}`} cx="50%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#64691D" />
          <stop offset="38%" stopColor="#D8992E" />
          <stop offset="72%" stopColor="#FFD37C" />
          <stop offset="90%" stopColor="#BB5D0E" />
          <stop offset="100%" stopColor="#A61A28" />
        </radialGradient>
        <linearGradient id={`vein-grad-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#6E2C00" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#7E393F" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#BB5D0E" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Twig petiole attaching at top */}
      <path
        d="M90 6 C89 24, 90 36, 91 48"
        stroke="#6E2C00"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Deeply lobed & sharply serrated botanical leaf blade */}
      <path
        d="M91 46
           C83 49, 76 47, 67 39
           C69 51, 67 60, 56 64
           C48 61, 41 56, 33 52
           C37 64, 42 74, 48 80
           C37 83, 24 81, 14 78
           C23 91, 34 100, 46 105
           C35 110, 26 111, 19 110
           C28 122, 41 128, 56 128
           C47 137, 37 146, 28 153
           C41 157, 54 156, 65 150
           C61 163, 55 174, 48 184
           C62 183, 73 178, 81 169
           C83 185, 86 200, 91 216
           C96 200, 99 185, 101 169
           C109 178, 120 183, 134 184
           C127 174, 121 163, 117 150
           C128 156, 141 157, 154 153
           C145 146, 135 137, 126 128
           C141 128, 154 122, 163 110
           C156 111, 147 110, 136 105
           C148 100, 159 91, 168 78
           C158 81, 145 83, 134 80
           C140 74, 145 64, 149 52
           C141 56, 134 61, 126 64
           C115 60, 113 51, 115 39
           C106 47, 99 49, 91 46 Z"
        fill={`url(#leaf-grad-${uid})`}
        stroke="#6E2C00"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Organic autumn ember spots like the sunlit reference leaf */}
      <ellipse cx="114" cy="112" rx="4.5" ry="3" transform="rotate(-18 114 112)" fill="#7E393F" fillOpacity="0.48" />
      <ellipse cx="69" cy="144" rx="3.2" ry="2.2" transform="rotate(24 69 144)" fill="#A61A28" fillOpacity="0.42" />
      <circle cx="104" cy="148" r="2.2" fill="#6E2C00" fillOpacity="0.4" />

      {/* Central midrib & delicate branching lateral veins */}
      <path
        d="M91 46 C91 96, 90 152, 91 208"
        stroke={`url(#vein-grad-${uid})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M91 74 C76 68, 56 62, 38 56
           M91 74 C106 68, 126 62, 144 56
           M91 102 C70 96, 44 90, 22 83
           M91 102 C112 96, 138 90, 160 83
           M91 132 C72 136, 52 142, 35 150
           M91 132 C110 136, 130 142, 147 150
           M91 162 C78 168, 66 175, 55 181
           M91 162 C104 168, 116 175, 127 181"
        stroke={`url(#vein-grad-${uid})`}
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
};

const SERRATED_CANOPY_LEAF_PATH =
  "M72 0 C65 4, 58 2, 50 -5 C52 7, 49 16, 38 20 C29 17, 22 12, 14 9 C18 22, 23 31, 30 37 C18 40, 6 38, -4 35 C5 48, 16 57, 28 62 C17 67, 8 68, 2 67 C11 79, 23 85, 38 85 C29 94, 19 103, 10 110 C23 114, 36 113, 47 107 C43 120, 37 131, 30 141 C44 140, 55 135, 63 126 C65 142, 68 157, 73 172 C78 157, 81 142, 83 126 C91 135, 102 140, 116 141 C109 131, 103 120, 99 107 C110 113, 123 114, 136 110 C127 103, 117 94, 108 85 C123 85, 135 79, 144 67 C138 68, 129 67, 118 62 C130 57, 141 48, 150 35 C140 38, 128 40, 116 37 C123 31, 128 22, 132 9 C124 12, 117 17, 108 20 C97 16, 94 7, 96 -5 C88 2, 81 4, 72 0 Z";

const SERRATED_CANOPY_VEINS_PATH =
  "M73 0 L73 164 M73 32 L26 16 M73 32 L120 16 M73 60 L8 42 M73 60 L138 42 M73 92 L22 106 M73 92 L124 106";

/**
 * Full Golden-Hour Hanging Chinar/Autumn Branch Canopy + Warm Sunlit Bokeh SVG.
 * Directly modeled on the user's reference photo: slender walnut branch curving
 * across the top with clustered translucent olive-to-amber-to-sienna leaves
 * hanging downward in front of soft golden bokeh circles.
 */
export const ChinarBranchCanopySvg: React.FC<{
  side?: "right" | "left";
  className?: string;
}> = ({ side = "right", className = "" }) => {
  const uid = useId().replace(/:/g, "");
  const flip = side === "left" ? "-scale-x-100" : "";

  const leaves = [
    {
      key: "left",
      transform: "translate(88 46) rotate(14 60 20) scale(0.76)",
      fillId: `canopy-leaf-a-${uid}`,
      opacity: 0.92,
      spots: false,
    },
    {
      key: "center",
      transform: "translate(174 44) rotate(-6 70 20) scale(0.9)",
      fillId: `canopy-leaf-b-${uid}`,
      opacity: 0.9,
      spots: true,
    },
    {
      key: "right",
      transform: "translate(268 38) rotate(-22 65 20) scale(0.82)",
      fillId: `canopy-leaf-c-${uid}`,
      opacity: 0.86,
      spots: false,
    },
  ];

  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${flip} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`bokeh-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD37C" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#D8992E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#D8992E" stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`canopy-leaf-a-${uid}`} x1="25%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" stopColor="#64691D" />
          <stop offset="42%" stopColor="#D8992E" />
          <stop offset="76%" stopColor="#FFD37C" />
          <stop offset="100%" stopColor="#BB5D0E" />
        </linearGradient>

        <linearGradient id={`canopy-leaf-b-${uid}`} x1="35%" y1="0%" x2="65%" y2="100%">
          <stop offset="0%" stopColor="#514646" />
          <stop offset="30%" stopColor="#64691D" />
          <stop offset="68%" stopColor="#D8992E" />
          <stop offset="92%" stopColor="#BB5D0E" />
          <stop offset="100%" stopColor="#A61A28" />
        </linearGradient>

        <linearGradient id={`canopy-leaf-c-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7E393F" />
          <stop offset="45%" stopColor="#BB5D0E" />
          <stop offset="82%" stopColor="#D8992E" />
          <stop offset="100%" stopColor="#FFD37C" />
        </linearGradient>
      </defs>

      {/* Soft Sunlit Golden Bokeh Orbs */}
      <circle cx="310" cy="215" r="46" fill={`url(#bokeh-${uid})`} />
      <circle cx="255" cy="242" r="34" fill={`url(#bokeh-${uid})`} />
      <circle cx="362" cy="176" r="28" fill={`url(#bokeh-${uid})`} />
      <circle cx="195" cy="215" r="24" fill={`url(#bokeh-${uid})`} opacity="0.7" />
      <circle cx="285" cy="145" r="54" fill={`url(#bokeh-${uid})`} opacity="0.55" />

      {/* Main Curved Dark Bark Branch Entering from Top Edge */}
      <path
        d="M425 -8 C355 18, 285 28, 205 16 C165 10, 128 18, 92 34"
        stroke="#6E2C00"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M322 18 C302 40, 282 56, 268 72 M224 18 C206 38, 192 52, 182 68 M136 22 C122 44, 114 58, 108 72"
        stroke="#6E2C00"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Clustered Hanging Deeply Lobed Autumn Leaves */}
      {leaves.map((leaf) => (
        <g key={leaf.key} transform={leaf.transform}>
          <path
            d={SERRATED_CANOPY_LEAF_PATH}
            fill={`url(#${leaf.fillId})`}
            fillOpacity={leaf.opacity}
            stroke="#6E2C00"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          {leaf.spots && (
            <>
              <ellipse cx="48" cy="64" rx="5" ry="3.5" fill="#7E393F" fillOpacity="0.55" />
              <circle cx="58" cy="78" r="2.8" fill="#A61A28" fillOpacity="0.5" />
              <ellipse cx="95" cy="96" rx="4" ry="2.5" fill="#A61A28" fillOpacity="0.45" />
            </>
          )}
          <path
            d={SERRATED_CANOPY_VEINS_PATH}
            stroke="#6E2C00"
            strokeOpacity="0.48"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
};
