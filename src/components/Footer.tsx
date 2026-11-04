import { NAV, SITE } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-stone-900 pb-24 pt-14 text-stone-300 md:pb-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 font-serif text-2xl leading-[1.2] text-stone-100">
              Projeto e obra na mesma mesa, do primeiro traço à entrega.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-[14px]">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-flex min-h-[32px] items-center hover:text-amber-300">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[32px] items-center hover:text-amber-300">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="tabular mt-12 flex flex-col gap-2 border-t border-stone-700 pt-6 text-[12px] text-stone-400 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} Luvizon Arquiteta e Engenheiro - Videira • Itajaí
          </p>
          <p>CNPJ {SITE.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}

