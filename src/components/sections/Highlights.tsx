import Image from "next/image";
import { highlights } from "@/content";
import { Reveal } from "../Reveal";

const styles = {
  dark: { box: "bg-glow", accent: "text-brand" },
  red: { box: "bg-brand", accent: "text-navy" },
  navy: { box: "bg-navy", accent: "text-brand" },
} as const;

/**
 * Três blocos empilhados com foto recortada do instrutor "saindo" do card.
 * Ao rolar, cada bloco gruda no topo e o próximo desliza por cima (efeito de pilha).
 */
export function Highlights() {
  return (
    <section aria-label="Diferenciais do curso" className="mx-auto max-w-[1400px] px-3 sm:px-5">
      {highlights.map((h, i) => {
        const s = styles[h.variant];
        const imageRight = i % 2 === 0;
        return (
          <div
            key={h.variant}
            className="pb-3 md:sticky md:pb-4"
            style={{ top: `${72 + i * 14}px` }}
          >
            <article
              className={`relative grid min-h-[34rem] overflow-hidden rounded-[2rem] text-white shadow-[0_-20px_40px_-30px_rgb(0_0_0/0.5)] md:min-h-[30rem] md:grid-cols-2 lg:min-h-[36rem] ${s.box}`}
            >
              <div
                className={`relative z-10 flex flex-col justify-center px-7 pb-0 pt-12 sm:px-12 md:py-16 lg:px-20 ${
                  imageRight ? "" : "md:order-2"
                }`}
              >
                <Reveal>
                  <h2 className="font-display text-[2rem] leading-[1.1] tracking-tight sm:text-5xl">
                    {h.title[0]}
                    <strong className={`font-bold ${s.accent}`}>{h.title[1]}</strong>
                    {h.title[2]}
                  </h2>
                  <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/85">{h.text}</p>
                </Reveal>
              </div>
              <div className={`relative h-80 md:h-auto ${imageRight ? "" : "md:order-1"}`}>
                <Image
                  src={h.image}
                  alt={h.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain object-bottom"
                />
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
}
