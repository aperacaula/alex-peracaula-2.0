import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'CV',
  description: 'Curriculum vitae de Àlex Peracaula Ruiz. Actor profesional con experiencia en cine, televisión y teatro. Formación en Nancy Tuñón y Laura Jou.',
  url: '/cv',
});

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
