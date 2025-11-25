export default function AboutResume() {
  return (
    <div className="grid gap-6">
      {/* Intro blurb */}
      <p className="text-lg">
        Over the past decade, I’ve delivered 150+ high-performaning, accessible sites while leading projects that improve speed, quality, and developer workflows. 
        I focus on WCAG‑compliant UI, responsive systems, and developer tools that speed delivery and improve quality.
      </p>

      {/* Quick facts */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 ">
        <Fact k="Years" v="10+" />
        <Fact k="Sites shipped" v="150+" />
        <Fact k="Accessibility" v="WCAG / 508" />
        <Fact k="Leadership" v="Lead Dev (2023→)" />
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        <li>• Led development of a <strong>QA Helper</strong> that flags 20+ common ADA/QA issues before review.</li>
        <li>• Built <strong>Graphics Asset Library</strong> and <strong>Code Asset Library</strong> to cut install time & errors.</li>
        <li>• Collaborated across teams to <strong>align goals, refine processes, and streamline</strong> project flow.</li>
      </ul>

    </div>
  )
}

function Fact({ k, v }) {
  return (
    <div className="
    border border-stone-300 dark:border-stone-600 
    bg-stone-50 dark:bg-stone-800 
    text-stone-700 dark:text-stone-200 
    hover:shadow-md rounded-lg p-3 text-center duration-200 
    neon:bg-rose-600 light:bg-white transition-colors duration-400
    group tron:bg-transparent tron:border-red-700 tron:border-[2px] tron:hover:bg-black/50 tron:hover:shadow-tron tron:hover:animate-tronpulse
     ">
      <div className="
      text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400
      neon:text-rose-200
      neon:group-hover:text-yellow-400 duration-400
      tron:text-red-400 tron:group-hover:text-red-600 transition-colors duration-400
      ">{k}</div>
      <div className="
      text-xl font-semibold provenData group-hover:text-lime-600
      neon:text-white
      neon:group-hover:text-yellow-400 duration-400 
      tron:text-red-500 tron:group-hover:text-white transition-colors duration-400
      ">{v}</div>
    </div>
  )
}
