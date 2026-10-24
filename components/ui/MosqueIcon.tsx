import React from "react";

interface MosqueIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  variant?: "solid" | "duotone" | "outline";
}

export function MosqueIcon({
  size = 24,
  className = "",
  variant = "duotone",
  ...props
}: MosqueIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 transition-transform ${className}`}
      {...props}
    >
      {/* Decorative Crescent & Star at the Pinnacle */}
      <path
        d="M24 3C24 3 25.5 4.5 25.5 6C25.5 7.5 24 9 24 9C24 9 22.5 7.5 22.5 6C22.5 4.5 24 3 24 3Z"
        fill="currentColor"
      />
      <circle cx="24" cy="5" r="1" fill="#eab308" />

      {/* Main Walisongo Grand Dome (Pointed Arch Silhouette) */}
      <path
        d="M24 9C19 14.5 13 18 13 25C13 29 17 31 24 31C31 31 35 29 35 25C35 18 29 14.5 24 9Z"
        fill={variant === "outline" ? "none" : "currentColor"}
        fillOpacity={variant === "duotone" ? 0.25 : 1}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Dome Ribs / Arabesque Fluting Lines */}
      <path
        d="M24 9V31M18.5 17C20.5 21 21.5 26 21.5 31M29.5 17C27.5 21 26.5 26 26.5 31"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity={0.6}
      />

      {/* Tiered Nusantara Tajug Arch Base */}
      <path
        d="M10 31H38V34C38 34.5 37.5 35 37 35H11C10.5 35 10 34.5 10 34V31Z"
        fill="currentColor"
        fillOpacity={0.4}
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Minarets / Twin Pillars */}
      {/* Left Minaret */}
      <path
        d="M7 16L9 19V43H5V19L7 16Z"
        fill="currentColor"
        fillOpacity={variant === "duotone" ? 0.15 : 1}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M7 13V16M5 25H9M5 33H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="12" r="1.2" fill="#eab308" />

      {/* Right Minaret */}
      <path
        d="M41 16L43 19V43H39V19L41 16Z"
        fill="currentColor"
        fillOpacity={variant === "duotone" ? 0.15 : 1}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M41 13V16M39 25H43M39 33H43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="41" cy="12" r="1.2" fill="#eab308" />

      {/* Portico / Mihrab Arches (Colonnade) */}
      <path
        d="M10 35H38V43H10V35Z"
        fill="currentColor"
        fillOpacity={0.2}
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Triple Islamic Arches */}
      <path
        d="M14 43V38C14 36.5 15.5 35.5 17 35.5C18.5 35.5 20 36.5 20 38V43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 43V37C21 35 22.5 34 24 34C25.5 34 27 35 27 37V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 43V38C28 36.5 29.5 35.5 31 35.5C32.5 35.5 34 36.5 34 38V43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Ground Foundation Line */}
      <line x1="3" y1="44" x2="45" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
