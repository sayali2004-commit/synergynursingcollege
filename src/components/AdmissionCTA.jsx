import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

export default function AdmissionCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal-800 via-royal-900 to-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative py-8 text-center sm:py-10 lg:py-12">
        <p className="reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400 backdrop-blur-sm">
          <Icon name="heart" className="w-4 h-4" filled />
          Admissions Open · B.Sc. Nursing
        </p>
        <h2 className="reveal mx-auto mt-6 max-w-3xl font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white text-balance" style={{ '--reveal-delay': '100ms' }}>
          Start Your Journey in Nursing
        </h2>
        <p className="reveal mx-auto mt-4 max-w-2xl leading-relaxed text-white/80" style={{ '--reveal-delay': '180ms' }}>
          Join a college where compassion meets clinical excellence — backed by Uma Trust,
          Synergy Hospital and an MUHS affiliation.
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4" style={{ '--reveal-delay': '260ms' }}>
          <Link to="/admissions" className="btn !bg-gold-400 !text-navy-950 hover:-translate-y-0.5 hover:!bg-white">
            Apply for Admission
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-outline-light">
            Contact Us
          </Link>
        </div>
        <p className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/75" style={{ '--reveal-delay': '340ms' }}>
          {COLLEGE.phones.map((p) => (
            <a key={p} href={`tel:+91${p}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-400">
              <Icon name="phone" className="w-4 h-4" />
              +91 {p}
            </a>
          ))}
        </p>
      </div>
    </section>
  )
}
