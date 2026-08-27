import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useReveal() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!targets.length) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname, hash])
}
