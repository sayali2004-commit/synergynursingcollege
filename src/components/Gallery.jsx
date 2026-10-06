import { useCallback, useEffect, useState } from 'react'
import { GALLERY_IMAGES } from '../data/siteContent'
import Icon from './Icon'

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect fill="#EAF4F8" width="800" height="600"/>
      <text x="400" y="310" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" fill="#0b2033">Image unavailable</text>
    </svg>`,
  )

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // index | null
  const [lightboxLoading, setLightboxLoading] = useState(true)

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    [],
  )
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length)),
    [],
  )

  useEffect(() => {
    if (lightbox === null) {
      setLightboxLoading(true)
      return undefined
    }
    setLightboxLoading(true)
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, prev, next])

  return (
    <section id="gallery" className="section-pad bg-[#EAF4F8]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal section-tag">Gallery</p>
          <h2 className="reveal heading-xl mt-4 text-balance" style={{ '--reveal-delay': '80ms' }}>
            Glimpses of Campus &amp; Hospital Life
          </h2>
          <p className="reveal mt-4 leading-relaxed text-navy-800" style={{ '--reveal-delay': '160ms' }}>
            Real photographs of our college and the associated Synergy Hospital, Miraj, captured
            from the institution&apos;s official physical facilities collection.
          </p>
        </div>

        <div className="mt-9 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-5">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(i)}
              className="reveal group relative mb-3 block w-full overflow-hidden rounded-xl break-inside-avoid bg-navy-50 ring-1 ring-navy-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/50 sm:mb-4"
              style={{ '--reveal-delay': `${(i % 10) * 60}ms` }}
              aria-label={`Open image ${i + 1} of ${GALLERY_IMAGES.length}`}
            >
              <img
                src={src}
                alt={`Synergy Nursing College campus facility ${i + 1}`}
                className="block w-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK
                }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/45 group-hover:opacity-100"
                aria-hidden="true"
              >
                <Icon name="zoom" className="w-8 h-8 text-white" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-900/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
            aria-label="Close preview"
          >
            <Icon name="close" className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600 sm:left-6"
            aria-label="Previous image"
          >
            <Icon name="chevronLeft" className="w-6 h-6" />
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl animate-fade-up">
            <div className="relative">
              {lightboxLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-navy-950/40">
                  <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" aria-label="Loading image" />
                </div>
              )}
              <img
                src={GALLERY_IMAGES[lightbox]}
                alt={`Synergy Nursing College, image ${lightbox + 1}`}
                className="max-h-[78vh] w-auto rounded-xl shadow-card-hover ring-1 ring-white/20"
                decoding="async"
                onLoad={() => setLightboxLoading(false)}
                onError={(e) => {
                  setLightboxLoading(false)
                  if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK
                }}
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-semibold text-white/70">
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600 sm:right-6"
            aria-label="Next image"
          >
            <Icon name="chevronRight" className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  )
}
