import { Link } from 'react-router-dom'
import { COURSES } from '../data/siteContent'
import Icon from './Icon'

const meta = (course) => [
  { label: 'Course Level', value: course.level, icon: 'cap' },
  { label: 'Mode of Learning', value: course.mode, icon: 'clock' },
  { label: 'Duration', value: course.duration, icon: 'book' },
  { label: 'Eligibility', value: course.eligibility, icon: 'check' },
]

export default function Courses() {
  return (
    <section id="courses" className="section-pad bg-[#EAF4F8]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Courses &amp; Fees</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Programmes Offered at Synergy
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            A career-focused nursing degree designed to build strong clinical skills and a deep
            sense of professional responsibility.
          </p>
        </div>

        <div className="mt-9 grid gap-8">
          {COURSES.map((course) => (
            <article
              key={course.name}
              className="reveal group grid overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100 card-lift lg:grid-cols-[380px_1fr]"
            >
              {/* Visual side */}
              <div className="relative min-h-[240px] overflow-hidden bg-brand-800">
                <img
                  src={`${import.meta.env.BASE_URL}images/Synergy-Hospital-Miraj.jpg`}
                  alt={`${course.name} — clinical training at Synergy Hospital, Miraj`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-900/30 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-950">
                    Flagship Programme
                  </span>
                  <h3 className="mt-2.5 font-display text-2xl font-bold text-white">{course.name}</h3>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col p-7 sm:p-9">
                <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {meta(course).map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon name={m.icon} className="w-5 h-5" />
                      </span>
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-widest text-navy-500">{m.label}</dt>
                        <dd className="mt-0.5 text-sm font-semibold text-navy-900">{m.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 border-t border-dashed border-navy-200 pt-6 text-sm sm:text-[15px] leading-relaxed text-navy-800">
                  {course.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-navy-500">Fees</p>
                    <p className="font-display text-xl font-bold text-brand-700">₹ 72,000/-</p>
                    <p className="text-xs text-navy-600">as listed by the college</p>
                  </div>
                  <Link to="/admissions" className="btn-primary">
                    Apply Now
                    <Icon name="arrowRight" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-navy-600">
          Admissions are granted as per Maharashtra University of Health Sciences (MUHS) and state
          CET/NEET norms. Contact the college office for the current fee structure and seat availability.
        </p>
      </div>
    </section>
  )
}
