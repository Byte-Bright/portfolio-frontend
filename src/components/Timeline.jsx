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
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                          : 'bg-white dark:bg-zinc-900'
                        }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <ul className="grid gap-3">
        {items.map((t, i) => (
          <li key={`${t.title}-${i}`} className="border rounded-lg p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full border">
                {t.category || 'Other'}
              </span>
            </div>
            {t.period && (
              <div className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{t.period}</div>
            )}
            {t.summary && (
              <p className="text-sm mt-2 text-zinc-700 dark:text-zinc-200">{t.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
