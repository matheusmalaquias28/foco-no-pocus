import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { linksPage, site, whatsapp } from "@/content";
import { InterestForm } from "@/components/links/InterestForm";
import { LinksAgenda } from "@/components/links/LinksAgenda";
import { ArrowOut, ItemContent, PlusToggle, cardBase, cardGlass, formCard } from "@/components/links/LinkCard";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Links",
  description: linksPage.bio,
  alternates: { canonical: "/links" },
};

export default function LinksPage() {
  return (
    <main className="bg-glow relative min-h-svh overflow-hidden px-5 pb-10 pt-14 text-white">
      {/* linhas verticais discretas, como no hero do site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:calc(100%/6)_100%]"
      />

      <div className="relative mx-auto flex max-w-md flex-col items-center">
        <div className="animate-rise grid size-28 place-items-center rounded-full bg-white shadow-[0_20px_50px_-15px_rgb(0_0_0/0.6)] ring-4 ring-white/15">
          <Image
            src="/img/logo-dark.png"
            alt="Foco no POCUS"
            width={676}
            height={821}
            priority
            className="h-16 w-auto"
          />
        </div>

        <h1
          className="animate-rise mt-6 text-center font-display text-3xl font-bold tracking-tight"
          style={{ animationDelay: "80ms" }}
        >
          {linksPage.title}
        </h1>
        <p className="animate-rise mt-2 max-w-xs text-center text-sm text-white/75" style={{ animationDelay: "140ms" }}>
          {linksPage.bio}
        </p>

        <div className="animate-rise mt-5 flex gap-3" style={{ animationDelay: "200ms" }}>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Foco no POCUS"
            className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:scale-110 hover:bg-white/20"
          >
            <InstagramIcon />
          </a>
          <a
            href={whatsapp(linksPage.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp do Foco no POCUS"
            className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:scale-110 hover:bg-white/20"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>

        <ul className="animate-rise mt-9 w-full space-y-3" style={{ animationDelay: "260ms" }}>
          {linksPage.items.map((item) => {
            if (item.kind === "agenda") return <LinksAgenda key="agenda" />;

            if (item.kind === "form") {
              return (
                <li key={item.label}>
                  <details className={formCard}>
                    <summary className={`${cardBase} cursor-pointer hover:bg-white/[0.06]`}>
                      <ItemContent icon={item.icon} label={item.label} detail={item.detail} />
                      <PlusToggle />
                    </summary>
                    <InterestForm message={item.message} />
                  </details>
                </li>
              );
            }

            const detail = "detail" in item ? item.detail : undefined;
            // "whatsapp" = WhatsApp da equipe com a mensagem padrão da /links
            const href = item.href === "whatsapp" ? whatsapp(linksPage.whatsappMessage) : item.href;
            const content = (
              <>
                <ItemContent icon={item.icon} label={item.label} detail={detail} />
                <ArrowOut />
              </>
            );
            return (
              <li key={item.label}>
                {href.startsWith("http") ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={`${cardBase} ${cardGlass}`}>
                    {content}
                  </a>
                ) : (
                  <Link href={href} className={`${cardBase} ${cardGlass}`}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          className="mt-12 opacity-70 transition hover:opacity-100"
          aria-label="Ir para o site do Foco no POCUS"
        >
          <Image src="/img/logo-light.png" alt="" width={676} height={821} className="h-10 w-auto" />
        </Link>
        <p className="mt-3 text-xs text-white/45">© Foco no POCUS · {site.city}</p>
      </div>
    </main>
  );
}
