import { useCallback, useEffect, useMemo, useState } from 'react'
import { GALLERY_CATEGORIES, GALLERY_BY_CATEGORY } from '../data/siteContent'
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
  const [active, setActive] = useState(GALLERY_CATEGORIES[0].id)
  const [lightbox, setLightbox] = useState(null) // index | null
  const [lightboxLoading, setLightboxLoading] = useState(true)

  const images = useMemo(() => GALLERY_BY_CATEGORY[active] ?? [], [active])

  const close = useCallback(() => setLightbox(null), [])
  const open = useCallback((i) => {
    setLightbox(i)
    setLightboxLoading(true)
  }, [])
  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length))
    setLightboxLoading(true)
  }, [images.length])
  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length))
    setLightboxLoading(true)
  }, [images.length])

  useEffect(() => {
    if (lightbox === null) return undefined
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

        {/* Modern filter tabs */}
        <div
          className="reveal mt-8 flex justify-center"
          style={{ '--reveal-delay': '200ms' }}
          role="tablist"
          aria-label="Gallery categories"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-white/80 p-1.5 shadow-soft ring-1 ring-navy-100 backdrop-blur-md sm:gap-2 sm:p-2">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(cat.id)
                    setLightbox(null)
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[13px] font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40 sm:px-5 sm:text-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-600 to-royal-600 text-white shadow-lg shadow-brand-600/30'
                      : 'text-navy-600 hover:bg-navy-50 hover:text-brand-700'
                  }`}
                >
                  <span className="whitespace-nowrap">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Masonry grid — remounts on tab change to replay stagger animation */}
        <div
          key={active}
          className="mt-9 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-5"
          role="tabpanel"
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => open(i)}
              className="group relative mb-3 block w-full animate-fade-up overflow-hidden rounded-xl break-inside-avoid bg-navy-50 ring-1 ring-navy-200 transition-shadow duration-300 hover:shadow-card-hover hover:ring-brand-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/50 sm:mb-4"
              style={{ animationDelay: `${(i % 12) * 55}ms` }}
              aria-label={`Open image ${i + 1} of ${images.length}`}
            >
              <img
                src={src}
                alt={`Synergy Nursing College ${active} photo ${i + 1}`}
                className="block w-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK
                }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Icon name="zoom" className="h-5 w-5 text-white" />
                </span>
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
                src={images[lightbox]}
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
              {lightbox + 1} / {images.length}
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
