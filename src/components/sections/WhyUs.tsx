import Image from "next/image";
import { reasons, whatsapp } from "@/content";
import { Reveal } from "../Reveal";
import { ButtonLink, Hl, SectionTitle } from "../ui";

const icons: Record<(typeof reasons)[number]["icon"], React.ReactNode> = {
  presencial: (
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
  ),
  mentoria: (
    <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 20v-2a4 4 0 0 0-3-3.87M16 2.13a4 4 0 0 1 0 7.75" />
  ),
  material: (
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5M8 7h8M8 11h6" />
  ),
  equipe: (
    <path d="M12 2v4M8 4h8M6 10a6 6 0 0 0 12 0V6H6v4ZM12 16v6M8 22h8" />
  ),
};

function ReasonCard({ icon, text, delay }: { icon: keyof typeof icons; text: string; delay: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="relative rounded-2xl bg-white p-6 pt-9 text-ink shadow-[0_20px_40px_-24px_rgb(0_0_0/0.6)]"
    >
      <span className="absolute -top-5 left-6 grid size-10 place-items-center rounded-lg bg-brand text-white shadow-lg">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
      </span>
      <p className="font-display text-lg leading-snug sm:text-xl">{text}</p>
    </Reveal>
  );
}

export function WhyUs() {
  const [a, b, c, d] = reasons;
  return (
    <section className="bg-glow py-20 text-white lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Por que escolher <br />
            <Hl>nosso curso?</Hl>
          </SectionTitle>
        </Reveal>

        <div className="mt-16 grid items-center gap-x-8 gap-y-10 lg:grid-cols-[1fr_minmax(0,22rem)_1fr]">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <ReasonCard icon={a.icon} text={a.text} delay={0} />
            <ReasonCard icon={b.icon} text={b.text} delay={100} />
          </ul>
          <Reveal delay={150} className="order-first lg:order-none">
            <Image
              src="/img/turma.jpg"
              alt="Turma do curso de POCUS multissistêmico reunida com os instrutores"
              width={386}
              height={386}
              sizes="(min-width: 1024px) 352px, 90vw"
              className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover ring-1 ring-white/20"
            />
          </Reveal>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <ReasonCard icon={c.icon} text={c.text} delay={200} />
            <ReasonCard icon={d.icon} text={d.text} delay={300} />
          </ul>
        </div>

        <Reveal className="mt-14 text-center">
          <ButtonLink href={whatsapp("Olá! Quero fechar minha inscrição no curso Foco no POCUS.")} className="w-full sm:w-auto sm:px-16">
            Feche seu curso agora!
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
