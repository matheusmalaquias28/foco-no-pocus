import Image from "next/image";
import Link from "next/link";
import { nav, site, whatsapp } from "@/content";
import { InstagramIcon, WhatsAppIcon } from "./ui";
import { AgendaFooterList } from "./Agenda";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[auto_1fr] md:gap-20">
        <Link href="/" aria-label="Foco no POCUS, página inicial" className="self-start">
          <Image src="/img/logo-light.png" alt="Foco no POCUS" width={676} height={821} className="h-24 w-auto" />
        </Link>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-semibold">Endereço</h3>
            <p className="mt-3 text-sm text-white/70">{site.city}</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Turmas</h3>
            <AgendaFooterList />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Redes sociais</h3>
            <div className="mt-3 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Foco no POCUS"
                className="grid size-11 place-items-center rounded-lg bg-brand transition hover:scale-105 hover:bg-brand-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Foco no POCUS"
                className="grid size-11 place-items-center rounded-lg bg-white/10 transition hover:scale-105 hover:bg-white/20"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>© Foco no POCUS. Todos os direitos reservados.</p>
            <a
              href="https://energymidia.com.br"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1.5 transition hover:text-white"
              aria-label="Desenvolvido com energia pela Energy Mídia"
            >
              <span aria-hidden="true">
                Desenvolvido com <span className="inline-block transition group-hover:scale-125">⚡</span> pela
              </span>
              <Image
                src="/img/energy-midia.svg"
                alt=""
                width={829}
                height={311}
                className="h-6 w-auto opacity-80 transition group-hover:opacity-100"
              />
            </a>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
