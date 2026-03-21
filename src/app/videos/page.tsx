"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { useLanguage } from "@/context/LanguageContext";
import { videoTabs } from "@/data/videos";
import { siteContent } from "@/data/content";

export default function VideosPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("showreel");

  const currentTab = videoTabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-10">

        {/* Page heading */}
        <FadeIn>
          <h1
            className="font-serif font-light text-text mb-12"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteContent.videos[lang]}
          </h1>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay={0.1}>
          <div className="flex items-end justify-between md:justify-start md:gap-6 border-b border-border mb-12">
            {videoTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-3 font-sans text-[11px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-200 -mb-px cursor-pointer ${
                    isActive ? "text-text" : "text-muted hover:text-text/70"
                  }`}
                >
                  {tab.label[lang]}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-text"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Tab content — only renders active tab for performance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentTab.layout === "hero" ? (
              /* ── Hero: single centred player ─────────────────────────── */
              <div className="max-w-4xl mx-auto">
                <VideoEmbed
                  url={currentTab.videos[0].url}
                  title={currentTab.videos[0].title?.[lang] ?? currentTab.label[lang]}
                />
              </div>
            ) : (
              /* ── Grid: labelled or unlabelled ────────────────────────── */
              <div
                className={
                  currentTab.id === "parody"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    : "grid grid-cols-1 sm:grid-cols-2 gap-8"
                }
              >
                {currentTab.videos.map((video, index) => (
                  <FadeIn
                    key={video.id}
                    delay={Math.min(index * 0.06, 0.3)}
                    threshold={0.05}
                  >
                    <div className="flex flex-col gap-2.5">
                      {video.title && (
                        <p className="font-sans text-[10px] tracking-[0.16em] uppercase text-muted">
                          {video.title[lang]}
                        </p>
                      )}
                      <VideoEmbed
                        url={video.url}
                        title={video.title?.[lang] ?? currentTab.label[lang]}
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
