import { useEffect, useState, useRef } from "react";

const themes = ["light", "dark", "neon", "tron"];
// const themes = ["Try Light Mode", "Try Dark Mode", "Try Neon Mode", "Try Tron Mode"];
const INTERVAL = 45000; // 45 seconds

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
    localStorage.setItem("theme", theme); 
  }, [theme]);

  // Timer control
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (paused) return;
    timerRef.current = setInterval(() => {
      setTheme(prev => {
        const currentIndex = themes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
      });
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const handleThemeChange = () => {
    setTheme(prev => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
    startTimer();
  };

  const togglePause = () => setPaused(p => !p);

  const nextTheme = (() => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  })();

  const themeIcons = {
    dark: "🌙",
    light: "☀️",
    neon: "⚡",
    tron: "💀"
  };

  return (
    <div className="flex items-center gap-1 border rounded-lg overflow-hidden backdrop-blur-sm border-stone-400/50">
      
      <button
        onClick={handleThemeChange}
        className={`px-3 py-1 text-sm transition border-r border-stone-400/50
          hover:bg-zinc-50 dark:hover:bg-zinc-800 neon:hover:bg-rose-600 
          tron:hover:bg-red-700 tron:shadow-tron tron:animate-tronpulse`}
        aria-label={`Switch to ${nextTheme} mode`}
      >
        {themeIcons[nextTheme]}{" "}
        {nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)}
      </button>
      
      <button
        onClick={togglePause}
        className="text-xs px-2 py-1 border-l border-stone-400/50 hover:bg-white/10 transition-colors text-stone-700 dark:text-stone-200"
        aria-label={paused ? "Resume theme rotation" : "Pause theme rotation"}
      >
        {paused ? "▶️" : "⏸"}
      </button>
    </div>
  );

}
