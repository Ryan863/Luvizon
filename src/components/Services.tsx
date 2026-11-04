import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CONTACTS, SERVICES, type Service } from "@/data/site";

function Card({ s }: { s: Service }) {
  const owner = CONTACTS[s.owner];
  const dark = s.tone === "dark";
  const image = s.tone === "image";
  const Icon = s.icon;

  const surface = dark
    ? "bg-stone-900 text-stone-50 border-stone-800"
    : image
      ? "bg-stone-900 text-stone-50 border-stone-800"
      : "bg-white text-stone-900 border-stone-200/70";

  return (
    <article
      className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-sm border p-7 shadow-[0_18px_40px_-30px_rgba(28,25,23,0.35)] ${surface} ${s.span}`}
    >
      {s.image && (dark || image) && (
        <>
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/65 to-stone-900/20" />
        </>
      )}
      {s.image && !dark && !image && (
        <div className="relative -mx-7 -mt-7 mb-6 aspect-[16/9] overflow-hidden">
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      )}

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${
              dark || image ? "border-stone-600 text-amber-300" : "border-stone-200 text-[#B45309]"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
              dark || image ? "bg-amber-700/90 text-white" : "bg-[#B45309]/10 text-[#B45309]"
            }`}
          >
            {s.tag}
          </span>
        </div>
      </div>

      <div className="relative mt-16">
        <h3 className="font-serif text-[1.75rem] leading-[1.1] text-balance">{s.title}</h3>
        <p className={`mt-3 max-w-md text-[15px] leading-relaxed ${dark || image ? "text-stone-300" : "text-stone-700"}`}>
          {s.text}
        </p>
        <a
          href={owner.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex min-h-[44px] items-center gap-2 border-b pb-1 text-[13px] font-semibold transition-colors ${
            dark || image
              ? "border-stone-500 text-stone-50 hover:border-amber-300 hover:text-amber-300"
              : "border-stone-400 text-stone-900 hover:border-[#B45309] hover:text-[#B45309]"
          }`}
        >
          Falar com {owner.name} ({owner.role.toLowerCase()})
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" className="border-y border-stone-200/70 bg-[#F2F0EB] py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
              ESPECIALIDADES
            </p>
            <h2 data-reveal className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl">
              Do primeiro traço à última pintura da obra.
            </h2>
          </div>
          <p data-reveal className="text-base leading-relaxed text-stone-700 md:col-span-5">
            Cada serviço tem um responsável técnico direto. Você fala com quem realmente vai assinar e acompanhar o seu
            projeto.
          </p>
        </div>

        <div data-stagger className="mt-12 grid gap-5 lg:grid-cols-6">
          {SERVICES.map((s) => (
            <Card key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

