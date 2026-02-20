"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import PhotoCard from "@/components/gallery/PhotoCard";
import { useLanguage } from "@/context/LanguageContext";
import { photos } from "@/data/portfolio";
import { siteContent } from "@/data/content";
import type { PhotoItem } from "@/types";

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  photo: PhotoItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const { lang } = useLanguage();

  // Close on backdrop click
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  // Keyboard navigation
  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasPrev) onPrev();
    if (e.key === "ArrowRight" && hasNext) onNext();
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      tabIndex={0}
      role="dialog"
      aria-modal
      aria-label={photo.alt[lang]}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-muted hover:text-text font-sans text-sm tracking-widest uppercase transition-colors cursor-pointer"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted hover:text-text font-sans text-2xl leading-none transition-colors cursor-pointer px-3 py-2"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <motion.div
        key={photo.id}
        className="relative max-w-[90vw] max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={photo.src}
          alt={photo.alt[lang]}
          width={1200}
          height={1600}
          className="max-w-[90vw] max-h-[90vh] object-contain"
          priority
        />
      </motion.div>

      {/* Next */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-text font-sans text-2xl leading-none transition-colors cursor-pointer px-3 py-2"
          aria-label="Next photo"
        >
          ›
        </button>
      )}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function openPhoto(index: number) {
    setActiveIndex(index);
  }
  function closePhoto() {
    setActiveIndex(null);
  }
  function prevPhoto() {
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }
  function nextPhoto() {
    setActiveIndex((i) =>
      i !== null && i < photos.length - 1 ? i + 1 : i,
    );
  }

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
            {siteContent.gallery[lang]}
          </h1>
        </FadeIn>

        {/* Masonry-style grid: 2 cols on mobile, 3 on desktop */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <FadeIn
              key={photo.id}
              delay={Math.min(index * 0.02, 0.3)}
              threshold={0.05}
              className="break-inside-avoid"
            >
              <PhotoCard
                photo={photo}
                lang={lang}
                onClick={() => openPhoto(index)}
                priority={index < 6}
              />
            </FadeIn>
          ))}
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            photo={photos[activeIndex]}
            onClose={closePhoto}
            onPrev={prevPhoto}
            onNext={nextPhoto}
            hasPrev={activeIndex > 0}
            hasNext={activeIndex < photos.length - 1}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
