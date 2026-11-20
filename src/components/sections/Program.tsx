import Image from "next/image";
import { program, whatsapp } from "@/content";
import { Reveal } from "../Reveal";
import { ButtonLink, CheckIcon, Hl, SectionTitle } from "../ui";

export function Program() {
  return (
    <section id="programa">
      <div className="bg-glow -mt-28 pb-20 pt-40 text-white sm:-mt-32 sm:pb-24 sm:pt-48">
        <Reveal className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionTitle>
            Conteúdo <Hl>programático do curso:</Hl>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Dois dias de imersão, com teoria objetiva e muita prática à beira do leito.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 sm:px-8 lg:space-y-28 lg:py-28">
        {program.map((day, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <article
              key={day.day}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              aria-labelledby={`dia-${day.day}`}
            >
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
                  <h3 id={`dia-${day.day}`} className="font-display text-5xl leading-none tracking-tight sm:text-6xl">
                    Dia <Hl>{day.day}</Hl>
                  </h3>
                  <span className="mb-1 rounded-full bg-surface px-3 py-1 text-sm text-ink/70">{day.schedule}</span>
                </div>

                <ul className="mt-8 space-y-6">
                  {day.topics.map((t) => (
                    <li key={t.title} className="flex gap-3">
                      <CheckIcon className="mt-0.5 size-5 text-success" />
                      <div>
                        <h4 className="font-semibold text-ink">{t.title}</h4>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted">{t.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={whatsapp(`Olá! Quero garantir minha vaga no curso (Dia ${day.day}).`)}
                  className="mt-10 w-full sm:w-auto sm:px-14"
                >
                  Garanta sua vaga!
                </ButtonLink>
              </Reveal>

              <Reveal delay={150} className={reversed ? "lg:order-1" : ""}>
                <Image
                  src={day.image}
                  alt={day.imageAlt}
                  width={672}
                  height={548}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="mx-auto w-full max-w-xl"
                />
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
