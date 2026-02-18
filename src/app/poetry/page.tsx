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

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 sm:px-8 py-20 sm:py-10">
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-20"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.poetry[lang]}
          </h1>
        </FadeIn>

        <div className="space-y-24">
          {poems.map((poem, index) => (
            <FadeIn key={poem.id} delay={index * 0.08} threshold={0.1}>
              <article>
                {/* Year */}
                {poem.year && (
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
                    {poem.year}
                  </p>
                )}

                {/* Title */}
                <h2
                  className="font-serif font-light text-text mb-8"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {poem.title[lang]}
                </h2>

                {/* Body — preserve line breaks */}
                <div className="space-y-0">
                  {poem.body[lang].split("\n").map((line, lineIndex) =>
                    line === "" ? (
                      // Blank line = stanza break
                      <div key={lineIndex} className="h-6" />
                    ) : (
                      <p
                        key={lineIndex}
                        className="font-serif text-lg text-muted leading-relaxed"
                        style={{ fontStyle: "italic" }}
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </article>

              {/* Divider between poems */}
              {index < poems.length - 1 && (
                <div className="mt-24 border-t border-border" />
              )}
            </FadeIn>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
