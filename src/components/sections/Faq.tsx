import Link from "next/link";
import { faq } from "@/content";
import { Reveal } from "../Reveal";
import { Hl, SectionTitle } from "../ui";

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Perguntas <Hl>frequentes</Hl>
          </SectionTitle>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 5) * 50}>
              <details className="group rounded-2xl bg-surface transition-colors open:bg-white open:shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_20px_40px_-28px_rgb(0_0_0/0.4)]" name="faq">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 font-medium text-ink/90 transition hover:text-ink">
                  {item.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-ink transition duration-300 group-open:rotate-45 group-open:bg-brand group-open:text-white">
                    <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                  {item.intro && <p>{item.intro}</p>}
                  {item.list && (
                    <ul className={`space-y-2 ${item.intro ? "mt-3" : ""}`}>
                      {item.list.map((l) => (
                        <li key={l} className="flex gap-2.5">
                          <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.outro && <p className="mt-3">{item.outro}</p>}
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-muted">
          Não encontrou sua dúvida?{" "}
          <Link href="/contato" className="font-semibold text-brand underline-offset-4 hover:underline">
            Fale com a gente
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
