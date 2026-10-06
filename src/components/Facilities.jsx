import { Link } from 'react-router-dom'
import { FACILITIES } from '../data/siteContent'
import Icon from './Icon'

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="640" viewBox="0 0 800 640">
      <rect fill="#EAF4F8" width="800" height="640"/>
      <text x="400" y="330" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" fill="#0b2033">Image unavailable</text>
    </svg>`,
  )

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
              The college and Synergy Hospital Miraj are associated, giving our students direct,
              supervised clinical exposure across the hospital&apos;s multi-speciality services.
            </p>
          </div>
          <Link to="/campus-life#gallery" className="reveal btn-outline shrink-0" style={{ '--reveal-delay': '240ms' }}>
            View Campus Gallery
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <article
              key={f.image}
              className="reveal group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-100 card-lift bg-navy-50"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            >
              <img
                src={f.image}
                alt={`Synergy College campus facility ${i + 1}`}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
