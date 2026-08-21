import { useInView, useCountUp } from '../hooks/useInView'

export default function AboutResume() {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className="grid gap-6">
      {/* Intro blurb */}
      <p className={`text-lg fade-up ${inView ? 'is-visible' : ''}`}>
        Over the past decade, I've delivered 200+ high-performing, accessible sites while leading projects that improve speed, quality, and developer workflows.
        I focus on WCAG‑compliant UI, responsive systems, and developer tools that speed delivery and improve quality.
      </p>

      {/* Quick facts — staggered counter tiles */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        <CountFact k="Years"        target={10}  suffix="+" inView={inView} delay={80}  />
        <CountFact k="Sites shipped" target={200} suffix="+" inView={inView} delay={200} />
        <Fact k="WCAG 2.2 / 508" v="✓" sub="federal + international accessibility standards" inView={inView} delay={320} />
        <Fact k="Leadership" v="Lead Dev (2023→)" inView={inView} delay={440} />
      </div>

      {/* Highlights */}
      <ul className={`space-y-2 fade-up ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: inView ? '500ms' : '0ms' }}>
        <li>• Led development of a <strong>QA Helper</strong> that flags 20+ common ADA/QA issues before review.</li>
        <li>• Built <strong>Graphics Asset Library</strong> and <strong>Code Asset Library</strong> to cut install time &amp; errors.</li>
        <li>• Collaborated across teams to <strong>align goals, refine processes, and streamline</strong> project flow.</li>
      </ul>
    </div>
  )
}

function CountFact({ k, target, suffix = '', inView, delay = 0 }) {
  const count = useCountUp(target, 1400, inView)

  return (
    <div
      className={`fade-up ${inView ? 'is-visible' : ''}
        border border-stone-300 dark:border-stone-600 space:border-stone-600
        bg-stone-50 dark:bg-stone-800 space:bg-stone-800
        text-stone-700 dark:text-stone-200 space:text-stone-200
        hover:shadow-md rounded-lg p-3 text-center duration-200
        neon:bg-rose-600 light:bg-white transition-colors duration-400
        group tron:bg-transparent tron:border-red-700 tron:border-[2px]
        tron:hover:bg-black/50 tron:hover:shadow-tron tron:hover:animate-tronpulse`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <div className="
        text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 space:text-stone-400
        neon:text-rose-200 neon:group-hover:text-yellow-400 duration-400
        tron:text-red-400 tron:group-hover:text-red-600 transition-colors duration-400">
        {k}
      </div>
      <div className="
        text-xl font-semibold provenData group-hover:text-lime-600 space:group-hover:text-yellow-500
        neon:text-white neon:group-hover:text-yellow-400 duration-400
        tron:text-red-500 tron:group-hover:text-white transition-colors duration-400">
        {count}{suffix}
      </div>
    </div>
  )
}

function Fact({ k, v, sub, inView, delay = 0 }) {
  return (
    <div
      className={`fade-up ${inView ? 'is-visible' : ''}
        border border-stone-300 dark:border-stone-600 space:border-stone-600
        bg-stone-50 dark:bg-stone-800 space:bg-stone-800
        text-stone-700 dark:text-stone-200 space:text-stone-200
        hover:shadow-md rounded-lg p-3 text-center duration-200
        neon:bg-rose-600 light:bg-white transition-colors duration-400
        group tron:bg-transparent tron:border-red-700 tron:border-[2px]
        tron:hover:bg-black/50 tron:hover:shadow-tron tron:hover:animate-tronpulse`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <div className="
        text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 space:text-stone-400
        neon:text-rose-200 neon:group-hover:text-yellow-400 duration-400
        tron:text-red-400 tron:group-hover:text-red-600 transition-colors duration-400">
        {k}
      </div>
      <div className="
        text-xl font-semibold provenData group-hover:text-lime-600 space:group-hover:text-yellow-500
        neon:text-white neon:group-hover:text-yellow-400 duration-400
        tron:text-red-500 tron:group-hover:text-white transition-colors duration-400">
        {v}
      </div>
      {sub && (
        <div className="text-xs mt-1 text-stone-400 dark:text-stone-500 space:text-stone-500 leading-tight">{sub}</div>
      )}
    </div>
  )
}
