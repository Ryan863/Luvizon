import { SITE } from "@/data/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path d="M32 6 11 18.5v27L32 58l21-12.5v-27z" stroke="#B45309" strokeWidth="5" strokeLinejoin="round" />
      <path d="M22 25v22M42 25v22" stroke="#6B7280" strokeWidth="5" />
      <path d="M32 20v34" stroke="#B45309" strokeWidth="5" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[26px] font-semibold tracking-[0.12em] ${light ? "text-stone-50" : "text-stone-900"}`}>
          {SITE.brand}
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold tracking-[0.25em] sm:text-[11px] ${light ? "text-stone-300" : "text-stone-900"}`}
        >
          {SITE.tagline}
        </span>
      </span>
    </span>
  );
}
