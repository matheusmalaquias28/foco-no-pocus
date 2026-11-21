import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EnergyCredit } from "@/components/EnergyCredit";
import { CheckIcon, Hl, SectionTitle, XIcon } from "@/components/ui";
import { BuyBlock, GuaranteeSeal } from "@/components/vsl/BuyBlock";
import { StickyBuyBar } from "@/components/vsl/StickyBuyBar";
import { VslPlayer } from "@/components/vsl/VslPlayer";
import {
  deliverables,
  forWho,
  hero,
  howItWorks,
  methodSteps,
  pains,
  proofPlaceholders,
  proofs,
  science,
  team,
  vsl,
  vslFaq,
  wrongVsRight,
} from "@/content-vsl";

export const metadata: Metadata = {
  title: { absolute: "Método POCUS Essencial | Curso online de ultrassom à beira do leito" },
  description:
    "Curso online para plantonistas: aprenda POCUS do zero e decida em minutos diante do paciente grave. 10x de R$ 189 sem juros, 7 dias de garantia.",
  alternates: { canonical: "/vsl" },
  openGraph: {
    title: "Método POCUS Essencial | Decida em minutos diante do paciente grave",
    images: [{ url: "/img/vsl/metodo-demonstracao.webp", width: 1600, height: 758 }],
  },
};

/* ---------- seções ---------- */

function Hero() {
  return (
    <section className="bg-glow relative overflow-hidden pb-16 text-white sm:pb-20">
      <div className="border-b border-white/10 bg-navy-deep/60 px-4 py-2 text-center text-xs text-white/80 sm:text-sm">
        <b className="font-semibold text-white">Nova turma do curso online aberta</b> · Acesso imediato após a compra
      </div>

      <div className="mx-auto max-w-5xl px-5 pt-8 text-center sm:px-8 sm:pt-10">
        <Image
          src="/img/logo-light.png"
          alt="Foco no POCUS"
          width={676}
          height={821}
          priority
          className="mx-auto h-14 w-auto sm:h-16"
        />
        <p className="animate-rise mt-8 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-button text-xs uppercase tracking-widest text-white/85">
          {hero.eyebrow}
        </p>
        <h1
          className="animate-rise mx-auto mt-5 max-w-4xl font-display text-[2.1rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {hero.title[0]}
          <Hl>{hero.title[1]}</Hl>
          {hero.title[2]}
        </h1>
        <p
          className="animate-rise mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base"
          style={{ animationDelay: "160ms" }}
        >
          {hero.subtitle}
        </p>

        <div id="vsl-video" className="animate-rise mx-auto mt-9 max-w-4xl" style={{ animationDelay: "240ms" }}>
          <VslPlayer videoId={vsl.youtubeId} poster="/img/equipe-hero.webp" ctaHref={vsl.checkoutUrl} />
        </div>

        {/* chamada + 3 bullets de curiosidade logo abaixo do vídeo */}
        <div className="animate-rise mx-auto mt-8 max-w-4xl text-left" style={{ animationDelay: "320ms" }}>
          <p className="text-center font-display text-lg font-semibold text-white sm:text-xl">{hero.videoCall}</p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            {hero.bullets.map((b, i) => (
              <li
                key={b}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-snug"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand font-button text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-white/90">{b}</span>
              </li>
            ))}
          </ol>
        </div>

        <BuyBlock className="mt-8" />
      </div>
    </section>
  );
}

