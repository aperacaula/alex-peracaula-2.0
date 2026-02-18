import { Poem } from '@/types';

export const poems: Poem[] = [
  {
    id: 'poem-1',
    year: 2024,
    title: {
      en: 'Poem Title',
      es: 'Título del Poema',
      ca: 'Títol del Poema',
    },
    body: {
      en: `First line of the poem\nSecond line continues\nThird line ends it`,
      es: `Primera línea del poema\nLa segunda línea continúa\nLa tercera línea lo termina`,
      ca: `Primera línia del poema\nLa segona línia continua\nLa tercera línia l'acaba`,
    },
  },
];
