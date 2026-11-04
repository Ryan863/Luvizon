import Image from "next/image";
import { Quote } from "lucide-react";
import { REVIEWS, SYNERGY } from "@/data/site";

export function Synergy() {
  const aline = REVIEWS[0];
  return (
    <section id="sinergia" className="py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
            O DIFERENCIAL LUVIZON
          </p>
          <h2
            data-reveal
            className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl lg:text-6xl"
          >
            Quem desenha a casa é quem confere a obra.
          </h2>
          <p data-reveal className="mt-6 max-w-xl text-base leading-relaxed text-stone-700">
            Em escritórios separados, o arquiteto entrega o projeto e a obra descobre os problemas. Aqui, arquitetura e
            engenharia dividem a mesma mesa desde o primeiro traço, e o orçamento, a estrutura e o 3D chegam ao canteiro
            já compatibilizados.
          </p>

          <ol data-stagger className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {SYNERGY.map((p) => (
              <li key={p.index} className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="tabular font-serif text-3xl text-[#B45309] sm:text-4xl">{p.index}</span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-stone-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-700">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <div data-reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/projeto.jpg"
                alt="Casa contemporânea com fachada em concreto e ripado de madeira, deck e piscina ao entardecer"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_65%]"
              />
            </div>
            <figure className="relative -mt-14 ml-4 mr-0 rounded-sm border border-stone-200/70 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(28,25,23,0.35)] sm:ml-10 sm:p-7">
              <Quote className="h-6 w-6 text-[#B45309]" aria-hidden="true" />
              <blockquote className="mt-3 font-serif text-xl leading-[1.25] text-stone-900">
                “A integração entre o projeto e a execução da obra foi perfeita, otimizando o uso de materiais.”
              </blockquote>
              <figcaption className="mt-4 text-[12px] font-semibold tracking-wide text-stone-600">
                {aline.author} <span className="font-normal text-stone-500">· Avaliação no Google ★ 5.0</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
