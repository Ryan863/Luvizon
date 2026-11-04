import {
  Building2,
  Armchair,
  Stethoscope,
  HardHat,
  Compass,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Dados centrais do site — editar aqui para manter tudo sincronizado */
/* ------------------------------------------------------------------ */

export type Owner = "thana" | "diego";

export interface Contact {
  readonly name: string;
  readonly role: string;
  readonly whatsapp: string;
  readonly phoneHref: string;
  readonly phoneLabel: string;
  readonly email: string;
}

export const SITE = {
  name: "Luvizon Arquiteta e Engenheiro",
  brand: "LUVIZON",
  tagline: "ARQUITETURA & ENGENHARIA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luvizon.eng.br",
  cnpj: "64.707.116/0001-48",
  instagram: { handle: "@luvizon.arqeng", url: "https://www.instagram.com/luvizon.arqeng" },
  maps: "https://maps.app.goo.gl/noRMDTRSPJbP71Tg7",
  waze: "https://waze.com/ul?q=R.%2019%20de%20Setembro%2C%20618%20Floresta%20Videira%20SC",
  address: {
    street: "R. 19 de Setembro, 618",
    district: "Floresta",
    city: "Videira",
    state: "SC",
    zip: "89560-005",
  },
  hours: "Segunda a Sexta: 08:30 às 17:30",
  hoursClosed: "Sábados e Domingos: Fechado",
} as const;

export const CONTACTS: Record<Owner, Contact> = {
  thana: {
    name: "Thana",
    role: "Arquiteta",
    whatsapp:
      "https://wa.me/554998408695?text=Ol%C3%A1+Thana%2C+visitei+o+site+da+Luvizon+e+gostaria+de+conversar+sobre+um+projeto+de+arquitetura%2Finteriores.",
    phoneHref: "tel:+554998408695",
    phoneLabel: "(49) 9840-8695",
    email: "Thana@luvizon.eng.br",
  },
  diego: {
    name: "Diego",
    role: "Engenheiro",
    whatsapp:
      "https://wa.me/554935664969?text=Ol%C3%A1+Diego%2C+visitei+o+site+da+Luvizon+e+gostaria+de+alinhar+a+gest%C3%A3o%2Ffiscaliza%C3%A7%C3%A3o+de+uma+obra.",
    phoneHref: "tel:+554935664969",
    phoneLabel: "(49) 3566-4969",
    email: "contato@luvizon.eng.br",
  },
};

export interface NavItem {
  readonly href: string;
  readonly label: string;
}

export const NAV: readonly NavItem[] = [
  { href: "#sinergia", label: "Sinergia" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export const CREDIBILITY: readonly string[] = [
  "5.0 no Google (Avaliações Verificadas)",
  "Videira & Litoral (Itajaí)",
  "Projetos & Gestão de Obra Integrados",
];

export interface SynergyPoint {
  readonly index: string;
  readonly title: string;
  readonly text: string;
}

export const SYNERGY: readonly SynergyPoint[] = [
  {
    index: "01",
    title: "Projeto desenhado para ser construído",
    text: "A Thana desenha já conversando com o Diego sobre estrutura, instalações e custo. O que aparece no 3D é o que cabe na obra, sem cortes de última hora.",
  },
  {
    index: "02",
    title: "Menos desperdício de material",
    text: "Compatibilização antes do canteiro: cada pilar, shaft e esquadria é resolvido no papel. O retrabalho que custaria tijolo, tempo e dinheiro deixa de existir.",
  },
  {
    index: "03",
    title: "Fidelidade entre a imagem e a obra",
    text: "Quem projetou acompanha a execução. Cada acabamento, nível e detalhe de marcenaria é conferido contra o projeto, e não interpretado por terceiros.",
  },
];

export interface Service {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly text: string;
  readonly owner: Owner;
  readonly tag: string;
  readonly span: string;
  readonly tone: "light" | "dark" | "image";
}

export const SERVICES: readonly Service[] = [
  {
    id: "residencial-comercial",
    icon: Building2,
    title: "Projetos Residenciais & Comerciais",
    text: "Concepção estética, plantas completas e volumetria 3D realista. Você aprova o anteprojeto vendo exatamente como a casa ou a loja vai ficar.",
    owner: "thana",
    tag: "Arquitetura",
    span: "lg:col-span-4",
    tone: "image",
  },
  {
    id: "interiores-paisagismo",
    icon: Armchair,
    title: "Interiores & Paisagismo",
    text: "Layout funcional, marcenaria sob medida, iluminação e aproveitamento inteligente de cada metro quadrado.",
    owner: "thana",
    tag: "Interiores",
    span: "lg:col-span-2",
    tone: "light",
  },
  {
    id: "hospitalar-preventivo",
    icon: Stethoscope,
    title: "Hospitalares & Preventivo de Incêndio",
    text: "Rigor técnico diante das normas sanitárias, de acessibilidade e do Corpo de Bombeiros, do projeto à aprovação.",
    owner: "thana",
    tag: "Projetos técnicos",
    span: "lg:col-span-2",
    tone: "light",
  },
  {
    id: "fiscalizacao-obras",
    icon: HardHat,
    title: "Fiscalização & Coordenação de Obras",
    text: "Presença no canteiro, gestão de materiais, cronograma e compatibilização estrutural, conduzidos pelo Engenheiro Diego.",
    owner: "diego",
    tag: "Engenharia",
    span: "lg:col-span-2",
    tone: "dark",
  },
  {
    id: "consultoria",
    icon: Compass,
    title: "Consultoria & Assessoria Técnica",
    text: "Diagnóstico rápido para quem pretende reformar, comprar na planta ou avaliar a viabilidade de um terreno.",
    owner: "thana",
    tag: "Consultoria",
    span: "lg:col-span-2",
    tone: "light",
  },
];

export interface Profile {
  readonly owner: Owner;
  readonly initial: string;
  readonly name: string;
  readonly role: string;
  readonly headline: string;
  readonly text: string;
  readonly areas: readonly string[];
}

export const PROFILES: readonly Profile[] = [
  {
    owner: "thana",
    initial: "T",
    name: "Thana",
    role: "Arquiteta",
    headline: "Desenho que se vive, e não só se admira.",
    text: "Parte sempre da rotina de quem vai morar ou trabalhar no espaço. Luz natural, circulação e armazenamento entram antes da estética, e a estética vem naturalmente depois.",
    areas: [
      "Residencial",
      "Comercial",
      "Hospitalar",
      "Preventivo de Incêndio",
      "Interiores",
      "Paisagismo",
      "Consultoria e Assessoria",
    ],
  },
  {
    owner: "diego",
    initial: "D",
    name: "Diego",
    role: "Engenheiro",
    headline: "Segurança e custo sob controle, etapa por etapa.",
    text: "Lê o projeto como quem vai construí-lo. Confere estrutura, prazos e materiais no canteiro para que a obra entregue o que foi aprovado, no custo combinado.",
    areas: ["Fiscalização de obras", "Coordenação de obras", "Compatibilização estrutural"],
  },
];

export interface Review {
  readonly author: string;
  readonly text: string;
  readonly highlight: string;
}

export const REVIEWS: readonly Review[] = [
  {
    author: "Aline Thomé",
    highlight: "Integração entre projeto e obra",
    text: "A decisão de contratar o serviço de arquitetura e engenharia com eles foi a melhor decisão. A integração entre o projeto e a execução da obra foi perfeita, otimizando o uso de materiais, bem como a utilização do espaço da melhor forma. Equipe qualificada, pontual e muito transparente em todos os processos.",
  },
  {
    author: "Thaise Molon",
    highlight: "Interiores funcionais",
    text: "Fiquei muito satisfeita com o resultado do projeto de interiores! O apartamento ficou lindo, funcional, e com bastante espaço de armazenamento. Todo o processo foi conduzido com muito cuidado e atenção aos detalhes. O atendimento do Diego e da Thana foi impecável.",
  },
  {
    author: "Instituto Borghetti Escola de Artes Marciais",
    highlight: "Anteprojeto que acerta de primeira",
    text: "Espetacular! Profissionais incríveis, informei o que queríamos, e já no anteprojeto ficamos admirados! Entendem o que o cliente quer, percebe-se nitidamente que se preocupam em realizar da melhor forma possível o sonho do cliente!",
  },
  {
    author: "Flaviana Vanz",
    highlight: "Reforma com credibilidade",
    text: "Profissionais qualificados e de muita credibilidade! Minha reforma foi um sucesso! Super Recomendo.",
  },
];

export interface Faq {
  readonly q: string;
  readonly a: string;
}

export const FAQS: readonly Faq[] = [
  {
    q: "Por que é mais seguro contratar arquitetura e engenharia integradas?",
    a: "Porque o projeto nasce validado. Estrutura, instalações e custos são avaliados junto com o desenho, e quem projetou acompanha a execução. Isso reduz incompatibilidades, aditivos inesperados e desperdício de material, e há um único canal para resolver qualquer dúvida.",
  },
  {
    q: "Como funciona o atendimento entre as unidades de Videira e Itajaí?",
    a: "A sede fica em Videira, e atendemos também o litoral, com presença em Itajaí. O primeiro contato e as reuniões de briefing podem ser feitos por WhatsApp ou videochamada. As visitas técnicas e o acompanhamento de obra são agendados conforme o cronograma de cada cliente.",
  },
  {
    q: "Vocês fazem o acompanhamento de reformas já iniciadas ou compras de apartamentos na planta?",
    a: "Sim. Para reformas em andamento, fazemos um diagnóstico do que já foi executado e organizamos as etapas seguintes. Para apartamentos na planta, a consultoria avalia o projeto, a viabilidade de alterações e as possibilidades de layout antes de você fechar. Fale com o Diego para obras e com a Thana para projeto.",
  },
  {
    q: "Quais os documentos necessários para aprovação de projetos comerciais ou preventivos?",
    a: "Em geral: documentação do imóvel (matrícula ou escritura), dados do proprietário e do empreendimento, levantamento do local e o alvará ou habite-se existente, quando houver. Os requisitos variam conforme a prefeitura e o Corpo de Bombeiros, e confirmamos a lista exata no primeiro atendimento.",
  },
];
