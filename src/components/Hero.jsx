export default function Hero() {
  const btnClass =
    "defaultButton no-underline rounded-lg border border-stone-400 px-4 py-2 transition-all tron:border-red-700 tron:hover:bg-red-700/50 tron:hover:text-white"

  return (
    <div className="space-y-6">

      {/* Name row + accent headshot */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm tracking-widest uppercase mb-3 opacity-60">
            Denver, CO · Front‑End Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight neon:text-rose-600">
            Justin Caldwell
          </h1>
        </div>

        {/* Small circle accent headshot */}
        <img
          src="/assets/jcaldwell-headshot.jpg"
          alt="Justin Caldwell"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md flex-shrink-0 mt-6 ring-2 ring-stone-200 dark:ring-stone-700 space:ring-yellow-600/40"
        />
      </div>

      {/* Two-sentence blurb */}
      <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
        10+ years crafting responsive UIs, WCAG best practices, and developer‑friendly systems.
        I build clean, accessible, high‑performance web apps accessible to all users.
      </p>

      {/* CTA buttons: LinkedIn → Email → GitHub → Resume ↓ */}
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          className={btnClass}
          href="https://www.linkedin.com/in/justinstede"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={btnClass}
          href={`mailto:justinstede@yahoo.com?subject=${encodeURIComponent('Portfolio inquiry — Justin Caldwell')}`}
        >
          Email me
        </a>
        <a
          className={btnClass}
          href="https://github.com/jstede"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={btnClass}
          href="/justin-caldwell-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↓
        </a>
      </div>

    </div>
  )
}
