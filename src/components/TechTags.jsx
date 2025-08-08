import skills from '../data/skills.json'

export default function TechTags() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

      {skills.map((group, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-lg font-medium mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <div
                key={i}
                className="relative group"
              >
                <span
                  className="px-3 py-1 rounded-lg border border-zinc-300 dark:border-zinc-600
                             bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-200
                             hover:shadow-md hover:scale-105 transform transition"
                >
                  {item.name}
                </span>

                {/* Tooltip */}
                {item.tooltip && (
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max max-w-xs
                               bg-zinc-900 text-white text-xs rounded py-1 px-2 opacity-0
                               group-hover:opacity-100 pointer-events-none
                               transition-opacity duration-200"
                  >
                    {item.tooltip}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
