import { ArrowUpRight, Mail } from "lucide-react";
import { CONTACTS, PROFILES, type Profile } from "@/data/site";

function ProfileCard({ p, offset }: { p: Profile; offset: boolean }) {
  const c = CONTACTS[p.owner];
  return (
    <article
      className={`relative overflow-hidden rounded-sm border border-stone-200/70 bg-white p-8 shadow-[0_18px_40px_-30px_rgba(28,25,23,0.35)] md:p-10 ${
        offset ? "lg:mt-20" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-10 select-none font-serif text-[11rem] leading-none text-stone-100"
      >
        {p.initial}
      </span>
      <div className="relative">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">{p.role.toUpperCase()}</p>
        <h3 className="mt-2 font-serif text-4xl leading-[1.1] text-stone-900">{p.name}</h3>
        <p className="mt-5 font-serif text-2xl leading-[1.2] text-balance text-stone-800">{p.headline}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-stone-700">{p.text}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {p.areas.map((a) => (
            <li key={a} className="rounded-full border border-stone-200 bg-[#F8F7F4] px-3 py-1 text-[12px] font-medium text-stone-700">
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={c.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-stone-900 px-6 text-[13px] font-semibold text-stone-50 transition-colors hover:bg-[#B45309]"
          >
            Conversar com {c.name}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${c.email}`}
            className="inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium text-stone-700 hover:text-[#B45309]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {c.email}
          </a>
        </div>
      </div>
    </article>
  );
}

export function Profiles() {
  return (
    <section id="sobre" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
            RESPONSÁVEIS TÉCNICOS
          </p>
          <h2 data-reveal className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl">
            Duas especialidades, um único compromisso com o seu resultado.
          </h2>
        </div>
        <div data-stagger className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {PROFILES.map((p, i) => (
            <ProfileCard key={p.owner} p={p} offset={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
