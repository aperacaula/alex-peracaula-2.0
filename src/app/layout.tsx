import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateMetadata as generateSEO } from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

// Serif — hero name, section headings
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Sans — navigation, body, captions
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <head>
        <StructuredData />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
