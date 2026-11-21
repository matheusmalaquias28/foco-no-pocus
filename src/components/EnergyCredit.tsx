import Image from "next/image";

/** Crédito "Desenvolvido com ⚡ pela Energy" usado nos rodapés. */
export function EnergyCredit() {
  return (
    <a
      href="https://energymidia.com.br"
      target="_blank"
      rel="noopener"
      className="group inline-flex items-center gap-1.5 transition hover:text-white"
      aria-label="Desenvolvido com energia pela Energy Mídia"
    >
      <span aria-hidden="true">
        Desenvolvido com <span className="inline-block transition group-hover:scale-125">⚡</span> pela
      </span>
      <Image
        src="/img/energy-midia.svg"
        alt=""
        width={829}
        height={311}
        className="h-6 w-auto opacity-80 transition group-hover:opacity-100"
      />
    </a>
  );
}
