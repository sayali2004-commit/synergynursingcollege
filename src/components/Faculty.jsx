import { FACULTY } from '../data/siteContent'
import Icon from './Icon'

export default function Faculty() {
  return (
    <section id="faculty" className="section-pad bg-white scroll-mt-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Our Faculty</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Experienced &amp; Dedicated Faculty Members
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Our team of highly qualified nursing educators is committed to academic excellence, clinical
            training, and the holistic development of every student at Synergy College of Nursing, Miraj.
          </p>
        </div>

        {FACULTY.length === 0 ? (
          <div className="reveal mt-10 rounded-3xl border border-dashed border-navy-200 bg-[#F8FBFC] p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name="users" className="w-7 h-7" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
              Faculty Profiles Coming Soon
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Detailed faculty profiles with photographs, designations, and qualifications will be published shortly.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACULTY.map((member, idx) => (
              <div
                key={member.name}
                className="reveal group flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md hover:border-brand-300 card-lift"
                style={{ '--reveal-delay': `${idx * 80}ms` }}
              >
                <div className="h-28 w-28 overflow-hidden rounded-full bg-navy-100 ring-2 ring-brand-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">{member.designation}</p>
                <p className="mt-1 text-xs text-navy-600">{member.qualification}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
