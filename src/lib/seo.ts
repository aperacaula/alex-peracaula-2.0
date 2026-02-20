import { Metadata } from 'next';

export const siteConfig = {
  name: 'Àlex Peracaula Ruiz',
  url: 'https://www.alexperacaula.com',
  ogImage: 'https://i.ibb.co/fDJ64bL/DSCF1120.jpg',
  description: {
    en: 'Professional actor based in Madrid. Theater, film, and television. Represented by Alsira García-Maroto.',
    es: 'Actor profesional con base en Madrid. Teatro, cine y televisión. Representado por Alsira García-Maroto.',
    ca: 'Actor professional amb base a Madrid. Teatre, cinema i televisió. Representat per Alsira García-Maroto.',
  },
  keywords: [
    'alex peracaula',
    'àlex peracaula',
    'actor',
    'actor madrid',
    'actor barcelona',
    'actor español',
    'teatro',
    'cine',
    'televisión',
    'acting',
    'catalan actor',
    'spanish actor',
    'alsira garcia-maroto',
  ],
  author: 'Àlex Peracaula Ruiz',
  twitter: '@aperacaula', // Add your Twitter handle if you have one
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'profile' | 'article';
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  url,
  type = 'website',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — Actor`;
  
  const pageDescription = description || siteConfig.description.es;
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    
    openGraph: {
      type,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      siteName: siteConfig.name,
      locale: 'es_ES',
      alternateLocale: ['ca_ES', 'en_US'],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
      creator: siteConfig.twitter,
    },

    alternates: {
      canonical: pageUrl,
    },

    icons: {
      icon: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },

    metadataBase: new URL(siteConfig.url),
  };
}
