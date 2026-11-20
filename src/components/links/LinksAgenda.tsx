"use client";

import { classStatusLabel, formatClassDate, whatsapp } from "@/content";
import { enrollMessage, useUpcomingClasses } from "../Agenda";
import { InterestForm } from "./InterestForm";
import { ArrowOut, ItemContent, PlusToggle, cardBase, cardHighlight, formCard } from "./LinkCard";

/** Cartões das turmas na /links, gerados a partir da agenda do content.ts. */
export function LinksAgenda() {
  // inscrições abertas primeiro; o resto em ordem de data
  const order = { abertas: 0, agendado: 1, esgotado: 2 } as const;
  const list = [...useUpcomingClasses()].sort((a, b) => order[a.status] - order[b.status]);

  return (
    <>
      {list.map((c) => {
        const key = c.dateISO + c.city;
        const detail = `${formatClassDate(c.dateISO)} · ${classStatusLabel[c.status]}`;
        const local = c.city === "Rio de Janeiro" ? "no Rio de Janeiro" : `em ${c.city}`;

        if (c.status === "abertas") {
          return (
            <li key={key}>
              <a
                href={whatsapp(enrollMessage(c))}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardBase} ${cardHighlight}`}
              >
                <ItemContent
                  icon="calendar"
                  label={`INSCREVA-SE AQUI! Curso de POCUS ${local}`}
                  detail={detail}
                  highlight
                />
                <ArrowOut />
              </a>
            </li>
          );
        }

        if (c.status === "esgotado") {
          return (
            <li key={key}>
              <div className={`${cardBase} border border-white/10 bg-white/[0.04]`}>
                <ItemContent
                  icon="calendar"
                  label={`Curso de POCUS ${local}`}
                  detail={formatClassDate(c.dateISO)}
                  muted
                />
                <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white/70">
                  Esgotado
                </span>
              </div>
            </li>
          );
        }

        return (
          <li key={key}>
            <details className={formCard}>
              <summary className={`${cardBase} cursor-pointer hover:bg-white/[0.06]`}>
                <ItemContent
                  icon="list"
                  label={`Lista de interesse: Curso POCUS ${c.city}`}
                  detail={`${formatClassDate(c.dateISO)} · Seja avisado quando abrir`}
                />
                <PlusToggle />
              </summary>
              <InterestForm message={enrollMessage(c)} />
            </details>
          </li>
        );
      })}
    </>
  );
}
