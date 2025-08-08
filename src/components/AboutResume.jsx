export default function AboutResume() {
  return (
    <div className="grid gap-6">
      {/* Intro blurb */}
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        Front‑End Developer with 10+ years building clean, accessible, high‑performance web apps.
        I focus on WCAG‑compliant UI, responsive systems, and developer tooling that speeds delivery
        without sacrificing quality.
      </p>

      {/* Quick facts */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        <Fact k="Years" v="10+" />
        <Fact k="Sites shipped" v="150+" />
        <Fact k="Accessibility" v="WCAG / 508" />
        <Fact k="Leadership" v="Lead Dev (2023→)" />
      </div>

      {/* Highlights */}
      <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
        <li>• Led development of a <strong>QA Helper</strong> that flags 20+ common ADA/QA issues before review.</li>
        <li>• Built <strong>Graphics Asset Library</strong> and <strong>Code Asset Library</strong> to cut install time & errors.</li>
      </ul>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <a href="/resume.pdf" className="rounded-lg border px-4 py-2">View résumé</a>
        <a href="/resume.pdf" download className="rounded-lg border px-4 py-2">Download PDF</a>
      </div>
    </div>
  )
}

function Fact({ k, v }) {
  return (
    <div className="border rounded-lg p-3 text-center">
      <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{k}</div>
      <div className="text-xl font-semibold">{v}</div>
    </div>
  )
}
