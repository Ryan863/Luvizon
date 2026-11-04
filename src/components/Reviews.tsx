import { Star } from "lucide-react";
import { REVIEWS } from "@/data/site";

export function Reviews() {
  return (
    <section id="depoimentos" className="bg-[#F2F0EB] border-y border-stone-200/70 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
              AVALIAÇÕES REAIS NO GOOGLE
            </p>
            <h2 data-reveal className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl">
              Quem já construiu com a Luvizon conta como foi.
            </h2>
          </div>
          <div data-reveal className="flex items-center gap-3">
            <span className="tabular font-serif text-5xl leading-none text-stone-900">5.0</span>
            <span className="flex" role="img" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#B45309] text-[#B45309]" aria-hidden="true" />
              ))}
            </span>
          </div>
        </div>

        <div data-stagger className="mt-12 columns-1 gap-5 md:columns-2 [&>*]:mb-5">
          {REVIEWS.map((r) => (
            <figure
              key={r.author}
              className="break-inside-avoid rounded-sm border border-stone-200/70 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(28,25,23,0.35)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#B45309] text-[#B45309]" aria-hidden="true" />
                  ))}
                </span>
                <span className="rounded-full bg-[#B45309]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B45309]">
                  {r.highlight}
                </span>
              </div>
              <blockquote className="mt-5 font-serif text-[1.35rem] leading-[1.3] text-stone-900">“{r.text}”</blockquote>
              <figcaption className="mt-5 border-t border-stone-200 pt-4 text-[13px] font-semibold text-stone-800">
                {r.author}
                <span className="block text-[12px] font-normal text-stone-500">Avaliação verificada no Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
