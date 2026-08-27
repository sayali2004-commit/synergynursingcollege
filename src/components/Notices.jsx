import { NOTICES } from '../data/siteContent'
import Icon from './Icon'

export default function Notices() {
  return (
    <section id="notices" className="section-pad bg-gradient-to-b from-brand-50 to-brand-50/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Mandate</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            MUHS Mandate Announcements
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Official MUHS Mandate annexure documents published by the college, available for
            download directly from the source.
          </p>
        </div>

        <div className="mt-9 mx-auto max-w-4xl space-y-6">
          {NOTICES.map((group) => (
            <article
              key={group.year}
              className="reveal overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100 card-lift"
            >
              <header className="flex items-start gap-4 bg-gradient-to-r from-brand-700 to-brand-600 p-5 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon name="badge" className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">MUHS Mandate, {group.year}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/85">{group.highlight}</p>
                </div>
              </header>

              <ul className="grid gap-1 p-4 sm:p-6 sm:grid-cols-2">
                {group.files.map((file) => (
                  <li key={file.label}>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="group/file flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-brand-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <Icon name="file" className="w-5 h-5 shrink-0 text-brand-600" />
                        <span className="truncate text-sm font-semibold text-navy-900 group-hover/file:text-brand-800">
                          {file.label}
                        </span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-700 opacity-70 transition-opacity group-hover/file:opacity-100">
                        Download
                        <Icon name="download" className="w-4 h-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
