import Image from "next/image";
import { audience, gallery } from "@/content";
import { Reveal } from "../Reveal";
import { Hl, SectionTitle } from "../ui";

function UserBadge() {
  return (
    <span className="grid size-9 place-items-center rounded-lg bg-brand text-white">
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5v.5H4V20Z" />
      </svg>
    </span>
  );
}

export function Audience() {
  return (
    <section id="para-quem" className="pt-4 lg:pt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Este curso é ideal <br />
            <Hl>para você que é:</Hl>
          </SectionTitle>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {audience.map((a, i) => (
            <Reveal
              as="li"
              key={a.subtitle}
              delay={i * 90}
              className="group relative isolate h-72 overflow-hidden rounded-2xl bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.3)] sm:h-64 lg:h-80 lg:p-8"
            >
              <UserBadge />
              <p className="relative z-10 mt-4 max-w-[9rem] font-display text-lg leading-tight text-ink/80 sm:mt-3 sm:text-base lg:mt-5 lg:max-w-[12rem] lg:text-2xl">
                {a.title}
                <br />
                <span className="font-semibold text-ink">{a.subtitle}</span>
              </p>
              <Image
                src={a.image}
                alt=""
                width={a.w}
                height={800}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 40vw, 60vw"
                className="absolute -bottom-1 right-4 -z-10 h-[92%] w-auto object-contain object-bottom transition duration-500 group-hover:scale-105 sm:right-0 sm:h-[82%] lg:right-10 lg:h-[94%]"
              />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Faixa de fotos do curso, rolando continuamente */}
      <div className="group relative z-10 mt-16 overflow-hidden lg:mt-24" aria-label="Fotos das turmas anteriores">
        <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {[...gallery, ...gallery].map((g, i) => (
            <li key={i} aria-hidden={i >= gallery.length} className="shrink-0">
              <Image
                src={g.src}
                alt={i >= gallery.length ? "" : g.alt}
                width={441}
                height={313}
                sizes="320px"
                className="h-44 w-auto rounded-xl object-cover sm:h-56"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
