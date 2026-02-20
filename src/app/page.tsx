"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import PhotoCard from "@/components/gallery/PhotoCard";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, siteContent } from "@/data/content";
import { photos } from "@/data/portfolio";

export default function Home() {
  const { lang } = useLanguage();
  const featuredPhotos = photos.filter((p) => p.featured);

  return (
    <div className="bg-background">
      {/* ── Hero — full-screen headshot ──────────────────────────────────── */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Headshot fills the screen */}
        <Image
          src={personalInfo.headshot}
          alt={personalInfo.name[lang]}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "0 35%" }}
        />

        {/* Dark gradient from bottom so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Sticky header sits on top */}
        <div className="absolute inset-x-0 top-0 z-50">
          <Header />
        </div>

        {/* Name + tagline anchored to bottom-left */}
        <div className="absolute bottom-0 left-0 px-8 sm:px-12 pb-12 sm:pb-16">
          <FadeIn delay={0.2}>
            <h1
              className="font-serif font-light text-white leading-none"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Àlex Peracaula
            </h1>
            <p className="mt-3 font-sans text-white/60 tracking-[0.25em] text-xs sm:text-sm uppercase">
              {personalInfo.bio[lang]}
            </p>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-5 right-1 flex-col items-center gap-2 text-white/40">
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-sans text-[8px] tracking-[0.2em] rotate-90 uppercase origin-center translate-x-3 hover:translate-x-2 cursor-pointer"
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-8 translate-x--2 bg-white/20"
          />
        </div>
      </section>

      <main>
        {/* ── Reel ───────────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 py-24 sm:py-24">
          <FadeIn>
            <p className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase mb-8">
              Reel
            </p>
            <VideoEmbed
              url="https://vimeo.com/442985312"
              title="Àlex Peracaula — Acting Reel"
            />
          </FadeIn>
        </section>

        {/* ── Featured photos ─────────────────────────────────────────────── */}
        {featuredPhotos.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-32">
            <FadeIn>
              <div className="mb-4">
                <a
                  href="/gallery"
                  className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase"
                >
                  {siteContent.gallery[lang]}
                </a>
              </div>
            </FadeIn>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
              {featuredPhotos.slice(0, 3).map((photo, i) => (
                <FadeIn
                  key={photo.id}
                  delay={i * 0.1}
                  className="mb-3 break-inside-avoid"
                >
                  <PhotoCard photo={photo} lang={lang} />
                </FadeIn>
              ))}
            </div>
            {/* Scroll cue — only visible on md+ screens, animated */}
            <div className="flex flex-col items-center gap-2 text-white/40 mt-2">
              <motion.a
                href="/gallery"
                className="font-sans text-[8px] tracking-[0.2em] uppercase cursor-pointer"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {siteContent.seeMore[lang]}
              </motion.a>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
