import { Moon, Sun } from 'lucide-react'
import type { ThemeMode } from '../lib/theme'

interface HeaderProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="nav">
      <div className="flex items-center gap-8">
        <a href="/" className="nav-logo">
          aj studioz
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg border border-border hover:bg-muted hover:bg-opacity-10 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        <button className="btn btn-primary hidden sm:inline-flex">
          Get Started
        </button>
      </div>
    </header>
  )
}
