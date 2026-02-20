import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About',
  description: 'Àlex Peracaula Ruiz es un actor catalán con base en Madrid. Formado en Nancy Tuñón y Laura Jou. Parte de la compañía AlfaRed-PapaCharlie.',
  url: '/about',
  type: 'profile',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
