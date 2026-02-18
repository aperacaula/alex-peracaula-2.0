"use client";

import { useState } from "react";

interface VideoEmbedProps {
  /** Full Vimeo or YouTube URL, e.g. "https://vimeo.com/123456789" */
  url: string;
  title?: string;
  /** If true, video starts playing automatically (muted, no controls shown initially) */
  autoplay?: boolean;
}

function buildEmbedUrl(url: string, autoplay: boolean): string {
  // Vimeo: https://vimeo.com/123456789 → https://player.vimeo.com/video/123456789
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) {
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      muted: autoplay ? "1" : "0",
      loop: "0",
      byline: "0",
      title: "0",
      portrait: "0",
      dnt: "1",
    });
    return `https://player.vimeo.com/video/${vimeo[1]}?${params}`;
  }

  // YouTube: https://youtu.be/ID or https://youtube.com/watch?v=ID
  const yt =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (yt) {
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: autoplay ? "1" : "0",
      rel: "0",
      modestbranding: "1",
    });
    return `https://www.youtube.com/embed/${yt[1]}?${params}`;
  }

  return url;
}

export default function VideoEmbed({ url, title = "Video", autoplay = false }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(autoplay);
  const embedUrl = buildEmbedUrl(url, playing);

  return (
    <div className="relative w-full aspect-video bg-surface rounded-sm overflow-hidden">
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        /* Play button overlay shown before user interaction */
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center group"
          aria-label={`Play ${title}`}
        >
          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center transition-transform group-hover:scale-110">
            <svg
              className="w-6 h-6 text-accent-fg ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
