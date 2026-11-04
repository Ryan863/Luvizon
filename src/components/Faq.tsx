import { Plus } from "lucide-react";
import { FAQS } from "@/data/site";

export function FaqSection() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-14 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
            DÚVIDAS FREQUENTES
          </p>
          <h2 data-reveal className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl">
            Antes de começar, o que você precisa saber.
          </h2>
        </div>
        <div data-stagger className="divide-y divide-stone-200 border-y border-stone-200 lg:col-span-8">
          {FAQS.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-6 py-5 text-left font-serif text-[1.35rem] leading-[1.2] text-stone-900 sm:text-2xl">
                {f.q}
                <Plus className="faq-icon h-5 w-5 shrink-0 text-[#B45309] transition-transform duration-300" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-stone-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
