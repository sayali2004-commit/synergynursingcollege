import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function ScrollHandler() {
  const { pathname, hash, state } = useLocation()

  useEffect(() => {
    const scrollToId = hash ? hash.slice(1) : state?.scrollTo

    if (scrollToId) {
      let cancelled = false

      const tryScroll = (attempt) => {
        if (cancelled) return
        const el = document.getElementById(scrollToId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempt < 50) {
          setTimeout(() => tryScroll(attempt + 1), 100)
        }
      }

      const timer = setTimeout(() => tryScroll(0), 200)
      return () => { cancelled = true; clearTimeout(timer) }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash, state])

  return null
}
