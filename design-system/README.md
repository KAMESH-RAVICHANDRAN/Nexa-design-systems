Nexariq Design System

A minimalist AI-first design system inspired by modern products like Manus, OpenAI, and Vercel.
Built for clean interfaces, high contrast, and typography-driven layouts.

This system is designed to be reused across multiple products under the AJ STUDIOZ ecosystem.

---

✨ Philosophy

The design system follows a simple set of principles:

- Minimalist interface
- Monochrome color palette
- Typography-first hierarchy
- Generous whitespace
- Subtle micro-interactions
- Consistent spacing grid

The goal is to maintain visual consistency across all projects.

---

📦 Project Structure

design-system/

 ├ light.json
 ├ dark.json
 ├ typography.json
 └ spacing.json

Each file contains reusable design tokens that can be integrated into web apps, design tools, and UI frameworks.

---

🎨 Themes

Light Mode

Clean, minimal, high contrast interface.

Primary palette:

- Black → "#34322D"
- White → "#FFFFFF"
- Gray → "#F8F8F8"

Used for:

- Landing pages
- Marketing websites
- Documentation
- Product UI

---

Dark Mode

Designed for modern AI product interfaces.

Primary palette:

- Background → "#0F0F0F"
- Surface → "#1F1F1F"
- Text → "#FFFFFF"

Used for:

- AI chat interfaces
- Dashboards
- Developer tools
- Workspaces

---

🔤 Typography

Fonts used in this system:

Heading Font
Libre Baskerville

Body Font
DM Sans

Fallback
system-ui

Typography scale:

Element| Size
H1| 56px
H2| 42px
H3| 28px
H4| 22px
Body| 18px

---

📏 Spacing System

Uses an 8px grid system.

Token| Value
xs| 8px
sm| 16px
md| 24px
lg| 40px
xl| 64px
xxl| 120px

This ensures consistent spacing across components.

---

⚡ Usage Example

Example usage in JavaScript:

import lightTheme from "./design-system/light.json";

const primaryColor = lightTheme.colors.primary.black;

Example for theme switching:

import light from "./design-system/light.json";
import dark from "./design-system/dark.json";

const theme = systemTheme === "dark" ? dark : light;

---

🚀 Use Cases

This design system can power:

- AI SaaS products
- Landing pages
- Dashboards
- Developer tools
- Mobile web apps
- Startup MVPs

---

🧩 Future Expansion

Planned additions:

- Component tokens
- Icon system
- Motion tokens
- Tailwind theme config
- Figma design tokens
- UI component library

---

🏢 Organization

Maintained by AJ STUDIOZ.

Used for building products such as:

- AI tools
- Developer platforms
- SaaS applications
- Experimental interfaces

---

📄 License

MIT License

Feel free to use and modify for personal or commercial projects.

---

⭐ Support

If you like this project, consider giving the repository a star.
