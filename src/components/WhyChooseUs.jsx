import { WHY_US } from '../data/siteContent'
import Icon from './Icon'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-[#EAF4F8]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Why Choose Us</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Why Students Choose Synergy Nursing College
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            From experienced faculty to real hospital exposure, everything at Synergy is built to
            help you become a confident, compassionate nurse.
          </p>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const alt = i % 2 === 1
            const accentText = alt ? 'text-brand-600' : 'text-royal-600'
            // Unique geometric D-shape / curved silhouette per card
            const shapes = [
              'rounded-[16px] rounded-r-[48px] sm:pr-10', // large smooth curve on the right (D-shape)
              'rounded-[16px] rounded-t-[44px] pt-8 sm:pt-9', // curved outward top edge
              'rounded-[16px] rounded-b-[44px] pb-9', // curved bottom edge
              'rounded-[16px] rounded-l-[48px] sm:pl-10', // mirrored D — left arch
              'rounded-[16px] rounded-br-[44px] pb-9', // geometric bottom-right curve
              'rounded-[16px] rounded-tr-[44px] rounded-bl-[44px]', // diagonal curved corners
            ]
            const showDots = i !== 0 && i !== 5
            const showTab = i !== 0 && i !== 2 && i !== 4
            return (
              <div key={item.title} className="reveal" style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
                <article
                  className={`group relative flex h-full min-h-[196px] flex-col gap-4 overflow-hidden bg-white p-5 shadow-[0_12px_35px_-14px_rgba(11,60,93,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-18px_rgba(25,118,210,0.30)] sm:flex-row sm:gap-5 ${shapes[i]} ${
                    alt ? 'ring-1 ring-brand-300' : 'ring-1 ring-royal-300'
                  }`}
                >
                  {/* Decorative dotted pattern — top right */}
                  {showDots && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-4 hidden h-9 w-12 opacity-70 [background-image:radial-gradient(circle,rgba(25,118,210,0.30)_1.4px,transparent_1.5px)] [background-size:11px_11px] sm:block"
                    />
                  )}
                  {/* Decorative corner accent — bottom right */}
                  {showTab && (
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-0 right-0 h-7 w-12 rounded-tl-[14px] opacity-90 ${alt ? 'bg-gradient-to-l from-brand-500 to-royal-600' : 'bg-gradient-to-l from-royal-600 to-brand-500'}`}
                    />
                  )}

                  {/* Floating shield / hexagon icon badge */}
                  <span className="relative block h-14 w-14 shrink-0 drop-shadow-[0_10px_18px_rgba(25,118,210,0.30)] sm:h-[68px] sm:w-[68px]">
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${alt ? 'from-brand-500 to-royal-600' : 'from-royal-600 to-brand-500'} [clip-path:polygon(25%_2%,75%_2%,98%_50%,75%_98%,25%_98%,2%_50%)]`}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-[3px] bg-white [clip-path:polygon(25%_2%,75%_2%,98%_50%,75%_98%,25%_98%,2%_50%)]"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                  </span>

                  {/* Content */}
                  <div className="relative z-10 flex min-w-0 flex-1 flex-col items-start">
                    <h3 className="text-[15px] font-bold leading-snug text-navy-950">{item.title}</h3>
                    <span
                      className={`mt-2 h-[2.5px] w-10 rounded-full ${alt ? 'bg-brand-500' : 'bg-royal-600'}`}
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700">{item.text}</p>
                    <a
                      href="#contact"
                      className={`mt-auto inline-flex items-center gap-1.5 pt-3 text-[13px] font-semibold transition-colors duration-300 hover:text-gold-600 ${accentText}`}
                    >
                      Read More
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </a>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
