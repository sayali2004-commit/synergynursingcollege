import { OBJECTIVES } from '../data/siteContent'
import Icon from './Icon'

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#F4F9FC]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Image grid */}
        <div className="reveal">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-100">
              <img
                src="/images/Multi-Speciality-Hospital-Miraj.jpg"
                alt="Synergy Hospital, Miraj — multi-speciality hospital associated with the college"
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-royal-600/95 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-card backdrop-blur-sm">
              Miraj · Sangli · Maharashtra
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-100">
              <img
                src="/images/Female-Ward-Synergy-Hospital.jpg"
                alt="Female ward at Synergy Hospital"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-100">
              <img
                src="/images/Child-Care-Hospital-Miraj-Sangli.jpg"
                alt="Child care services at Synergy Hospital"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copy — compact */}
        <div>
          <p className="reveal section-tag">About Us</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            A Leading Institution for Nursing Education in Maharashtra
          </h2>

          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Synergy College of Nursing is a part of <strong>Uma Trust</strong> and{' '}
            <strong>Synergy Hospital, Miraj</strong>, affiliated to the{' '}
            <strong>Maharashtra University of Health Sciences (MUHS), Nashik</strong>. Our curriculum
            is constantly updated with the latest trends in nursing education, and our experienced
            faculty receive ongoing professional development.
          </p>

          <h3 className="reveal mt-6 font-display text-base font-bold uppercase tracking-widest text-royal-600" style={{ '--reveal-delay': '220ms' }}>
            Our Objectives
          </h3>
          <ul className="mt-3 space-y-2.5">
            {OBJECTIVES.map((obj, i) => (
              <li
                key={obj}
                className="reveal flex items-start gap-2.5"
                style={{ '--reveal-delay': `${260 + i * 60}ms` }}
              >
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm leading-relaxed text-navy-800">{obj}</span>
              </li>
            ))}
          </ul>

          <a href="#college" className="reveal btn-outline mt-7" style={{ '--reveal-delay': '600ms' }}>
            Explore The College
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
