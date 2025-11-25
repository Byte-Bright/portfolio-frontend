export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="mb-8">
          Have a project in mind or want to connect? I’d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:justinstede@yahoo.com?subject=Portfolio Inquiry"
            className="px-5 py-2 rounded-lg focus:outline-none border border-stone-500 hover:bg-lime-600 hover:border-lime-600 hover:text-white neon:border-yellow-400 neon:bg-yellow-400 neon:hover:bg-rose-600 neon:hover:border-rose-700 dark:hover:bg-lime-600/50 tron:hover:bg-red-700/50 tron:hover:border-red-800 transition-colors duration-400"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/justinstede"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg focus:outline-none border border-stone-500 hover:bg-lime-600 hover:border-lime-600 hover:text-white neon:border-yellow-400 neon:bg-yellow-400 neon:hover:bg-rose-600 neon:hover:border-rose-700 dark:hover:bg-lime-600/50 tron:hover:bg-red-700/50 tron:hover:border-red-800 transition-colors duration-400"
          >
            LinkedIn
          </a>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/your-schedule-id"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg focus:outline-none border border-stone-500 hover:bg-lime-600 hover:border-lime-600 hover:text-white neon:border-yellow-400 neon:bg-yellow-400 neon:hover:bg-rose-600 neon:hover:border-rose-700 dark:hover:bg-lime-600/50 tron:hover:bg-red-700/50 tron:hover:border-red-800 transition-colors duration-400"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
}
