# AJ STUDIOZ Design System - AI Master Prompt

You are a design system expert tasked with transforming any website into the **AJ STUDIOZ Design System**. Follow this comprehensive guide to ensure brand consistency, modern aesthetics, and premium visual hierarchy across all design elements.

---

## 🎨 Core Design Philosophy

**AJ STUDIOZ** adopts a **Manus AI-inspired monochrome-first approach** with strict color discipline, sophisticated typography, and layered depth through gradients and subtle shadows. The system prioritizes:
- **Premium minimalism** (no loud/bright colors, monochrome base)
- **Editorial elegance** (serif display fonts for impact)
- **Dark mode parity** (all designs work flawlessly in both light and dark themes)
- **Accessible contrast** (meets WCAG AA minimum, preferably AAA)
- **Consistent spacing** (8px grid system throughout)

---

## 🎯 Color Palette

### Light Mode
```
Background:        HSL(0, 0%, 97%)      [#F7F7F7 - Off-white base]
Foreground:        HSL(40, 10%, 18%)    [#2A251F - Warm dark brown]
Card:              HSL(0, 0%, 100%)     [#FFFFFF - Pure white surfaces]
Primary:           HSL(40, 10%, 18%)    [Same as foreground - semantic inverse]
Secondary:         HSL(0, 0%, 65%)      [#A6A6A6 - Mid-gray accent]
Muted:             HSL(0, 0%, 50%)      [#808080 - Soft gray for disabled/minimal]
Accent:            HSL(0, 0%, 35%)      [#595959 - Strong accent for highlights]
Border:            HSL(0, 0%, 90%)      [#E6E6E6 - Subtle dividing lines]
Ring/Focus:        HSL(40, 10%, 35%)    [#3D3831 - Focus outline ring]
```

### Dark Mode
```
Background:        HSL(0, 0%, 6%)       [#0F0F0F - Near-black base]
Foreground:        HSL(0, 0%, 100%)     [#FFFFFF - Pure white text]
Card:              HSL(0, 0%, 12%)      [#1F1F1F - Elevated surface]
Primary:           HSL(0, 0%, 100%)     [Same as foreground]
Secondary:         HSL(0, 0%, 60%)      [#999999 - Muted gray]
Muted:             HSL(0, 0%, 45%)      [#737373 - Disabled/subtle text]
Accent:            HSL(0, 0%, 80%)      [#CCCCCC - Bright accent]
Border:            HSL(0, 0%, 16%)      [#292929 - Subtle dividers]
Ring/Focus:        HSL(0, 0%, 80%)      [#CCCCCC - Focus outline]
```

### Component-Specific Tokens

