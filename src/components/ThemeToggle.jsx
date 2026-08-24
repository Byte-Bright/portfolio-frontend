import { useEffect, useState } from "react";

// dark, neon, and tron themes are preserved in code but excluded from the active cycle
const themes = ["light", "space"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return themes.includes(saved) ? saved : "light";
  });

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Manual theme change
  const handleThemeChange = () => {
    setTheme(prev => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  // Determine next theme and label
  const nextTheme = (() => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  })();

  // Icon + text mapping
  const themeIcons = {
    light: "☀️",
    dark: "🌙",
    space: "🌌",
    neon: "⚡",
    tron: "💀"
  };

  const themeLabels = {
    light: "Dark Mode",
    space: "Light Mode"
  };

  return (
    <div className="flex items-center gap-1 border rounded-lg overflow-hidden backdrop-blur-sm border-stone-400/50 space:border-violet-400/30">
      <button
        onClick={handleThemeChange}
        className={`px-3 py-1 text-sm transition border-r border-stone-400/50
          hover:bg-zinc-50 dark:hover:bg-zinc-800 space:hover:bg-zinc-800 neon:hover:bg-rose-600 
          tron:hover:bg-red-700 tron:shadow-tron tron:animate-tronpulse`}
        aria-label={`Switch to ${nextTheme} mode`}
      >
        {themeIcons[nextTheme]} {themeLabels[theme]}
      </button>
    </div>
  );
}
