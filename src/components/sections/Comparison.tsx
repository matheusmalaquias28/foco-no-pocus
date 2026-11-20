import { comparison, whatsapp } from "@/content";
import { Reveal } from "../Reveal";
import { ButtonLink, CheckIcon, Hl, XIcon } from "../ui";

export function Comparison() {
  return (
    <section id="beneficios" className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Reveal className="rounded-3xl bg-surface p-7 sm:p-10">
            <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
              Cursos <span className="text-brand">comuns</span>
            </h3>
            <ul className="mt-8 space-y-5">
              {comparison.common.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink/70">
                  <XIcon className="mt-0.5 size-5 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-[0_30px_60px_-30px_rgb(24_53_86/0.8)] sm:p-10"
          >
            <span className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand/30 blur-3xl" />
            <span className="relative inline-block rounded-full bg-brand px-3 py-1 font-button text-xs uppercase tracking-wider">
              Foco no POCUS
            </span>
            <h3 className="relative mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Cursos <Hl>POCUS MULTI</Hl>
            </h3>
            <ul className="relative mt-8 space-y-5">
              {comparison.ours.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-white/90">
                  <CheckIcon className="mt-0.5 size-5 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <ButtonLink
            href={whatsapp("Olá! Quero saber mais sobre a turma de POCUS no Rio.")}
            className="w-full sm:w-auto sm:px-16"
          >
            Saiba mais sobre a turma de POCUS no Rio
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
