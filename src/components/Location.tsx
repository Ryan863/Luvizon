import { AtSign, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { CONTACTS, SITE } from "@/data/site";

export function Location() {
  const a = SITE.address;
  return (
    <section id="localizacao" className="border-t border-stone-200/70 bg-[#F2F0EB] py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-[11px] font-semibold tracking-[0.25em] text-[#B45309]">
            SEDE &amp; CONTACTOS
          </p>
          <h2 data-reveal className="mt-4 font-serif text-4xl leading-[1.1] text-balance text-stone-900 sm:text-5xl">
            Venha conhecer o escritório em Videira.
          </h2>
        </div>

        <div
          data-reveal
          className="mt-12 grid overflow-hidden rounded-sm border border-stone-200/70 bg-white shadow-[0_24px_60px_-35px_rgba(28,25,23,0.4)] lg:grid-cols-2"
        >
          <div className="p-7 md:p-10">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
              <address className="tabular not-italic text-[15px] leading-relaxed text-stone-800">
                <strong className="block font-semibold text-stone-900">Sede Videira</strong>
                {a.street} - Bairro {a.district}
                <br />
                {a.city} - {a.state}, CEP {a.zip}
              </address>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-stone-900 px-6 text-[13px] font-semibold text-stone-50 transition-colors hover:bg-[#B45309]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Abrir Rota no Google Maps
              </a>
              <a
                href={SITE.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-stone-400 px-6 text-[13px] font-semibold text-stone-900 transition-colors hover:border-stone-900"
              >
                Abrir no Waze
              </a>
            </div>

            <div className="mt-8 flex gap-4 border-t border-stone-200 pt-6">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
              <p className="tabular text-[15px] leading-relaxed text-stone-800">
                {SITE.hours}
                <br />
                <span className="text-stone-500">{SITE.hoursClosed}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-stone-200 bg-[#F8F7F4] p-7 md:p-10 lg:border-l lg:border-t-0">
            <ul className="space-y-6">
              {(["thana", "diego"] as const).map((k) => {
                const c = CONTACTS[k];
                return (
                  <li key={k}>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-stone-500">
                      {c.name.toUpperCase()} · {c.role.toUpperCase()}
                    </p>
                    <div className="mt-2 flex flex-col gap-1">
                      <a
                        href={c.phoneHref}
                        className="tabular inline-flex min-h-[44px] items-center gap-3 font-serif text-2xl text-stone-900 hover:text-[#B45309]"
                      >
                        <Phone className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
                        {c.phoneLabel}
                      </a>
                      <a
                        href={`mailto:${c.email}`}
                        className="inline-flex min-h-[40px] items-center gap-3 text-[14px] text-stone-700 hover:text-[#B45309]"
                      >
                        <Mail className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
                        {c.email}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center gap-3 border-t border-stone-200 pt-6 text-[14px] font-medium text-stone-800 hover:text-[#B45309]"
            >
              <AtSign className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
              Instagram {SITE.instagram.handle}
            </a>

            <p className="tabular mt-4 text-[12px] tracking-wide text-stone-500">CNPJ {SITE.cnpj}</p>
          </div>

          <div className="border-t border-stone-200 lg:col-span-2">
            <iframe
              title="Mapa: sede da Luvizon em Videira, SC"
              src={SITE.mapEmbed}
              className="block h-[300px] w-full border-0 md:h-[380px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

