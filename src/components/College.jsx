import { APPROVALS } from '../data/siteContent'
import Icon from './Icon'

export default function College() {
  return (
    <section id="college" className="section-pad relative overflow-hidden bg-navy-950">
      {/* decorative — very subtle */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy first on desktop */}
        <div className="order-2 lg:order-1">
          <p className="reveal section-tag !bg-white/10 !text-brand-300">The College</p>
          <h2 className="reveal heading-xl mt-4 !text-white text-balance" style={{ '--reveal-delay': '80ms' }}>
            Built on Trust, Affiliation &amp; Real Hospital Experience
          </h2>
          <p className="reveal mt-4 leading-relaxed text-white/75" style={{ '--reveal-delay': '160ms' }}>
            Located in the heart of a bustling mix of rural and urban area in Miraj, the college
            offers excellent facilities together with a welcoming academic environment — making it
            one of the best B.Sc. Nursing colleges in Maharashtra.
          </p>

          <div className="mt-8 space-y-5">
            {APPROVALS.map((a, i) => (
              <article
                key={a.title}
                className="reveal flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.1]"
                style={{ '--reveal-delay': `${200 + i * 90}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Icon name={a.icon} className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{a.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.1]" style={{ '--reveal-delay': '480ms' }}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
              <Icon name="pin" className="w-5 h-5" />
            </span>
            <p className="text-sm leading-relaxed text-white">
              Usmania Moholla, Maji Sainik Vasahat, 100 Ft Road,
              <br />
              Miraj 416410 — Sangli District, Maharashtra
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="reveal order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img
            src={`${import.meta.env.BASE_URL}images/Female-Ward-Synergy-Hospital.jpg`}
            alt="Female ward at Synergy Hospital, Miraj"
            className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-card ring-1 ring-white/10 sm:h-72"
            loading="lazy"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/Ambulance-Facility-Miraj.jpg`}
            alt="Ambulance facility at Synergy Hospital"
            className="h-40 w-full rounded-2xl object-cover shadow-card ring-1 ring-white/10 sm:h-48"
            loading="lazy"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/best-eye-hospital-in-MIraj.jpg`}
            alt="Speciality eye care services at Synergy Hospital"
            className="h-40 w-full rounded-2xl object-cover shadow-card ring-1 ring-white/10 sm:h-48"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
