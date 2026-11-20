import { site } from "@/content";
import { Reveal } from "../Reveal";
import { Hl, SectionTitle } from "../ui";
import { LiteYouTube } from "../LiteYouTube";

export function VideoSection() {
  return (
    <section id="sobre" className="bg-glow relative -mt-40 pb-20 pt-56 text-white sm:-mt-48 sm:pt-64 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle className="text-center">
            Veja por que este curso é <br className="hidden sm:block" />
            <Hl>essencial para você!</Hl>
          </SectionTitle>
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
          <LiteYouTube id={site.youtubeId} title="Conheça o curso Foco no POCUS" poster="/img/turma.jpg" />
        </Reveal>
      </div>
    </section>
  );
}
