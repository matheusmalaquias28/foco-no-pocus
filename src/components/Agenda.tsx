"use client";

import { useSyncExternalStore } from "react";
import {
  classes,
  classStatusLabel,
  formatClassDate,
  shortClassDate,
  whatsapp,
  type ClassStatus,
  type CourseClass,
} from "@/content";
import { ButtonLink } from "./ui";

const noop = () => () => {};
const pad = (n: number) => String(n).padStart(2, "0");
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/**
 * Turmas futuras. No servidor (página estática) mostra a lista inteira;
 * no navegador esconde as que já passaram, então o site não fica com data vencida.
 */
export function useUpcomingClasses(): CourseClass[] {
  const today = useSyncExternalStore(noop, todayISO, () => null);
  return today ? classes.filter((c) => c.dateISO >= today) : classes;
}

export function useFeaturedClass(): CourseClass | null {
  const list = useUpcomingClasses();
  return list.find((c) => c.status === "abertas") ?? list.find((c) => c.status === "agendado") ?? null;
}

export function enrollMessage(c: CourseClass) {
  return c.status === "abertas"
    ? `Olá! Quero me inscrever na turma ${c.city === "Rio de Janeiro" ? "do" : "de"} ${c.city} (${shortClassDate(c.dateISO)}) do Foco no POCUS.`
    : `Olá! Quero entrar na lista de interesse da turma ${c.city === "Rio de Janeiro" ? "do" : "de"} ${c.city} (${shortClassDate(c.dateISO)}) do Foco no POCUS.`;
}

/** Texto curto da turma em destaque, ex.: "Inscrições abertas: Rio de Janeiro, 05 de dezembro". */
export function FeaturedClassText({ fallback = "Novas turmas em breve" }: { fallback?: string }) {
  const c = useFeaturedClass();
  if (!c) return <>{fallback}</>;
  return (
    <>
      {classStatusLabel[c.status]}: {c.city}, {formatClassDate(c.dateISO)}
    </>
  );
}

const pill: Record<ClassStatus, string> = {
  abertas: "bg-success/10 text-success",
  esgotado: "bg-ink/5 text-ink/50",
  agendado: "bg-navy/10 text-navy",
};

/** Agenda completa em cartões (bloco "Vagas limitadas"). */
export function AgendaCards() {
  const list = useUpcomingClasses();
  if (!list.length) {
    return (
      <p className="rounded-2xl bg-surface px-5 py-6 font-display text-2xl font-bold text-brand">
        Novas turmas em breve
      </p>
    );
  }
  return (
    <ul className="space-y-3 text-left">
      {list.map((c) => {
        const soldOut = c.status === "esgotado";
        return (
          <li
            key={c.dateISO + c.city}
            className={`flex items-center gap-4 rounded-2xl px-4 py-4 sm:px-5 ${
              c.status === "abertas" ? "bg-brand/[0.06] ring-1 ring-brand/30" : "bg-surface"
            }`}
          >
            <div className={`w-16 shrink-0 text-center ${soldOut ? "opacity-50" : ""}`}>
              <p className="font-display text-3xl font-bold leading-none text-brand">{c.dateISO.slice(8, 10)}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {formatClassDate(c.dateISO).split(" de ")[1].slice(0, 3)}
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`font-display text-lg font-semibold leading-tight ${soldOut ? "text-ink/50 line-through" : ""}`}
              >
                {c.city}
              </p>
              <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${pill[c.status]}`}>
                {classStatusLabel[c.status]}
              </span>
            </div>
            {!soldOut && (
              <ButtonLink
                href={whatsapp(enrollMessage(c))}
                variant={c.status === "abertas" ? "brand" : "ink"}
                className="shrink-0 !px-4 !py-2.5 !text-sm"
              >
                {c.status === "abertas" ? "Inscrever" : "Me avise"}
              </ButtonLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Lista simples para o rodapé. */
export function AgendaFooterList() {
  const list = useUpcomingClasses();
  if (!list.length) return <p className="mt-3 text-sm text-white/70">Novas turmas em breve</p>;
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-white/70">
      {list.map((c) => (
        <li key={c.dateISO + c.city} className={c.status === "esgotado" ? "text-white/40" : ""}>
          <b className="font-semibold text-white/90">{shortClassDate(c.dateISO)}</b> · {c.city}
          <span className="block text-xs text-white/45">{classStatusLabel[c.status]}</span>
        </li>
      ))}
    </ul>
  );
}
