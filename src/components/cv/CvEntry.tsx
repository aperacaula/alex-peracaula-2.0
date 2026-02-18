import type { CvEntry as CvEntryType, Language } from "@/types";

interface CvEntryProps {
  entry: CvEntryType;
  lang: Language;
}

function yearLabel(entry: CvEntryType): string {
  if (entry.yearEnd) return `${entry.yearStart}–${entry.yearEnd}`;
  return String(entry.yearStart);
}

export default function CvEntry({ entry, lang }: CvEntryProps) {
  return (
    <div className="py-3 border-b border-border last:border-0">

      {/* Year + title on the same line */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="font-sans text-sm text-muted tabular-nums shrink-0">
          {yearLabel(entry)}
        </span>
        <span className="font-sans text-sm font-medium text-text">
          {entry.title}
        </span>
        <span className="font-sans text-sm text-muted italic">
          {entry.productionType[lang]}
        </span>
      </div>

      {/* Role / venue / location */}
      <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <span className="font-sans text-sm text-muted">
          {entry.role[lang]}
        </span>
        {entry.venue && (
          <span className="font-sans text-sm text-muted">
            · {entry.venue}
            {entry.location && `, ${entry.location}`}
          </span>
        )}
        {!entry.venue && entry.location && (
          <span className="font-sans text-sm text-muted">
            · {entry.location}
          </span>
        )}
      </div>

      {/* Director / company */}
      {(entry.director || entry.company) && (
        <div className="mt-0.5 flex flex-wrap gap-x-3">
          {entry.director && (
            <span className="font-sans text-xs text-muted/60">
              Dir. {entry.director}
            </span>
          )}
          {entry.company && (
            <span className="font-sans text-xs text-muted/60">
              {entry.company}
            </span>
          )}
        </div>
      )}

    </div>
  );
}
