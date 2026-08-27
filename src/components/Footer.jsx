import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
]

const QUICK_LINKS_LEFT = QUICK_LINKS.slice(0, 3)
const QUICK_LINKS_RIGHT = QUICK_LINKS.slice(3)

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
      <div className="container-x relative py-10 lg:py-12">
        {/* Quick links */}
        <div className="text-center">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 mx-auto max-w-md sm:max-w-lg sm:grid-cols-3 sm:gap-x-8">
            <ul className="space-y-2.5">
              {QUICK_LINKS_LEFT.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {QUICK_LINKS_RIGHT.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
