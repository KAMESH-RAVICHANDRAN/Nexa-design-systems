export type ThemeMode = 'light' | 'dark'

const THEME_STORAGE_KEY = 'aj-theme-preference'

export function getPreferredTheme(): ThemeMode {
  // Check localStorage for saved preference
  const saved = localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  // Default to light
  return 'light'
}

export function applyTheme(theme: ThemeMode): void {
  const htmlElement = document.documentElement

  if (theme === 'dark') {
    htmlElement.classList.add('dark')
  } else {
    htmlElement.classList.remove('dark')
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function initTheme(): void {
  const theme = getPreferredTheme()
  applyTheme(theme)
}

export function toggleTheme(): ThemeMode {
  const currentTheme = getPreferredTheme()
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
  applyTheme(nextTheme)
  return nextTheme
}
