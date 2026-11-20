"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "./ui";

/** Carrossel leve com scroll-snap nativo (arrastar no celular, setas no desktop). */
export function Carousel({
  children,
  label,
  itemClassName = "basis-[85%] sm:basis-[46%] lg:basis-[31.5%]",
  tone = "light",
}: {
  children: ReactNode;
  label: string;
  itemClassName?: string;
  tone?: "light" | "dark";
}) {
  const track = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ start: true, end: false, page: 0, pages: 1 });
  const items = Children.toArray(children);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pages = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setState({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft >= max - 4,
      page: max > 0 ? Math.round((el.scrollLeft / max) * (pages - 1)) : 0,
      pages,
    });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const goTo = (page: number) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * page) / Math.max(1, state.pages - 1), behavior: "smooth" });
  };

  const btn =
    tone === "dark"
      ? "border-white/20 text-white hover:bg-white hover:text-ink"
      : "border-black/10 text-ink hover:bg-brand hover:border-brand hover:text-white";

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={label}>
      <ul
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:gap-6"
      >
        {items.map((child, i) => (
          <li key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </li>
        ))}
      </ul>

      {state.pages > 1 && (
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {Array.from({ length: state.pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para o grupo ${i + 1}`}
                aria-current={state.page === i}
                className={`h-2 rounded-full transition-all ${
                  state.page === i ? "w-8 bg-brand" : `w-2 ${tone === "dark" ? "bg-white/30" : "bg-black/15"}`
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={state.start}
              aria-label="Anterior"
              className={`grid size-11 place-items-center rounded-full border transition disabled:pointer-events-none disabled:opacity-30 ${btn}`}
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={state.end}
              aria-label="Próximo"
              className={`grid size-11 place-items-center rounded-full border transition disabled:pointer-events-none disabled:opacity-30 ${btn}`}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
