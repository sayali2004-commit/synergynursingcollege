import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IMAGES } from '../data/siteContent'
import Icon from './Icon'

const MENU = [
  { label: 'Home', to: '/' },
  { label: 'Hospitals', to: '/hospitals' },
  { label: 'Academics', to: '/academics', hasDropdown: true },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Mandate', to: '/mandate' },
  { label: 'Contact Us', to: '/contact' },
]

const ACADEMICS_DROPDOWN = [
  {
    label: 'Courses & Fees',
    to: '/academics#courses',
    icon: 'cap',
    description: 'B.Sc. Nursing & GNM programmes with fee structure',
  },
  {
    label: 'Scholarships',
    to: '/academics#scholarships',
    icon: 'check',
    description: 'MahaDBT scholarships & freeship details',
  },
  {
    label: 'Faculty',
    to: '/academics#faculty',
    icon: 'users',
    description: 'Experienced & dedicated teaching staff',
  },
  {
    label: 'Students Corner',
    to: '/academics#students-corner',
    icon: 'badge',
    description: 'Exams, notices, facilities & more',
  },
  {
    label: 'MUHS Mandate',
    to: '/academics#notices',
    icon: 'book',
    description: 'Official MUHS mandate documents',
  },
]

const ROUTE_ACTIVE = {
  '/': 'Home',
  '/hospitals': 'Hospitals',
  '/academics': 'Academics',
  '/campus-life': 'Campus Life',
  '/admissions': 'Admissions',
  '/mandate': 'Mandate',
  '/contact': 'Contact Us',
}

