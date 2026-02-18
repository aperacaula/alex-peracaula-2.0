# Àlex Peracaula — Actor Website · Project Plan

## Project Overview

**What it is:** Personal actor website for casting directors and industry professionals.  
**Primary action:** Visitor lands, watches the reel, scrolls through photos, reads the CV, makes contact.  
**Audience:** Casting directors, directors, producers.  
**Languages:** Catalan (default), Spanish, English.  
**Deployment:** Static export → Netlify or GitHub Pages.  
**Tech stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing — hero reel autoplay, brief tagline, smooth scroll into sections |
| `/gallery` | Full photo gallery — all photos, smooth load-in on scroll |
| `/cv` | Acting CV — film, theater, TV credits listed by category (no PDF) |
| `/poetry` | Personal poetry — text-based, minimal layout |
| `/about` | Short bio |
| `/contact` | Contact form or direct details |

---

## Phase 1 — Foundation ✅ Done

- [x] Next.js project setup
- [x] TypeScript configuration
- [x] Tailwind CSS v4 setup
- [x] Folder structure
- [x] Type definitions (`PortfolioItem`, `PersonalInfo`, `Language`)
- [x] Sample data (`content.ts`, `portfolio.ts`)
- [x] Global dark color system via CSS tokens
- [x] Language context (Catalan / Spanish / English) with selector in Header
- [x] Header component (responsive, with mobile menu)
- [x] Basic homepage shell

---

## Phase 2 — Core Components 🔄 In Progress

- [ ] Footer
- [ ] Scroll-triggered fade-in animation wrapper (Framer Motion)
- [ ] Photo card component (image + optional caption)
- [ ] Lightbox (full-screen image viewer)
- [ ] Reel video embed (Vimeo or YouTube, autoplay muted on landing)
- [ ] CV entry component (title, role, director, year)
- [ ] Poetry entry component

---

## Phase 3 — Pages 📄 Not Started

- [ ] `/` — Hero with reel + tagline. Scroll reveals short bio teaser, a few featured photos, link to full gallery.
- [ ] `/gallery` — Masonry or grid layout, all photos. Images appear on scroll with fade-in.
- [ ] `/cv` — Sections: Film, Theater, TV, Training. Each entry: title, role, director/company, year.
- [ ] `/poetry` — List of poems. Click to expand or separate route per poem.
- [ ] `/about` — Bio paragraph(s), headshot, maybe a pull quote.
- [ ] `/contact` — Email, agent info, simple contact form or mailto link.

---

## Phase 4 — Polish & Performance 📄 Not Started

- [ ] Framer Motion scroll animations (fade-up on all sections)
- [ ] Image lazy loading + blur placeholder
- [ ] Mobile responsiveness audit on all pages
- [ ] SEO metadata per page (title, description, Open Graph)
- [ ] Accessibility pass (alt text, focus states, contrast)
- [ ] 404 page
- [ ] Final Lighthouse audit (target > 90 all categories)

---

## Phase 5 — Deployment 📄 Not Started

- [ ] Production build test (`npm run build`)
- [ ] Netlify setup + domain
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Mobile device test (iPhone, Android)

---

## Design Principles

- Dark background throughout — never break to white
- Typography-led — text should feel as considered as the images
- No clutter — generous whitespace, minimal UI chrome
- Images load smoothly — never pop in abruptly
- Mobile-first — must feel native on phone, not just "works on mobile"
