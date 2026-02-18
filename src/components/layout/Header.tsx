"use client";

import Link from "next/link";
import { useState } from "react";
import { LANGUAGES, useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/content";

const NAV_LINKS = [
  { href: "/gallery", key: "gallery" },
  { href: "/cv",      key: "cv"      },
  { href: "/poetry",  key: "poetry"  },
  { href: "/about",   key: "about"   },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const { lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-surface/80 backdrop-blur-sm border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14">

          {/* Logo — serif for brand identity */}
          <Link
            href="/"
            className="font-serif text-xl font-light italic text-text tracking-wide"
          >
            Àlex Peracaula Ruiz
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted hover:text-text transition-colors duration-200"
              >
                {siteContent[key][lang]}
              </Link>
            ))}

            {/* Language selector */}
            <div className="flex items-center gap-0.5 ml-4 border-l border-border pl-5">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-1.5 py-0.5 font-sans text-[10px] tracking-widest transition-colors duration-200 ${
                    lang === code
                      ? "text-text"
                      : "text-muted/50 hover:text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-1.5 py-0.5 font-sans text-[10px] tracking-widest transition-colors ${
                    lang === code ? "text-text" : "text-muted/50 hover:text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-muted hover:text-text transition-colors"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2.5 font-sans text-[11px] tracking-[0.18em] uppercase text-muted hover:text-text transition-colors"
              >
                {siteContent[key][lang]}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
