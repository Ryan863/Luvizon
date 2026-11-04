import Image from "next/image";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { CONTACTS, CREDIBILITY } from "@/data/site";

export function Hero() {
  return (
    <section id="topo" className="relative flex flex-col overflow-hidden pt-24 pb-12 md:min-h-[88svh] md:justify-center md:pt-28 md:pb-16">
      {/* Fotografia: lateral direita no desktop, bloco inferior no mobile */}
      <div className="relative mt-10 aspect-[4/3] w-full md:absolute md:inset-y-0 md:right-0 md:mt-0 md:aspect-auto md:w-[68%] order-2">
        <Image
          src="/images/hero.jpg"
          alt="Residência contemporânea em concreto aparente e madeira ao entardecer, com deck e piscina"
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          className="object-cover object-[70%_center]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4] via-transparent to-transparent md:hidden" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-[#F8F7F4] via-[#F8F7F4]/35 to-transparent md:block" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F8F7F4] to-transparent" />
      </div>

      <div className="relative z-10 order-1 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <p data-hero className="tabular text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
            VIDEIRA • ITAJAÍ | SANTA CATARINA
          </p>
          <h1
            data-hero
            className="mt-5 font-serif text-[2.9rem] font-medium leading-[1.1] text-balance text-stone-900 sm:text-6xl lg:text-[5.25rem]"
          >
            A harmonia da arquitetura com a <em className="font-normal italic">precisão da engenharia.</em>
          </h1>
          <p data-hero className="mt-6 max-w-lg text-[15px] leading-relaxed text-stone-700 sm:text-base">
            Projetos completos residenciais, comerciais e hospitalares desenvolvidos pela Arquiteta Thana, integrados à
            coordenação rigorosa e fiscalização de obras do Engenheiro Diego. Sem retrabalho, sem desperdício de
            material.
          </p>

          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACTS.thana.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-stone-900 px-7 text-sm font-semibold text-stone-50 shadow-[0_10px_30px_-12px_rgba(28,25,23,0.5)] transition hover:bg-[#B45309]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar sobre Projeto (Thana)
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={CONTACTS.diego.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-stone-400 bg-white/60 px-7 text-sm font-semibold text-stone-900 backdrop-blur transition hover:border-stone-900 hover:bg-white"
            >
              Fiscalização de Obras (Diego)
            </a>
          </div>

          <ul data-hero className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium text-stone-700">
            {CREDIBILITY.map((item, i) => (
              <li key={item} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-stone-400 sm:block" />}
                <span className="inline-flex items-center gap-1.5">
                  {i === 0 && <Star className="h-3.5 w-3.5 fill-[#B45309] text-[#B45309]" aria-hidden="true" />}
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
