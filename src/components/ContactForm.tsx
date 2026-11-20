"use client";

import { useState, type FormEvent } from "react";
import { whatsapp } from "@/content";
import { WhatsAppIcon } from "./ui";

const perfis = [
  "Médico emergencista",
  "Médico intensivista",
  "Médico generalista",
  "Residente",
  "Estudante de Medicina",
  "Outra especialidade",
];

const interesses = [
  "Pacote completo (2 dias)",
  "Apenas o 1º dia (POCUS Multissistêmico)",
  "Apenas o 2º dia (acesso vascular)",
  "Ainda estou decidindo",
];

const field =
  "mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/15";

/**
 * Formulário que monta a mensagem e abre o WhatsApp da equipe.
 * Não grava nem envia dados para servidor nenhum.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [
      `Olá! Meu nome é ${get("nome")}.`,
      get("perfil") && `Perfil: ${get("perfil")}`,
      get("interesse") && `Interesse: ${get("interesse")}`,
      get("email") && `E-mail: ${get("email")}`,
      get("mensagem") && `\n${get("mensagem")}`,
    ].filter(Boolean);
    window.open(whatsapp(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_40px_80px_-40px_rgb(24_53_86/0.45)] sm:p-10"
    >
      <h2 className="font-display text-3xl tracking-tight">Envie sua mensagem</h2>
      <p className="mt-2 text-sm text-muted">Ao enviar, abrimos o WhatsApp com a sua mensagem pronta.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink/80">Nome completo *</span>
          <input name="nome" required autoComplete="name" placeholder="Como podemos te chamar?" className={field} />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink/80">E-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="voce@email.com" className={field} />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink/80">Você é *</span>
          <select name="perfil" required defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>
              Selecione
            </option>
            {perfis.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-ink/80">Tenho interesse em</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {interesses.map((i, idx) => (
              <label
                key={i}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 px-4 py-3 text-sm text-ink/80 transition has-[:checked]:border-brand has-[:checked]:bg-brand/5 has-[:checked]:text-ink"
              >
                <input type="radio" name="interesse" value={i} defaultChecked={idx === 0} className="accent-brand" />
                {i}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink/80">Mensagem</span>
          <textarea name="mensagem" rows={4} placeholder="Escreva sua dúvida (opcional)" className={`${field} resize-y`} />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 font-button text-lg text-white transition hover:scale-[1.01] hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <WhatsAppIcon className="size-5" />
        Enviar pelo WhatsApp
      </button>
      <p className="mt-4 text-center text-sm text-muted" role="status">
        {sent ? "Pronto! Se o WhatsApp não abriu, verifique se o navegador bloqueou a nova aba." : " "}
      </p>
    </form>
  );
}
