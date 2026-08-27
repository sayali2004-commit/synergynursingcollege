import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IMAGES } from '../data/siteContent'
import Icon from './Icon'

const MENU = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
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
  const [pinned, setPinned] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const navLinkCls = (isActive) =>
    `nav-link group relative inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-300 rounded-lg hover:bg-navy-50/60 ${
      isActive
        ? 'active-underline text-royal-600'
        : 'text-navy-700 hover:text-royal-600'
    }`

  return (
    <header
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
            className="shrink-0 ml-4 rounded-full bg-gradient-to-r from-royal-600 to-royal-700 px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_2px_12px_rgba(25,118,210,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:from-royal-700 hover:to-royal-800 hover:shadow-[0_6px_20px_rgba(25,118,210,0.4)]"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-[56px] items-center justify-between px-4 lg:hidden">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Synergy College, Home">
          <img
            src={IMAGES.logo}
            alt=""
            className="h-9 w-auto rounded-lg ring-1 ring-navy-100 shadow-sm"
          />
          <span className="font-display text-[14px] font-bold leading-tight text-navy-900">
            Synergy College
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy-700 transition-all duration-200 hover:bg-royal-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-royal-500/30"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100/60 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-1 px-4 pb-5 pt-3" aria-label="Mobile">
          {MENU.map((item) => (
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
          ))}
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