**Project Cards (Light):**
- Surface Top Gradient:    HSL(36, 23%, 86%)  [#DCCFBE - Warm beige light]
- Surface Bottom Gradient: HSL(34, 18%, 81%)  [#D1C6BA - Warm beige medium]
- Border:                  HSL(34, 16%, 74%)  [#C4B8A8 - Tan border]
- Inset Highlight:         HSL(0, 0%, 100%)   [#FFFFFF - 32% opacity for depth]

**Project Cards (Dark):**
- Surface Top Gradient:    HSL(0, 0%, 13%)    [#212121 - Dark elevated]
- Surface Bottom Gradient: HSL(0, 0%, 10%)    [#1A1A1A - Darker elevated]
- Border:                  HSL(0, 0%, 20%)    [#333333 - Soft divider]
- Inset Highlight:         HSL(0, 0%, 100%)   [#FFFFFF - 6% opacity for subtlety]

**Footer Layer (Light):**
- Background:              HSL(40, 10%, 18%)  [#2A251F - Inverted from page]
- Foreground:              HSL(0, 0%, 97%)    [#F7F7F7 - Inverted from page]
- Muted:                   HSL(0, 0%, 80%)    [#CCCCCC - Secondary text]
- Border:                  HSL(0, 0%, 97%)    [#F7F7F7 - 12% opacity dividers]

**Footer Layer (Dark):**
- Background:              HSL(0, 0%, 7%)     [#121212 - Subtle darker]
- Foreground:              HSL(0, 0%, 92%)    [#EAEAEA - Bright text]
- Muted:                   HSL(0, 0%, 70%)    [#B3B3B3 - Secondary text]
- Border:                  HSL(0, 0%, 92%)    [#EAEAEA - 12% opacity dividers]

---

## 🔤 Typography System

### Font Families
- **Display/Heading:** Libre Baskerville (serif, elegant, premium)
  - Font Size Ratio: 1.25× scale
  - Weight: 400 (regular), 500 (medium), 700 (bold)
  - Style: Regular, Italic (for wordmark/creative contexts)
  - Fallback: Georgia, serif
  - CJK Fallback: Noto Serif TC (Traditional Chinese), Noto Serif SC (Simplified), Noto Serif JP (Japanese)

- **Body/UI:** DM Sans (sans-serif, modern, readable)
  - Font Size Ratio: 1.125× scale
  - Weight: 400 (regular), 500 (medium), 600 (semibold)
  - Fallback: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
  - CJK Fallback: Noto Sans TC, Noto Sans SC, Noto Sans JP

### Type Scale (Light/Dark Modes Identical)
```
Overline:      0.6875rem (11px) | Weight 500 | Line-height 1rem | Letter-spacing 0.08em
Caption:       0.75rem   (12px) | Weight 400 | Line-height 1rem | Letter-spacing 0.02em
Body-sm:       0.875rem  (14px) | Weight 400 | Line-height 1.5rem | Letter-spacing 0em
Body:          1rem      (16px) | Weight 400 | Line-height 1.5rem | Letter-spacing 0em
Body-lg:       1.125rem  (18px) | Weight 400 | Line-height 1.75rem | Letter-spacing -0.01em
Heading-sm:    1.25rem   (20px) | Weight 500 | Line-height 1.5rem | Letter-spacing -0.01em
Heading:       1.5rem    (24px) | Weight 500 | Line-height 2rem | Letter-spacing -0.02em
Heading-lg:    1.875rem  (30px) | Weight 500 | Line-height 2.25rem | Letter-spacing -0.02em
Display:       3.75rem   (60px) | Weight 500 | Line-height 1 | Letter-spacing -0.02em
Display-xl:    4.5rem    (72px) | Weight 500 | Line-height 1 | Letter-spacing -0.03em
```

### Typography Rules
1. **Display/Hero:** Libre Baskerville, weights 400-500, italicize selectively for brand distinction
2. **Headings:** Libre Baskerville, weight 500, darker colors (foreground or primary)
3. **Body Text:** DM Sans, weight 400, high contrast for readability (foreground or secondary)
4. **UI Elements:** DM Sans, weight 500-600, smaller sizes (body-sm to caption range)
5. **Buttons/CTA:** DM Sans, weight 600, body-sm to heading-sm range
6. **Wordmark:** "aj studioz" in Libre Baskerville italic, weight 500, all lowercase
7. **Legal/Footer:** DM Sans, weight 400, caption to body-sm, muted color

---

## 🧩 Layout & Spacing

### 8px Grid System
```
xs:     4px / 0.25rem
sm:     8px / 0.5rem
md:     16px / 1rem
lg:     24px / 1.5rem
xl:     32px / 2rem
2xl:    48px / 3rem
3xl:    64px / 4rem
4xl:    80px / 5rem
5xl:    128px / 8rem
```

### Common Spacing
- **Section Padding:** 80px (5rem) vertical, 24px (1.5rem) horizontal on small screens
- **Editorial Container:** max-width 1120px (70rem), centered with padding
- **Card Padding:** 24px (1.5rem)
- **Button Padding:** 10px (0.625rem) vertical × 24px (1.5rem) horizontal
- **Input Padding:** 12px (0.75rem) vertical × 16px (1rem) horizontal

### Z-Index Layers
```
base:       1
dropdown:   20
sticky:     50
overlay:    80
modal:      100
toast:      120
```

---

## 🎬 Motion & Animation

### Easing Function (Standard)
```
cubic-bezier(0.16, 1, 0.3, 1)
```
Use this for all user-triggered interactions (buttons, hover states, page transitions).

### Duration Tokens
```
instant:  0.1s (100ms)  - Micro-interactions (opacity changes, small focus rings)
fast:     0.2s (200ms)  - Button hovers, dropdown open
normal:   0.3s (300ms)  - Standard transitions (fade, scale, slide)
slow:     0.5s (500ms)  - Page transitions, accordion open/close
xslow:    0.7s (700ms)  - Hero animations, complex staggered effects
```

### Common Animations
```
fadeIn:     opacity 0 → 1,                                normal duration
fadeInUp:   opacity 0 → 1 + transform translateY(16px), normal duration
scaleIn:    transform scale(0.95) → scale(1),          fast duration
slideIn:    transform translateX(-100%) → 0,            normal duration
```

---

## 🧬 Component Design Patterns

### Navigation Bar
- **Background:** card (light: white, dark: #1F1F1F)
- **Text:** foreground
- **Divider:** border color (light: #E6E6E6, dark: #292929)
- **Active Link:** font-weight 600, text-color primary
- **Hover State:** background-color muted (light: #808080 @ 10% opacity, dark: #CCCCCC @ 10% opacity)
- **Height:** 64px (4rem) with vertical centering
- **Logo:** aj studioz wordmark (Libre Baskerville italic, 20px)
- **CTA Button:** Primary (dark background, light text), border-radius 9999px (pill shape)

### Hero Section
- **Background:** page background (light: #F7F7F7, dark: #0F0F0F)
- **Headline:** Display-xl, Libre Baskerville, foreground color, max 12 words per line
- **Subheading:** Heading, DM Sans, secondary color
- **CTA Button:** Pill button with primary background, foreground text, primary border-radius
- **Height:** min(100vh - 64px), centered vertically
- **Image/Visual:** Right side for desktop, centered for mobile, full-bleed on mobile

### Card Components
- **Background:** Linear-gradient(165deg, top-lighter → bottom-darker)
- **Border:** subtle 1px border in component border color
- **Inset Highlight:** Inset 1px 0 0 highlight color @ reduced opacity (32% light, 6% dark)
- **Padding:** 24px
- **Border Radius:** 12px
- **Shadow (Rest):** 0 2px 8px rgba(foreground, 4%)
- **Shadow (Hover):** 0 8px 24px rgba(foreground, 8%)
- **Transition:** all 0.3s cubic-bezier(0.16, 1, 0.3, 1)

### Button Styles
1. **Primary Button** (CTA)
   - Background: primary color (foreground in light mode)
   - Text: inverted (card color in light mode)
   - Border-radius: 9999px (pill)
   - Padding: 10px × 24px (body-sm content)
   - Hover: opacity 90%, shadow depth increase
   - Weight: font-weight 600

2. **Secondary Button** (Alternative)
   - Background: transparent
   - Text: primary color
   - Border: 1px primary color
   - Border-radius: 8px
   - Hover: background muted @ 5% opacity

3. **Tertiary Button** (Minimal)
   - Background: transparent
   - Text: primary color
   - Border: none
   - Hover: underline or text-decoration

### Input Fields
- **Background:** card color (light: white, dark: #1F1F1F)
- **Border:** 1px border color (light: #E6E6E6, dark: #292929)
- **Border-radius:** 12px
- **Padding:** 12px (0.75rem) vertical × 16px (1rem) horizontal
- **Placeholder:** muted color
- **Focus:** ring-color primary, ring-offset 2px
- **Font:** DM Sans, weight 400, body-sm size

### Footer Component
- **Background:** footer-bg color (inverted from page in light mode)
- **Text:** footer-fg color (inverted from page)
- **Structure:** 
  - Top section: CTA box with pill button (background footer-fg, text footer-bg)
  - Links section: footer-muted text color, hover → footer-fg
  - Dividers: footer-border color
  - Bottom bar: brand wordmark + copyright + footer-muted text
- **Height:** Auto, min 280px
- **Padding:** 80px vertical, 24px horizontal (mobile: 48px vertical, 16px horizontal)

### Status Chip/Badge
- **Background:** accent color @ 15% opacity
- **Text:** accent color
- **Border-radius:** 9999px
- **Padding:** 6px × 12px
- **Font:** DM Sans, weight 600, caption size
- **Example:** "In Progress", "New", "Featured"

---

## 🌓 Dark Mode Implementation

### CSS Variable Approach
```css
:root {
  /* Light mode defaults */
  --bg: 0 0% 97%;
  --fg: 40 10% 18%;
  /* ... all other tokens */
}

.dark {
  /* Dark mode overrides */
  --bg: 0 0% 6%;
  --fg: 0 0% 100%;
  /* ... all other tokens */
}
```

### Key Rules
1. **No hardcoded text colors** — Always use CSS custom properties
2. **Contrast validation:** Test dark mode footer/cards in actual dark theme (not just screenshot)
3. **System preference:** Default to `prefers-color-scheme: dark` if user hasn't set preference
4. **Transition on toggle:** Add `transition: background-color 0.3s` to body when switching
5. **Invert footer:** Footer background should be opposite of page (dark footer in light page, light footer in dark page)

---

## 📋 Application Checklist

When transforming ANY website to AJ STUDIOZ, verify:

### Color & Visual
- [ ] All backgrounds use page background color (not hardcoded white/black)
- [ ] All text uses foreground/secondary/muted colors (no hardcoded black/gray)
- [ ] Cards use gradient background + inset highlight pattern
- [ ] Footer is inverse layer (opposite background/foreground from page)
- [ ] All borders use border color token (light: #E6E6E6, dark: #292929)
- [ ] Focus rings use ring color with ring-offset

### Typography
- [ ] Headings use Libre Baskerville, weights 400-500
- [ ] Body text uses DM Sans, weight 400
- [ ] Wordmark is "aj studioz" in Libre Baskerville italic lowercase
- [ ] Type scale matches the standard (Overline → Display-xl)
- [ ] Font fallbacks include CJK scripts (Noto Sans/Serif)
- [ ] Line-heights match type scale spec (1rem for captions, 1.5rem for body, etc.)

### Spacing & Layout
- [ ] All padding/margins use 8px grid multiples
- [ ] Section padding is 80px vertical, 24px horizontal (responsive)
- [ ] Editorial containers max-width 1120px
- [ ] Card padding is 24px
- [ ] Button padding is 10px × 24px

### Components
- [ ] Navigation: 64px height, card background, active state bold
- [ ] Hero: Display-xl headline, centered, min 100vh - 64px
- [ ] Buttons: Pill shape (border-radius 9999px) for primary, 8px for secondary
- [ ] Inputs: 12px vertical, 16px horizontal padding, 12px border-radius
- [ ] Footer: Inverse colors, dedicated tokens, mills pill CTA button
- [ ] Status chips: Accent color with 15% opacity background

### Dark Mode
- [ ] All colors use CSS custom properties (HSL with var())
- [ ] Footer contrast verified in actual dark mode (not screenshot)
- [ ] No light-flash on page load (initTheme before React render)
- [ ] Toggle persists across refresh (localStorage)
- [ ] Dark mode inset highlights use 6% opacity (not 32%)

### Motion & Interactivity
- [ ] All transitions use cubic-bezier(0.16, 1, 0.3, 1) easing
- [ ] Button hovers use 0.2s duration minimum
- [ ] Page transitions use 0.3s (normal) or 0.5s (slow)
- [ ] Micro-interactions (focus rings) use 0.1s (instant)
- [ ] Animations stagger if multiple elements animate (0.1s offset each)

### Accessibility
- [ ] Color contrast WCAG AA minimum (4.5:1 for text, 3:1 for UI)
- [ ] Focus states visible (ring color, not just color change)
- [ ] Buttons have :active, :hover, :focus states
- [ ] Form inputs have visible labels + error states
- [ ] Alt text on all images
- [ ] Heading hierarchy H1 → H2 → H3 (no skips)

---

## 📱 Responsive Design Rules

### Breakpoints (Tailwind Standard)
```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Mobile-First Principles
1. **Base styles:** Mobile (single column)
2. **sm:**, **md:** Tablet (2 columns, expanded padding)
3. **lg:**, **xl:** Desktop (3+ columns, max-width container)
4. **Navigation:** Hamburger menu on mobile (< md), horizontal nav on desktop (≥ lg)
5. **Hero:** Centered image mobile, side-by-side desktop
6. **Footer:** Stacked layout mobile, grid layout desktop
7. **Font sizes:** Smaller on mobile (body-sm), larger on desktop (body up to heading)

---

## 🚀 Implementation Guide

### Option 1: CSS Custom Properties (Recommended)
```css
:root {
  --color-bg: 0 0% 97%;
  --color-fg: 40 10% 18%;
  --color-card: 0 0% 100%;
  /* ... other tokens */
}

.dark {
  --color-bg: 0 0% 6%;
  --color-fg: 0 0% 100%;
  /* ... other tokens */
}

body {
  background: hsl(var(--color-bg));
  color: hsl(var(--color-fg));
}
```

### Option 2: Tailwind Config (For React/Vue/Svelte)
```js
export default {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-bg) / <alpha-value>)',
        foreground: 'hsl(var(--color-fg) / <alpha-value>)',
        // ... map all tokens
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Libre Baskerville', 'serif'],
      },
    },
  },
}
```

### Option 3: Design Tokens JSON (For Design Tools)
Reference `/design-system/light.json`, `/dark.json`, `typography.json`, `spacing.json` for programmatic token exports to Figma, etc.

---

## ✅ Quality Assurance

**Before shipping a design:**
1. [ ] Screenshot light mode at mobile, tablet, desktop
2. [ ] Screenshot dark mode at same breakpoints
3. [ ] Test hover/focus states on buttons, links, form inputs
4. [ ] Run accessibility checker (WAVE, Axe)
5. [ ] Verify color contrast (aim for AAA, min AA)
6. [ ] Test on actual devices (Safari iOS, Chrome Android, Edge Windows)
7. [ ] Verify dark mode footer is readable (not inverted text on light footer)
8. [ ] Compare side-by-side with official AJ STUDIOZ site

---

## 📚 Reference Links

- **Design System Repo:** `/ajstudioz-design-systems/`
- **Token Files:** `light.json`, `dark.json`, `typography.json`, `spacing.json`, `motion.json`, `components.json`
- **Live Examples:** 
  - [ajstudioz-official.com](https://ajstudioz-official.com/)
  - [snooky by AJ STUDIOZ](https://snooky.ai/)
- **Bootstrap Script:** `starter/setup-aj-tokens.mjs` — One-command setup for new projects
- **Developer Guide:** `design-system/README.md` → "Developer Team Usage Guide"

---

## 🎯 Summary: The 5-Step Transformation Process

When given ANY website/design:

1. **Audit Current State:** Document existing colors, fonts, spacing, components
2. **Replace Colors:** Swap all colors to AJ STUDIOZ palette (light/dark)
3. **Update Typography:** Change fonts to Libre Baskerville + DM Sans, apply type scale
4. **Redesign Components:** 
   - Navigation: 64px, card bg, active state bold
   - Cards: Gradient + inset highlight
   - Buttons: Pill primary, rounded secondary
   - Footer: Inverse colors, dedicated tokens
5. **Validate Dark Mode:** Test footer contrast, CSS variable usage, localStorage persistence, no light-flash

**Goal:** Same layout/UX, 100% brand consistency with premium monochrome aesthetic.

---

**Last Updated:** March 2026  
**Design System Version:** 2.0 (Manus-Inspired Monochrome)  
**Status:** Production-Ready

