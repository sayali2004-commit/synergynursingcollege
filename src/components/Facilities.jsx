import { Link } from 'react-router-dom'
import { FACILITIES } from '../data/siteContent'
import Icon from './Icon'

export default function Facilities() {
  return (
    <section id="facilities" className="section-pad bg-[#F4F9FC]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="reveal section-tag">Facilities</p>
            <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
              Learning Beyond the Classroom
            </h2>
            <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
              The college and Synergy Hospital Miraj are associated — giving our students direct,
              supervised clinical exposure across the hospital&apos;s multi-speciality services.
            </p>
          </div>
          <Link to="/campus-life#gallery" className="reveal btn-outline shrink-0" style={{ '--reveal-delay': '240ms' }}>
            View Campus Gallery
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <article
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-100 card-lift"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-1.5 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                  {f.text}
                </p>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                <Icon name="stethoscope" className="w-5 h-5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
