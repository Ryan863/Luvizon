"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Orquestra as revelações de scroll de toda a página.
 * - [data-reveal]: revela o próprio elemento
 * - [data-stagger]: revela os filhos diretos em cascata (0.1s)
 * `once: true` + `top 88%` evita nós ocultos em telemóveis.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const base = { y: 28, opacity: 0, duration: 0.75, ease: "power3.out" } as const;
        const trigger = (el: Element) => ({ trigger: el, start: "top 88%", once: true });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, { ...base, scrollTrigger: trigger(el) });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
          gsap.from(Array.from(el.children), {
            ...base,
            stagger: 0.1,
            scrollTrigger: trigger(el),
          });
        });

        gsap.from("[data-hero]", { ...base, stagger: 0.12, delay: 0.1 });
      });

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} id="conteudo">
      {children}
    </main>
  );
}
