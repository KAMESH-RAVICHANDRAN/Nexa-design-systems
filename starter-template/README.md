# AJ STUDIOZ Vite Starter Template

A production-ready **Vite + React + TypeScript** starter template with the complete **AJ STUDIOZ Design System** pre-configured. Build modern, brand-consistent web applications in minutes.

## ✨ Features

- ✅ **Vite** (Lightning-fast build tool)
- ✅ **React 18** + **TypeScript** (Modern development)
- ✅ **Tailwind CSS 3** (Utility-first styling)
- ✅ **AJ STUDIOZ Design System** (Pre-configured tokens, colors, typography)
- ✅ **Dark Mode** (Built-in with localStorage persistence)
- ✅ **Premium Typography** (Libre Baskerville + DM Sans with CJK support)
- ✅ **Monochrome Palette** (Manus-inspired black/white/gray colors)
- ✅ **Responsive Design** (Mobile-first, Tailwind breakpoints)
- ✅ **Component Library** (Navigation, Hero, Cards, Buttons, Footer, etc.)
- ✅ **Motion & Animation** (Smooth transitions, pre-built keyframes)
- ✅ **Accessibility Ready** (WCAG AA contrast, semantic HTML)

## 🚀 Quick Start

### 1. Clone or Download This Template

```bash
# Using Bun (recommended)
bun install
bun run dev

# Using npm
npm install
npm run dev

# Using pnpm
pnpm install
pnpm dev

# Using yarn
yarn install
yarn dev
```

### 2. Open in Browser

The dev server will automatically open at `http://localhost:5173/`

### 3. Start Building

Edit `src/App.tsx` and `src/components/` to build your application. All design system tokens are automatically available.

## 📁 Project Structure

```
starter-template/
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation with dark mode toggle
│   │   ├── Hero.tsx          # Hero section template
│   │   ├── Features.tsx       # Feature cards grid
│   │   └── Footer.tsx        # Footer with links and CTA
│   ├── lib/
│   │   └── theme.ts          # Dark mode utilities
│   ├── App.tsx               # Main app component
│   ├── index.css             # Design system CSS + Tailwind
│   └── main.tsx              # React entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System Usage

### Colors

All AJ STUDIOZ colors are defined as **CSS Custom Properties** in `index.css` and automatically mapped to Tailwind:

```tsx
// Light mode
<div className="bg-background text-foreground">
  <h1 className="text-primary">Hello</h1>
  <p className="text-secondary">Subtitle</p>
</div>

// Dark mode (automatic with .dark class)
// All colors invert automatically
```

**Available Color Classes:**
- `bg-background` / `text-background`
- `bg-foreground` / `text-foreground`
- `bg-card` / `text-card`
- `bg-primary` / `text-primary`
- `bg-secondary` / `text-secondary`
- `bg-muted` / `text-muted`
- `bg-accent` / `text-accent`
- `bg-border` / `text-border`

### Typography

Pre-configured **Libre Baskerville** (display) + **DM Sans** (body) with complete type scale:

```tsx
// Display headings
<h1 className="text-display">Display (60px)</h1>
<h2 className="text-heading-lg">Heading Large (30px)</h2>

// Body text
<p className="text-body">Body text (16px)</p>
<p className="text-body-sm">Small body (14px)</p>

// UI elements
<span className="text-caption">Caption (12px)</span>
<span className="text-overline">Overline (11px)</span>
```

### Spacing

8px grid system with utility classes:

```tsx
<div className="p-md gap-lg">         {/* padding: 16px, gap: 24px */}
  <button className="px-lg py-sm">   {/* padding: 24px × 8px */}
    Button
  </button>
</div>
```

### Components

Pre-built component styles in `index.css`:

```tsx
// Navigation
<div className="nav">
  <a href="/" className="nav-logo">aj studioz</a>
  <a href="#" className="nav-link">Link</a>
</div>

// Cards
<div className="brand-card">Card content</div>
<div className="brand-card project-card-surface">Gradient card</div>

// Buttons
<button className="btn btn-primary">Primary CTA</button>
<button className="btn btn-secondary">Secondary</button>

// Inputs
<input type="text" className="input" placeholder="Enter text..." />

// Status chips
<span className="status-chip">In Progress</span>

// Footer
<footer className="site-footer">
  <h2>Content</h2>
</footer>
```

## 🌓 Dark Mode

Dark mode is **automatically supported**. Just add the `dark` class to `<html>`:

```tsx
// src/lib/theme.ts provides utilities:
import { toggleTheme, getPreferredTheme, initTheme } from './lib/theme'

// Toggle dark mode
<button onClick={toggleTheme}>🌙</button>

// Get current preference (light | dark)
const theme = getPreferredTheme()

// Initialize on app load (prevents light-flash)
initTheme()  // Called in main.tsx before React render
```

All CSS variables automatically switch in `.dark` mode.

## 🎬 Motion & Animation

Pre-configured easing and durations:

```css
/* Standard easing across all animations */
cubic-bezier(0.16, 1, 0.3, 1)

/* Duration tokens */
--duration-instant: 100ms
--duration-fast: 200ms
--duration-normal: 300ms
--duration-slow: 500ms
--duration-xslow: 700ms
```

Use animations in Tailwind:

```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-fade-in-up">Fades + slides up</div>
<div className="animate-scale-in">Scales in</div>
```

Or with custom durations:

```tsx
<div style={{ animationDelay: '100ms' }} className="animate-fade-in">
  Delayed fade
</div>
```

## 📱 Responsive Design

Mobile-first with Tailwind breakpoints:

```tsx
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
  <div>Responsive grid</div>
</div>

// Show/hide on breakpoints
<nav className="hidden md:flex">Desktop nav</nav>
<nav className="md:hidden">Mobile nav</nav>
```

## 🛠️ Build & Deploy

### Development

```bash
npm run dev      # Start dev server with hot reload
```

### Production Build

```bash
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
```

### Type Checking

```bash
npm run type-check  # Check for TS errors
```

### Linting

```bash
npm run lint    # Lint JavaScript/TypeScript files
```

## 📦 Dependencies

- **react** `^18.3.1` — UI library
- **react-dom** `^18.3.1` — DOM rendering
- **lucide-react** `^0.408.0` — Icon library
- **tailwindcss** `^3.4.1` — Utility CSS framework
- **vite** `^5.1.0` — Build tool
- **typescript** `^5.4.2` — Type safety

## 🎯 Next Steps

1. **Customize Colors:** Edit `src/index.css` CSS variables
2. **Add Pages:** Create new components in `src/components/`
3. **Configure Routes:** Add React Router or Next.js
4. **Connect Backend:** Fetch data in useEffect hooks
5. **Deploy:** Push to Vercel, Netlify, or your host

## 📚 Design System Reference

For the complete AJ STUDIOZ design system guide, see:
- [AI Design System Prompt](../AI_DESIGN_SYSTEM_PROMPT.md) — Master guide for any website
- [Design System README](../design-system/README.md) — Token documentation
- [Token Files](../design-system/) — light.json, dark.json, typography.json, etc.

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [AJ STUDIOZ Design System](https://ajstudioz-official.com/)

## 📄 License

This starter template is part of the AJ STUDIOZ Design System and is available for use by the AJ STUDIOZ team and partners.

---

**Built with ❤️ by AJ STUDIOZ**

For questions or improvements, refer to the design system documentation or contact the development team.
