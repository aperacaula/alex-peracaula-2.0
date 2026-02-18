"use client";

import Image from "next/image";
import { useState } from "react";
import type { PhotoItem } from "@/types";
import type { Language } from "@/types";

interface PhotoCardProps {
  photo: PhotoItem;
  lang: Language;
  onClick?: (photo: PhotoItem) => void;
}

export default function PhotoCard({ photo, lang, onClick }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={() => onClick?.(photo)}
      className="group relative w-full overflow-hidden rounded-sm bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={photo.alt[lang]}
    >
      {/* Blur placeholder shown until image loads */}
      <div
        className={`absolute inset-0 bg-surface transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={photo.src}
        alt={photo.alt[lang]}
        width={800}
        height={1000}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </button>
  );
}
