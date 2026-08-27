import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

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
    <footer className="relative overflow-hidden bg-[#122D42] text-white/75">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-10 py-10 sm:grid-cols-2 lg:gap-16 lg:py-12">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt={`${COLLEGE.name} logo`}
              className="h-12 w-auto rounded-md ring-1 ring-white/20"
              loading="lazy"
            />
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-base font-bold text-white">Synergy College of Nursing</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-500">
                Uma Trust, Miraj
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            One of the leading nursing institutions in Maharashtra, affiliated to MUHS, Nashik,
            and backed by the clinical excellence of Synergy Hospital, Miraj.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-500" />
              <span>Miraj 416410, Sangli District, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-500" />
              <a href="tel:+918767778129" className="font-semibold transition-colors hover:text-brand-300">+91 8767778129</a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-500" />
              <a href={`mailto:${COLLEGE.email}`} className="transition-colors hover:text-brand-300">{COLLEGE.email}</a>
            </div>
          </div>
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
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-300">
                  <span className="h-px w-3 bg-brand-500 transition-all group-hover:w-5" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative border-t border-brand-500/25">
        <div className="container-x flex flex-col items-center gap-1 py-6 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="text-brand-400">
            Designed &amp; Developed by NexGravision
          </p>
        </div>
      </div>
    </footer>
  )
}
