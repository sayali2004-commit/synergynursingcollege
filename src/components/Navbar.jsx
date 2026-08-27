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
            const isActive = activeMenu === item.label
            if (item.children) {
              return (
                <div key={item.label} className="group relative flex h-full items-center">
                  {item.label === 'About' ? (
                    <Link
                      to={item.children[0].to}
                      aria-haspopup="true"
                      aria-current={isActive ? 'true' : undefined}
                      onClick={(e) => {
                        e.preventDefault()
                        activate(item.label)
                        if (pathname === '/') {
                          const el = document.getElementById(item.children[0].to.slice(2))
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        } else {
                          window.location.hash = item.children[0].to.slice(1)
                        }
                      }}
                      className={itemCls(isActive)}
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                          isActive ? 'opacity-90' : 'opacity-70'
                        }`}
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.children[0].to.split('#')[0] || '/'}
                      aria-haspopup="true"
                      aria-current={isActive ? 'true' : undefined}
                      onClick={() => activate(item.label)}
                      className={itemCls(isActive)}
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                          isActive ? 'opacity-90' : 'opacity-70'
                        }`}
                      />
                    </Link>
                  )}
                  <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-0.5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="min-w-[240px] overflow-hidden rounded-lg bg-white py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-navy-100">
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
                              className="block px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
                            >
                              {c.label}
                            </Link>
                          ) : (
                            <Link
                              to={c.to}
                              onClick={() => activate(item.label)}
                              className="block px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
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
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  activate(item.label)
                  if (item.to.includes('#')) {
                    e.preventDefault()
                    const hash = item.to.split('#')[1]
                    if (pathname === '/') {
                      const el = document.getElementById(hash)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = hash
                    }
                  }
                }}
                className={itemCls(isActive)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Link
          to="/admissions"
          className="btn absolute right-5 top-1/2 hidden -translate-y-1/2 !bg-gold-400 !px-5 !py-2 !text-[13px] !text-royal-900 hover:!bg-gold-500 2xl:inline-flex"
        >
          Apply Now
        </Link>
      </div>

      {/* Mobile — compact 60px bar */}
      <div className="flex h-[60px] items-center justify-between px-4 lg:hidden">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${COLLEGE.name} — Home`}>
          <img src={IMAGES.logo} alt="" className="h-9 w-auto rounded ring-1 ring-navy-100" />
          <span className="font-serif text-[15px] font-bold leading-tight text-royal-800">
            Synergy College
            <span className="block font-sans text-[9px] font-bold uppercase tracking-widest text-royal-600">
              of Nursing · Miraj
            </span>
          </span>
        </Link>
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
                            className="mb-0.5 block rounded-md px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
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
                            className="mb-0.5 block rounded-md px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
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
                    const hash = item.to.split('#')[1]
                    if (pathname === '/') {
                      const el = document.getElementById(hash)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = hash
                    }
                  }
                }}
                className="block border-b border-navy-50 py-3 text-[15px] font-semibold text-royal-800 transition-colors hover:text-royal-600"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/admissions"
            onClick={() => { activate('Admissions'); setOpen(false) }}
            className="btn !bg-gold-400 !text-royal-900 mt-3 w-full hover:!bg-gold-500"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
