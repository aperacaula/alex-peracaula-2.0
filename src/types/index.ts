// Shared translated string type
export type T = {
  en: string;
  es: string;
  ca: string;
};

export type Language = 'en' | 'es' | 'ca';

// ─── Content ──────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: T;
  bio: T;
  headshot: string;
  contact: {
    email: string;
    phone?: string;
    agent?: string;
  };
}

export interface ContentTranslations {
  [key: string]: T;
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export interface PhotoItem {
  id: string;
  src: string;
  alt: T;
  featured?: boolean;
}

// ─── CV ───────────────────────────────────────────────────────────────────────

export type CvCategory = 'film' | 'tv' | 'theater' | 'training';

export type ProductionType =
  | 'feature'       // Largometraje
  | 'short'         // Cortometraje
  | 'series'        // Serie
  | 'play'          // Texto teatral
  | 'course'        // Curso / taller
  | 'degree';       // Titulación

export interface CvEntry {
  id: string;
  category: CvCategory;
  title: string;              // Production titles don't change across languages
  productionType: T;          // e.g. "Feature film" / "Largometraje" / "Llargmetratge"
  role: T;                    // Character name or role type
  director?: string;          // Director name — same across languages
  company?: string;           // Production company — same across languages
  venue?: string;             // Theater venue name — same across languages
  location?: string;          // City — same across languages
  yearStart: number;
  yearEnd?: number;           // For ranges like 2025-2026
}

// Casting data — physical info, languages, skills
export interface CastingData {
  height: string;
  hair: T;
  eyes: T;
  sizes: {
    trousers: string;
    shirt: string;
    shoes: string;
  };
  languages: T;
  skills: T;
}

// ─── Poetry ───────────────────────────────────────────────────────────────────

export interface Poem {
  id: string;
  title: T;
  body: T;
  year?: number;
}
