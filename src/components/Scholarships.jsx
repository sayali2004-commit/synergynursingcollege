import { Link } from 'react-router-dom'
import { SCHOLARSHIPS } from '../data/siteContent'
import Icon from './Icon'

const scholarshipMeta = [
  { label: 'Programme', value: 'B.Sc. Nursing (4 Years)', icon: 'cap' },
  { label: 'Eligible Categories', value: 'SC / ST / VJNT / NT / SBC / OBC', icon: 'users' },
  { label: 'Tuition Fee Payable', value: '₹ 0/- (100% Free Admission)', icon: 'check' },
  { label: 'Government Scheme', value: 'MahaDBT · Social Welfare Dept.', icon: 'badge' },
]

const requiredDocs = [
  'Caste Certificate (जातीचे प्रमाणपत्र)',
  'Caste Validity Certificate (जात पडताळणी प्रमाणपत्र)',
  'Income Certificate from Tahsildar (उत्पन्नाचा दाखला)',
  'Non-Creamy Layer Certificate (where applicable for VJNT/SBC/OBC)',
  'Maharashtra State Domicile & Nationality Certificate',
  'Aadhaar Card linked with Bank Account',
  '10th & 12th Marks Cards & Passing Certificates',
  'CET / NEET Scorecard & College Allotment Letter',
]

export default function Scholarships() {
  return (
    <section id="scholarships" className="section-pad bg-white scroll-mt-20">
      <div className="container-x">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Scholarships &amp; Freeships</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            100% Free Admission for Caste &amp; Category Students
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Synergy College of Nursing is committed to inclusive healthcare education. Under Government of
            Maharashtra social welfare regulations and MahaDBT schemes, eligible reserved category students
            receive full scholarship support and 100% free admission.
          </p>
        </div>

        {/* Main Flagship Scholarship Card (Same structure as Courses & Fees) */}
        <div className="mt-9 grid gap-8">
          <article className="reveal group grid overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100 card-lift lg:grid-cols-[380px_1fr]">
            {/* Visual side */}
            <div className="relative min-h-[260px] overflow-hidden bg-brand-800">
              <img
                src={`${import.meta.env.BASE_URL}images/student-activity/student-scholarship.jpeg`}
                alt="Synergy Nursing College Students - 100% Free Admission for Caste Students"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/40 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-950 shadow-sm">
                  100% Free Admission
                </span>
                <h3 className="mt-2.5 font-display text-2xl font-bold text-white">
                  Reserved Category Freeship
                </h3>
                <p className="mt-1 text-xs font-semibold text-white/80">
                  Government of Maharashtra MahaDBT Portal
                </p>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col p-7 sm:p-9">
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {scholarshipMeta.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon name={m.icon} className="w-5 h-5" />
                    </span>
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-widest text-navy-500">
                        {m.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-navy-900">{m.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-6 border-t border-dashed border-navy-200 pt-6 space-y-3 text-sm sm:text-[15px] leading-relaxed text-navy-800">
                <p>
                  <strong>Special Admission Scheme:</strong> Students belonging to reserved caste categories
                  (<strong>SC, ST, VJNT, NT, SBC, OBC</strong>) are entitled to <strong>100% Free Admission</strong> and
                  tuition fee reimbursement through the Social Welfare Department and Tribal Development Department,
                  Government of Maharashtra.
                </p>
                <p className="text-xs sm:text-sm text-navy-700">
                  Students submitting valid Caste and Caste Validity Certificates incur <strong>₹ 0/- tuition fee</strong> at
                  the time of admission. Uma Trust and the Synergy College office facilitate all paperwork and online
                  portal applications on-campus.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7 border-t border-navy-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                    Tuition Fee for Eligible Caste Students
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600">
                    ₹ 0/- <span className="text-base font-bold text-navy-800">(100% Free Admission)</span>
                  </p>
                  <p className="text-xs text-navy-600">
                    Zero tuition fee payable · Full scholarship via MahaDBT / Social Welfare Schemes
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/admissions" className="btn-primary">
                    Apply for Free Admission
                    <Icon name="arrowRight" className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919765998191"
                    className="inline-flex items-center gap-2 rounded-xl border border-navy-300 px-4 py-2.5 text-sm font-bold text-navy-800 transition hover:bg-navy-50"
                  >
                    <Icon name="phone" className="w-4 h-4 text-brand-600" />
                    Admissions Desk
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Detailed Category-wise Scholarship Cards */}
        <div className="mt-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
              Category-Wise Scholarship &amp; Freeship Matrix
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-navy-700">
              Clear breakdown of financial benefits and applicable Maharashtra Government departments.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SCHOLARSHIPS.map((item, idx) => (
              <div
                key={item.category}
                className="reveal flex flex-col justify-between rounded-2xl border border-navy-100 bg-[#F8FBFC] p-6 shadow-sm transition hover:shadow-md hover:border-brand-300 card-lift"
                style={{ '--reveal-delay': `${idx * 80}ms` }}
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-900">
                    <Icon name="check" className="w-3.5 h-3.5 text-emerald-600" />
                    {item.benefit}
                  </div>
                  <h4 className="mt-3 font-display text-lg font-bold text-navy-950">{item.category}</h4>
                  <p className="mt-1 text-[11px] font-semibold text-brand-700 uppercase tracking-wide">
                    {item.department}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-navy-700">{item.description}</p>
                </div>

                <div className="mt-5 border-t border-navy-200/60 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-navy-500">
                    Required for Claim:
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-navy-800">
                    {item.documents.map((doc) => (
                      <li key={doc} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="truncate">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between text-xs font-bold text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1.5">
                    <span>Effective Fee:</span>
                    <span className="font-extrabold text-sm">{item.tuitionFee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Checklist for Free Admission */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 p-7 sm:p-10 text-white shadow-card">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-300 ring-1 ring-gold-400/40">
                <Icon name="badge" className="w-4 h-4 text-gold-400" />
                <span>Eligibility Checklist</span>
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Documents Required to Avail 100% Free Admission
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                Keep the following certificates ready in original and photocopies at the time of admission
                to claim zero-fee admission benefits under government reservation norms:
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {requiredDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <Icon name="check" className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 sm:p-7 backdrop-blur-md ring-1 ring-white/15 text-center flex flex-col justify-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon name="trust" className="w-8 h-8" />
              </span>
              <h4 className="mt-4 font-display text-lg font-bold text-white">
                College MahaDBT Helpdesk
              </h4>
              <p className="mt-2 text-xs text-white/80 leading-relaxed">
                Need assistance with caste validity or MahaDBT online scholarship form submission? Our
                dedicated admission cell provides complete hand-holding on campus.
              </p>
              <div className="mt-6 space-y-2.5">
                <a
                  href="tel:+919765998191"
                  className="btn !bg-emerald-500 !text-white hover:!bg-emerald-600 w-full justify-center"
                >
                  <Icon name="phone" className="w-4 h-4" />
                  Call: +91 9765998191
                </a>
                <Link to="/contact" className="btn-outline-light w-full justify-center">
                  Enquire at College Office
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory note */}
        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-navy-600">
          * Free admission and freeship benefits are subject to Government of Maharashtra Social Welfare,
          Tribal Development, and VJNT/OBC/SBC department rules and successful verification on the MahaDBT
          scholarship portal. Contact the college administrative office for complete guidance.
        </p>
      </div>
    </section>
  )
}
