export default function Hero() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-center">
      {/* Text */}
      <div className="space-y-4">
        <p className="text-sm tracking-wide text-zinc-500 dark:text-zinc-400">Denver, CO · Front‑End Developer</p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Justin Caldwell
        </h1>

        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          I build clean, accessible, high‑performance web apps. 10+ years crafting
          responsive UIs, WCAG‑compliant patterns, and developer‑friendly systems.
        </p>

        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>• Shipped <strong>150+ responsive sites</strong> for financial institutions</li>
          <li>• Led “QA Helper” (flags 20+ ADA/QA issues before review)</li>
          <li>• Built library of assets to cut install time & errors</li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <a href="/resume.pdf" className="rounded-lg border px-4 py-2 defaultButton">View Resume</a>
          <a
            className="rounded-lg border px-4 py-2 defaultButton"
            href={`mailto:justinstede@yahoo.com?subject=${encodeURIComponent('Portfolio inquiry — Justin Caldwell')}`}
          >
            Email me
          </a>
          <a
            className="rounded-lg border px-4 py-2 defaultButton"
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
                        bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900">
          <span className="text-3xl font-semibold">JC</span>
        </div>
      </div>
    </div>
  )
}
