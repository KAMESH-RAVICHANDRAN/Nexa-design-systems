import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { toggleTheme } from './lib/theme'
import type { ThemeMode } from './lib/theme'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light')

  const handleToggleTheme = () => {
    const nextTheme = toggleTheme()
    setTheme(nextTheme)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