function Proofs() {
  return (
    <section id="provas" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionTitle>
            Quem levou o método <Hl>para o plantão</Hl>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Mensagens reais de alunos. Ocultamos os nomes, mas mantivemos o contexto de cada um.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {proofs.map((p, i) => (
            <Reveal key={p.image} delay={i * 90} as="figure" className="flex flex-col rounded-2xl bg-surface p-3">
              <figcaption className="mb-3 self-start rounded-full bg-navy px-3 py-1 font-button text-xs font-medium uppercase tracking-wide text-white">
                {p.label}
              </figcaption>
              <Image
                src={p.image}
                alt={`Depoimento de aluno: ${p.label}`}
                width={p.w}
                height={p.h}
                sizes="(min-width: 768px) 360px, 100vw"
                className="w-full rounded-xl"
              />
            </Reveal>
          ))}
        </div>

        {/* layout pronto para novos depoimentos (conteúdo genérico por enquanto) */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {proofPlaceholders.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 90}
              as="figure"
              className="rounded-2xl border border-dashed border-black/15 bg-white p-5"
            >
              <figcaption className="inline-block rounded-full bg-navy/10 px-3 py-1 font-button text-xs font-medium uppercase tracking-wide text-navy">
                {p.label}
              </figcaption>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/50">{p.text}</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="font-button text-sm uppercase tracking-widest text-brand">O método</p>
          <SectionTitle className="mt-2">
            Como funciona o <Hl>{vsl.methodName}</Hl>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            6 microetapas, na ordem que a sua cabeça entende e que o plantão exige: do primeiro contato com o aparelho à
            decisão no paciente grave.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Image
            src="/img/vsl/metodo-demonstracao.webp"
            alt="Instrutora do Foco no POCUS em aula e demonstração real com transdutor e imagem do coração no monitor"
            width={1600}
            height={758}
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="mx-auto w-full max-w-5xl"
          />
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 3) * 80}
              className={`relative rounded-2xl p-6 ${i === 5 ? "bg-navy text-white" : "bg-white"}`}
            >
              <span className={`font-display text-4xl font-bold ${i === 5 ? "text-brand" : "text-brand/90"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{s.title}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${i === 5 ? "text-white/80" : "text-muted"}`}>{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 text-center">
          <p className="mx-auto max-w-2xl font-display text-xl leading-snug sm:text-2xl">
            Se não dá para aplicar no plantão em menos de 24 horas, <Hl>não é POCUS, é teoria.</Hl>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionTitle>
            {pains.title[0]}
            <Hl>{pains.title[1]}</Hl>
            {pains.title[2]}
          </SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pains.items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 90}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
            >
              <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-white/90">
          {pains.closing}
        </Reveal>
      </div>
    </section>
  );
}

