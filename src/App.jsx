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
        tron:border-red-700
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const r = document.documentElement
    dark ? r.classList.add('dark') : r.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const handleNavClick = () => setMenuOpen(false)

  const navLinks = [
    { href: "#hero", label: "Hello" },
    { href: "#about", label: "Why Me?" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#skills", label: "Skills Matrix" },
    { href: "#timeline", label: "Project Highlights" },
    { href: "#contact", label: "Get in Touch" },
  ]

  return (
    <div className="min-h-screen transition-colors duration-700">
      <header className="
        sticky top-0 z-50 backdrop-blur 
        bg-white/70 text-stone-800 border-b border-stone-200
        dark:bg-stone-900/70 dark:text-stone-200 dark:border-stone-800
        light:bg-stone-100/80 light:text-stone-950 light:border-stone-300
        neon:bg-pink-700/80 neon:text-rose-100 neon:border-rose-200 
        tron:bg-black/80 tron:text-white tron:border-red-700
      ">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Left: Brand */}
          <a href="#hero" className="font-bold text-lg tracking-wide">
            Design Portfolio
          </a>

          {/* Middle: Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-sm">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="
                  hover:text-lime-600 
                  dark:hover:text-lime-400 
                  light:hover:text-cyan-600 
                  neon:hover:text-rose-300
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Theme toggle + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle always visible */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-lg rounded focus:outline-none focus:ring-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="
            md:hidden border-t 
            bg-white/95 dark:bg-stone-900/95 neon:bg-pink-800/90 tron:bg-black/90 
            backdrop-blur-sm border-stone-200 dark:border-stone-700 neon:border-rose-200 tron:border-red-700
            animate-fadeIn
          ">
            <nav className="flex flex-col text-sm px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="
                    hover:text-lime-600 
                    dark:hover:text-lime-400 
                    light:hover:text-cyan-600 
                    neon:hover:text-rose-300
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      <main className="
        mx-auto max-w-6xl px-4 transition-colors duration-700
        text-stone-800 dark:text-stone-200 light:text-stone-950 neon:text-zinc-950
        [&_h1]:text-lime-600 [&_h2]:text-lime-600
        dark:[&_h1]:text-lime-500 dark:[&_h2]:text-lime-500
        light:[&_h1]:text-cyan-600 light:[&_h2]:text-cyan-600
        neon:[&_h1]:text-rose-600 neon:[&_h2]:text-rose-600
        neon:bg-pink-200 
        tron:text-red-400 tron:[&_h1]:text-red-700 tron:[&_h2]:text-red-700
      ">
        <Section id="hero" title="">
          <Hero />
        </Section>

        <Section id="about" title="Proven Results">
          <AboutResume />
        </Section>

        {/* <Section id="tech" title="">
          <TechTags />
        </Section> */}

        <Section id="skills" title="Skills Matrix">
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
