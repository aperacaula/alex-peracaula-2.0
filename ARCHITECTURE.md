# Architecture Documentation

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router, `output: 'export'` | Static HTML output, no server needed, fast |
| Language | TypeScript 5, strict mode | Catch errors at write time |
| Styling | Tailwind CSS v4 | Utility classes + custom CSS token system |
| Animations | Framer Motion 12 | Scroll-triggered fade-ins, smooth transitions |
| Fonts | Geist Sans / Geist Mono (next/font) | Zero layout shift, self-hosted |
| Deployment | Netlify (static files) | Free, fast CDN, simple |

---

## Rendering Model

Static Site Generation — `output: 'export'` in `next.config.ts`.  
`npm run build` renders every page to plain HTML on the developer's machine.  
No Node.js server runs in production. Files are served from a CDN.  
`"use client"` components still ship JavaScript to the browser for interactivity (language switcher, lightbox, animations).

---

## Folder Structure

```
src/
├── app/                      # Pages (Next.js App Router)
│   ├── layout.tsx            # Root layout — fonts, LanguageProvider
│   ├── page.tsx              # / — landing page
│   ├── gallery/
│   │   └── page.tsx          # /gallery
│   ├── cv/
│   │   └── page.tsx          # /cv
│   ├── poetry/
│   │   └── page.tsx          # /poetry
│   ├── about/
│   │   └── page.tsx          # /about
│   ├── contact/
│   │   └── page.tsx          # /contact
│   └── globals.css           # Color tokens + base styles
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Nav + language selector
│   │   └── Footer.tsx
│   ├── ui/                   # Generic reusable primitives
│   │   ├── FadeIn.tsx        # Scroll-triggered fade wrapper (Framer Motion)
│   │   ├── Lightbox.tsx      # Full-screen image viewer
│   │   └── VideoEmbed.tsx    # Vimeo/YouTube embed
│   ├── gallery/
│   │   └── PhotoCard.tsx     # Single photo with caption
│   ├── cv/
│   │   └── CvEntry.tsx       # Single CV credit (title, role, director, year)
│   └── poetry/
│       └── PoemEntry.tsx     # Single poem
│
├── context/
│   └── LanguageContext.tsx   # Global language state (lang, setLang, LANGUAGES)
│
├── data/                     # All site content lives here
│   ├── content.ts            # UI strings (nav labels, section titles) — EN/ES/CA
│   ├── portfolio.ts          # Photo items
│   ├── cv.ts                 # CV credits by category
│   └── poetry.ts             # Poems
│
├── types/
│   └── index.ts              # Shared TypeScript interfaces
│
└── lib/
    └── utils.ts              # cn() helper + misc utilities
```

---

## Color System

All color decisions live in `src/app/globals.css` under `:root`.  
Tailwind utilities are generated from these tokens via `@theme inline`.  
**Never use hardcoded Tailwind color classes** (`bg-white`, `text-gray-900` etc.) in components.

```
Token          Utility              Value      Role
─────────────────────────────────────────────────────────
--background   bg-background        #0a0a0a    page background
--surface      bg-surface           #141414    cards, nav, panels
--border       border-border        #2a2a2a    dividers, outlines
--text         text-text            #ededed    primary text
--muted        text-muted           #888888    captions, labels, secondary
--accent       bg-accent            #ededed    active buttons, highlights
--accent-fg    text-accent-fg       #0a0a0a    text on top of accent
```

To retheme the entire site: change values in `:root` only.

---

## Language System

- Three languages: Catalan (`ca`), Spanish (`es`), English (`en`)
- Default: Spanish (`es`) — set in `LanguageContext.tsx`
- Global state via React Context — `useLanguage()` hook available anywhere
- All translatable strings stored as `{ en: string; es: string; ca: string }` objects
- UI strings (nav, labels) → `src/data/content.ts`
- Content strings (bio, descriptions) → inline in their respective data files

```tsx
// Reading language-aware content in any component:
const { lang } = useLanguage();
personalInfo.name[lang]
siteContent.about[lang]
```

---

## Data Types

```typescript
// Language keys
type Language = 'en' | 'es' | 'ca';

// Translated string
type T = { en: string; es: string; ca: string };

// Photo / portfolio item
interface PortfolioItem {
  id: string;
  title?: string;
  category?: 'film' | 'theater' | 'tv' | 'lifestyle';
  image?: string[];         // external URLs (imgbb etc.)
  video?: string;
  description?: T;
  featured?: boolean;
}

// Personal info
interface PersonalInfo {
  name: T;
  bio: T;
  headshot: string;
  contact: { email: string; phone?: string; agent?: string };
}
```

---

## Animation Strategy

All scroll animations use a single `<FadeIn>` wrapper component backed by Framer Motion.  
Wrap any section or element to have it fade up as it enters the viewport.

```tsx
<FadeIn>
  <PhotoCard ... />
</FadeIn>
```

No animation logic lives in individual components — they stay pure and presentational.

---

## SEO

- `metadata` export per page (Next.js built-in)
- Unique `title` and `description` per page
- Open Graph image: headshot
- `lang` attribute on `<html>` — should update with selected language (Phase 4)
- `trailingSlash: true` in next.config for clean static URLs
