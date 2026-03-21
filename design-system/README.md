AJ STUDIOZ Design System (Full Support)

This folder is the reusable source-of-truth token package for AJ STUDIOZ projects.
It keeps AJ branding consistency while supporting Manus-style UI patterns such as elevated cards, chips, prompt inputs, and smooth editorial motion.

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
