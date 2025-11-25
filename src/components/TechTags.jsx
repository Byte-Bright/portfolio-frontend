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
                  className="px-3 py-1 rounded-lg border border-stone-300 dark:border-stone-600 
                  hover:bg-lime-600 hover:text-white neon:border-rose-600
                  bg-stone-50 dark:bg-stone-800 neon:bg-rose-600 text-sm 
                  neon:hover:bg-yellow-400 dark:hover:bg-lime-600
                  text-stone-700 dark:text-stone-200 neon:text-white hover:neon:text-black
                  hover:shadow-md hover:scale-105 transform transition duration-400
                  ">
                  {item.name}
                </span>

                {/* Tooltip */}
                {item.tooltip && (
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max max-w-xs
                               bg-stone-900 text-white text-sm rounded py-1 px-2 opacity-0 
                               border border-stone-500 neon:border-rose-200 
                               group-hover:opacity-100 pointer-events-none 
                               neon:bg-pink-400 
                               transition-opacity duration-200 defaultTooltip"
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
