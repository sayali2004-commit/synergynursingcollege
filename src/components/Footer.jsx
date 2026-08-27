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

const LEFT_LINKS = QUICK_LINKS.slice(0, 3)
const RIGHT_LINKS = QUICK_LINKS.slice(3)

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
      <div className="container-x flex flex-col items-center gap-8 py-10 sm:flex-row sm:justify-center sm:items-start sm:gap-20 lg:py-12">
        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-5 space-y-3.5">
            <li className="flex items-center gap-3">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-500" />
              <span className="text-sm">Miraj 416410, Sangli District, Maharashtra</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-500" />
              <a href="tel:+918767778129" className="text-sm font-semibold transition-colors hover:text-brand-300">+91 8767778129</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-500" />
              <a href={`mailto:${COLLEGE.email}`} className="text-sm transition-colors hover:text-brand-300">{COLLEGE.email}</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-x-16 gap-y-3">
            <ul className="space-y-3">
              {LEFT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-brand-300">{l.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {RIGHT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-brand-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-500/25">
        <div className="container-x flex flex-col items-center gap-1 py-6 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="text-brand-400">Designed &amp; Developed by NexGravision</p>
        </div>
      </div>
    </footer>
  )
}
