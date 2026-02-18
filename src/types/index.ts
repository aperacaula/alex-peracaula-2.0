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
  src: string;           // external URL
  alt: T;
  featured?: boolean;
}

// ─── CV ───────────────────────────────────────────────────────────────────────

export type CvCategory = 'film' | 'theater' | 'tv' | 'training';

export interface CvEntry {
  id: string;
  title: T;              // name of the work
  role: T;               // character or role
  company?: T;           // production company / theater company
  director?: string;     // director name (usually same across languages)
  year?: number;
  category: CvCategory;
}

// ─── Poetry ───────────────────────────────────────────────────────────────────

export interface Poem {
  id: string;
  title: T;
  body: T;               // full poem text — use \n for line breaks
  year?: number;
}
