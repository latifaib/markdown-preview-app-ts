import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}


