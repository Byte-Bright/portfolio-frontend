import timeline from '../data/timeline.json'

export default function Timeline() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Project timeline</h2>
      <ul className="space-y-2">
        {timeline.map((t,i)=>(
          <li key={i} className="border rounded-lg p-3">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-300">{t.period}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
