"use client";

import { useState, type FormEvent } from "react";
import { whatsapp } from "@/content";
import { WhatsAppIcon } from "../ui";

const field =
  "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10";

/** Lista de interesse: monta a mensagem e abre o WhatsApp da equipe (não grava dados). */
export function InterestForm({ message }: { message: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [message, "", `Nome: ${get("nome")}`, `Telefone: ${get("telefone")}`];
    if (get("email")) lines.push(`E-mail: ${get("email")}`);
    if (get("mensagem")) lines.push("", get("mensagem"));
    window.open(whatsapp(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 px-4 pb-4">
      <label className="block">
        <span className="sr-only">Nome</span>
        <input name="nome" required autoComplete="name" placeholder="Nome *" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Telefone</span>
        <input
          name="telefone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Telefone / WhatsApp *"
          className={field}
        />
      </label>
      <label className="block">
        <span className="sr-only">E-mail</span>
        <input name="email" type="email" autoComplete="email" placeholder="E-mail (opcional)" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Mensagem</span>
        <textarea
          name="mensagem"
          rows={2}
          maxLength={500}
          placeholder="Mensagem (opcional)"
          className={`${field} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-button text-sm font-medium text-navy transition hover:scale-[1.01] hover:bg-white/90"
      >
        <WhatsAppIcon className="size-4 text-whatsapp" />
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-white/60" role="status">
        {sent
          ? "Pronto! Se o WhatsApp não abriu, verifique se o navegador bloqueou a nova aba."
          : "Ao enviar, abrimos o WhatsApp com a sua mensagem pronta."}
      </p>
    </form>
  );
}
