import type { CvEntry as CvEntryType, Language } from "@/types";

interface CvEntryProps {
  entry: CvEntryType;
  lang: Language;
}

export default function CvEntry({ entry, lang }: CvEntryProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-border last:border-0">
      {/* Year */}
      <span className="text-sm text-muted tabular-nums w-12 shrink-0">
        {entry.year ?? "—"}
      </span>

      {/* Title + role */}
      <div className="flex-1 min-w-0">
        <span className="text-text font-medium">{entry.title[lang]}</span>
        <span className="text-muted mx-2">·</span>
        <span className="text-muted">{entry.role[lang]}</span>
        {entry.company && (
          <>
            <span className="text-muted mx-2">·</span>
            <span className="text-muted text-sm">{entry.company[lang]}</span>
          </>
        )}
      </div>

      {/* Director */}
      {entry.director && (
        <span className="text-sm text-muted shrink-0">
          Dir. {entry.director}
        </span>
      )}
    </div>
  );
}
