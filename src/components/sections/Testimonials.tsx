import Image from "next/image";
import { testimonials } from "@/content";
import { Carousel } from "../Carousel";
import { Reveal } from "../Reveal";
import { Hl, SectionTitle } from "../ui";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5 text-[#FFCC0A]" role="img" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`size-4 ${i < value ? "" : "opacity-25"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Veja os <Hl>depoimentos</Hl> dos
            <br /> nossos alunos
          </SectionTitle>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Carousel label="Depoimentos de alunos" itemClassName="basis-[85%] sm:basis-[46%] lg:basis-[23.5%]">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl bg-navy p-6 text-white">
                <figcaption className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={`Foto de ${t.name}`}
                    width={192}
                    height={192}
                    className="size-12 rounded-full object-cover ring-2 ring-white/15"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-semibold leading-tight">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </figcaption>
                <div className="mt-4">
                  <Stars value={t.rating} />
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-white/85">{t.text}</blockquote>
              </figure>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
