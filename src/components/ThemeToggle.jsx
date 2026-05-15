"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 transition-transform duration-300 z-50 ${
        isScrolled ? "translate-y-[-57px]" : ""
      }`}
    >
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 backdrop-blur-sm z-50 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle theme"
      >
        <div className="relative w-7 h-7 flex items-center justify-center">
          <Sun
            className={`w-6 h-6 text-yellow-500 transition-all duration-300 ${
              isDark
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
            absolute="true"
          />
          <Moon
            className={`w-7 h-7 flex items-center justify-center text-blue-300 absolute top-0 left-0 transition-all duration-300 ${
              isDark
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
