"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, siteContent } from "@/data/content";

// ─── Labels ───────────────────────────────────────────────────────────────────

const labels = {
  email: { en: "Email", es: "Email", ca: "Correu" },
  phone: { en: "Phone", es: "Teléfono", ca: "Telèfon" },
  agent: { en: "Agent", es: "Agente", ca: "Agent" },
  representation: {
    en: "Representation",
    es: "Representación",
    ca: "Representació",
  },
  intro: {
    en: "Available for castings, screen tests, and professional inquiries.",
    es: "Disponible para castings, pruebas de cámara y consultas profesionales.",
    ca: "Disponible per a càstings, proves de càmera i consultes professionals.",
  },
};

// ─── Contact row ─────────────────────────────────────────────────────────────

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-5 border-b border-border">
      <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted w-32 shrink-0">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="font-sans text-base text-text hover:text-muted transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-sans text-base text-text">{value}</span>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 sm:px-8 py-20 sm:py-10">
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.contact[lang]}
          </h1>

          <p className="font-sans text-sm text-muted mb-16 leading-relaxed">
            {labels.intro[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border-t border-border">
            <ContactRow
              label={labels.email[lang]}
              value={personalInfo.contact.email}
              href={`mailto:${personalInfo.contact.email}`}
            />

            {personalInfo.contact.phone && (
              <ContactRow
                label={labels.phone[lang]}
                value={personalInfo.contact.phone}
                href={`tel:${personalInfo.contact.phone.replace(/[^+\d]/g, "")}`}
              />
            )}

            {personalInfo.contact.agent && (
              <ContactRow
                label={labels.representation[lang]}
                value={`${personalInfo.contact.agent} (${labels.agent[lang]})`}
              />
            )}
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
