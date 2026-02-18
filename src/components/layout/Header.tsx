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
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-semibold tracking-wide text-text">
              Àlex Peracaula Ruiz
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {siteContent[key][lang]}
              </Link>
            ))}

            {/* Language selector */}
            <div className="flex items-center gap-1 ml-2 border-l border-border pl-4">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    lang === code
                      ? "bg-accent text-accent-fg font-medium"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    lang === code
                      ? "bg-accent text-accent-fg font-medium"
                      : "text-muted hover:text-text"
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
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-2">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm text-muted hover:text-text transition-colors"
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
