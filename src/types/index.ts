export interface PortfolioItem {
  id: string;
  title?: string;
  category?: 'film' | 'theater' | 'tv' | 'lifestyle';
  image?: string[];
  video?: string;
  description?: {
    en: string;
    es: string;
    ca: string;
  };
  featured?: boolean;
}

export interface PersonalInfo {
  name: {
    en: string;
    es: string;
    ca: string;
  };
  bio: {
    en: string;
    es: string;
    ca: string;
  };
  headshot: string;
  contact: {
    email: string;
    phone?: string;
    agent?: string;
  };
}

export type Language = 'en' | 'es' | 'ca';

export interface ContentTranslations {
  [key: string]: {
    en: string;
    es: string;
    ca: string;
  };
}