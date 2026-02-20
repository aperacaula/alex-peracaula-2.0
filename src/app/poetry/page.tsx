"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { poems } from "@/data/poetry";
import { siteContent } from "@/data/content";

export default function PoetryPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-10">
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-16 flex items-center gap-3"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.poetry[lang]}
            <span className="text-muted" style={{ fontSize: "0.4em" }}>
              ©
            </span>
          </h1>
        </FadeIn>

        {/* Grid: 1 col on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {poems.map((poem, index) => (
            <FadeIn key={poem.id} delay={index * 0.04} threshold={0.05}>
              <article className="flex flex-col">
                {/* Title */}
                <h2 className="font-serif font-light text-text text-3xl mb-4">
                  {poem.title[lang]}
                </h2>

                {/* Body — preserve line breaks */}
                <div className="space-y-0">
                  {poem.body[lang].split("\n").map((line, lineIndex) =>
                    line === "" ? (
                      // Blank line = stanza break
                      <div key={lineIndex} className="h-4" />
                    ) : (
                      <p
                        key={lineIndex}
                        className="font-serif text-xl text-muted leading-relaxed"
                        style={{ fontStyle: "italic" }}
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
