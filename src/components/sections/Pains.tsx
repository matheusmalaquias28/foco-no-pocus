import { pains, whatsapp } from "@/content";
import { Reveal } from "../Reveal";
import { ButtonLink, CheckIcon, Hl, SectionTitle } from "../ui";

export function Pains() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <SectionTitle>
            Chega de <Hl>insegurança diante</Hl>
            <br className="hidden sm:block" /> <Hl>do paciente grave</Hl>
          </SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Você já passou pelo estresse de não conseguir um acesso venoso em um paciente agitado ou de se sentir no
            escuro diante de um caso crítico no plantão?{" "}
            <b className="font-semibold text-ink">
              Com nosso método, você vai dominar o acesso vascular guiado por ultrassom e saber exatamente o que fazer
              nas situações mais desafiadoras.
            </b>
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 text-left sm:grid-cols-3 sm:gap-6">
          {pains.map((p, i) => (
            <Reveal
              as="li"
              key={p}
              delay={i * 100}
              className="rounded-2xl bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(0_0_0/0.25)]"
            >
              <CheckIcon className="size-7 text-success" />
              <p className="mt-6 font-display text-xl leading-snug text-ink/90">{p}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-md text-sm font-semibold leading-relaxed text-ink/80">
            Pare de fugir dos casos difíceis. Torne-se o profissional que todos querem ao lado no plantão.
          </p>
          <ButtonLink
            href={whatsapp("Olá! Quero fazer parte da próxima turma do Foco no POCUS.")}
            className="mt-8 w-full sm:w-auto sm:px-20"
          >
            Faça parte da próxima turma
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
