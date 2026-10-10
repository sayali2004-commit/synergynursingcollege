import { Link } from 'react-router-dom'
import { NOTICES, STUDENT_FACILITIES, EXAM_INFO, SCHOLARSHIPS, CODE_OF_CONDUCT, NURSING_ETHICS, COUNSELLING_SERVICES } from '../data/siteContent'
import Icon from './Icon'

export default function StudentsCorner() {
  const currentNotices = NOTICES[0]

  return (
    <section id="students-corner" className="section-pad bg-[#F8FBFC] scroll-mt-20">
      <div className="container-x">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Students Corner</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Everything You Need as a Student
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Access examination information, important notices, scholarship details, and campus facilities
            all in one place for Synergy College of Nursing students.
          </p>
        </div>

        {/* Examination & Results */}
        <div id="examinations" className="mt-12 scroll-mt-20">
          <div className="rounded-3xl bg-white p-7 sm:p-10 shadow-card ring-1 ring-navy-100">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
                  <Icon name="cap" className="w-4 h-4 text-brand-600" />
                  <span>Examination &amp; Results</span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-navy-950">
                  Examinations as per MUHS &amp; INC Guidelines
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">{EXAM_INFO.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {EXAM_INFO.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                      <Icon name="check" className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 p-6 sm:p-7 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                  <Icon name="arrowRight" className="w-6 h-6" />
                </span>
                <h4 className="mt-4 font-display text-lg font-bold text-white">Check Your Results</h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">{EXAM_INFO.resultsNote}</p>
                <a
                  href={EXAM_INFO.resultsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn !bg-emerald-500 !text-white hover:!bg-emerald-600 w-full justify-center mt-5"
                >
                  <Icon name="arrowRight" className="w-4 h-4" />
                  Visit MUHS Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Student Notices */}
        <div id="student-notices" className="mt-10 scroll-mt-20">
          <div className="rounded-3xl bg-white p-7 sm:p-10 shadow-card ring-1 ring-navy-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-700 ring-1 ring-gold-400/40">
                  <Icon name="badge" className="w-4 h-4 text-gold-600" />
                  <span>Student Notices</span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-navy-950">
                  Latest Notices &amp; Announcements
                </h3>
              </div>
              <Link to="/mandate" className="btn-primary">
                View All Notices
                <Icon name="arrowRight" className="w-4 h-4" />
              </Link>
            </div>

            {currentNotices && (
              <div className="mt-6 rounded-2xl border border-navy-100 bg-[#F8FBFC] p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">
                  {currentNotices.year}
                </p>
                <p className="mt-2 text-sm font-semibold text-navy-900">{currentNotices.highlight}</p>
                <div className="mt-4 flex flex-wrap gap-2 [&>*]:w-[calc(50%-0.25rem)] sm:[&>*]:w-auto">
                  {currentNotices.files.slice(0, 8).map((file) => (
                    <a
                      key={file.label}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 transition hover:border-brand-300 hover:bg-brand-50"
                    >
                      <Icon name="arrowRight" className="w-3 h-3 text-brand-600" />
                      {file.label}
                    </a>
                  ))}
                  {currentNotices.files.length > 8 && (
                    <span className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-navy-500">
                      +{currentNotices.files.length - 8} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scholarships Quick Access */}
        <div id="student-scholarships" className="mt-10 scroll-mt-20">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-brand-800 p-7 sm:p-10 text-white shadow-card">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/30">
                  <Icon name="check" className="w-4 h-4" />
                  <span>Scholarships</span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-white">
                  Scholarships &amp; Freeships for B.Sc. Nursing &amp; GNM
                </h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">
                  Eligible students can apply for government scholarships through the MahaDBT portal.
                  Benefits are available for SC, ST, OBC, VJNT, SBC, SEBC, EWS, and Minority categories
                  based on category, family income, and scheme rules.
                </p>
                <div className="scholarship-tags mt-4 flex flex-wrap gap-2">
                  {SCHOLARSHIPS.slice(0, 6).map((s) => {
                    const mobileOrderMap = {
                      'SC / Nav-Buddhist Students': 1,
                      'ST Students': 2,
                      'OBC Students': 3,
                      'SBC Students': 4,
                      'SEBC Students': 5,
                      'VJ-A / NT-B / NT-C / NT-D (VJNT)': 6,
                    }
                    return (
                      <span
                        key={s.category}
                        style={{ '--order': mobileOrderMap[s.category] }}
                        className="scholarship-tag rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white"
                      >
                        {s.category}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/academics/scholarships" className="btn !bg-white !text-emerald-800 hover:!bg-emerald-50 w-full justify-center">
                  View Scholarship Details
                  <Icon name="arrowRight" className="w-4 h-4" />
                </Link>
                <a
                  href="https://mahadbt2.maharashtra.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light w-full justify-center"
                >
                  Apply on MahaDBT Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Student Facilities */}
        <div id="student-facilities" className="mt-12 scroll-mt-20">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
              Student Facilities
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-navy-700">
              Campus facilities and services designed to support your academic journey and wellbeing.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_FACILITIES.map((facility, idx) => (
              <div
                key={facility.title}
                className="reveal flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-brand-300 card-lift"
                style={{ '--reveal-delay': `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={facility.icon} className="w-5 h-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-navy-950">{facility.title}</h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-navy-700">{facility.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-4">
                  {facility.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-navy-600">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Conduct */}
        <div id="code-of-conduct" className="mt-12 scroll-mt-20">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
              Code of Conduct for Students
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-navy-700 leading-relaxed">
              {CODE_OF_CONDUCT.description}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CODE_OF_CONDUCT.sections.map((section, idx) => (
              <div
                key={section.title}
                className="reveal flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-brand-300 card-lift"
                style={{ '--reveal-delay': `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon name={section.icon} className="w-5 h-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-navy-950">{section.title}</h4>
                </div>
                <ul className="mt-4 space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-navy-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Ethics for Nursing Students */}
        <div id="nursing-ethics" className="mt-12 scroll-mt-20">
          <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 p-7 sm:p-10 text-white shadow-card">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-300 ring-1 ring-gold-400/40">
                <Icon name="badge" className="w-4 h-4 text-gold-400" />
                <span>Code of Ethics</span>
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-white">
                Code of Ethics for Nursing Students
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                {NURSING_ETHICS.description}
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-4xl mx-auto">
              {NURSING_ETHICS.principles.map((principle, i) => (
                <li key={i} className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3.5 text-[11.5px] sm:text-xs text-white/90 ring-1 ring-white/10">
                  <Icon name="check" className="w-3.5 h-3.5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Counselling Cell */}
        <div id="counselling" className="mt-12 scroll-mt-20">
          <div className="rounded-3xl border border-navy-100 bg-white p-7 sm:p-10 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                  <Icon name="trust" className="w-4 h-4 text-emerald-600" />
                  <span>Counselling Cell</span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-navy-950">
                  Psychological Support &amp; Counselling
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {COUNSELLING_SERVICES.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {COUNSELLING_SERVICES.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                      <Icon name="check" className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 sm:p-7 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30">
                  <Icon name="phone" className="w-6 h-6" />
                </span>
                <h4 className="mt-4 font-display text-lg font-bold text-white">
                  Need to Talk?
                </h4>
                <p className="mt-2 text-xs text-white/85 leading-relaxed">
                  Our counselling services are confidential. Reach out whenever you need support, we are here for you.
                </p>
                <a
                  href="tel:+919765998191"
                  className="btn !bg-white !text-emerald-800 hover:!bg-emerald-50 w-full justify-center mt-5"
                >
                  <Icon name="phone" className="w-4 h-4" />
                  Call: +91 9765998191
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
