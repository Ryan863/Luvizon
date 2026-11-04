import Image from "next/image";
import { ArrowUpRight, Layers, MapPin, MessageCircle, Star } from "lucide-react";
import { CONTACTS, CREDIBILITY } from "@/data/site";

const CRED_ICONS = [Star, MapPin, Layers] as const;

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-stone-900 pt-24 pb-12 md:justify-center md:pt-28 md:pb-0"
    >
      {/* Fotografia de fundo: vertical no mobile, horizontal no desktop */}
      <Image
        src="/images/projeto.jpg"
        alt="Casa contemporânea em concreto aparente e madeira ao entardecer, com piscina"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_60%] md:hidden"
      />
      <Image
        src="/images/hero.jpg"
        alt="Residência contemporânea em concreto aparente e madeira ao entardecer, com deck e piscina"
        fill
        sizes="100vw"
        className="-z-20 hidden object-cover object-[75%_center] md:block"
      />
      {/* Degradês: base e lateral para legibilidade do texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-900 via-stone-900/65 to-stone-900/20 md:bg-gradient-to-r md:from-stone-900/90 md:via-stone-900/55 md:to-stone-900/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-gradient-to-t from-stone-900/80 to-transparent md:block"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p data-hero className="tabular text-[11px] font-semibold tracking-[0.25em] text-amber-300">
            VIDEIRA • ITAJAÍ | SANTA CATARINA
          </p>
          <h1
            data-hero
            className="mt-5 font-serif text-[2.9rem] font-medium leading-[1.1] text-balance text-stone-50 sm:text-6xl lg:text-[5.25rem]"
          >
            A harmonia da arquitetura com a <em className="font-normal italic text-stone-300">precisão da engenharia.</em>
          </h1>
          <p data-hero className="mt-6 max-w-lg text-[15px] leading-relaxed text-stone-200 sm:text-base">
            Projetos completos residenciais, comerciais e hospitalares desenvolvidos pela Arquiteta Thana, integrados à
            coordenação rigorosa e fiscalização de obras do Engenheiro Diego. Sem retrabalho, sem desperdício de
            material.
          </p>

          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACTS.thana.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#F8F7F4] px-7 text-sm font-semibold text-stone-900 transition hover:bg-amber-300"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar sobre Projeto (Thana)
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={CONTACTS.diego.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-stone-300/60 bg-stone-900/30 px-7 text-sm font-semibold text-stone-50 backdrop-blur transition hover:border-stone-50 hover:bg-stone-900/50"
            >
              Fiscalização de Obras (Diego)
            </a>
          </div>
        </div>
      </div>

      {/* Barra de credibilidade */}
      <div className="mx-auto mt-10 w-full max-w-7xl px-5 md:mt-16 md:px-8">
        <ul
          data-hero
          className="grid gap-4 border-t border-stone-50/20 pt-6 text-[13px] font-medium text-stone-100 md:grid-cols-3 md:gap-0 md:pb-10 md:pt-7"
        >
          {CREDIBILITY.map((item, i) => {
            const Icon = CRED_ICONS[i];
            return (
              <li key={item} className={`flex items-center gap-3 ${i > 0 ? "md:border-l md:border-stone-50/20 md:pl-8" : ""}`}>
                <Icon
                  className={`h-5 w-5 shrink-0 text-amber-300 ${i === 0 ? "fill-amber-300" : ""}`}
                  aria-hidden="true"
                />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
