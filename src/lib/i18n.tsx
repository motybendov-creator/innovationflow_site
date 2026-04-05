import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ro";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.about": { en: "About", ro: "Despre Noi" },
  "nav.services": { en: "Services", ro: "Servicii" },
  "nav.howItWorks": { en: "How It Works", ro: "Cum Funcționează" },
  "nav.contact": { en: "Contact", ro: "Contact" },

  // Hero
  "hero.title": { en: "Your Bridge to the Romanian & European Market", ro: "Podul Tău către Piața Românească și Europeană" },
  "hero.subtitle": {
    en: "We connect Israeli technology companies with Romanian market opportunities, EU grants, and strategic partnerships.",
    ro: "Conectăm companiile tehnologice israeliene cu oportunități pe piața românească, granturi UE și parteneriate strategice.",
  },
  "hero.scroll": { en: "Discover More", ro: "Descoperă Mai Mult" },

  // About
  "about.title": { en: "Who We Are", ro: "Cine Suntem" },
  "about.description": {
    en: "InnovationFlow ISRO is your strategic partner for entering the Romanian and European market. We combine deep local knowledge with Israeli innovation DNA to create real business results.",
    ro: "InnovationFlow ISRO este partenerul tău strategic pentru intrarea pe piața românească și europeană. Combinăm cunoștințele locale profunde cu ADN-ul inovației israeliene pentru a crea rezultate reale de afaceri.",
  },
  "about.israeli.title": { en: "For Israeli Tech Companies", ro: "Pentru Companii Tech Israeliene" },
  "about.israeli.desc": {
    en: "We bring your technology to Romania & the EU. From market analysis to first meetings — we handle it all.",
    ro: "Aducem tehnologia ta în România și UE. De la analiză de piață la primele întâlniri — ne ocupăm de tot.",
  },
  "about.romanian.title": { en: "For Romanian Partners", ro: "Pentru Parteneri Români" },
  "about.romanian.desc": {
    en: "Access cutting-edge Israeli innovation. We match you with proven technologies tailored to your market needs.",
    ro: "Accesează inovația israeliană de vârf. Te conectăm cu tehnologii dovedite, adaptate nevoilor pieței tale.",
  },

  // Services
  "services.title": { en: "What We Do", ro: "Ce Facem" },
  "services.subtitle": { en: "End-to-end market entry services", ro: "Servicii complete de intrare pe piață" },
  "s1.title": { en: "Market Entry & Strategy", ro: "Intrare pe Piață & Strategie" },
  "s1.desc": { en: "Deep market analysis, competitive mapping, regulatory navigation, and tailored go-to-market strategies.", ro: "Analiză de piață profundă, mapare competitivă, navigare regulamentară și strategii personalizate de intrare pe piață." },
  "s2.title": { en: "EU Grants & Funding", ro: "Granturi UE & Finanțare" },
  "s2.desc": { en: "Grant identification, proposal writing, consortium building, and EU program navigation.", ro: "Identificare granturi, scriere propuneri, construire consorții și navigare programe UE." },
  "s3.title": { en: "Business Development", ro: "Dezvoltare de Afaceri" },
  "s3.desc": { en: "Pipeline building, tender management, C-level introductions, and local sales enablement.", ro: "Construire pipeline, gestionare licitații, introduceri la nivel C-suite și activare vânzări locale." },
  "s4.title": { en: "Marketing & Localization", ro: "Marketing & Localizare" },
  "s4.desc": { en: "Translation, trade shows, local branding, PR, and digital marketing campaigns.", ro: "Traduceri, târguri comerciale, branding local, PR și campanii de marketing digital." },
  "s5.title": { en: "Deployment & Pilots", ro: "Implementare & Piloturi" },
  "s5.desc": { en: "Beta sites, logistics coordination, technical support, and deployment management.", ro: "Site-uri beta, coordonare logistică, suport tehnic și management implementare." },
  "s6.title": { en: "Soft Landing Services", ro: "Servicii Soft Landing" },
  "s6.desc": { en: "Legal infrastructure, HR recruitment, office hosting, and complete operational setup.", ro: "Infrastructură juridică, recrutare HR, găzduire birou și configurare operațională completă." },

  // Timeline
  "timeline.title": { en: "How It Works", ro: "Cum Funcționează" },
  "timeline.subtitle": { en: "Your 90-day roadmap to the Romanian market", ro: "Foaia ta de parcurs de 90 de zile către piața românească" },
  "t1.title": { en: "Kickoff", ro: "Lansare" },
  "t1.weeks": { en: "Weeks 1-3", ro: "Săptămânile 1-3" },
  "t1.desc": { en: "Agreement signing, materials transfer, deep market research and competitive analysis.", ro: "Semnarea acordului, transfer materiale, cercetare de piață profundă și analiză competitivă." },
  "t2.title": { en: "Localization", ro: "Localizare" },
  "t2.weeks": { en: "Weeks 4-8", ro: "Săptămânile 4-8" },
  "t2.desc": { en: "Translate & adapt materials, initial client outreach, build local partnerships.", ro: "Traducere și adaptare materiale, primele contacte cu clienții, construire parteneriate locale." },
  "t3.title": { en: "First Meetings", ro: "Primele Întâlniri" },
  "t3.weeks": { en: "Weeks 9-12", ro: "Săptămânile 9-12" },
  "t3.desc": { en: "Schedule meetings in Romania, product demos, proposals, and pilot negotiations.", ro: "Programare întâlniri în România, demo-uri de produs, propuneri și negocieri pilot." },

  // Differentiators
  "diff.title": { en: "Why InnovationFlow", ro: "De Ce InnovationFlow" },
  "d1.title": { en: "Equal Partnership", ro: "Parteneriat Egal" },
  "d1.desc": { en: "We work as an extension of your team — true synergy, not just a service provider.", ro: "Lucrăm ca o extensie a echipei tale — sinergie reală, nu doar un furnizor de servicii." },
  "d2.title": { en: "Success-Based Model", ro: "Model Bazat pe Succes" },
  "d2.desc": { en: "Our compensation is tied to your results. We succeed only when you succeed.", ro: "Compensarea noastră este legată de rezultatele tale. Reușim doar când reușești." },
  "d3.title": { en: "Execution Power", ro: "Putere de Execuție" },
  "d3.desc": { en: "We navigate Romanian bureaucracy so you don't have to. Real results, not just advice.", ro: "Navigăm birocrația românească pentru ca tu să nu trebuiască. Rezultate reale, nu doar sfaturi." },
  "d4.title": { en: "Cross-Domain Flexibility", ro: "Flexibilitate Multi-Domeniu" },
  "d4.desc": { en: "Water tech, healthcare, IT, agriculture — we adapt to your industry and technology.", ro: "Tehnologia apei, sănătate, IT, agricultură — ne adaptăm industriei și tehnologiei tale." },

  // Contact
  "contact.title": { en: "Let's Talk", ro: "Hai Să Vorbim" },
  "contact.subtitle": { en: "Ready to enter the Romanian market? Let's start the conversation.", ro: "Gata să intri pe piața românească? Hai să începem conversația." },
  "contact.name": { en: "Your Name", ro: "Numele Tău" },
  "contact.email": { en: "Email Address", ro: "Adresă de Email" },
  "contact.company": { en: "Company Name", ro: "Numele Companiei" },
  "contact.message": { en: "Your Message", ro: "Mesajul Tău" },
  "contact.send": { en: "Send Message", ro: "Trimite Mesajul" },
  "contact.success.title": { en: "Thank You!", ro: "Mulțumim!" },
  "contact.success.desc": { en: "Your request has been received. We will connect with you soon.", ro: "Cererea dvs. a fost primită. Vă vom contacta în curând." },

  // Footer
  "footer.rights": { en: "All rights reserved.", ro: "Toate drepturile rezervate." },
  "footer.tagline": { en: "Bridging Israeli Innovation with European Markets", ro: "Conectăm Inovația Israeliană cu Piețele Europene" },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[key]?.[lang] ?? key;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
