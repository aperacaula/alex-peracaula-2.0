"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Àlex Peracaula Ruiz",
    "alternateName": "Alex Peracaula",
    "url": "https://www.alexperacaula.com",
    "image": "https://i.ibb.co/fDJ64bL/DSCF1120.jpg",
    "sameAs": [
      "https://www.instagram.com/aperacaula/",
      "https://vimeo.com/442985312"
    ],
    "jobTitle": "Actor",
    "worksFor": {
      "@type": "Organization",
      "name": "AlfaRed-PapaCharlie"
    },
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Spanish"
      },
      {
        "@type": "Language",
        "name": "Catalan"
      },
      {
        "@type": "Language",
        "name": "English"
      },
      {
        "@type": "Language",
        "name": "Portuguese"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "description": "Actor profesional con base en Madrid. Especializado en teatro, cine y televisión. Representado por Alsira García-Maroto."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
