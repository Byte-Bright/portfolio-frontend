export default function AboutResume() {
  return (
    <div className="grid gap-4">
      <p>Brief about text goes here. Buttons below will link to view/download PDF.</p>
      <div className="flex gap-3">
        <a href="/resume.pdf" className="rounded-lg border px-4 py-2">View resume</a>
        <a href="/resume.pdf" download className="rounded-lg border px-4 py-2">Download PDF</a>
      </div>
    </div>
  )
}
