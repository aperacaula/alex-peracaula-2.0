import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Gallery',
  description: 'Galería de fotos profesionales de Àlex Peracaula Ruiz. Actor de cine, televisión y teatro.',
  url: '/gallery',
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
