import { useMemo, useState } from 'react'
import data from '../data/skills-matrix.json'

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert']

export default function SkillsMatrix() {
  // Build category list from data
  const categories = useMemo(() => {
    const set = new Set(data.map(s => s.category || 'Other'))
    return ['All', ...Array.from(set)]
  }, [])

  const [activeCat, setActiveCat] = useState('All')
  const [activeLevel, setActiveLevel] = useState('All')

  const filtered = useMemo(() => {
    return data.filter(s =>
      (activeCat === 'All' || (s.category || 'Other') === activeCat) &&
      (activeLevel === 'All' || (s.level || '').toLowerCase() === activeLevel.toLowerCase())
    )
  }, [activeCat, activeLevel])

  return (
    <div className="grid gap-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <Filter label="Category" options={categories} value={activeCat} onChange={setActiveCat} />
        <Filter label="Level" options={LEVELS} value={activeLevel} onChange={setActiveLevel} />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filtered.map((s, i) => (
          <article key={`${s.name}-${i}`} className="border rounded-lg p-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium">{s.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full border">{s.level}</span>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{s.category || 'Other'}</div>
            {s.evidence && (
              <a
                href={s.evidence}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-sm underline decoration-2 underline-offset-4"
              >
                Evidence →
              </a>
            )}
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No skills match the selected filters.
        </p>
      )}
    </div>
  )
}

function Filter({ label, options, value, onChange }) {
  return (
    <label className="text-sm flex items-center gap-2">
      <span className="text-zinc-600 dark:text-zinc-300">{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="rounded-md border bg-white dark:bg-zinc-900 px-2 py-1"
      >
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}
