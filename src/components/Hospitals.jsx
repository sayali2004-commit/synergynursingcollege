import { PARENT_HOSPITAL, AFFILIATED_HOSPITALS } from '../data/siteContent'
import Icon from './Icon'

export default function Hospitals() {
  return (
    <section id="hospitals" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Hospitals</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Parent &amp; Affiliated Hospitals
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Our students train under real clinical conditions at the parent hospital and the
            affiliated hospitals of Miraj, gaining rich, hands-on experience across specialities.
          </p>
        </div>

        {/* Parent Hospital */}
        <article
          className="reveal mt-9 grid overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100 card-lift lg:grid-cols-2"
          style={{ '--reveal-delay': '200ms' }}
        >
          <div className="relative min-h-[260px] bg-navy-50">
            <img
              src={PARENT_HOSPITAL.image}
              alt={PARENT_HOSPITAL.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute left-4 top-4 rounded-full bg-royal-600/95 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-card backdrop-blur-sm">
              {PARENT_HOSPITAL.label}
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-navy-950 text-balance">
              {PARENT_HOSPITAL.name}
            </h3>

            <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-navy-700">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {PARENT_HOSPITAL.address}
                <br />
                {PARENT_HOSPITAL.location}
              </span>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-navy-800">{PARENT_HOSPITAL.description}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PARENT_HOSPITAL.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Hospital Website
                <Icon name="globe" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Affiliated Hospitals */}
        <div className="mt-10">
          <h3
            className="reveal font-display text-base sm:text-lg font-bold uppercase tracking-widest text-royal-600"
            style={{ '--reveal-delay': '80ms' }}
          >
            Affiliated Hospitals
          </h3>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AFFILIATED_HOSPITALS.map((h, i) => (
              <article
                key={h.name}
                className="reveal group flex flex-col gap-4 bg-white p-6 shadow-[0_12px_35px_-14px_rgba(11,60,93,0.16)] ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-18px_rgba(25,118,210,0.30)] hover:ring-royal-300"
                style={{ '--reveal-delay': `${140 + i * 90}ms`, borderRadius: '48px 0 48px 0' }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name="hospital" className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold leading-snug text-navy-950">
                    {h.name}
                  </h4>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-navy-700">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-royal-500" />
                    <span>{h.location}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
