import { COLLEGE, NAV_LINKS } from '../data/siteContent'
import Icon from './Icon'

const COURSE_LINKS = [
  { label: 'B.Sc. Nursing', href: '#courses' },
  { label: 'Admission Procedure', href: '#admissions' },
  { label: 'MUHS Mandate Notices', href: '#notices' },
  { label: 'Physical Facilities', href: '#facilities' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-royal-800 via-royal-900 to-navy-950 text-white/75">
      {/* Subtle dotted texture — matches CTA band */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-10 py-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-10">
        {/* Brand */}
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt={`${COLLEGE.name} logo`}
              className="h-12 w-auto rounded-md ring-1 ring-white/20"
              loading="lazy"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-white">Synergy College of Nursing</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-500">
                Uma Trust · Miraj
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            One of the leading nursing institutions in Maharashtra — affiliated to MUHS, Nashik,
            and backed by the clinical excellence of Synergy Hospital, Miraj.
          </p>
          <a
            href={COLLEGE.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-500 transition-colors hover:text-brand-300"
          >
            Official Website
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-300">
                  <span className="h-px w-3 bg-brand-500 transition-all group-hover:w-5" aria-hidden="true" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Courses */}
        <nav aria-label="Footer course links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Courses</h3>
          <ul className="mt-5 space-y-2.5">
            {COURSE_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-300">
                  <span className="h-px w-3 bg-brand-500 transition-all group-hover:w-5" aria-hidden="true" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="w-5 h-5 shrink-0 text-brand-500" />
              <span>{COLLEGE.addressShort}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="w-5 h-5 shrink-0 text-brand-500" />
              <span className="flex flex-col">
                {COLLEGE.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="font-semibold transition-colors hover:text-brand-300">
                    +91 {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="w-5 h-5 shrink-0 text-brand-500" />
              <a href={`mailto:${COLLEGE.email}`} className="transition-colors hover:text-brand-300">
                {COLLEGE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-brand-500/25">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-brand-400">
            Affiliated to MUHS, Nashik
            <span aria-hidden="true">·</span>
            Managed by Uma Trust
          </p>
        </div>
      </div>
    </footer>
  )
}
