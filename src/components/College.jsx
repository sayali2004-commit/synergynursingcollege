import { APPROVALS } from '../data/siteContent'
import Icon from './Icon'

export default function College() {
  return (
    <section id="college" className="section-pad relative overflow-hidden mb-6" style={{ backgroundColor: '#1E4460' }}>
      <svg
        className="absolute left-0 top-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '60px', transform: 'translateY(-59px)' }}
        aria-hidden="true"
      >
        <path
          d="M0,40 C360,80 720,0 1080,50 C1260,65 1380,20 1440,30 L1440,80 L0,80 Z"
          fill="#1E4460"
        />
      </svg>
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="reveal section-tag !bg-white/10 !text-brand-300">The College</p>
          <h2 className="reveal heading-xl mt-4 !text-white text-balance" style={{ '--reveal-delay': '80ms' }}>
            Built on Trust, Affiliation and Real Hospital Experience
          </h2>
          <p className="reveal mt-4 leading-relaxed text-white/75" style={{ '--reveal-delay': '160ms' }}>
            Located in the heart of a bustling mix of rural and urban area in Miraj, the college
            offers excellent facilities together with a welcoming academic environment, making it
            one of the best B.Sc. Nursing colleges in Maharashtra.
          </p>

          <div className="mt-8 space-y-4">
            {APPROVALS.map((a, i) => (
              <div
                key={a.title}
                className="reveal group relative flex gap-4 overflow-hidden p-5 transition-all duration-300 hover:bg-white/[0.12] bg-white/[0.07] ring-1 ring-white/15 hover:ring-white/25"
                style={{ '--reveal-delay': `${200 + i * 90}ms`, borderRadius: '48px 0 48px 0' }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-400/20 text-brand-300 transition-colors duration-300 group-hover:bg-brand-400/30">
                  <Icon name={a.icon} className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white">{a.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/65">{a.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-6 flex items-center gap-3 border border-white/10 bg-white/[0.07] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]" style={{ '--reveal-delay': '480ms', borderRadius: '48px 0 48px 0' }}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-400/20 text-brand-300">
              <Icon name="pin" className="w-5 h-5" />
            </span>
            <p className="min-w-0 text-xs sm:text-sm leading-relaxed text-white/80">
              Usmania Moholla, Maji Sainik Vasahat, 100 Ft Road, Miraj 416410, Sangli District, Maharashtra
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="reveal order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img
            src={`${import.meta.env.BASE_URL}images/Female-Ward-Synergy-Hospital.jpg`}
            alt="Female ward at Synergy Hospital, Miraj"
            className="col-span-2 h-56 w-full rounded-[2rem] object-cover shadow-card ring-1 ring-white/10 sm:h-72"
            loading="lazy"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/Ambulance-Facility-Miraj.jpg`}
            alt="Ambulance facility at Synergy Hospital"
            className="h-40 w-full rounded-[2rem] object-cover shadow-card ring-1 ring-white/10 sm:h-48"
            loading="lazy"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/best-eye-hospital-in-MIraj.jpg`}
            alt="Speciality eye care services at Synergy Hospital"
            className="h-40 w-full rounded-[2rem] object-cover shadow-card ring-1 ring-white/10 sm:h-48"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
