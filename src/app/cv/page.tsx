"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import CvEntry from "@/components/cv/CvEntry";
import { useLanguage } from "@/context/LanguageContext";
import { castingData, cvEntries, CV_CATEGORIES } from "@/data/cv";
import { siteContent } from "@/data/content";
import { generateCvHtml } from "@/lib/generateCvHtml";

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-10">
        {/* Page title + download button */}
        <FadeIn>
          <div className="relative flex items-end justify-between mb-16 gap-4">
            <h1
              className="font-serif font-light text-text"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.01em",
              }}
            >
              {siteContent.cv[lang]}
            </h1>
            <button
              onClick={() => {
                const html = generateCvHtml(lang);
                const win = window.open("", "_blank");
                if (win) {
                  win.document.write(html);
                  win.document.close();
                }
              }}
              className="absolute top-10 right-0 shrink-0 flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-muted hover:text-text border border-border hover:border-text/40 px-4 py-2 transition-colors duration-200 mb-2 cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              {siteContent.download[lang]}
            </button>
          </div>
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
