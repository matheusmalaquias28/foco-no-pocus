import Image from "next/image";
import { offerItems, whatsapp } from "@/content";
import { AgendaCards } from "../Agenda";
import { Reveal } from "../Reveal";
import { ButtonLink, CheckIcon, Hl, WhatsAppIcon } from "../ui";

export function Offer() {
  return (
    <section id="inscricao" className="bg-glow px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-xl rounded-[2rem] bg-white px-6 py-12 text-center shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] sm:px-14">
        <Image src="/img/logo-dark.png" alt="Foco no POCUS" width={676} height={821} className="mx-auto h-24 w-auto" />

        <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Vagas limitadas!
          <br />
          <Hl>Garanta a sua agora!</Hl>
        </h2>

        <ul className="mx-auto mt-8 w-fit space-y-3 text-left">
          {offerItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[15px] text-ink/80">
              <CheckIcon className="size-5 text-success" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="mb-3 text-sm uppercase tracking-widest text-muted">Agenda de turmas</p>
          <AgendaCards />
        </div>

        <ButtonLink
          href={whatsapp("Olá! Quero garantir minha vaga na próxima turma do Foco no POCUS.")}
          className="mt-8 w-full"
        >
          Não perca mais tempo!
        </ButtonLink>

        <div className="mt-12 border-t border-black/5 pt-10">
          <WhatsAppIcon className="mx-auto size-12 text-whatsapp" />
          <p className="mt-4 text-ink/80">
            Ainda tem dúvidas?
            <br />
            Fale conosco pelo WhatsApp.
          </p>
          <ButtonLink href={whatsapp()} variant="whatsapp" className="mt-6 sm:px-14">
            Fale conosco
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
