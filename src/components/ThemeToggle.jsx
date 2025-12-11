import { useEffect, useState } from "react";

const themes = ["light", "dark", "neon", "tron"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

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
    neon: "⚡",
    tron: "💀"
  };

  const themeLabels = {
    light: "Try Dark Mode",
    dark: "Try Neon Mode",
    neon: "Try Tron Mode",
    tron: "Try Light Mode"
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
        {themeIcons[nextTheme]} {themeLabels[theme]}
      </button>
    </div>
  );
}
