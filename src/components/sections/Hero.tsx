import Image from "next/image";
import { whatsapp } from "@/content";
import { FeaturedClassText } from "../Agenda";
import { ButtonLink, Hl } from "../ui";

export function Hero() {
  return (
    <section id="inicio" className="bg-grid-lines relative overflow-hidden pt-28 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative mx-auto max-w-5xl text-center">
          <p
            className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs text-ink/70 backdrop-blur sm:text-sm"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span>
              <b className="font-semibold text-ink">
                <FeaturedClassText />
              </b>
            </span>
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "200ms" }}
          >
            Domine o <Hl>Ultrassom à Beira do Leito</Hl> e transforme sua prática clínica.
          </h1>

          {/* Pílulas com fotos do curso, como no site original */}
          <Image
            src="/img/hero-pill-1.png"
            alt=""
            width={182}
            height={67}
            className="animate-rise absolute -left-40 top-24 hidden w-36 rotate-[-4deg] xl:block"
            style={{ animationDelay: "500ms" }}
          />
          <Image
            src="/img/hero-pill-2.png"
            alt=""
            width={182}
            height={67}
            className="animate-rise absolute -right-40 top-56 hidden w-36 rotate-[4deg] xl:block"
            style={{ animationDelay: "650ms" }}
          />

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
            style={{ animationDelay: "320ms" }}
          >
            Faça diagnósticos rápidos e precisos através do POCUS. Aprenda com quem é referência em ultrassonografia à
            beira do leito e procedimentos guiados.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <ButtonLink
              href={whatsapp("Olá! Quero fazer parte da próxima turma do Foco no POCUS.")}
              className="sm:px-14"
            >
              Faça parte da próxima turma
            </ButtonLink>
            <ButtonLink href="#programa" variant="ink" className="sm:px-14">
              Ver programa do curso
            </ButtonLink>
          </div>
        </div>

        <div
          className="animate-rise relative z-10 mx-auto mt-10 max-w-6xl lg:mt-12"
          style={{ animationDelay: "550ms" }}
        >
          {/* Foto com fundo transparente acima do quadro: as cabeças "saem" do card */}
          <Image
            src="/img/equipe-hero.webp"
            alt="Equipe de instrutores do Foco no POCUS"
            width={1774}
            height={887}
            priority
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="aspect-[16/10] w-full object-cover object-top sm:aspect-[1774/887]"
          />
        </div>
      </div>
    </section>
  );
}
