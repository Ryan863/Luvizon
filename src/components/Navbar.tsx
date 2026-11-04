"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { CONTACTS, NAV } from "@/data/site";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const glass = scrolled || open;
  const onDark = !glass;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        glass ? "border-b border-stone-200/50 bg-[#F8F7F4]/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>
      <nav aria-label="Principal" className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#topo" aria-label="Luvizon Arquitetura & Engenharia, início" onClick={() => setOpen(false)}>
          <Logo light={onDark} />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  onDark ? "text-stone-100 hover:text-amber-300" : "text-stone-700 hover:text-[#B45309]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACTS.thana.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-colors sm:inline-flex ${
              onDark
                ? "border-stone-100/70 text-stone-50 hover:bg-stone-50 hover:text-stone-900"
                : "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50"
            }`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Iniciar Projeto
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              onDark ? "text-stone-50" : "text-stone-900"
            }`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-[#F8F7F4] px-5 pb-10 pt-6 lg:hidden"
      >
        <ul className="divide-y divide-stone-200">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-serif text-3xl leading-[1.1] text-stone-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-3">
          <a
            href={CONTACTS.thana.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-stone-900 px-6 text-sm font-semibold text-stone-50"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Iniciar Projeto (Thana)
          </a>
          <a
            href={CONTACTS.diego.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-stone-900 px-6 text-sm font-semibold text-stone-900"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fiscalização de Obras (Diego)
          </a>
          <div className="grid grid-cols-2 gap-3">
            {(["thana", "diego"] as const).map((k) => (
              <a
                key={k}
                href={CONTACTS[k].phoneHref}
                className="tabular flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-stone-300 bg-white text-[13px] font-medium text-stone-800"
              >
                <Phone className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
                Ligar {CONTACTS[k].name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

