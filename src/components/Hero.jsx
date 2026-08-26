import { COLLEGE, HERO_HIGHLIGHTS } from '../data/siteContent'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-[#EAF4F8] to-[#F8FCFF]">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/Synergy-Hospital-Miraj.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E3F2FD] via-[#E3F2FD]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FCFF]/60 via-transparent to-[#E3F2FD]/30" />
        {/* soft curved edge like reference */}
        <svg
          className="absolute inset-y-0 left-0 h-full w-[62%] text-royal-600/10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0h78C58 22 58 78 78 100H0z" fill="currentColor" opacity="0.35" />
        </svg>
      </div>

      <div className="container-x relative flex min-h-[430px] items-center py-10 sm:min-h-[470px] sm:py-12 lg:min-h-[490px] lg:py-14">
        <div className="max-w-2xl">
          <h2 className="reveal font-display text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold leading-[1.12] text-royal-900 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Welcome to{' '}
            <span className="text-gold-600">Synergy College of Nursing</span>
          </h2>
          <p className="reveal mt-4 font-display text-lg sm:text-xl font-bold text-royal-700" style={{ '--reveal-delay': '160ms' }}>
            Compassion in Care, Excellence in Education
          </p>
          <p className="reveal mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-navy-800" style={{ '--reveal-delay': '240ms' }}>
            A premier institution under <strong>Uma Trust &amp; Synergy Hospital, Miraj</strong>,
            affiliated to <strong>MUHS, Nashik</strong> — offering quality nursing education backed
            by hands-on, multi-speciality clinical training.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4" style={{ '--reveal-delay': '320ms' }}>
            <a href="#courses" className="btn !bg-royal-600 !text-white hover:-translate-y-0.5 hover:!bg-royal-700 shadow-card-hover">
              Explore Courses
            </a>
            <a href="#admissions" className="btn-outline">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Highlights strip — new stacked structure with floating icon badges */}
      <div className="container-x relative pb-8 pt-6 sm:pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HERO_HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="reveal group relative rounded-2xl bg-white px-5 pb-5 pt-9 text-center shadow-card ring-1 ring-navy-100 card-lift"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-brand-600 text-white shadow-[0_10px_20px_-6px_rgba(25,118,210,0.5)] ring-4 ring-royal-50 transition-transform duration-300 group-hover:scale-110">
                <Icon name={h.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-sm font-bold text-navy-950">{h.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-700">{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screen-reader only college name for SEO (h1 lives in header) */}
      <span className="sr-only">{COLLEGE.name}, Miraj, Sangli, Maharashtra</span>
    </section>
  )
}
