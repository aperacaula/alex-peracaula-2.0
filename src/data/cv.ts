import { CvEntry } from '@/types';

export const cvEntries: CvEntry[] = [
  // ─── Film ────────────────────────────────────────────────────────────────────
  {
    id: 'film-1',
    category: 'film',
    title:    { en: 'Film Title',    es: 'Título Película',    ca: 'Títol Pel·lícula'   },
    role:     { en: 'Lead Role',     es: 'Papel Principal',    ca: 'Paper Principal'    },
    director: 'Director Name',
    year:     2023,
  },

  // ─── Theater ─────────────────────────────────────────────────────────────────
  {
    id: 'theater-1',
    category: 'theater',
    title:    { en: 'Play Title',    es: 'Título Obra',        ca: 'Títol Obra'         },
    role:     { en: 'Lead Role',     es: 'Papel Principal',    ca: 'Paper Principal'    },
    company:  { en: 'Theater Co.',   es: 'Compañía Teatro',    ca: 'Companyia Teatre'   },
    director: 'Director Name',
    year:     2022,
  },

  // ─── TV ──────────────────────────────────────────────────────────────────────
  {
    id: 'tv-1',
    category: 'tv',
    title:    { en: 'Series Title',  es: 'Título Serie',       ca: 'Títol Sèrie'        },
    role:     { en: 'Supporting',    es: 'Secundario',         ca: 'Secundari'          },
    director: 'Director Name',
    year:     2021,
  },

  // ─── Training ────────────────────────────────────────────────────────────────
  {
    id: 'training-1',
    category: 'training',
    title:    { en: 'Acting School', es: 'Escuela de Teatro',  ca: 'Escola de Teatre'   },
    role:     { en: 'Graduate',      es: 'Graduado',           ca: 'Graduat'            },
    year:     2019,
  },
];

export const CV_CATEGORIES: { key: CvEntry['category']; label: { en: string; es: string; ca: string } }[] = [
  { key: 'film',     label: { en: 'Film',     es: 'Cine',    ca: 'Cinema'   } },
  { key: 'theater',  label: { en: 'Theater',  es: 'Teatro',  ca: 'Teatre'   } },
  { key: 'tv',       label: { en: 'TV',       es: 'TV',      ca: 'TV'       } },
  { key: 'training', label: { en: 'Training', es: 'Formación', ca: 'Formació' } },
];
