import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact',
  description: 'Contacta con Àlex Peracaula Ruiz. Actor profesional representado por Alsira García-Maroto.',
  url: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
