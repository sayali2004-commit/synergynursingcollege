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
    <footer className="relative overflow-hidden bg-[#0D2536] text-white/70">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="flex flex-col items-center gap-10 py-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:py-14">
          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/90">Contact</h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-sm leading-relaxed">Miraj 416410, Sangli District, Maharashtra</span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-500" />
                <a href="tel:+918767778129" className="text-sm font-semibold transition-colors hover:text-white">+91 8767778129</a>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-500" />
                <a href={`mailto:${COLLEGE.email}`} className="text-sm transition-colors hover:text-white">{COLLEGE.email}</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/90">Quick Links</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm transition-colors duration-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center gap-1 py-5 text-[11px] text-white/35 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="text-brand-500/60">Designed &amp; Developed by NexGravision</p>
        </div>
      </div>
    </footer>
  )
}
