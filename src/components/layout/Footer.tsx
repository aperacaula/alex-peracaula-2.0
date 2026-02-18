import { personalInfo } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-24 opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">© {year} Àlex Peracaula Ruiz</p>
        <div className="flex flex-col sm:flex-row items-center gap-1 text-sm text-muted">
          {personalInfo.contact.agent && (
            <span>Agent: {personalInfo.contact.agent}</span>
          )}
          {personalInfo.contact.agent && personalInfo.contact.email && (
            <span className="hidden sm:inline mx-2">·</span>
          )}
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="hover:text-text transition-colors"
          >
            {personalInfo.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
