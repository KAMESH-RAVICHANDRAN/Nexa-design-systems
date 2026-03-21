AJ STUDIOZ Design System (Full Support)

This folder is the reusable source-of-truth token package for AJ STUDIOZ projects.
It keeps AJ branding consistency while supporting Manus-style UI patterns such as elevated cards, chips, prompt inputs, and smooth editorial motion.

Manus research upgrade (March 2026)
- Research source: https://manus.im/brand and Manus documentation pages.
- Confirmed Manus brand foundation: monochrome-first palette (black, gray, white).
- Confirmed Manus typography foundation: Libre Baskerville (serif) + DM Sans (sans-serif), with Noto Serif/Noto Sans guidance for Asian scripts.
- This design system now supports dual profiles in light and dark token files:
	- ajStudiozEditorial (default)
	- manusInspired

Primary source project:
- E:/AJ STUDIOZ/New folder (5)/ajstudioz-official

Source mapping:
- Colors and semantic theme variables: src/index.css
- Typography and scale: tailwind.config.ts
- Motion and interaction timing: tailwind.config.ts and src/index.css
- Card elevation and wordmark treatment: src/index.css

Token files:
- light.json: light theme semantic color tokens, button tokens, surfaces, elevation, and branding metadata.
- dark.json: dark theme semantic color tokens, button tokens, surfaces, elevation, and branding metadata.
- typography.json: AJ STUDIOZ type system (Inter + Newsreader), scale, line-height, tracking, and OpenType settings.
- spacing.json: 8px spacing grid, layout containers, radii, motion shortcuts, and z-index layers.
- motion.json: canonical durations, easings, animation strings, and keyframe definitions.
- components.json: component-level design recipes for cards, buttons, inputs, chips, wordmark, and layout spacing.

Implementation guidance:
- Keep semantic color usage (background, foreground, card, accent, muted, border) as first-class API.
- Use HSL token values through CSS variables to preserve theme switching parity.
- Prefer component recipes in components.json for consistent Manus-style UI behavior across products.
- Use motion.json animation names and cubic-bezier curves to maintain interaction consistency.

Maintenance rules:
- When official branding changes, update token values from ajstudioz-official first.
- Keep backwards compatibility by adding aliases rather than breaking token names.
- Version token changes via git commits so product repos can track updates safely.

Developer Team Usage Guide

Use this in every new project to keep AJ STUDIOZ UI consistent.

Quick start for new repos (one command):

```bash
node starter/setup-aj-tokens.mjs <target-project-path>
```

Example:

```bash
node starter/setup-aj-tokens.mjs "E:/projects/my-new-app"
```

The starter script will:
- Copy all AJ token files into target project at design-system/
- Create src/theme/aj-theme.ts or src/theme/aj-theme.js
- Create src/styles/aj-tokens.css
- Auto-wire src/main.tsx, src/main.ts, src/main.jsx, or src/main.js with theme initialization

Profile selection guidance:
- Use ajStudiozEditorial when building official AJ STUDIOZ properties and marketing sites.
- Use manusInspired when building AI-agent product experiences that need strict monochrome minimalism.
- Keep one profile active per product surface to avoid mixed visual language.

Use --force to overwrite generated files:

```bash
node starter/setup-aj-tokens.mjs <target-project-path> --force
```

1) Add tokens to your project
- Copy these files into your app (or consume from a shared package):
	- light.json
	- dark.json
	- typography.json
	- spacing.json
	- motion.json
	- components.json

2) Generate CSS variables from tokens
- Create a token loader and map semantic values to CSS variables on document root.
- Apply light tokens to :root and dark tokens to .dark.

Example (TypeScript):

```ts
import light from "./design-system/light.json";
import dark from "./design-system/dark.json";

type Theme = "light" | "dark";

function setVar(name: string, value: string) {
	document.documentElement.style.setProperty(name, value);
}

export function applyTheme(theme: Theme) {
	const t = theme === "dark" ? dark : light;

	setVar("--background", t.colors.background.hsl);
	setVar("--foreground", t.colors.foreground.hsl);
	setVar("--card", t.colors.card.hsl);
	setVar("--card-foreground", t.colors.card.foregroundHsl);
	setVar("--primary", t.colors.primary.hsl);
	setVar("--primary-foreground", t.colors.primary.foregroundHsl);
	setVar("--secondary", t.colors.secondary.hsl);
	setVar("--secondary-foreground", t.colors.secondary.foregroundHsl);
	setVar("--muted", t.colors.muted.hsl);
	setVar("--muted-foreground", t.colors.muted.foregroundHsl);
	setVar("--accent", t.colors.accent.hsl);
	setVar("--accent-foreground", t.colors.accent.foregroundHsl);
	setVar("--border", t.colors.border.hsl);
	setVar("--input", t.colors.input.hsl);
	setVar("--ring", t.colors.ring.hsl);
	setVar("--radius", "0.75rem");
}
```

3) Map Tailwind colors to semantic variables
- Keep utility class names semantic and stable.

Example (Tailwind):

```ts
colors: {
	background: "hsl(var(--background))",
	foreground: "hsl(var(--foreground))",
	card: {
		DEFAULT: "hsl(var(--card))",
		foreground: "hsl(var(--card-foreground))",
	},
	primary: {
		DEFAULT: "hsl(var(--primary))",
		foreground: "hsl(var(--primary-foreground))",
	},
	border: "hsl(var(--border))",
	input: "hsl(var(--input))",
	ring: "hsl(var(--ring))",
}
```

4) Apply typography tokens exactly
- Display: Newsreader
- Body: Inter
- Use sizes/line-heights from typography.json.
- Do not create custom type scales in product repos unless approved.

5) Reuse component recipes
- Use components.json as base spec for:
	- Pill buttons
	- Manus input shell
	- Chips
	- Card base/interative/elevated states
	- Brand wordmark treatment

6) Keep motion consistent
- Use motion.json for duration and easing.
- Prefer:
	- fadeIn
	- fadeInUp
	- scaleIn
- Avoid per-project custom bezier curves.

7) Design system governance
- If a project needs a new token:
	- Add token here first.
	- Document it in this README.
	- Then consume in app repo.
- Avoid hardcoded one-off values in product code.

8) Recommended repo workflow
- Pull latest ajstudioz-design-systems before starting UI work.
- Sync tokens at the beginning of each sprint.
- For breaking changes, publish a changelog entry and migration note.
