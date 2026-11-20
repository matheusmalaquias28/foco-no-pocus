import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "brand" | "ink" | "whatsapp" | "outline-light";

const variants: Record<ButtonVariant, string> = {
  brand: "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_30px_-10px_rgb(230_57_70/0.7)]",
  ink: "bg-ink text-white hover:bg-neutral-800",
  whatsapp: "bg-whatsapp text-white hover:brightness-95",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

export function ButtonLink({
  variant = "brand",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  const external = props.href?.startsWith("http");
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-center font-button text-base transition duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.99] sm:text-lg ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Título de seção no padrão do site: parte normal + parte destacada em vermelho e negrito. */
export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={`font-display text-[2rem] leading-[1.1] tracking-tight sm:text-5xl ${className}`}>{children}</Tag>
  );
}

export function Hl({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <strong className={`font-bold text-brand ${className}`}>{children}</strong>;
}

export function CheckIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="m8.5 8.5 7 7m0-7-7 7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16.004 3Zm0 23.62c-1.97 0-3.9-.53-5.58-1.53l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62 5.85 0 10.61 4.76 10.61 10.62 0 5.86-4.76 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.21-.18-.32-.02-.5.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.08 1.3 3.3c.16.2 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.2 2 .12.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-5", dir = "right" }: { className?: string; dir?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} ${dir === "left" ? "rotate-180" : ""}`}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
