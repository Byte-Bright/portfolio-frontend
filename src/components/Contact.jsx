export default function Contact() {
  return (
    <section id="contact" className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-8">
          Have a project in mind or want to connect? I’d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:justinstede@yahoo.com?subject=Portfolio Inquiry"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/justinstede"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/your-schedule-id"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
}