function WrongVsRight() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionTitle>
            O jeito errado x <Hl>o jeito certo</Hl> de aprender POCUS
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            O jeito errado forma um colecionador de apostila. O jeito certo forma o médico que decide.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-black/5">
          <div className="hidden grid-cols-2 sm:grid">
            <p className="bg-surface px-6 py-4 font-display text-lg font-semibold text-ink/60">Jeito errado</p>
            <p className="bg-navy px-6 py-4 font-display text-lg font-semibold text-white">Com o {vsl.methodName}</p>
          </div>
          {wrongVsRight.map((r, i) => (
            <Reveal key={i} delay={i * 60} className="grid border-t border-black/5 sm:grid-cols-2">
              <p className="flex gap-3 bg-surface px-6 py-5 text-[15px] text-ink/60">
                <XIcon className="mt-0.5 size-5 text-brand" />
                {r.wrong}
              </p>
              <p className="flex gap-3 bg-navy px-6 py-5 text-[15px] text-white">
                <CheckIcon className="mt-0.5 size-5 text-success" />
                {r.right}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="rounded-3xl bg-white p-7 sm:p-10">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Este curso é <Hl>para você</Hl> que é:
          </h2>
          <ul className="mt-8 space-y-4">
            {forWho.yes.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-ink/80">
                <CheckIcon className="mt-0.5 size-5 text-success" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="rounded-3xl border border-black/10 p-7 sm:p-10">
          <h2 className="font-display text-3xl tracking-tight text-ink/80 sm:text-4xl">
            <span className="text-brand">Não</span> é para quem:
          </h2>
          <ul className="mt-8 space-y-4">
            {forWho.no.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-ink/70">
                <XIcon className="mt-0.5 size-5 text-ink/30" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="bg-glow py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="font-button text-sm uppercase tracking-widest text-white/70">Oferta de lançamento</p>
          <SectionTitle className="mt-2">
            Tudo o que você recebe ao entrar <Hl>hoje</Hl>
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <ul className="divide-y divide-white/10">
              {deliverables.map((d) => (
                <li key={d.title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                  <CheckIcon className="mt-0.5 size-5 text-success" />
                  <div>
                    <p className="font-semibold">
                      {"bonus" in d && d.bonus && (
                        <span className="mr-2 rounded bg-brand px-1.5 py-0.5 font-button text-[11px] uppercase tracking-wide">
                          Bônus
                        </span>
                      )}
                      {d.title}
                    </p>
                    <p className="mt-0.5 text-sm text-white/70">{d.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-3xl bg-white p-6 text-center text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] sm:p-8 lg:sticky lg:top-8"
          >
            <p className="font-button text-sm uppercase tracking-widest text-muted">Preço de lançamento</p>
            <p className="mt-4 text-sm text-muted">em até</p>
            <p className="font-display text-5xl font-bold leading-none text-brand sm:text-6xl">
              {vsl.price.installments}
            </p>
            <p className="mt-2 text-sm text-muted">
              {vsl.price.note} · ou {vsl.price.full} à vista
            </p>
            <BuyBlock tone="light" label="Quero minha vaga" className="mt-7" />
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {howItWorks.map((h) => (
                <li key={h} className="rounded-full bg-surface px-3 py-1 text-xs text-ink/70">
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">Compra 100% segura pela Hotmart</p>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/[0.06] p-6 text-center ring-1 ring-white/10 sm:flex-row sm:p-8 sm:text-left">
          <GuaranteeSeal className="size-32 shrink-0" />
          <div>
            <h3 className="font-display text-2xl font-semibold">7 dias de garantia incondicional</h3>
            <p className="mt-2 text-white/80">
              Entre, assista às aulas e aplique no plantão. Se não sentir evolução real, peça o reembolso em até 7 dias
              e receba 100% do valor. Sem burocracia, sem letras miúdas: o risco é todo nosso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionTitle>
            {team.title[0]}
            <Hl>{team.title[1]}</Hl>
          </SectionTitle>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {team.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-surface p-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-whatsapp text-white">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
              </svg>
            </span>
            <p className="text-sm text-ink/80">
              <b className="font-semibold text-ink">Suporte no WhatsApp:</b> você não fica sozinho. Mande suas dúvidas e
              imagens do plantão direto para a equipe.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} as="figure" className="text-center">
              <Image
                src={m.photo}
                alt={`Foto de ${m.name}`}
                width={626}
                height={626}
                sizes="(min-width: 1024px) 260px, 45vw"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-3">
                <p className="font-display text-lg font-semibold leading-tight">{m.name}</p>
                <p className="mt-0.5 text-xs text-muted">{m.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Science() {
  return (
    <section className="bg-navy-deep py-14 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="font-button text-sm uppercase tracking-widest text-brand">Por que o POCUS</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
            A ciência já provou. Agora é a sua vez.
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {science.map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={i * 80}
              className="rounded-2xl border border-white/10 p-6 text-[15px] leading-relaxed text-white/85"
            >
              {s}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-glow py-16 text-center text-white sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle>
          Está pronto para <Hl>decidir com segurança</Hl> no próximo plantão?
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          O POCUS salva vidas, e a sua evolução também. Entre na turma e comece hoje.
        </p>
        <BuyBlock className="mt-8" label="Quero dominar o POCUS e ter segurança no plantão" />
      </Reveal>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Perguntas <Hl>frequentes</Hl>
          </SectionTitle>
        </Reveal>
        <div className="mt-10 space-y-3">
          {vslFaq.map((f) => (
            <details
              key={f.q}
              name="vsl-faq"
              className="group rounded-2xl bg-surface transition-colors open:bg-white open:shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_20px_40px_-28px_rgb(0_0_0/0.4)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 font-medium text-ink/90">
                {f.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-ink transition duration-300 group-open:rotate-45 group-open:bg-brand group-open:text-white">
                  <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={vsl.checkoutUrl} className="font-semibold text-brand underline-offset-4 hover:underline">
            Garantir minha vaga com 7 dias de garantia →
          </a>
        </div>
      </div>
    </section>
  );
}

function VslFooter() {
  return (
    <footer className="bg-navy pb-24 pt-10 text-xs text-white/55 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <Image src="/img/logo-light.png" alt="Foco no POCUS" width={676} height={821} className="h-12 w-auto" />
        <div className="flex flex-col items-center gap-3 md:items-end">
          <p>
            © Foco no POCUS · Curso presencial?{" "}
            <Link href="/" className="text-white/80 underline-offset-4 hover:underline">
              Conheça nossas turmas
            </Link>
          </p>
          <EnergyCredit />
        </div>
      </div>
    </footer>
  );
}

export default function VslPage() {
  return (
    <main>
      <Hero />
      <Proofs />
      <Method />
      <Pains />
      <WrongVsRight />
      <ForWho />
      <Offer />
      <Team />
      <Science />
      <FinalCta />
      <Faq />
      <VslFooter />
      <StickyBuyBar />
    </main>
  );
}
