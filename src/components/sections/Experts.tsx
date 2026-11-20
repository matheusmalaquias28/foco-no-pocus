import Image from "next/image";
import { experts } from "@/content";
import { Carousel } from "../Carousel";
import { Reveal } from "../Reveal";
import { Hl, SectionTitle } from "../ui";

export function Experts() {
  return (
    <section id="especialistas" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionTitle>
            Conheça os especialistas <br />
            <Hl>que vão te guiar</Hl>
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            A equipe Foco no POCUS é formada por profissionais que dominam o uso do ultrassom à beira do leito e
            utilizam essa ferramenta <b className="font-semibold text-ink">todos os dias</b>. Com foco em ensino
            aplicado, eles acreditam que o aprendizado deve ser prático e transformar a teoria em resultados reais.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <Carousel label="Especialistas" itemClassName="basis-[80%] sm:basis-[46%] lg:basis-[23.3%]">
            {experts.map((e) => (
              <article key={e.name} className="group text-center sm:text-left">
                <div className="relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-full ring-4 ring-surface transition duration-500 group-hover:ring-brand/60 sm:mx-0">
                  <Image
                    src={e.photo}
                    alt={`Foto de ${e.name}`}
                    fill
                    sizes="(min-width: 1024px) 256px, 70vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{e.name}</h3>
                <ul className="mt-3 space-y-1.5 text-left text-sm text-ink/70">
                  {e.main.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>
                <details className="group/d mt-3 text-left">
                  <summary className="inline-flex cursor-pointer items-center gap-2 rounded-md py-1 font-button text-sm text-ink transition hover:text-brand">
                    <span className="grid size-5 place-items-center rounded-full bg-ink text-white transition group-open/d:rotate-45 group-open/d:bg-brand">
                      <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="group-open/d:hidden">Ler mais</span>
                    <span className="hidden group-open/d:inline">Ler menos</span>
                  </summary>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink/70">
                    {e.more.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
