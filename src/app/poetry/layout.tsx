import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Poetry',
  description: 'Poesía de Àlex Peracaula Ruiz. Colección de poemas escritos por el actor.',
  url: '/poetry',
  type: 'article',
});

export default function PoetryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
