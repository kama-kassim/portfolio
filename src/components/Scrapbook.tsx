import type { CSSProperties } from "react";
import type { Role } from "@/content/home";

/** Strip of washi tape. `r` is the tilt in degrees. */
export function Tape({ className = "", r = 0 }: { className?: string; r?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`tape absolute h-8 bg-tape/85 ${className}`}
      style={{ rotate: `${r}deg`, "--tr": `${r * 2}deg` } as CSSProperties}
    />
  );
}

export function RoleTag({ role }: { role: Role }) {
  const dark = role === "Designed + developed";
  return (
    <span
      className={`whitespace-nowrap rounded-md text-[13px] font-extrabold ${
        dark ? "bg-ink px-2.5 py-[5px] tracking-wide text-paper" : "border-2 border-ink bg-white px-2 py-[3px]"
      }`}
    >
      {role}
    </span>
  );
}

/** Grey box standing in for a screenshot until a real image is added. */
export function Placeholder({ label, className = "", style }: { label: string; className?: string; style?: CSSProperties }) {
  return (
    <div
      style={style}
      className={`flex items-center justify-center border-2 border-ink bg-placeholder p-4 text-center font-medium text-[#7a7275] ${className}`}
    >
      [{label}]
    </div>
  );
}

export function PadlockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" aria-hidden="true" className={className}>
      <path
        d="M13 25 V16 C13 8 19 3 24 3 C30 3 35 8 35 16 V25"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="5" y="24" width="38" height="29" rx="5" fill="currentColor" />
    </svg>
  );
}
