export default function Hero() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-center">
      {/* Text */}
      <div className="space-y-4">
        <p className="text-sm tracking-wide">Denver, CO · Front‑End Developer</p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight neon:text-rose-600">
          Justin Caldwell
        </h1>

        <p className="text-lg">
          I build clean, accessible, high‑performance web apps. 10+ years crafting
          responsive UIs, WCAG best practices, and developer‑friendly systems.
        </p>

        <ul className="text-sm space-y-1">
          <li>• I build interfaces that work <strong>for everyone, everywhere</strong></li>
          <li>• I have optimized processes to deliver <strong>more in less time</strong></li>
          <li>• I bring <strong>calm, clarity, and focus</strong> to fast-paced projects</li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="rounded-lg border border-stone-400 hover:border-lime-700 hover:bg-lime-600 hover:text-white  dark:hover:bg-lime-700/50 transition-colors px-4 py-2 neon:bg-yellow-400 neon:border:yellow-400 neon:hover:bg-rose-600 neon:hover:border-rose-800 tron:border-red-700 tron:hover:bg-red-700/50 tron:hover:text-white"
            href={`mailto:justinstede@yahoo.com?subject=${encodeURIComponent('Portfolio inquiry — Justin Caldwell')}`}
          >
            Email me
          </a>
          <a
            className="rounded-lg border border-stone-400 hover:border-lime-700 hover:bg-lime-600 hover:text-white  dark:hover:bg-lime-700/50 transition-colors px-4 py-2 neon:bg-yellow-400 neon:border:yellow-400 neon:hover:bg-rose-600 neon:hover:border-rose-800 tron:border-red-700 tron:hover:bg-red-700/50 tron:hover:text-white"
            href="https://www.linkedin.com/in/justin-caldwell" target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Visual (optional headshot or fallback) */}
      <div className="order-first md:order-last">
        {/* If you have a headshot, drop it in /src/assets and uncomment: */}
        {/* <img src={headshot} alt="Justin Caldwell" className="w-48 h-48 rounded-2xl object-cover shadow" /> */}

        {/* Simple fallback badge */}
        <div className="mx-auto w-48 h-48 rounded-2xl grid place-items-center border shadow-sm
                        bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900 tron:border-red-700 headshot">
          
        </div>
      </div>
    </div>
  )
}
