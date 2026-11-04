import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { CONTACTS, SITE } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const TITLE = "Luvizon | Arquitetura e Engenharia Integrada em Videira e Itajaí";
const DESCRIPTION =
  "Projetos residenciais, comerciais e hospitalares com a Arquiteta Thana e fiscalização de obras com o Engenheiro Diego. Sem retrabalho, sem desperdício. Videira • Itajaí | SC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "arquitetura Videira",
    "engenharia Videira",
    "arquiteta Itajaí",
    "projeto de interiores",
    "fiscalização de obras",
    "projeto hospitalar",
    "preventivo de incêndio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/hero.jpg", width: 1024, height: 572, alt: "Residência contemporânea projetada pela Luvizon" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/hero.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: "Luvizon Arquiteta e Engenheiro",
  alternateName: "Luvizon Arquitetura & Engenharia",
  url: SITE.url,
  image: `${SITE.url}/images/hero.jpg`,
  description: DESCRIPTION,
  telephone: ["+554998408695", "+554935664969"],
  email: [CONTACTS.thana.email, CONTACTS.diego.email],
  taxID: SITE.cnpj,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua 19 de Setembro, 618",
    addressLocality: "Videira",
    addressRegion: "SC",
    addressCountry: "BR",
    postalCode: "89560-005",
    areaServed: "Floresta",
  },
  areaServed: [
    { "@type": "City", name: "Videira" },
    { "@type": "City", name: "Itajaí" },
  ],
  hasMap: SITE.maps,
  sameAs: [SITE.instagram.url],
  openingHours: "Mo-Fr 08:30-17:30",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        {/* Granulação cinematográfica */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] opacity-[0.025]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>
      </body>
    </html>
  );
}
