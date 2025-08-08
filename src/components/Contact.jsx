export default function Contact() {
  const subject = encodeURIComponent('Portfolio inquiry — Justin Caldwell')
  return (
    <div className="grid gap-3">
      <div className="flex gap-3 flex-wrap">
        <a className="border rounded-lg px-4 py-2"
           href={`mailto:justinstede@yahoo.com?subject=${subject}`}>
          Email
        </a>
        <a className="border rounded-lg px-4 py-2"
           href="https://www.linkedin.com/in/justin-caldwell" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="border rounded-lg px-4 py-2"
           href="https://calendar.google.com/" target="_blank" rel="noreferrer">
          Book a meeting
        </a>
      </div>
    </div>
  )
}
