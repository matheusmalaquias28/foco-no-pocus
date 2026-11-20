"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content";

const left = nav.slice(0, 3);
const right = nav.slice(3, 6);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls =
    "relative font-display text-[15px] text-ink/80 transition-colors hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-white/90 shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "h-16" : "h-20 lg:h-28"
          }`}
        >
          <nav aria-label="Principal, à esquerda" className="hidden items-center gap-8 lg:flex">
            {left.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            aria-label="Foco no POCUS, página inicial"
            className="col-start-1 justify-self-start lg:col-start-2 lg:justify-self-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/img/logo-dark.png"
              alt="Foco no POCUS"
              width={676}
              height={821}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-11" : "h-14 lg:h-20"}`}
            />
          </Link>

          <div className="col-start-3 flex items-center justify-end gap-8">
            <nav aria-label="Principal, à direita" className="hidden items-center gap-8 lg:flex">
              {right.map((item) => (
                <Link key={item.href} href={item.href} className={linkCls}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contato"
              className="hidden rounded-lg bg-brand px-6 py-2.5 font-button text-white transition hover:scale-[1.04] hover:bg-brand-dark sm:inline-flex"
            >
              Contato
            </Link>
            <button
              type="button"
              className="relative grid size-11 place-items-center rounded-lg lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[7px]"}`}
              />
              <span className={`absolute h-0.5 w-6 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[7px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 z-[45] bg-white px-6 pb-10 pt-6 transition-all duration-300 lg:hidden ${
          scrolled ? "top-16" : "top-20"
        } ${open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        <nav aria-label="Menu" className="flex h-full flex-col">
          <ul className="divide-y divide-black/5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                  <span className="text-brand" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-lg bg-brand py-4 text-center font-button text-lg text-white"
          >
            Fale com a gente
          </Link>
        </nav>
      </div>
    </>
  );
}
