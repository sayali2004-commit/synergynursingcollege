import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'Synergy College of Nursing, Miraj'
const BASE_TITLE = 'B.Sc. Nursing College in Sangli, Maharashtra · MUHS Affiliated'

const PAGE_META = {
  '/': {
    title: `${SITE} | ${BASE_TITLE}`,
    description:
      'MUHS-affiliated B.Sc. Nursing college in Miraj, Sangli District. Clinical training at Synergy Hospital. Part of Uma Trust. Admissions open. Call +91 9765998191.',
  },
  '/academics': {
    title: `Academics & B.Sc. Nursing Fees | ${SITE}`,
    description:
      'B.Sc. Nursing programme at Synergy College of Nursing, Miraj — 4-year degree affiliated to MUHS Nashik. Fees ₹80,000/- per year as per FRA. Eligibility 10+2 Science (CET/NEET).',
  },
  '/admissions': {
    title: `Admissions Open | B.Sc. Nursing Admissions in Miraj, Sangli`,
    description:
      'Apply for B.Sc. Nursing at Synergy College of Nursing, Miraj (Sangli). Admission procedure, documents required and counselling details. Call +91 9765998191.',
  },
  '/campus-life': {
    title: `Campus Life & Facilities | ${SITE}`,
    description:
      'Explore campus facilities and student life at Synergy College of Nursing, Miraj — skills labs, clinical exposure at Synergy Hospital, and college gallery.',
  },
  '/contact': {
    title: `Contact Us | ${SITE}, Miraj 416410`,
    description:
      'Synergy College of Nursing, Usmania Moholla, Maji Sainik Vasahat, 100 Ft Road, Miraj 416410, Sangli District, Maharashtra. Phone +91 9765998191. Email info@synergynursingcollege.in.',
  },
  '/mandate': {
    title: `MUHS Mandate & Notices | ${SITE}`,
    description:
      'MUHS Mandate annexure documents for Synergy College of Nursing, Miraj — academic years 2026–27, 2025–26 and 2024–25 available for download.',
  },
}

const SITE_URL = 'https://synergynursingcollege.vercel.app'

export default function useSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/']
    document.title = meta.title

    const setMeta = (selector, attr, key, content) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    setMeta(
      'meta[property="og:url"]',
      'property',
      'og:url',
      `${SITE_URL}${pathname === '/' ? '/' : pathname}`,
    )
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute(
      'href',
      `${SITE_URL}${pathname === '/' ? '/' : pathname}`,
    )
  }, [pathname])
}