function hashToMenu(h) {
  if (h === 'about' || h === 'why-us' || h === 'college') return 'About'
  if (['courses', 'scholarships', 'faculty', 'students-corner', 'notices'].includes(h)) return 'Academics'
  if (h === 'facilities' || h === 'gallery') return 'Campus Life'
  if (h === 'admissions') return 'Admissions'
  if (h === 'notices') return 'Mandate'
  if (h === 'contact') return 'Contact Us'
  return 'Home'
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const open = mobileMenuOpen
  const setOpen = setMobileMenuOpen
  const [pinned, setPinned] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)
  const academicsTimeoutRef = useRef(null)
  const headerRef = useRef(null)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open && !academicsOpen) return
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false)
        setAcademicsOpen(false)
      }
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setAcademicsOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, setOpen, academicsOpen])

  const activeMenu = (() => {
    if (pinned) return pinned
    if (pathname === '/' && hash) return hashToMenu(hash.slice(1))
    return ROUTE_ACTIVE[pathname] || 'Home'
  })()

  const activate = (label) => setPinned(label)

  useEffect(() => {
    setPinned(null)
  }, [pathname, hash])

  const handleNavClick = (e, item) => {
    activate(item.label)
    if (!item.to.includes('#')) return

    e.preventDefault()
    const [routePath, hashId] = item.to.split('#')

    if (pathname === routePath || (pathname === '/' && routePath === '/')) {
      const el = document.getElementById(hashId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(routePath || '/', { state: { scrollTo: hashId } })
    }
  }

  const handleDropdownEnter = () => {
    if (academicsTimeoutRef.current) clearTimeout(academicsTimeoutRef.current)
    setAcademicsOpen(true)
  }

  const handleDropdownLeave = () => {
    academicsTimeoutRef.current = setTimeout(() => {
      setAcademicsOpen(false)
    }, 200)
  }

  const navLinkCls = (isActive) =>
    `nav-link group relative inline-flex items-center gap-1.5 px-2 py-2 text-[13px] xl:px-3 xl:text-[15px] font-semibold tracking-wide transition-colors duration-300 rounded-lg hover:bg-navy-50/60 whitespace-nowrap ${
      isActive
        ? 'active-underline text-royal-600'
        : 'text-navy-700 hover:text-royal-600'
    }`

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100/60 bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b-transparent'
      }`}
    >
      {/* Desktop */}
      <div className="relative hidden lg:block">
        <div className="container-x flex h-[72px] items-center justify-between">
          {/* Logo, visible only when scrolled */}
          <Link
            to="/"
            className={`flex items-center gap-3 shrink-0 transition-all duration-300 ${
              scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none w-0 overflow-hidden'
            }`}
          >
            <img
              src={IMAGES.logo}
              alt="Synergy College of Nursing logo"
              className="h-10 w-auto rounded-lg ring-1 ring-navy-100 shadow-sm"
            />
            <span className="font-display text-[16px] font-bold leading-tight text-navy-900 whitespace-nowrap">
              Synergy College of Nursing
            </span>
          </Link>

          {/* Nav links, centered when no logo, right-aligned when logo visible */}
          <nav
            className={`flex items-center gap-1 transition-all duration-300 ${
              scrolled ? 'ml-auto' : 'mx-auto'
            }`}
            aria-label="Primary"
          >
            {MENU.map((item) => {
              const isActive = activeMenu === item.label

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={item.to}
                      aria-current={isActive ? 'page' : undefined}
                      aria-expanded={academicsOpen}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.preventDefault()
                        activate(item.label)
                        setAcademicsOpen((v) => !v)
                        if (pathname !== '/academics') {
                          navigate('/academics')
                        }
                      }}
                      className={`${navLinkCls(isActive)} !gap-2`}
                    >
                      {item.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${academicsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-1/2 top-full z-50 mt-2 w-[340px] -translate-x-1/2 transition-all duration-300 ${
                        academicsOpen
                          ? 'pointer-events-auto translate-y-0 opacity-100 scale-100'
                          : 'pointer-events-none -translate-y-2 opacity-0 scale-95'
                      }`}
                    >
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <div className="h-4 w-4 rotate-45 rounded-sm bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.06)] ring-1 ring-navy-100/60" />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18),0_8px_24px_-8px_rgba(0,0,0,0.08)]">
                        {/* Header */}
                        <div className="border-b border-navy-50 bg-gradient-to-r from-royal-50/80 to-brand-50/50 px-5 py-3.5">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-royal-600">
                            Academics
                          </p>
                          <p className="mt-0.5 text-[11px] text-navy-500">
                            Explore programmes, faculty & resources
                          </p>
                        </div>

                        {/* Links */}
                        <div className="p-2">
                          {ACADEMICS_DROPDOWN.map((dropItem, idx) => (
                            <Link
                              key={dropItem.label}
                              to={dropItem.to.split('#')[0]}
                              onClick={(e) => {
                                e.preventDefault()
                                setAcademicsOpen(false)
                                activate('Academics')
                                const [, hashId] = dropItem.to.split('#')
                                if (pathname === '/academics') {
                                  const el = document.getElementById(hashId)
                                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                } else {
                                  navigate('/academics', { state: { scrollTo: hashId } })
                                }
                              }}
                              className="group flex items-start gap-3.5 rounded-xl px-3.5 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-royal-50/60 hover:to-brand-50/40"
                              style={{ animationDelay: `${idx * 40}ms` }}
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-royal-600 transition-all duration-200 group-hover:bg-royal-100 group-hover:scale-105">
                                <Icon name={dropItem.icon} className="w-[18px] h-[18px]" />
                              </span>
                              <div className="min-w-0">
                                <p className="text-[13.5px] font-bold text-navy-900 transition-colors group-hover:text-royal-700">
                                  {dropItem.label}
                                </p>
                                <p className="mt-0.5 text-[11.5px] leading-snug text-navy-500">
                                  {dropItem.description}
                                </p>
                              </div>
                              <svg
                                className="ml-auto mt-2 h-3.5 w-3.5 shrink-0 text-navy-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-royal-500 group-hover:opacity-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.to.includes('#') ? item.to.split('#')[0] || '/' : item.to}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  className={navLinkCls(isActive)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <Link
            to="/admissions"
            className="shrink-0 ml-2 xl:ml-4 rounded-full bg-gradient-to-r from-royal-600 to-royal-700 px-4 py-2 xl:px-6 xl:py-2.5 text-[11px] xl:text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_2px_12px_rgba(25,118,210,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:from-royal-700 hover:to-royal-800 hover:shadow-[0_6px_20px_rgba(25,118,210,0.4)]"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-[56px] items-center gap-3 px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-navy-700 transition-all duration-200 hover:bg-royal-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-royal-500/30"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Synergy College, Home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-sm ring-1 ring-navy-100">
            <img
              src={IMAGES.logo}
              alt=""
              className="h-full w-full rounded-full object-contain"
            />
          </span>
          <span className="font-display text-[14px] font-bold leading-tight text-navy-900 truncate">
            Synergy College
          </span>
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`relative z-10 overflow-hidden border-t border-navy-100/60 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-1 px-4 pb-5 pt-3" aria-label="Mobile">
          {MENU.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => {
                      activate(item.label)
                      if (pathname !== '/academics') navigate('/academics')
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                      activeMenu === item.label
                        ? 'bg-royal-50 text-royal-600'
                        : 'text-navy-800 hover:bg-navy-50'
                    }`}
                  >
                    {item.label}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-navy-100 pl-3">
                    {ACADEMICS_DROPDOWN.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        to={dropItem.to.split('#')[0]}
                        onClick={(e) => {
                          e.preventDefault()
                          setOpen(false)
                          activate('Academics')
                          const [, hashId] = dropItem.to.split('#')
                          if (pathname === '/academics') {
                            const el = document.getElementById(hashId)
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          } else {
                            navigate('/academics', { state: { scrollTo: hashId } })
                          }
                        }}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-navy-700 transition-colors hover:bg-royal-50 hover:text-royal-600"
                      >
                        <Icon name={dropItem.icon} className="w-4 h-4 text-royal-500" />
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.label}
                to={item.to.includes('#') ? item.to.split('#')[0] || '/' : item.to}
                onClick={(e) => {
                  handleNavClick(e, item)
                  setOpen(false)
                }}
                className={`block rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                  activeMenu === item.label
                    ? 'bg-royal-50 text-royal-600'
                    : 'text-navy-800 hover:bg-navy-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
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
