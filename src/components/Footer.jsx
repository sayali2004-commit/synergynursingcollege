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

const LEFT_LINKS = QUICK_LINKS.slice(0, 3)
const RIGHT_LINKS = QUICK_LINKS.slice(3)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E2A3D] text-white/70">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20px 20px, white 1.5px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative py-10 lg:py-12">
        <div className="text-center">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/90">Quick Links</h3>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 mx-auto max-w-sm sm:max-w-md sm:grid-cols-3 sm:gap-x-10">
            <ul className="space-y-3">
              {LEFT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/60 transition-colors duration-200 hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {RIGHT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/60 transition-colors duration-200 hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center gap-1 py-5 text-[11px] text-white/40">
          <p>&copy; {new Date().getFullYear()} {COLLEGE.name}, Miraj. All rights reserved.</p>
          <p className="text-brand-500/70">
            Designed &amp; Developed by NexGravision
          </p>
        </div>
      </div>
    </footer>
  )
}
