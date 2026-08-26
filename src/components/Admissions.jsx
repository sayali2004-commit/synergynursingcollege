import { ADMISSION_DOCS } from '../data/siteContent'
import Icon from './Icon'

const STEPS = [
  {
    title: 'Submit Application Form',
    text: 'Collect and submit your application form at the college office along with the required documents listed here.',
  },
  {
    title: 'Attach Certificates & Documents',
    text: 'Ensure all marks cards, certificates and photographs are attached with the application form as per the checklist.',
  },
  {
    title: 'Confirmation of Admission',
    text: 'Admissions are confirmed as per eligibility — 10+2 Science passed with CET / NEET — under MUHS and state norms.',
  },
]

export default function Admissions() {
  return (
    <section id="admissions" className="section-pad bg-[#F4F9FC]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Admission Procedure</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Your Path to a Nursing Career Starts Here
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Applying to Synergy College of Nursing is simple. Follow the steps below and keep the
            required documents ready.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-9 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative rounded-2xl bg-brand-50/70 p-7 ring-1 ring-brand-100 card-lift"
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <span className="font-display text-5xl font-bold text-brand-200" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* Documents */}
        <div id="documents" className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-950 to-brand-950 shadow-card-hover">
          <div className="grid lg:grid-cols-[1fr_320px]">
            <div className="p-8 sm:p-10">
              <h3 className="reveal font-display text-xl sm:text-2xl font-bold text-white">
                Documents to be attached with the application form
              </h3>
              <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ADMISSION_DOCS.map((doc, i) => (
                  <li
                    key={doc}
                    className="reveal flex items-center gap-3 border-b border-white/10 pb-4"
                    style={{ '--reveal-delay': `${i * 40}ms` }}
                  >
                    <Icon name="check" className="w-5 h-5 shrink-0 text-brand-400" />
                    <span className="text-sm font-semibold text-white/90">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="relative flex flex-col justify-center gap-5 bg-gradient-to-b from-brand-700 to-brand-900 p-8 sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon name="file" className="w-7 h-7" />
              </span>
              <p className="text-sm leading-relaxed text-white/85">
                Eligibility for B.Sc. Nursing: <strong className="text-white">10+2 Science passed</strong> with{' '}
                <strong className="text-white">CET / NEET compulsory</strong>.
              </p>
              <a href={`tel:+91${'8767778129'}`} className="btn !bg-white !text-brand-900 hover:-translate-y-0.5 hover:!bg-gold-400 hover:!text-navy-950 w-full">
                <Icon name="phone" className="w-4 h-4" />
                Call Admissions Desk
              </a>
              <a href="#contact" className="btn-outline-light w-full">
                Enquire Online
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
