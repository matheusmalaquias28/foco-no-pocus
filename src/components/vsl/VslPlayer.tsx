"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/* ---------- tipos mínimos da YouTube IFrame API ---------- */
type YTPlayer = {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  mute(): void;
  unMute(): void;
  setVolume(v: number): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  destroy(): void;
};
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
        onError?: (e: { data: number }) => void;
      };
    },
  ) => YTPlayer;
};
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const STATE = { ENDED: 0, PLAYING: 1, PAUSED: 2 } as const;

let apiPromise: Promise<YTNamespace> | null = null;
function loadYouTubeApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT!);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    document.head.appendChild(s);
  });
  return apiPromise;
}

/**
 * Barra "fake": anda rápido no começo e desacelera, mas chega ao fim junto com o vídeo.
 * x = fração real assistida (0..1) → fração exibida.
 */
const fakeProgress = (x: number) => 1 - Math.pow(1 - Math.min(Math.max(x, 0), 1), 2.2);

type Phase = "loading" | "muted" | "playing" | "paused" | "ended" | "error";

/**
 * Player no padrão de LP de VSL:
 * começa rodando sem som, botão animado para ativar o áudio (reinicia do zero),
 * sem controles, título ou marca do YouTube, e barra de progresso desacelerada.
 */
export function VslPlayer({
  videoId,
  poster,
  ctaHref,
  ctaLabel = "Quero minha vaga",
}: {
  videoId: string;
  poster: string;
  ctaHref: string;
  ctaLabel?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const soundOn = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const mount = mountRef.current;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !mount) return;
      // o YouTube troca este elemento por um iframe; criamos fora do controle do React
      const target = document.createElement("div");
      mount.appendChild(target);
      playerRef.current = new YT.Player(target, {
        videoId,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1,
          cc_load_policy: 0,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            // mostra o botão mesmo se o navegador bloquear o autoplay
            setPhase((p) => (p === "loading" ? "muted" : p));
          },
          onStateChange: (e) => {
            if (e.data === STATE.PLAYING) setPhase(soundOn.current ? "playing" : "muted");
            else if (e.data === STATE.PAUSED) setPhase((p) => (p === "muted" ? "muted" : "paused"));
            else if (e.data === STATE.ENDED) {
              if (!soundOn.current) {
                // ainda sem som: fica em loop mudo até a pessoa ativar o áudio
                e.target.seekTo(0, true);
                e.target.playVideo();
              } else {
                setProgress(1);
                setPhase("ended");
              }
            }
          },
          onError: () => setPhase("error"),
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
      if (mount) mount.innerHTML = "";
    };
  }, [videoId]);

  // atualiza a barra enquanto o vídeo roda com som
  useEffect(() => {
    if (phase !== "playing") return;
    const id = window.setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      const d = p.getDuration();
      if (d > 0) setProgress(fakeProgress(p.getCurrentTime() / d));
    }, 200);
    return () => window.clearInterval(id);
  }, [phase]);

  const enableSound = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    soundOn.current = true;
    p.seekTo(0, true);
    p.unMute();
    p.setVolume(100);
    p.playVideo();
    setProgress(0);
    setPhase("playing");
  }, []);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (p.getPlayerState() === STATE.PLAYING) {
      p.pauseVideo();
      setPhase("paused");
    } else {
      p.playVideo();
      setPhase("playing");
    }
  }, []);

  const replay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    p.seekTo(0, true);
    p.playVideo();
    setProgress(0);
    setPhase("playing");
  }, []);

  const showPoster = phase === "loading" || phase === "error";

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-deep shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/10">
      {/*
        Truque para esconder título, logo e "mais vídeos" do YouTube:
        o iframe tem 3x a altura da caixa e fica centralizado; o vídeo aparece no meio
        e as barras do YouTube (presas às bordas do iframe) ficam fora da área visível.
      */}
      <div className="pointer-events-none absolute inset-x-0 top-[-100%] h-[300%]">
        <div ref={mountRef} className="size-full [&>iframe]:size-full" />
      </div>

      {showPoster && (
        <div className="absolute inset-0">
          <Image src={poster} alt="" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-deep/60" />
          {phase === "error" ? (
            <p className="absolute inset-0 grid place-items-center px-6 text-center font-display text-lg text-white">
              O vídeo está sendo preparado. Atualize a página em alguns minutos.
            </p>
          ) : (
            <span className="absolute inset-0 grid place-items-center">
              <span className="size-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            </span>
          )}
        </div>
      )}

      {/* camada que captura os cliques (o iframe nunca recebe hover/clique) */}
      {phase === "muted" && (
        <button
          type="button"
          onClick={enableSound}
          className="group absolute inset-0 grid place-items-center bg-navy-deep/25"
          aria-label="Aperte aqui para ouvir o vídeo"
        >
          <span className="relative flex flex-col items-center">
            <span className="absolute -inset-4 animate-ping rounded-3xl bg-brand/40 motion-reduce:hidden" />
            <span className="relative flex flex-col items-center gap-3 rounded-2xl bg-brand px-6 py-5 text-white shadow-[0_20px_50px_-10px_rgb(230_57_70/0.8)] ring-4 ring-white/20 transition duration-300 group-hover:scale-105 sm:px-10 sm:py-7">
              <svg
                viewBox="0 0 24 24"
                className="size-10 animate-[pulse_1.2s_ease-in-out_infinite] sm:size-14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 5 6 9H2v6h4l5 4V5Z" fill="currentColor" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
              </svg>
              <span className="text-center font-button text-base font-semibold uppercase leading-tight tracking-wide sm:text-xl">
                Aperte aqui
                <br />
                para ouvir o vídeo
              </span>
            </span>
          </span>
        </button>
      )}

      {(phase === "playing" || phase === "paused") && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 cursor-pointer"
          aria-label={phase === "playing" ? "Pausar vídeo" : "Continuar vídeo"}
        >
          {phase === "paused" && (
            <span className="absolute inset-0 grid place-items-center bg-navy-deep/60">
              <span className="flex flex-col items-center gap-3 text-white">
                <span className="grid size-20 place-items-center rounded-full bg-brand shadow-[0_0_0_12px_rgb(230_57_70/0.25)]">
                  <svg viewBox="0 0 24 24" className="ml-1 size-9" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.98-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
                  </svg>
                </span>
                <span className="font-display text-lg">Clique para continuar assistindo</span>
              </span>
            </span>
          )}
        </button>
      )}

      {phase === "ended" && (
        <div className="absolute inset-0 grid place-items-center bg-navy-deep/85 px-6 text-center text-white">
          <div>
            <p className="font-display text-xl sm:text-2xl">Pronto para levar o POCUS para o seu plantão?</p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ctaHref}
                className="rounded-xl bg-brand px-6 py-3 font-button font-medium uppercase tracking-wide transition hover:bg-brand-dark"
              >
                {ctaLabel}
              </a>
              <button
                type="button"
                onClick={replay}
                className="rounded-xl border border-white/30 px-6 py-3 font-button text-sm transition hover:bg-white/10"
              >
                Assistir de novo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* barra de progresso "fake" (só depois de ativar o som) */}
      {(phase === "playing" || phase === "paused" || phase === "ended") && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-white/15" aria-hidden="true">
          <div
            className="h-full bg-brand transition-[width] duration-200 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
