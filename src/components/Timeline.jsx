import { useMemo, useState } from 'react'
import timeline from '../data/timeline.json'

export default function Timeline() {
  // Derive unique categories from data
  const categories = useMemo(() => {
    const set = new Set(timeline.map(t => t.category || 'Other'))
    return ['All', ...Array.from(set)]
  }, [])

  const [active, setActive] = useState('All')

  const items = useMemo(() => {
    return active === 'All'
      ? timeline
      : timeline.filter(t => (t.category || 'Other') === active)
  }, [active])

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
                          ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                          : 'bg-white dark:bg-stone-900'
                        }
                        defaultButton`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <ul className="grid gap-3">
        {items.map((t, i) => (
          <li key={`${t.title}-${i}`} className="
          border rounded-lg p-4 projectHighlights
          light:bg-white neon:bg-rose-600 neon:hover:bg-yellow-400  transition-colors duration-400
           group
          ">
            <div className="flex items-center justify-between gap-3">
              <h3 className="
              text-lg font-semibold
              neon:text-rose-200 neon:group-hover:text-rose-600  transition-colors duration-400
              ">{t.title}</h3>
              <span className="
              text-xs px-2 py-1 rounded-full border
              neon:border-rose-600 neon:bg-yellow-400 neon:text-black neon:group-hover:bg-rose-600 neon:group-hover:text-white transition-colors duration-400
              ">
                {t.category || 'Other'}
              </span>
            </div>
            {t.period && (
              <div className="
              text-sm text-stone-600 dark:text-stone-300 mt-1
              neon:text-yellow-400 neon:group-hover:text-pink-600
              ">{t.period}</div>
            )}
            {t.summary && (
              <p className="
              text-sm mt-2 text-stone-700 dark:text-stone-200
              neon:text-white neon:group-hover:text-black
              ">{t.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
