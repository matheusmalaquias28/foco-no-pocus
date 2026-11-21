import { buyKit, vsl } from "@/content-vsl";

const kitIcons: Record<(typeof buyKit)[number]["icon"], React.ReactNode> = {
  card: <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 15h4" />,
  shield: <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3.5 9 2.5 2.5 4.5-5" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
};

/** Botão de compra + kit (preço em parcelas, garantia, acesso, suporte). */
export function BuyBlock({
  label = "Quero dominar o POCUS no plantão",
  tone = "dark",
  className = "",
}: {
  label?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-white/75" : "text-ink/70";
  return (
    <div className={`mx-auto w-full max-w-2xl text-center ${className}`}>
      <a
        href={vsl.checkoutUrl}
        className="group relative mx-auto flex w-full max-w-xl items-center justify-center gap-3 overflow-hidden rounded-xl bg-brand px-6 py-5 font-button text-lg font-medium uppercase tracking-wide text-white shadow-[0_18px_40px_-12px_rgb(230_57_70/0.75)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-xl"
      >
        <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[400%] motion-reduce:hidden" />
        {label}
        <svg
          viewBox="0 0 24 24"
          className="size-5 shrink-0 transition group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <ul
        className={`mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 ${muted}`}
      >
        {buyKit.map((k) => (
          <li key={k.text} className="flex items-center justify-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              className="size-4 shrink-0 text-brand"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {kitIcons[k.icon]}
            </svg>
            {k.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Selo de garantia de 7 dias. */
export function GuaranteeSeal({ className = "size-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Garantia de 7 dias">
      <defs>
        <path id="seal-arc" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#e63946" />
      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke="#fff"
        strokeOpacity=".35"
        strokeDasharray="2 5"
        strokeWidth="2"
      />
      <text fill="#fff" fontSize="15" fontWeight="700" letterSpacing="3" fontFamily="var(--font-outfit), sans-serif">
        <textPath href="#seal-arc" startOffset="0">
          GARANTIA INCONDICIONAL · 100% DO VALOR DE VOLTA ·
        </textPath>
      </text>
      <circle cx="100" cy="100" r="54" fill="#183556" />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="#fff"
        fontSize="52"
        fontWeight="800"
        fontFamily="var(--font-urbanist), sans-serif"
      >
        7
      </text>
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="600"
        letterSpacing="4"
        fontFamily="var(--font-outfit), sans-serif"
      >
        DIAS
      </text>
    </svg>
  );
}
