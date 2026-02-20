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
  en: `Àlex Peracaula Ruiz is a Catalan actor based in Madrid, trained in theater, film, and television. He studied at Nancy Tuñón School and Laura Jou Studio, and since then has worked on numerous projects, primarily in television and theater.

On screen, his credits include feature films and television series for TV3, RTVE, and Amazon MGM productions. In theater, he has participated in numerous productions since childhood with various companies, and recently has also written and directed two plays, premiered at La Escalera de Jacob and Teatro Lara.
He is currently part of his own theater company AlfaRed-PapaCharlie alongside his fellow actor and friend Carlos Alcaide.
He speaks Catalan, Spanish, English, and Portuguese fluently, and is currently represented by Alsira García-Maroto.`,
  es: `Àlex Peracaula Ruiz es un actor catalán con base en Madrid, formado en teatro, cine y televisión. Estudió en el la Escuela Nancy Tuñón y en el Estudio Laura Jou y desde entonces ha encadenado varios trabajos sobretodo en televisión y teatro.

En pantalla, sus créditos incluyen largometrajes y series de televisión para producciones de Tv3, RTVE o Amazon MGM. En teatro, ha participado en numerosos montajes desde pequeño en varias compañías y recientemente también ha firmado dos obras, estrenadas en La Escalera de Jacob y el Teatro Lara.
Actualmente forma parte de su propia compañía de teatro AlfaRed-PapaCharlie junto con su compañero actor y amigo Carlos Alcaide.
Habla catalán, español, inglés y portugués con fluidez, y actualmente está representado por Alsira García-Maroto.`,
  ca: `Àlex Peracaula Ruiz és un actor català amb base a Madrid, format en teatre, cinema i televisió. Va estudiar a l'Escola Nancy Tuñón i a l'Estudi Laura Jou i des de llavors ha encadenat diversos treballs sobretot en televisió i teatre.

En pantalla, els seus crèdits inclouen llargmetratges i sèries de televisió per a produccions de TV3, RTVE o Amazon MGM. En teatre, ha participat en nombrosos muntatges des de petit en diverses companyies i recentment també ha signat dues obres, estrenades a La Escalera de Jacob i el Teatro Lara.
Actualment forma part de la seva pròpia companyia de teatre AlfaRed-PapaCharlie al costat del seu company actor i amic Carlos Alcaide.
Parla català, castellà, anglès i portuguès amb fluïdesa, i actualment està representat per Alsira García-Maroto.`,
};

// Pick portrait photo (not headshot-1, which is the hero)
const portraitPhoto = photos.find((p) => p.id === "portrait-1") ?? photos[0];

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
