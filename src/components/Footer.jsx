import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

const COURSE_LINKS = [
  { label: 'B.Sc. Nursing', to: '/academics#courses' },
  { label: 'Admission Procedure', to: '/admissions' },
  { label: 'MUHS Mandate Notices', to: '/academics#notices' },
  { label: 'Physical Facilities', to: '/campus-life#facilities' },
]

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-royal-800 via-royal-900 to-navy-950 text-white/75">
      {/* Subtle dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-8 py-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-10">
        {/* Brand */}
        <div className="min-w-0">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt={`${COLLEGE.name} logo`}
              className="h-10 w-auto rounded-md ring-1 ring-white/20 sm:h-12"
              loading="lazy"
            />
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-sm font-bold text-white sm:text-base">Synergy College of Nursing</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500 sm:text-[11px]">
                Uma Trust · Miraj
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-xs leading-relaxed sm:mt-5 sm:text-sm">
            One of the leading nursing institutions in Maharashtra — affiliated to MUHS, Nashik,
            and backed by the clinical excellence of Synergy Hospital, Miraj.
          </p>
          <a
            href={COLLEGE.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-500 transition-colors hover:text-brand-300 sm:mt-5 sm:text-xs"
          >
            Official Website
            <Icon name="arrowRight" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">Quick Links</h3>
          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-brand-300 sm:text-sm">
                  <span className="h-px w-3 bg-brand-500 transition-all group-hover:w-5" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Courses */}
        <nav aria-label="Footer course links">
          <h3 className="font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">Courses</h3>
          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
            {COURSE_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-brand-300 sm:text-sm">
                  <span className="h-px w-3 bg-brand-500 transition-all group-hover:w-5" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="min-w-0">
          <h3 className="font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-xs sm:mt-5 sm:space-y-4 sm:text-sm">
            <li className="flex gap-2.5 sm:gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 sm:h-5 sm:w-5" />
              <span className="break-words">{COLLEGE.addressShort}</span>
            </li>
            <li className="flex gap-2.5 sm:gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 sm:h-5 sm:w-5" />
              <span className="flex flex-col">
                {COLLEGE.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="font-semibold transition-colors hover:text-brand-300">
                    +91 {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2.5 sm:gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 sm:h-5 sm:w-5" />
              <a href={`mailto:${COLLEGE.email}`} className="break-all transition-colors hover:text-brand-300">
                {COLLEGE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-brand-500/25">
        <div className="container-x flex flex-col items-center gap-2 py-5 text-[11px] text-white/60 sm:flex-row sm:justify-between sm:gap-3 sm:py-6 sm:text-xs">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-center text-brand-400 sm:text-left">
            Affiliated to MUHS, Nashik
            <span aria-hidden="true">·</span>
            Managed by Uma Trust
          </p>
        </div>
      </div>
    </footer>
  )
}
