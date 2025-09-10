import { useEffect, useState, useRef } from "react";

const themes = ["dark", "light", "neon"];
const INTERVAL = 45000; // 45 seconds

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const timerRef = useRef(null);

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to start/reset timer
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTheme(prev => {
        const currentIndex = themes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
      });
    }, INTERVAL);
  };

  // Start timer on mount
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Manual toggle
  const handleClick = () => {
    setTheme(prev => {
      const currentIndex = themes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });

    // Reset the timer whenever the button is clicked
    startTimer();
  };

  // Compute next theme + emoji
  const nextTheme = (() => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  })();

  const themeIcons = {
    dark: "🌙",
    light: "☀️",
    neon: "⚡"
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-lg border px-3 py-1 text-sm transition 
                 hover:bg-zinc-50 dark:hover:bg-zinc-800 neon:hover:bg-rose-600"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      {themeIcons[nextTheme]} {nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)} Theme
    </button>
  );
}
