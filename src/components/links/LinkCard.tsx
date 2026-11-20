import type { ReactNode } from "react";
import { WhatsAppIcon } from "../ui";

/** Peças visuais compartilhadas pelos cartões da página /links. */

export type LinkIcon = "calendar" | "monitor" | "globe" | "list" | "whatsapp";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<LinkIcon, ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...stroke}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...stroke}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M10 8l5 2-5 2V8Z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  ),
  list: (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...stroke}>
      <path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
    </svg>
  ),
  whatsapp: <WhatsAppIcon className="size-5" />,
};

export const cardBase =
  "group flex w-full items-center gap-4 rounded-2xl p-3 pr-4 text-left transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const cardGlass =
  "border border-white/15 bg-white/[0.08] backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/[0.14]";

export const cardHighlight =
  "bg-brand shadow-[0_18px_40px_-14px_rgb(230_57_70/0.8)] hover:-translate-y-0.5 hover:bg-brand-dark";

export function ItemContent({
  icon,
  label,
  detail,
  highlight,
  muted,
}: {
  icon: LinkIcon;
  label: string;
  detail?: ReactNode;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <>
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-xl ${
          highlight
            ? "bg-white text-brand"
            : muted
              ? "bg-white/10 text-white/50"
              : icon === "whatsapp"
                ? "bg-whatsapp text-white"
                : "bg-brand text-white"
        }`}
      >
        {icons[icon]}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block font-display text-[15px] font-semibold leading-snug ${muted ? "text-white/60" : ""}`}>
          {label}
        </span>
        {detail && (
          <span className={`mt-0.5 block text-xs ${highlight ? "text-white/85" : "text-white/60"}`}>{detail}</span>
        )}
      </span>
    </>
  );
}

export function ArrowOut() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 shrink-0 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white"
      aria-hidden="true"
      {...stroke}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function PlusToggle() {
  return (
    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 transition duration-300 group-open/d:rotate-45">
      <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export const formCard =
  "group/d overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-sm transition open:bg-white/[0.12]";
