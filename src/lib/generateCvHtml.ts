import { personalInfo } from "@/data/content";
import { castingData, cvEntries, CV_CATEGORIES } from "@/data/cv";
import { photos } from "@/data/portfolio";
import type { Language } from "@/types";

const HEADSHOT_URL = photos.find((p) => p.id === "headshot-1")?.src ?? "";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function yearLabel(yearStart: number, yearEnd?: number) {
  return yearEnd ? `${yearStart}–${yearEnd}` : String(yearStart);
}

export function generateCvHtml(lang: Language): string {
  const filmEntries = cvEntries.filter(
    (e) => e.category === "film" || e.category === "tv",
  );
  const theaterEntries = cvEntries.filter((e) => e.category === "theater");
  const trainingEntries = cvEntries.filter((e) => e.category === "training");

  const filmLabel =
    CV_CATEGORIES.find((c) => c.key === "film")!.label[lang] + " & TV";
  const theaterLabel = CV_CATEGORIES.find(
    (c) => c.key === "theater",
  )!.label[lang];
  const trainingLabel = CV_CATEGORIES.find(
    (c) => c.key === "training",
  )!.label[lang];

  const agentLabel =
    lang === "es" ? "Agente" : lang === "ca" ? "Agent" : "Agent";

  function entryRow(e: (typeof cvEntries)[0]) {
    const parts = [
      e.role[lang],
      e.director ? `Dir. ${esc(e.director)}` : null,
      e.venue ? esc(e.venue) : null,
      e.location ? esc(e.location) : null,
      e.company ? esc(e.company) : null,
    ]
      .filter(Boolean)
      .join(" &middot; ");

    return `
      <div class="entry">
        <div class="entry-title">
          <span class="year">${yearLabel(e.yearStart, e.yearEnd)}</span>
          <span class="title">${esc(e.title)}</span>
          <span class="type">${esc(e.productionType[lang])}</span>
        </div>
        <div class="entry-detail">${parts}</div>
      </div>`;
  }

  function section(title: string, entries: typeof cvEntries) {
    return `
      <div class="section">
        <div class="section-title">${esc(title)}</div>
        ${entries.map(entryRow).join("")}
      </div>`;
  }

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CV — Àlex Peracaula Ruiz</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 14mm;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 8pt;
      color: #111;
      background: #fff;
      line-height: 1.35;
    }

    /* ── Header ── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1pt solid #111;
      padding-bottom: 10px;
      margin-bottom: 12px;
    }

    .header-left { flex: 1; }

    .name {
      font-size: 22pt;
      font-weight: 300;
      letter-spacing: -0.02em;
      line-height: 1;
      margin-bottom: 6px;
    }

    .contact {
      font-size: 8pt;
      color: #555;
      line-height: 1.6;
    }

    .contact .dim { color: #aaa; }

    .stats {
      margin-top: 6px;
      font-size: 8pt;
      color: #555;
    }

    .languages {
      margin-top: 3px;
      font-size: 8pt;
      color: #555;
      max-width: 340px;
    }

    .headshot {
      width: 72px;
      height: 90px;
      object-fit: cover;
      object-position: center top;
      border-radius: 2px;
      margin-left: 14px;
      flex-shrink: 0;
    }

    /* ── Columns ── */
    .columns {
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }

    .col { flex: 1; }

    /* ── Section ── */
    .section { margin-bottom: 10px; }

    .section-title {
      font-size: 7pt;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #999;
      border-bottom: 0.5pt solid #ccc;
      padding-bottom: 3px;
      margin-bottom: 6px;
      font-weight: 700;
    }

    /* ── Entry ── */
    .entry { margin-bottom: 4px; }

    .entry-title { line-height: 1.3; }

    .year   { font-weight: 600; font-size: 8pt; }
    .title  { font-weight: 700; font-size: 8.5pt; margin: 0 2px; }
    .type   { font-style: italic; font-size: 8pt; color: #555; }

    .entry-detail {
      font-size: 7.5pt;
      color: #666;
      line-height: 1.3;
    }

    /* ── Skills ── */
    .skills {
      margin-top: 10px;
      padding-top: 6px;
      border-top: 0.5pt solid #ccc;
      font-size: 7.5pt;
      color: #666;
      line-height: 1.4;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <div class="name">Àlex Peracaula Ruiz</div>
      <div class="contact">
        ${esc(personalInfo.contact.email)}<br>
        ${personalInfo.contact.phone ? esc(personalInfo.contact.phone) + "<br>" : ""}
        ${personalInfo.contact.agent ? `${agentLabel}: ${esc(personalInfo.contact.agent)}<br>` : ""}
        <span class="dim">alexperacaula.com</span>
      </div>
      <div class="stats">
        ${esc(castingData.height)} &middot; ${esc(castingData.hair[lang])} &middot; ${esc(castingData.eyes[lang])}
        &nbsp;&nbsp;
        ${lang === "es" ? "Pantalón" : lang === "ca" ? "Pantalons" : "Trousers"}: ${esc(castingData.sizes.trousers)} &middot;
        ${lang === "es" ? "Camisa" : lang === "ca" ? "Camisa" : "Shirt"}: ${esc(castingData.sizes.shirt)} &middot;
        ${lang === "es" ? "Zapato" : lang === "ca" ? "Sabata" : "Shoes"}: ${esc(castingData.sizes.shoes)}
      </div>
      <div class="languages">${esc(castingData.languages[lang])}</div>
    </div>
    ${HEADSHOT_URL ? `<img class="headshot" src="${esc(HEADSHOT_URL)}" alt="Àlex Peracaula Ruiz" />` : ""}
  </div>

  <div class="columns">
    <div class="col">${section(filmLabel, filmEntries)}</div>
    <div class="col">${section(theaterLabel, theaterEntries)}</div>
    <div class="col">${section(trainingLabel, trainingEntries)}</div>
  </div>

  <div class="skills">${esc(castingData.skills[lang])}</div>

  <script>
    window.onload = function() { window.print(); };
  </script>
</body>
</html>`;
}
