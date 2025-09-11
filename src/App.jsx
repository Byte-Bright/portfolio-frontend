import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import TechTags from './components/TechTags.jsx'
import AboutResume from './components/AboutResume.jsx'
import Timeline from './components/Timeline.jsx'
import SkillsMatrix from './components/SkillsMatrix.jsx'
import Contact from './components/Contact.jsx'
import CodeTracker from './components/CodeTracker.jsx'
import Aurora from './components/Aurora.jsx'
import ThemeToggle from "./components/ThemeToggle";

function Section({ id, title, children }) {
  return (
    <section 
      id={id} 
      className="
        py-16 border-t first:border-0 
        dark:border-stone-800 
        light:border-stone-300 
        neon:border-rose-400
      "
    >
      {title && (
        <h2 className="
          text-2xl font-semibold mb-4 
          [&]:text-stone-800 
          dark:[&]:text-stone-200 
          light:[&]:text-stone-950 
          neon:[&]:text-zinc-950
        ">
          {title}
        </h2>
      )}
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
    <div className="min-h-screen transition-colors duration-700">
      <header className="
        sticky top-0 z-50 backdrop-blur 
        bg-white/70 text-stone-800 border-b border-stone-200
        dark:bg-stone-900/70 dark:text-stone-200 dark:border-stone-800
        light:bg-stone-100/80 light:text-stone-950 light:border-stone-300
        neon:bg-pink-700/80 neon:text-rose-100 neon:border-rose-200
      ">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <nav className="flex gap-4 text-sm">
            <a href="#hero" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Hello</a>
            <a href="#about" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Why Me?</a>
            <a href="#tech" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Tech Stack</a>
            <a href="#skills" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Skills Matrix</a>
            <a href="#timeline" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Project Highlights</a>
            <a href="#contact" className="
              hover:text-lime-700 
              dark:hover:text-lime-400 
              light:hover:text-cyan-600 
              neon:hover:text-rose-300
            ">Get in Touch</a>
          </nav>
          <ThemeToggle />   {/* 👈 toggle color mode */}
        </div>
      </header>
      
      <main className="
        mx-auto max-w-6xl px-4 transition-colors duration-700
        text-stone-800 dark:text-stone-200 light:text-stone-950 neon:text-zinc-950
        [&_h1]:text-lime-600 [&_h2]:text-lime-600
        dark:[&_h1]:text-lime-500 dark:[&_h2]:text-lime-500
        light:[&_h1]:text-cyan-600 light:[&_h2]:text-cyan-600
        neon:[&_h1]:text-rose-600 neon:[&_h2]:text-rose-600
        neon:bg-pink-200
      ">
        <Section id="hero" title="">
          <Hero />
        </Section>

        <Section id="about" title="Proven Results">
          <AboutResume />
        </Section>

        <Section id="tech" title="">
          <TechTags />
        </Section>

        <Section id="skills" title="Skills matrix">
          <SkillsMatrix />
        </Section>

        <Section id="timeline" title="Project Highlights">
          <Timeline />
        </Section>

        <Section id="contact" title="">
          <Contact />
        </Section>
      </main>

      <Aurora />
      <CodeTracker />
    </div>
  )
}
