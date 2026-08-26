import { useEffect, useRef, useState } from 'react'
import { COLLEGE, IMAGES } from '../data/siteContent'
import Icon from './Icon'

const MENU = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'The College', href: '#college' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Courses & Fees', href: '#courses' },
      { label: 'MUHS Mandate', href: '#notices' },
    ],
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Facilities', href: '#facilities' },
      { label: 'Photo Gallery', href: '#gallery' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Procedure & Documents', href: '#admissions' },
      { label: 'Courses & Eligibility', href: '#courses' },
    ],
  },
  {
    label: 'Notices',
    children: [
      { label: 'MUHS Mandate 2025–26', href: '#notices' },
      { label: 'MUHS Mandate 2024–25', href: '#notices' },
    ],
  },
  { label: 'Contact Us', href: '#contact' },
]

// Each section is owned by EXACTLY ONE menu item — no shared ownership.
const SECTION_OWNER = {
  home: 'Home',
  about: 'About',
  'why-us': 'About',
  college: 'About',
  courses: 'Academics',
  facilities: 'Campus Life',
  gallery: 'Campus Life',
  admissions: 'Admissions',
  notices: 'Notices',
  contact: 'Contact Us',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [activeMenu, setActiveMenu] = useState('Home')
  const pinnedRef = useRef(null)

  useEffect(() => {
    const sections = Object.keys(SECTION_OWNER)
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const owner = SECTION_OWNER[e.target.id]
          // While a menu item is pinned (just clicked), ignore intermediate sections
          if (pinnedRef.current && owner !== pinnedRef.current) return
          if (pinnedRef.current === owner) pinnedRef.current = null
          setActiveMenu(owner)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Single source of truth: clicking a menu (or its submenu) activates ONLY that menu.
  const activate = (label) => {
    pinnedRef.current = label
    setActiveMenu(label)
  }

  const itemCls = (activeItem) =>
    `flex items-center gap-1.5 rounded-lg px-[18px] py-3 text-base font-medium transition-colors duration-200 ${
      activeItem ? 'bg-royal-600 text-white' : 'text-royal-600 hover:bg-royal-50 hover:text-royal-700'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      {/* Desktop — compact centered bar */}
      <div className="relative hidden lg:block">
        <nav className="container-x flex h-[66px] items-center justify-center gap-1" aria-label="Primary">
          {MENU.map((item) => {
            const activeItem = activeMenu === item.label
            if (item.children) {
              return (
                <div key={item.label} className="group relative flex h-full items-center">
                  <a
                    href={item.children[0].href}
                    aria-haspopup="true"
                    aria-current={activeItem ? 'true' : undefined}
                    onClick={() => activate(item.label)}
                    className={itemCls(activeItem)}
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                        activeItem ? 'opacity-90' : 'opacity-70'
                      }`}
                    />
                  </a>
                  <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-0.5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="min-w-[240px] overflow-hidden rounded-lg bg-white py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-navy-100">
                      {item.children.map((c) => (
                        <a
                          key={`${c.label}-${c.href}`}
                          href={c.href}
                          onClick={() => activate(item.label)}
                          className="block px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeItem ? 'true' : undefined}
                onClick={() => activate(item.label)}
                className={itemCls(activeItem)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <a
          href="#admissions"
          className="btn absolute right-5 top-1/2 hidden -translate-y-1/2 !bg-gold-400 !px-5 !py-2 !text-[13px] !text-royal-900 hover:!bg-gold-500 2xl:inline-flex"
        >
          Apply Now
        </a>
      </div>

      {/* Mobile — compact 60px bar */}
      <div className="flex h-[60px] items-center justify-between px-4 lg:hidden">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${COLLEGE.name} — Home`}>
          <img src={IMAGES.logo} alt="" className="h-9 w-auto rounded ring-1 ring-navy-100" />
          <span className="font-serif text-[15px] font-bold leading-tight text-royal-800">
            Synergy College
            <span className="block font-sans text-[9px] font-bold uppercase tracking-widest text-royal-600">
              of Nursing · Miraj
            </span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-royal-800 transition-colors hover:bg-royal-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-royal-500/40"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown — accordion */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 pt-1" aria-label="Mobile">
          {MENU.map((item, i) =>
            item.children ? (
              <div key={item.label} className="border-b border-navy-50 last:border-0">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                  className={`flex w-full items-center justify-between py-3 text-[15px] font-semibold ${
                    activeMenu === item.label ? 'text-royal-600' : 'text-royal-800'
                  }`}
                >
                  {item.label}
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 text-royal-500 transition-transform duration-200 ${
                      expanded === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expanded === i && (
                  <div className="pb-2 pl-3">
                    {item.children.map((c) => (
                      <a
                        key={`${c.label}-${c.href}`}
                        href={c.href}
                        onClick={() => {
                          activate(item.label)
                          setOpen(false)
                        }}
                        className="mb-0.5 block rounded-md px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  activate(item.label)
                  setOpen(false)
                }}
                className="block border-b border-navy-50 py-3 text-[15px] font-semibold text-royal-800 transition-colors hover:text-royal-600"
              >
                {item.label}
              </a>
            ),
          )}
          <a href="#admissions" onClick={() => { activate('Admissions'); setOpen(false) }} className="btn !bg-gold-400 !text-royal-900 mt-3 w-full hover:!bg-gold-500">
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  )
}
