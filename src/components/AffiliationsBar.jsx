import { AFFILIATIONS } from '../data/siteContent'

export default function AffiliationsBar() {
  return (
    <div className="border-b border-navy-100/70 bg-gradient-to-r from-[#EAF6FA] via-[#F3FAFC] to-[#EAF6FA]">
      <div className="container-x">
        <ul className="flex flex-col divide-y divide-navy-200/50 py-1 sm:flex-row sm:items-stretch sm:divide-x sm:divide-y-0 sm:py-2 lg:py-3">
          {AFFILIATIONS.map((item) => (
            <li
              key={item.name}
              className="flex min-w-0 flex-1 items-center gap-3 px-2 py-2.5 sm:px-4 sm:py-1 xl:gap-4 xl:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-[0_2px_10px_rgba(15,48,87,0.08)] ring-1 ring-navy-100/80 xl:h-14 xl:w-14">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="h-full w-full rounded-full object-contain"
                  loading="eager"
                />
              </span>
              <div className="min-w-0 leading-snug">
                <p className="text-[11.5px] font-bold tracking-tight text-navy-900 sm:text-[12px] xl:text-[13.5px]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-royal-700 sm:text-[11px] xl:text-[12px]">
                  {item.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

