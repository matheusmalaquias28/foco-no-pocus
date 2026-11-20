import type { Metadata } from "next";
import { site, whatsapp } from "@/content";
import { ContactForm } from "@/components/ContactForm";
import { FeaturedClassText } from "@/components/Agenda";
import { Hl, InstagramIcon, WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe Foco no POCUS pelo WhatsApp, e-mail ou Instagram. Tire dúvidas sobre o curso de ultrassom à beira do leito no Rio de Janeiro.",
  alternates: { canonical: "/contato" },
};

const channels = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsapp(),
    icon: <WhatsAppIcon className="size-5" />,
    tone: "bg-whatsapp text-white",
  },
  {
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    tone: "bg-navy text-white",
  },
  {
    label: "Instagram",
    value: "@foconopocus",
    href: site.instagram,
    icon: <InstagramIcon />,
    tone: "bg-brand text-white",
  },
];

export default function ContatoPage() {
  return (
    <div className="bg-grid-lines">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:pt-44">
        <div>
          <p className="font-button text-sm uppercase tracking-widest text-brand">Contato</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Fale com a <Hl>Foco no POCUS</Hl>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Tire suas dúvidas sobre datas, modalidades de inscrição e valores. Respondemos rapidinho pelo WhatsApp.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgb(0_0_0/0.4)]"
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${c.tone}`}>{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">{c.label}</span>
                    <span className="block truncate font-display text-lg text-ink">{c.value}</span>
                  </span>
                  <span
                    className="ml-auto text-ink/30 transition group-hover:translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-navy p-5 text-white">
              <dt className="text-xs uppercase tracking-wider text-white/60">Local</dt>
              <dd className="mt-1 font-display text-lg">{site.city}</dd>
            </div>
            <div className="rounded-2xl bg-brand p-5 text-white">
              <dt className="text-xs uppercase tracking-wider text-white/70">Próxima turma</dt>
              <dd className="mt-1 font-display text-lg leading-snug">
                <FeaturedClassText />
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:pt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
