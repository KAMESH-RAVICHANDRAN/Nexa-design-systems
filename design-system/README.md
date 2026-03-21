AJ STUDIOZ Official Design System Tokens

This folder mirrors the live branding tokens used in the official website at:

E:/AJ STUDIOZ/New folder (5)/ajstudioz-official

Source of truth:
- Colors and theme variables: src/index.css
- Font families and type scale: tailwind.config.ts
- Layout, spacing, radius, and motion: tailwind.config.ts and src/index.css

Files
- light.json: light-mode tokens mapped from :root CSS variables.
- dark.json: dark-mode tokens mapped from .dark CSS variables.
- typography.json: official typography families, sizes, line heights, and tracking.
- spacing.json: spacing scale, layout containers, radius, and motion timing.

Notes
- Color values are stored in HSL token format to match the official CSS variable format exactly.
- Utility classes in the official site consume these via hsl(var(--token-name)).
- If branding changes in the official project, update this folder from the same source files.
