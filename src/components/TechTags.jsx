export default function TechTags() {
  const tags = ['React', 'Tailwind', 'JSON', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Python (API)']
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(t => (
        <span key={t} className="text-sm border rounded-xl px-3 py-1">
          {t}
        </span>
      ))}
    </div>
  )
}
