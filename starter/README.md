AJ STUDIOZ Starter Bootstrap

One-command setup for new projects.

Command:
node starter/setup-aj-tokens.mjs <target-project-path>

Example:
node starter/setup-aj-tokens.mjs "E:/projects/my-new-app"

What it does:
- Copies AJ token files into target project under design-system/
- Creates src/theme/aj-theme.ts (or .js)
- Creates src/styles/aj-tokens.css
- Auto-wires src/main.tsx|ts|jsx|js with:
  - import "./styles/aj-tokens.css";
  - import { initAjTheme } from "./theme/aj-theme";
  - initAjTheme();

Optional:
- --force: overwrite existing generated files

Example:
node starter/setup-aj-tokens.mjs "E:/projects/my-new-app" --force
