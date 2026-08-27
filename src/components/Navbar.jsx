import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLLEGE, IMAGES } from '../data/siteContent'
import Icon from './Icon'

const MENU = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  {
    label: 'Academics',
    children: [
      { label: 'Courses & Fees', to: '/academics#courses' },
      { label: 'MUHS Mandate', to: '/academics#notices' },
    ],
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Facilities', to: '/campus-life#facilities' },
      { label: 'Photo Gallery', to: '/campus-life#gallery' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Procedure & Documents', to: '/admissions#admissions' },
      { label: 'Courses & Eligibility', to: '/academics#courses' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]

const ROUTE_ACTIVE = {
  '/': 'Home',
  '/academics': 'Academics',
  '/campus-life': 'Campus Life',
  '/admissions': 'Admissions',
  '/contact': 'Contact Us',
}

function hashToMenu(h) {
  if (h === 'about' || h === 'why-us' || h === 'college') return 'About'
  if (h === 'courses') return 'Academics'
  if (h === 'facilities' || h === 'gallery') return 'Campus Life'
  if (h === 'admissions') return 'Admissions'
  if (h === 'notices') return 'Academics'
  if (h === 'contact') return 'Contact Us'
  return 'Home'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [pinned, setPinned] = useState(null)
  const { pathname, hash } = useLocation()

  const activeMenu = (() => {
    if (pinned) return pinned
    if (pathname === '/' && hash) return hashToMenu(hash.slice(1))
    return ROUTE_ACTIVE[pathname] || 'Home'
  })()

  const activate = (label) => setPinned(label)

  useEffect(() => {
    setPinned(null)
  }, [pathname, hash])

  const navLinkCls = (isActive) =>
    `nav-link group relative inline-flex items-center gap-1.5 px-1 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
      isActive
        ? 'active-underline text-royal-600'
        : 'text-navy-700 hover:text-royal-600'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100/60 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]">
      {/* Desktop */}
      <div className="relative hidden lg:block">
        <div className="container-x flex h-[72px] items-center justify-between">
          {/* Nav items — left-aligned after TopHeader */}
          <nav className="flex items-center gap-0.5" aria-label="Primary">
            {MENU.map((item) => {
              const isActive = activeMenu === item.label
              if (item.children) {
                return (
                  <div key={item.label} className="group relative flex h-full items-center">
                    <Link
                      to={item.children[0].to.split('#')[0] || '/'}
                      aria-haspopup="true"
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => {
                        e.preventDefault()
                        activate(item.label)
                        if (item.children[0].to.startsWith('/#') && pathname === '/') {
                          const el = document.getElementById(item.children[0].to.slice(2))
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        } else if (item.children[0].to.startsWith('/#')) {
                          window.location.hash = item.children[0].to.slice(1)
                        }
                      }}
                      className={navLinkCls(isActive)}
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className="h-3 w-3 opacity-50 transition-all duration-300 group-hover:rotate-180 group-hover:opacity-100"
                      />
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full z-50 translate-y-0 pt-3 opacity-0 transition-all duration-250 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="min-w-[220px] overflow-hidden rounded-xl border border-navy-100/80 bg-white/95 py-2 shadow-[0_16px_48px_-12px_rgba(11,60,93,0.18)] backdrop-blur-xl">
                        {item.children.map((c) => (
                          <div key={`${c.label}-${c.to}`}>
                            {c.to.startsWith('/#') ? (
                              <Link
                                to={c.to}
                                onClick={(e) => {
                                  e.preventDefault()
                                  activate(item.label)
                                  if (pathname === '/') {
                                    const el = document.getElementById(c.to.slice(2))
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                  } else {
                                    window.location.hash = c.to.slice(1)
                                  }
                                }}
                                className="dropdown-item block px-5 py-2.5 text-[13.5px] font-medium text-navy-700 transition-all duration-200 hover:bg-royal-50/80 hover:text-royal-600 hover:pl-6"
                              >
                                {c.label}
                              </Link>
                            ) : (
                              <Link
                                to={c.to}
                                onClick={() => activate(item.label)}
                                className="dropdown-item block px-5 py-2.5 text-[13.5px] font-medium text-navy-700 transition-all duration-200 hover:bg-royal-50/80 hover:text-royal-600 hover:pl-6"
                              >
                                {c.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    activate(item.label)
                    if (item.to.includes('#')) {
                      e.preventDefault()
                      const h = item.to.split('#')[1]
                      if (pathname === '/') {
                        const el = document.getElementById(h)
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      } else {
                        window.location.hash = h
                      }
                    }
                  }}
                  className={navLinkCls(isActive)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Apply Now CTA */}
          <Link
            to="/admissions"
            className="hidden shrink-0 rounded-full bg-gradient-to-r from-royal-600 to-royal-700 px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_2px_12px_rgba(25,118,210,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:from-royal-700 hover:to-royal-800 hover:shadow-[0_6px_20px_rgba(25,118,210,0.4)] 2xl:inline-flex"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-[64px] items-center justify-between px-4 lg:hidden">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${COLLEGE.name} — Home`}>
          <img src={IMAGES.logo} alt="" className="h-10 w-auto rounded-lg ring-1 ring-navy-100 shadow-sm" />
          <span className="font-display text-[15px] font-bold leading-tight text-navy-900">
            Synergy College
            <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-royal-600">
              of Nursing · Miraj
            </span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-700 transition-all duration-200 hover:bg-royal-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-royal-500/30"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100/60 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-1 px-4 pb-5 pt-3" aria-label="Mobile">
          {MENU.map((item, i) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                    activeMenu === item.label
                      ? 'bg-royal-50 text-royal-600'
                      : 'text-navy-800 hover:bg-navy-50'
                  }`}
                >
                  {item.label}
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 text-navy-400 transition-transform duration-300 ${
                      expanded === i ? 'rotate-180 text-royal-500' : ''
                    }`}
                  />
                </button>
                {expanded === i && (
                  <div className="ml-3 mt-0.5 space-y-0.5 border-l-2 border-royal-100 pl-3">
                    {item.children.map((c) => (
                      <div key={`${c.label}-${c.to}`}>
                        {c.to.startsWith('/#') ? (
                          <Link
                            to={c.to}
                            onClick={(e) => {
                              e.preventDefault()
                              activate(item.label)
                              setOpen(false)
                              if (pathname === '/') {
                                const el = document.getElementById(c.to.slice(2))
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              } else {
                                window.location.hash = c.to.slice(1)
                              }
                            }}
                            className="block rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-navy-600 transition-colors duration-200 hover:bg-royal-50 hover:text-royal-600"
                          >
                            {c.label}
                          </Link>
                        ) : (
                          <Link
                            to={c.to}
                            onClick={() => {
                              activate(item.label)
                              setOpen(false)
                            }}
                            className="block rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-navy-600 transition-colors duration-200 hover:bg-royal-50 hover:text-royal-600"
                          >
                            {c.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => {
                  activate(item.label)
                  setOpen(false)
                  if (item.to.includes('#')) {
                    e.preventDefault()
                    const h = item.to.split('#')[1]
                    if (pathname === '/') {
                      const el = document.getElementById(h)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = h
                    }
                  }
                }}
                className={`block rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                  activeMenu === item.label
                    ? 'bg-royal-50 text-royal-600'
                    : 'text-navy-800 hover:bg-navy-50'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/admissions"
            onClick={() => { activate('Admissions'); setOpen(false) }}
            className="mt-2 block w-full rounded-full bg-gradient-to-r from-royal-600 to-royal-700 py-3 text-center text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
