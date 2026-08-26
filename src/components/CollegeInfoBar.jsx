const ITEMS = [
  'Affiliated to MUHS, Nashik',
  'Part of Uma Trust, Miraj',
  'Associated with Synergy Hospital, Miraj',
  'B.Sc. Nursing: 4 Years',
  'CET / NEET Compulsory',
]

export default function CollegeInfoBar() {
  return (
    <div className="bg-royal-800 text-white">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-3 text-center text-[11px] font-medium sm:text-[13px]">
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {i > 0 && <span className="h-4 w-px bg-white/35" aria-hidden="true" />}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
