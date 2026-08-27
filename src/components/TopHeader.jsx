import { COLLEGE, IMAGES } from '../data/siteContent'

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-royal-800 via-royal-600 to-royal-800 text-white">
      <div className="container-x flex items-center gap-4 sm:gap-6 lg:gap-8 py-5 lg:min-h-[170px] lg:py-6">
        {/* Logo badge */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-xl ring-4 ring-gold-400/60 sm:h-24 sm:w-24 lg:h-32 lg:w-32">
          <img
            src={IMAGES.logo}
            alt={`${COLLEGE.name} logo`}
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        {/* College name, center-left */}
        <div className="min-w-0">
          <h1 className="font-display text-lg sm:text-2xl lg:text-3xl xl:text-[2.25rem] font-extrabold leading-tight text-gold-400 text-balance">
            Synergy College of Nursing
          </h1>
          <p className="mt-1.5 text-[11px] font-bold tracking-wide text-white/85 sm:text-sm lg:text-base">
            Part of Uma Trust &amp; Synergy Hospital, Miraj
          </p>
        </div>

        {/* Society block, right */}
        <div className="ml-auto hidden shrink-0 items-center gap-4 md:flex lg:gap-5">
          <p className="whitespace-nowrap font-serif text-3xl font-bold tracking-wide text-white lg:text-5xl">
            UMA TRUST
          </p>
          <span className="h-12 w-px bg-white/40 lg:h-16" aria-hidden="true" />
          <div className="leading-tight">
            <p className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-white lg:text-2xl">
              Synergy Hospital
            </p>
            <p className="mt-1 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.12em] text-white/70 lg:text-[11px]">
              Miraj · Maharashtra
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
