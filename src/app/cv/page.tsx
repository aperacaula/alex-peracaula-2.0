"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import CvEntry from "@/components/cv/CvEntry";
import { useLanguage } from "@/context/LanguageContext";
import { castingData, cvEntries, CV_CATEGORIES } from "@/data/cv";
import { siteContent } from "@/data/content";

// ─── Casting info block ───────────────────────────────────────────────────────

function CastingBlock() {
  const { lang } = useLanguage();

  const stats = [
    {
      label: { en: "Height", es: "Altura", ca: "Alçada" },
      value: castingData.height,
    },
    {
      label: { en: "Hair", es: "Pelo", ca: "Cabell" },
      value: castingData.hair[lang],
    },
    {
      label: { en: "Eyes", es: "Ojos", ca: "Ulls" },
      value: castingData.eyes[lang],
    },
    {
      label: { en: "Pants", es: "Pantalón", ca: "Pantalons" },
      value: castingData.sizes.trousers,
    },
    {
      label: { en: "Shirt", es: "Camisa", ca: "Camisa" },
      value: castingData.sizes.shirt,
    },
    {
      label: { en: "Shoes", es: "Zapato", ca: "Sabata" },
      value: castingData.sizes.shoes,
    },
  ];

  const labels = {
    languages: { en: "Languages", es: "Idiomas", ca: "Idiomes" },
    skills: { en: "Skills", es: "Habilidades", ca: "Habilitats" },
  };

  return (
    <FadeIn>
      <div className="border-b border-border pb-12 mb-16">
        {/* Physical stats */}
        <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10">
          {stats.map(({ label, value }) => (
            <div key={label.en} className="flex flex-col gap-1">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted">
                {label[lang]}
              </span>
              <span className="font-sans text-base text-text">{value}</span>
            </div>
          ))}
        </div>

        {/* Languages + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted block mb-2">
              {labels.languages[lang]}
            </span>
            <p className="font-sans text-sm text-text leading-relaxed">
              {castingData.languages[lang]}
            </p>
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted block mb-2">
              {labels.skills[lang]}
            </span>
            <p className="font-sans text-sm text-text leading-relaxed">
              {castingData.skills[lang]}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── Column heading ───────────────────────────────────────────────────────────

function ColHeading({ label }: { label: string }) {
  return (
    <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted mb-6 pb-4 border-b border-border">
      {label}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CvPage() {
  const { lang } = useLanguage();

  const filmLabel =
    CV_CATEGORIES.find((c) => c.key === "film")!.label[lang] + " & TV";
  const theaterLabel = CV_CATEGORIES.find((c) => c.key === "theater")!.label[
    lang
  ];
  const trainingLabel = CV_CATEGORIES.find((c) => c.key === "training")!.label[
    lang
  ];

  const filmEntries = cvEntries.filter(
    (e) => e.category === "film" || e.category === "tv",
  );
  const theaterEntries = cvEntries.filter((e) => e.category === "theater");
  const trainingEntries = cvEntries.filter((e) => e.category === "training");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-10">
        {/* Page title */}
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-16"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.cv[lang]}
          </h1>
        </FadeIn>

        {/* Casting block */}
        <CastingBlock />

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          <FadeIn delay={0} className="flex flex-col">
            <ColHeading label={filmLabel} />
            {filmEntries.map((e) => (
              <CvEntry key={e.id} entry={e} lang={lang} />
            ))}
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col">
            <ColHeading label={theaterLabel} />
            {theaterEntries.map((e) => (
              <CvEntry key={e.id} entry={e} lang={lang} />
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col">
            <ColHeading label={trainingLabel} />
            {trainingEntries.map((e) => (
              <CvEntry key={e.id} entry={e} lang={lang} />
            ))}
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
