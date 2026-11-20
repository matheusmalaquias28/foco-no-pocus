import { whatsapp } from "@/content";
import { WhatsAppIcon } from "./ui";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-white shadow-[0_12px_30px_-8px_rgb(0_0_0/0.35)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-30 motion-reduce:hidden" />
      <WhatsAppIcon className="size-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-button text-sm transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 sm:inline">
        Tire suas dúvidas
      </span>
    </a>
  );
}
