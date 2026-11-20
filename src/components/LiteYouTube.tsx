"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Embed leve do YouTube: só carrega o player (≈1 MB) quando a pessoa clica.
 * Sem `id`, mostra a capa com aviso de "vídeo em breve".
 */
export function LiteYouTube({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : poster;

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-deep shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/10">
      {playing && id ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => id && setPlaying(true)}
          disabled={!id}
          className="group absolute inset-0 size-full cursor-pointer disabled:cursor-default"
          aria-label={id ? `Assistir: ${title}` : "Vídeo em breve"}
        >
          <Image
            src={thumb}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className={`object-cover transition duration-700 group-hover:scale-[1.03] ${id ? "" : "scale-110 blur-[2px]"}`}
            unoptimized={!!id}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-navy-deep/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex flex-col items-center gap-4">
              <span className="grid size-20 place-items-center rounded-full bg-brand text-white shadow-[0_0_0_12px_rgb(230_57_70/0.25)] transition duration-300 group-hover:scale-110 group-enabled:group-hover:shadow-[0_0_0_18px_rgb(230_57_70/0.2)] sm:size-24">
                <svg viewBox="0 0 24 24" className="ml-1 size-8 sm:size-10" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.98-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
              {!id && <span className="font-display text-lg text-white/90">Vídeo em breve</span>}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
