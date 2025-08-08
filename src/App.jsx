import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import TechTags from './components/TechTags.jsx'
import AboutResume from './components/AboutResume.jsx'
import Timeline from './components/Timeline.jsx'
import SkillsMatrix from './components/SkillsMatrix.jsx'
import Contact from './components/Contact.jsx'
import CodeTracker from './components/CodeTracker.jsx'
import Aurora from './components/Aurora.jsx'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 border-t first:border-0 dark:border-zinc-800">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const r = document.documentElement
    dark ? r.classList.add('dark') : r.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    
    <Aurora /> ,
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <nav className="flex gap-4 text-sm">
            <a href="#hero">Hello</a>
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#skills">Skills</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            onClick={() => setDark(d => !d)}
            className="rounded-lg border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>
      
      <main className="mx-auto max-w-6xl px-4">
        <Section id="hero" title="">
          <Hero />
        </Section>

        <Section id="about" title="About + Resume">
          <AboutResume />
        </Section>

        <Section id="tech" title="">
          <TechTags />
        </Section>

        <Section id="skills" title="Skills matrix">
          <SkillsMatrix />
        </Section>

        <Section id="timeline" title="Project timeline">
          <Timeline />
        </Section>

        <Section id="contact" title="">
          <Contact />
        </Section>
      </main>

      
      

      <CodeTracker />
    </div>
  )
}
