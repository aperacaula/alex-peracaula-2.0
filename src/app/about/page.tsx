"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, siteContent } from "@/data/content";
import { photos } from "@/data/portfolio";

// ─── Long-form bio translations ───────────────────────────────────────────────

const longBio = {
  en: `Àlex Peracaula Ruiz is a professional actor based in Barcelona, trained across theater, film, and television. He studied at the Institut del Teatre de Barcelona (Superior Diploma in Scenic Arts) and has since worked with some of Spain's most prominent directors and production companies.

On screen, his credits include feature films and television series for major broadcasters. On stage, he has performed leading and supporting roles in classical and contemporary works at venues including the Teatre Nacional de Catalunya and the Teatre Romea.

He is fluent in Catalan, Spanish, and English, and is represented by agent Alsira García-Maroto.`,
  es: `Àlex Peracaula Ruiz es un actor profesional con base en Barcelona, formado en teatro, cine y televisión. Estudió en el Institut del Teatre de Barcelona (Diploma Superior en Artes Escénicas) y desde entonces ha trabajado con algunos de los directores y productoras más destacados de España.

En pantalla, sus créditos incluyen largometrajes y series de televisión para importantes cadenas. En el escenario, ha interpretado papeles protagonistas y secundarios en obras clásicas y contemporáneas en salas como el Teatre Nacional de Catalunya y el Teatre Romea.

Habla catalán, español e inglés con fluidez, y está representado por la agente Alsira García-Maroto.`,
  ca: `Àlex Peracaula Ruiz és un actor professional amb base a Barcelona, format en teatre, cinema i televisió. Va estudiar a l'Institut del Teatre de Barcelona (Diploma Superior en Arts Escèniques) i des de llavors ha treballat amb alguns dels directors i productores més destacats d'Espanya.

En pantalla, els seus crèdits inclouen llargmetratges i sèries de televisió per a grans emissores. Damunt l'escenari, ha interpretat papers protagonistes i secundaris en obres clàssiques i contemporànies en sales com el Teatre Nacional de Catalunya i el Teatre Romea.

Parla català, castellà i anglès amb fluïdesa, i el representa l'agent Alsira García-Maroto.`,
};

// Pick portrait photo (not headshot-1, which is the hero)
const portraitPhoto =
  photos.find((p) => p.id === "portrait-1") ?? photos[0];

export default function AboutPage() {
  const { lang } = useLanguage();
  const paragraphs = longBio[lang].split("\n\n");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-10">
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-16"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.about[lang]}
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Portrait */}
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-surface">
              <Image
                src={portraitPhoto.src}
                alt={portraitPhoto.alt[lang]}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio text */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center h-full">
              {/* Name */}
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
                {personalInfo.name[lang]}
              </p>

              {/* Paragraphs */}
              <div className="space-y-6">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans text-base text-text leading-relaxed"
                    style={{ color: i === 0 ? "var(--text)" : "var(--muted)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Contact line */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-sans text-sm text-muted">
                  {personalInfo.contact.email}
                </p>
                {personalInfo.contact.phone && (
                  <p className="font-sans text-sm text-muted mt-1">
                    {personalInfo.contact.phone}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
