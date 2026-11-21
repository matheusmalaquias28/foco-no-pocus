"use client";

import { useEffect, useState } from "react";
import { vsl } from "@/content-vsl";

/** Barra fixa de compra no celular, aparece depois que a pessoa passa do vídeo. */
export function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("vsl-video");
      if (!target) return;
      setShow(target.getBoundingClientRect().bottom < 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a
        href={vsl.checkoutUrl}
        tabIndex={show ? 0 : -1}
        className="flex items-center justify-between gap-3 rounded-xl bg-brand px-4 py-3 text-white"
      >
        <span className="font-button text-sm font-medium uppercase tracking-wide">Quero minha vaga</span>
        <span className="text-right text-xs leading-tight text-white/85">
          {vsl.price.installments}
          <br />
          {vsl.price.note}
        </span>
      </a>
    </div>
  );
}
