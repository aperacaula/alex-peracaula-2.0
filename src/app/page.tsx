"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import PhotoCard from "@/components/gallery/PhotoCard";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/content";
import { photos } from "@/data/portfolio";

export default function Home() {
  const { lang } = useLanguage();
  const featuredPhotos = photos.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-widest text-text uppercase">
              Àlex Peracaula
            </h1>
            <p className="mt-4 text-muted tracking-widest text-sm uppercase">
              {personalInfo.bio[lang]}
            </p>
          </FadeIn>
        </section>

        {/* ── Reel ─────────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <FadeIn>
            <VideoEmbed
              url="https://vimeo.com/442985312?fl=pl&fe=vl"
              title="Àlex Peracaula — Acting Reel"
              autoplay={false}
            />
          </FadeIn>
        </section>

        {/* ── Featured photos ───────────────────────────────────────────────── */}
        {featuredPhotos.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {featuredPhotos.map((photo, i) => (
                <FadeIn
                  key={photo.id}
                  delay={i * 0.08}
                  className="break-inside-avoid"
                >
                  <PhotoCard photo={photo} lang={lang} />
                </FadeIn>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
