import { MessageCircle } from "lucide-react";
import { CONTACTS } from "@/data/site";

/** CTA flutuante apenas em mobile, atalho direto para a triagem de projeto. */
export function FloatingCta() {
  return (
    <a
      href={CONTACTS.thana.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Thana no WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#B45309] px-5 text-[13px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(180,83,9,0.7)] md:hidden"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      WhatsApp
    </a>
  );
}

