"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  /** Full Vimeo or YouTube URL, e.g. "https://vimeo.com/123456789" */
  url: string;
  title?: string;
}

function buildEmbedUrl(url: string): string {
  // Vimeo
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) {
    const params = new URLSearchParams({
      autoplay: "1",
      muted: "0",
      loop: "0",
      byline: "0",
      title: "0",
      portrait: "0",
      dnt: "1",
    });
    return `https://player.vimeo.com/video/${vimeo[1]}?${params}`;
  }

  // YouTube
  const yt =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (yt) {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      rel: "0",
      modestbranding: "1",
    });
    return `https://www.youtube.com/embed/${yt[1]}?${params}`;
  }

  return url;
}

function getYoutubeThumbnail(url: string): string | null {
  const yt =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/maxresdefault.jpg`;
  return null;
}

export default function VideoEmbed({ url, title = "Video" }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  // Fetch Vimeo thumbnail via oEmbed, or use YouTube's static CDN thumbnail
  useEffect(() => {
    const ytThumb = getYoutubeThumbnail(url);
    if (ytThumb) {
      setThumbnail(ytThumb);
      return;
    }

    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo) {
      fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${vimeo[1]}`)}&width=1280`)
        .then((r) => r.json())
        .then((data) => {
          if (data?.thumbnail_url) setThumbnail(data.thumbnail_url);
        })
        .catch(() => {
          // Silently ignore — just show dark bg + play button
        });
    }
  }, [url]);

  const embedUrl = buildEmbedUrl(url);

  return (
    <div className="relative w-full aspect-video bg-surface overflow-hidden">
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center group"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          )}

          {/* Dark scrim over thumbnail */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Play button */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-xl">
            <svg
              className="w-6 h-6 text-black ml-1"
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
