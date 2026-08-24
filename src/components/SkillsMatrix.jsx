import data from '../data/skills-matrix.json'
import { useInView } from '../hooks/useInView'

export default function SkillsMatrix() {
  const [gridRef, gridInView] = useInView()

  return (
    <div className="grid gap-6">
      <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 overflow-visible">
        {data.map((s, i) => (
          <article
            key={`${s.name}-${i}`}
            className={`fade-up card-lift ${gridInView ? 'is-visible' : ''}
              border border-stone-300 dark:border-stone-600 space:border-stone-600
              bg-stone-50 dark:bg-stone-800 space:bg-stone-800
              text-stone-700 dark:text-stone-200 space:text-stone-200
              rounded-lg p-3 transition group
              neon:bg-rose-600 neon:text-white neon:hover:text-black neon:hover:bg-yellow-400 duration-400
              tron:bg-transparent tron:border-red-700 tron:border-[2px]
              tron:hover:shadow-tron tron:hover:animate-tronpulse`}
            style={{ '--enter-delay': gridInView ? `${i * 55}ms` : '0ms' }}
            tabIndex={0}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium text-stone-500 dark:text-stone-500 space:text-stone-500
                group-hover:text-teal-600 dark:group-hover:text-lime-600 space:group-hover:text-violet-400
                neon:text-rose-200 neon:group-hover:text-rose-600
                tron:text-red-700 tron:group-hover:text-white
                transition-colors duration-400">
                {s.name}
              </h3>
            </div>
            <div className="text-xs mt-1 tron:text-red-400 tron:group-hover:text-red-700">
              {s.category || 'Other'}
            </div>
            {/* Evidence links re-enabled once real URLs are confirmed */}
            {/* {s.evidence && (
              <a
                href={s.evidence}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-sm underline decoration-2 underline-offset-4"
              >
                Example →
              </a>
            )} */}
          </article>
        ))}
      </div>
    </div>
  )
}
