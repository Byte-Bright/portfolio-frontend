import { useMemo, useState, useEffect } from 'react'
import timeline from '../data/timeline.json'

export default function Timeline() {
  const categories = useMemo(() => {
    const set = new Set(timeline.map(t => t.category || 'Other'))
    return ['All', ...Array.from(set)]
  }, [])

  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState({ open: false, project: null, index: 0, webcrop: false, fade: true })

  const items = useMemo(() => {
    return active === 'All'
      ? timeline
      : timeline.filter(t => (t.category || 'Other') === active)
  }, [active])

  const openLightbox = (project, index) => {
    if (!project.lightbox) return
    setLightbox({ open: true, project, index, webcrop: false, fade: true })
  }

  const closeLightbox = () => setLightbox({ open: false, project: null, index: 0, webcrop: false, fade: false })

  const nextImage = () => {
    setLightbox(l => ({
      ...l,
      index: (l.index + 1) % (l.project?.details?.screenshots?.length || 1),
      fade: false
    }))
    setTimeout(() => setLightbox(l => ({ ...l, fade: true })), 50)
  }

  const prevImage = () => {
    setLightbox(l => ({
      ...l,
      index:
        (l.index - 1 + (l.project?.details?.screenshots?.length || 1)) %
        (l.project?.details?.screenshots?.length || 1),
      fade: false
    }))
    setTimeout(() => setLightbox(l => ({ ...l, fade: true })), 50)
  }

  const toggleWebcrop = () => setLightbox(l => ({ ...l, webcrop: !l.webcrop }))

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox.open])

  // ✅ Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup in case of fast unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox.open])

  return (
    <div className="grid gap-6">
      {/* Tabs */}
      <div role="tablist" aria-label="Timeline categories" className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 rounded-lg border text-sm
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        ${active === cat
                          ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900 neon:bg-rose-600'
                          : 'bg-white dark:bg-stone-900 neon:bg-yellow-400 tron:bg-transparent tron:border-[2px] tron:border-red-700 tron:hover:shadow-tron tron:hover:animate-tronpulse'
                        }
                        `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <ul className="grid gap-3">
        {items.map((t, i) => (
          <li
            key={`${t.title}-${i}`}
            className="border rounded-lg p-4 projectHighlights
                       bg-stone-50 dark:bg-stone-800 dark:border-stone-600 
                       neon:bg-rose-600 neon:hover:bg-yellow-400 tron:bg-transparent tron:border-red-700 tron:border-[2px] tron:hover:shadow-tron tron:hover:animate-tronpulse
                       transition-colors duration-400 group"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold group-hover:text-lime-600
                             dark:group-hover:text-lime-500
                             neon:text-rose-200 neon:group-hover:text-rose-600
                             transition-colors duration-400 tron:text-red-700 tron:group-hover:text-white">
                {t.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full border
                               group-hover:text-white group-hover:bg-lime-600 
                               dark:border-stone-500 
                               neon:border-rose-200 neon:bg-transparent neon:text-white 
                               neon:group-hover:bg-rose-600 neon:group-hover:text-white
                               transition-colors duration-400 tron:border-red-700 tron:text-red-400 tron:group-hover:text-red-400 tron:group-hover:bg-red-700/50">
                {t.category || 'Other'}
              </span>
            </div>

            {t.period && (
              <div className="text-sm text-stone-600 dark:text-stone-300 mt-1
                              neon:text-yellow-400 neon:group-hover:text-pink-600 tron:text-red-500 tron:group-hover:text-white transition-colors duration-400">
                {t.period}
              </div>
            )}

            {t.summary && (
              <p className="text-sm mt-2 text-stone-700 dark:text-stone-200
                            neon:text-white neon:group-hover:text-black tron:text-red-400 tron:group-hover:text-white transition-colors duration-400">
                {t.summary}
              </p>
            )}

            {/* Always-expanded details */}
            {t.details && (
              <div className="mt-3 space-y-3 border-t pt-3 border-stone-200 dark:border-stone-700 neon:border-rose-200 tron:border-red-700">
                {t.details.description && (
                  <p className="text-sm text-stone-700 dark:text-stone-200 neon:text-white tron:text-red-400 transition-colors duration-400">
                    {t.details.description}
                  </p>
                )}

                {t.details.tools && (
                  <div className="flex flex-wrap gap-2 text-xs">
                    {t.details.tools.map((tool, j) => (
                      <span key={j}
                        className="px-2 py-1 border rounded bg-stone-100 dark:bg-stone-700 neon:bg-rose-400 neon:text-black tron:bg-transparent tron:border-red-700 tron:text-red-700 transition-colors duration-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Thumbnail scroller */}
                {t.details.screenshots && t.details.screenshots.length > 0 && (
                  <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-stone-400 dark:scrollbar-thumb-stone-600">
                    {t.details.screenshots.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt=""
                        onClick={() => openLightbox(t, idx)}
                        className={`h-28 w-auto rounded cursor-pointer border hover:opacity-80 transition 
                                    ${t.lightbox ? 'hover:scale-[1.02]' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-opacity duration-300"
          style={{ opacity: lightbox.fade ? 1 : 0 }}
        >
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-2xl">✕</button>

          <div className="flex items-center justify-center gap-4 w-full px-6">
            <button onClick={prevImage} className="text-white text-3xl hover:scale-110 transition">‹</button>

            <div className="max-w-[90vw] max-h-[80vh] flex items-center justify-center transition-opacity duration-300"
                 style={{ opacity: lightbox.fade ? 1 : 0 }}>
              {lightbox.webcrop && lightbox.project.webcrop ? (
                <div
                  className="w-[80%] max-w-[1920px] aspect-[16/9] overflow-y-auto overflow-x-hidden bg-black/90 rounded-lg flex justify-center items-start"
                >
                  <div className="w-full flex flex-col items-center">
                    <img
                      src={lightbox.project.details.screenshots[lightbox.index]}
                      alt=""
                      className="w-full h-auto object-top object-contain"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={lightbox.project.details.screenshots[lightbox.index]}
                  alt=""
                  className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg"
                />
              )}
            </div>

            <button onClick={nextImage} className="text-white text-3xl hover:scale-110 transition">›</button>
          </div>

          {lightbox.project.webcrop && (
            <button
              onClick={toggleWebcrop}
              className="absolute bottom-6 text-white border border-white/30 px-4 py-1 rounded hover:bg-white/10 transition"
            >
              🖥 {lightbox.webcrop ? 'Exit Desktop View' : 'Desktop Preview'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
