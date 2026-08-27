import { useState } from 'react'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

const INFO = [
  {
    icon: 'pin',
    label: 'Visit Us',
    lines: COLLEGE.addressLines,
  },
  {
    icon: 'phone',
    label: 'Talk To Us',
    lines: COLLEGE.phones.map((p) => `+91 ${p}`),
    hrefs: COLLEGE.phones.map((p) => `tel:+91${p}`),
  },
  {
    icon: 'mail',
    label: 'Write To Us',
    lines: [COLLEGE.email],
    hrefs: [`mailto:${COLLEGE.email}`],
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: 'B.Sc. Nursing', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Admission enquiry, ${form.course} (${form.name})`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCourse of interest: ${form.course}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${COLLEGE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad bg-[#F4F9FC]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Contact Us</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            We&apos;d Love to Hear From You
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Have a question about admissions, courses or campus life? Reach out, our team is
            happy to help.
          </p>
        </div>

        {/* Info cards */}
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {INFO.map((item, i) => (
            <div
              key={item.label}
              className="reveal rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-center card-lift"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-card">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy-950">{item.label}</h3>
              <div className="mt-2 space-y-0.5">
                {item.lines.map((line, j) =>
                  item.hrefs ? (
                    <a
                      key={line}
                      href={item.hrefs[j]}
                      className="block text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm leading-relaxed text-navy-700">
                      {line}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="reveal rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100 sm:p-9">
            <h3 className="font-display text-xl font-bold text-navy-950">Send an Enquiry</h3>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-brand-50 p-6 text-center" role="status">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Icon name="check" className="w-7 h-7" />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-navy-950">Thank you!</p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700">
                  Your email draft has been opened. If it didn&apos;t open automatically, write to us
                  directly at{' '}
                  <a href={`mailto:${COLLEGE.email}`} className="font-bold text-brand-700 underline underline-offset-2">
                    {COLLEGE.email}
                  </a>{' '}
                  or call{' '}
                  <a href={`tel:+91${COLLEGE.phones[0]}`} className="font-bold text-brand-700 underline underline-offset-2">
                    +91 {COLLEGE.phones[0]}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-700">
                      Full Name *
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-navy-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-700">
                      Phone *
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91"
                      pattern="[0-9+ -]{10,15}"
                      className="w-full rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-navy-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-700">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-navy-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-700">
                      Course of Interest
                    </span>
                    <select
                      value={form.course}
                      onChange={update('course')}
                      className="w-full rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                    >
                      <option>B.Sc. Nursing</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-navy-700">
                    Message *
                  </span>
                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us how we can help…"
                    className="w-full resize-none rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-navy-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                  />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <Icon name="send" className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="reveal overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100 min-h-[420px]" style={{ '--reveal-delay': '120ms' }}>
            <iframe
              title={`${COLLEGE.name} location map`}
              src="https://www.google.com/maps?q=Synergy%20College%20of%20Nursing%20Miraj%20Maharashtra&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
