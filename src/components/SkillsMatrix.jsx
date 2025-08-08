import skills from '../data/skills.json'

export default function SkillsMatrix() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Skills matrix</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map(s => (
          <div key={s.name} className="border rounded-lg p-3">
            <div className="font-medium">{s.name}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-300">{s.level}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
