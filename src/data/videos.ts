import type { T } from "@/types";

export interface VideoItem {
  id: string;
  url: string;
  /** Shown as a label above the video. Omit for unlabelled grids (e.g. parody). */
  title?: T;
}

export interface VideoTab {
  id: string;
  label: T;
  /** "hero" = single centred player; "grid" = responsive grid with optional titles */
  layout: "hero" | "grid";
  videos: VideoItem[];
}

export const videoTabs: VideoTab[] = [
  {
    id: "showreel",
    label: { en: "Showreel", es: "Showreel", ca: "Showreel" },
    layout: "hero",
    videos: [
      {
        id: "showreel-main",
        url: "https://vimeo.com/442985312",
      },
    ],
  },
  {
    id: "about",
    label: { en: "About me", es: "Sobre mí", ca: "Sobre mi" },
    layout: "hero",
    videos: [
      {
        id: "about-main",
        url: "https://www.youtube.com/watch?v=GWNKNVI95Kc",
      },
    ],
  },
  {
    id: "parody",
    label: { en: "Parody", es: "Parodia", ca: "Paròdia" },
    layout: "grid",
    videos: [
      { id: "6dN32uwj2e0", url: "https://www.youtube.com/watch?v=6dN32uwj2e0" },
      { id: "5sMrU6zA2kE", url: "https://www.youtube.com/watch?v=5sMrU6zA2kE" },
      { id: "g1olyrnNuF8", url: "https://www.youtube.com/watch?v=g1olyrnNuF8" },
      { id: "5sGKQnpZLFg", url: "https://www.youtube.com/watch?v=5sGKQnpZLFg" },
      { id: "w0NcyiahpzI", url: "https://www.youtube.com/watch?v=w0NcyiahpzI" },
      { id: "AV5m2W9MH_w", url: "https://www.youtube.com/watch?v=AV5m2W9MH_w" },
      { id: "5DCk1i15s8Y", url: "https://www.youtube.com/watch?v=5DCk1i15s8Y" },
      { id: "8nyVAJhPAEs", url: "https://www.youtube.com/watch?v=8nyVAJhPAEs" },
      { id: "O_4zKb0xn0o", url: "https://www.youtube.com/watch?v=O_4zKb0xn0o" },
      { id: "-1hhBmlEDSE", url: "https://www.youtube.com/watch?v=-1hhBmlEDSE" },
      { id: "u0b89tU0nag", url: "https://www.youtube.com/watch?v=u0b89tU0nag" },
    ],
  },
  {
    id: "shorts",
    label: {
      en: "Short films",
      es: "Cortometrajes",
      ca: "Curtmetratges",
    },
    layout: "grid",
    videos: [
      {
        id: "honorarios-baby",
        url: "https://vimeo.com/702911955",
        title: {
          en: "Honorarios, baby — Short Film",
          es: "Honorarios, baby — Cortometraje",
          ca: "Honorarios, baby — Curtmetratge",
        },
      },
      {
        id: "lo-de-antes",
        url: "https://www.youtube.com/watch?v=r7BJ9eqZwT8",
        title: {
          en: 'Lo de antes — Short (30" Notodofilfest)',
          es: 'Lo de antes — Corto (30" Notodofilfest)',
          ca: 'Lo de antes — Curt (30" Notodofilfest)',
        },
      },
      {
        id: "el-temps",
        url: "https://www.youtube.com/watch?v=lZKvEBouQ0I",
        title: {
          en: "Monologue — El temps que estiguem junts",
          es: "Monólogo — El temps que estiguem junts",
          ca: "Monòleg — El temps que estiguem junts",
        },
      },
      {
        id: "primos",
        url: "https://vimeo.com/414823297",
        title: {
          en: "Monologue — Primos",
          es: "Monólogo — Primos",
          ca: "Monòleg — Primos",
        },
      },
    ],
  },
];
