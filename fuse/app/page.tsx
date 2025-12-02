"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  // Apply new theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-10">
      <button
        onClick={toggleTheme}
        className="px-5 py-2 border border-foreground/30 rounded-md hover:bg-foreground/10 mb-10"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Tailwind Theme Check</h1>
        <p className="text-lg opacity-80">
          Testing background, foreground, fonts, and custom theme variables.
        </p>
      </header>

      <section className="w-full max-w-xl space-y-6">
        <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5">
          <h2 className="text-xl font-semibold mb-2">Theme Variables</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <b>Background:</b> var(--background)
            </li>
            <li>
              <b>Foreground:</b> var(--foreground)
            </li>
            <li>
              <b>Font Sans:</b> var(--font-geist-sans)
            </li>
            <li>
              <b>Font Mono:</b> var(--font-geist-mono)
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5">
          <h2 className="text-xl font-semibold mb-2">Dark Mode Test</h2>
          <p className="opacity-80">
            Toggle modes to confirm your theme updates instantly.
          </p>
        </div>
      </section>

      <footer className="mt-16 opacity-60 text-sm">
        Everything updates correctly if dark/light mode changes instantly.
      </footer>
    </main>
  );
}
