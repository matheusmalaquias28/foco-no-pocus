"use client";

import { useEffect, useRef, type ComponentProps, type ElementType } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
} & Omit<ComponentProps<T>, "as">;

/** Faz o elemento surgir suavemente quando entra na tela. */
export function Reveal<T extends ElementType = "div">({ as, delay = 0, className = "", style, ...props }: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...props}
    />
  );
}
