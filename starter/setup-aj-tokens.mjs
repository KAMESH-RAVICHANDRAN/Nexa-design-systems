#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceTokenDir = path.resolve(__dirname, "../design-system");
const tokenFiles = [
  "light.json",
  "dark.json",
  "typography.json",
  "spacing.json",
  "motion.json",
  "components.json",
];

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function usage() {
  console.log("Usage: node starter/setup-aj-tokens.mjs <target-project-path> [--force]");
}

async function copyTokens(targetRoot, force) {
  const targetTokenDir = path.join(targetRoot, "design-system");
  await fs.mkdir(targetTokenDir, { recursive: true });

  for (const file of tokenFiles) {
    const src = path.join(sourceTokenDir, file);
    const dst = path.join(targetTokenDir, file);
    if (!force && (await exists(dst))) {
      console.log(`Skipped existing token file: ${dst}`);
      continue;
    }
    await fs.copyFile(src, dst);
    console.log(`Copied token file: ${dst}`);
  }
}

async function writeThemeFile(targetRoot, force) {
  const isTsProject = (await exists(path.join(targetRoot, "tsconfig.json"))) ||
    (await exists(path.join(targetRoot, "src", "main.tsx"))) ||
    (await exists(path.join(targetRoot, "src", "main.ts")));

  const ext = isTsProject ? "ts" : "js";
  const themeDir = path.join(targetRoot, "src", "theme");
  const themeFile = path.join(themeDir, `aj-theme.${ext}`);

  if (!force && (await exists(themeFile))) {
    console.log(`Skipped existing theme loader: ${themeFile}`);
    return { themeFile, ext };
  }

  await fs.mkdir(themeDir, { recursive: true });

  const content = `import lightTokens from "../../design-system/light.json";
import darkTokens from "../../design-system/dark.json";

const STORAGE_KEY = "aj-theme";

function setVar(name${isTsProject ? ": string" : ""}, value${isTsProject ? ": string" : ""}) {
  document.documentElement.style.setProperty(name, value);
}

function applyTokenSet(tokens${isTsProject ? ": any" : ""}) {
  setVar("--background", tokens.colors.background.hsl);
  setVar("--foreground", tokens.colors.foreground.hsl);
  setVar("--card", tokens.colors.card.hsl);
  setVar("--card-foreground", tokens.colors.card.foregroundHsl);
  setVar("--popover", tokens.colors.popover.hsl);
  setVar("--popover-foreground", tokens.colors.popover.foregroundHsl);
  setVar("--primary", tokens.colors.primary.hsl);
  setVar("--primary-foreground", tokens.colors.primary.foregroundHsl);
  setVar("--secondary", tokens.colors.secondary.hsl);
  setVar("--secondary-foreground", tokens.colors.secondary.foregroundHsl);
  setVar("--muted", tokens.colors.muted.hsl);
  setVar("--muted-foreground", tokens.colors.muted.foregroundHsl);
  setVar("--accent", tokens.colors.accent.hsl);
  setVar("--accent-foreground", tokens.colors.accent.foregroundHsl);
  setVar("--destructive", tokens.colors.destructive.hsl);
  setVar("--destructive-foreground", tokens.colors.destructive.foregroundHsl);
  setVar("--border", tokens.colors.border.hsl);
  setVar("--input", tokens.colors.input.hsl);
  setVar("--ring", tokens.colors.ring.hsl);

  setVar("--sidebar-background", tokens.colors.sidebar.backgroundHsl);
  setVar("--sidebar-foreground", tokens.colors.sidebar.foregroundHsl);
  setVar("--sidebar-primary", tokens.colors.sidebar.primaryHsl);
  setVar("--sidebar-primary-foreground", tokens.colors.sidebar.primaryForegroundHsl);
  setVar("--sidebar-accent", tokens.colors.sidebar.accentHsl);
  setVar("--sidebar-accent-foreground", tokens.colors.sidebar.accentForegroundHsl);
  setVar("--sidebar-border", tokens.colors.sidebar.borderHsl);
  setVar("--sidebar-ring", tokens.colors.sidebar.ringHsl);
}

export function setAjTheme(theme${isTsProject ? ": \"light\" | \"dark\"" : ""}) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  applyTokenSet(isDark ? darkTokens : lightTokens);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleAjTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  setAjTheme(isDark ? "light" : "dark");
}

export function initAjTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
  setAjTheme(theme);
}
`;

  await fs.writeFile(themeFile, content, "utf8");
  console.log(`Created theme loader: ${themeFile}`);
  return { themeFile, ext };
}

async function writeCssFile(targetRoot, force) {
  const cssDir = path.join(targetRoot, "src", "styles");
  const cssFile = path.join(cssDir, "aj-tokens.css");

  if (!force && (await exists(cssFile))) {
    console.log(`Skipped existing stylesheet: ${cssFile}`);
    return cssFile;
  }

  await fs.mkdir(cssDir, { recursive: true });
  const content = `:root {
  --background: 40 25% 97%;
  --foreground: 220 14% 10%;
  --card: 40 20% 95%;
  --card-foreground: 220 14% 10%;
  --popover: 40 25% 97%;
  --popover-foreground: 220 14% 10%;
  --primary: 220 14% 10%;
  --primary-foreground: 40 25% 97%;
  --secondary: 38 12% 92%;
  --secondary-foreground: 220 14% 10%;
  --muted: 38 10% 93%;
  --muted-foreground: 220 8% 46%;
  --accent: 35 14% 89%;
  --accent-foreground: 220 14% 10%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
  --border: 36 10% 88%;
  --input: 36 10% 88%;
  --ring: 220 14% 10%;
  --sidebar-background: 40 20% 95%;
  --sidebar-foreground: 220 14% 10%;
  --sidebar-primary: 220 14% 10%;
  --sidebar-primary-foreground: 40 25% 97%;
  --sidebar-accent: 35 14% 89%;
  --sidebar-accent-foreground: 220 14% 10%;
  --sidebar-border: 36 10% 88%;
  --sidebar-ring: 220 14% 10%;
  --radius: 0.75rem;
}

.dark {
  --background: 220 16% 6%;
  --foreground: 38 16% 90%;
  --card: 220 14% 9%;
  --card-foreground: 38 16% 90%;
  --popover: 220 16% 6%;
  --popover-foreground: 38 16% 90%;
  --primary: 38 16% 90%;
  --primary-foreground: 220 16% 6%;
  --secondary: 220 12% 13%;
  --secondary-foreground: 38 16% 90%;
  --muted: 220 12% 14%;
  --muted-foreground: 220 8% 55%;
  --accent: 220 10% 17%;
  --accent-foreground: 38 16% 90%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 100%;
  --border: 220 10% 17%;
  --input: 220 10% 17%;
  --ring: 38 16% 90%;
  --sidebar-background: 220 14% 8%;
  --sidebar-foreground: 38 16% 90%;
  --sidebar-primary: 38 16% 90%;
  --sidebar-primary-foreground: 220 16% 6%;
  --sidebar-accent: 220 10% 14%;
  --sidebar-accent-foreground: 38 16% 90%;
  --sidebar-border: 220 10% 17%;
  --sidebar-ring: 38 16% 90%;
}
`;

  await fs.writeFile(cssFile, content, "utf8");
  console.log(`Created stylesheet: ${cssFile}`);
  return cssFile;
}

async function wireEntryFile(targetRoot, ext) {
  const candidates = [
    path.join(targetRoot, "src", "main.tsx"),
    path.join(targetRoot, "src", "main.ts"),
    path.join(targetRoot, "src", "main.jsx"),
    path.join(targetRoot, "src", "main.js"),
  ];

  const entryFile = (await Promise.all(candidates.map(async (p) => ((await exists(p)) ? p : null))))
    .find(Boolean);

  if (!entryFile) {
    console.log("No src/main entry file found. Manual wiring needed.");
    return;
  }

  let content = await fs.readFile(entryFile, "utf8");

  const cssImport = 'import "./styles/aj-tokens.css";';
  if (!content.includes(cssImport)) {
    content = `${cssImport}\n${content}`;
  }

  const themeImport = `import { initAjTheme } from "./theme/aj-theme.${ext === "ts" ? "" : ""}";`
    .replace("./theme/aj-theme.", "./theme/aj-theme");

  if (!content.includes("initAjTheme")) {
    const importLines = content.match(/^(import[^\n]*\n)+/m);
    if (importLines) {
      const idx = importLines[0].length;
      content = `${content.slice(0, idx)}${themeImport}\n\ninitAjTheme();\n${content.slice(idx)}`;
    } else {
      content = `${themeImport}\n${content}\n\ninitAjTheme();\n`;
    }
  }

  await fs.writeFile(entryFile, content, "utf8");
  console.log(`Wired entry file: ${entryFile}`);
}

async function main() {
  const args = process.argv.slice(2);
  const targetPathArg = args.find((a) => !a.startsWith("--"));
  const force = args.includes("--force");

  if (!targetPathArg) {
    usage();
    process.exit(1);
  }

  const targetRoot = path.resolve(process.cwd(), targetPathArg);

  if (!(await exists(targetRoot))) {
    console.error(`Target path does not exist: ${targetRoot}`);
    process.exit(1);
  }

  await copyTokens(targetRoot, force);
  const { ext } = await writeThemeFile(targetRoot, force);
  await writeCssFile(targetRoot, force);
  await wireEntryFile(targetRoot, ext);

  console.log("AJ STUDIOZ starter setup complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
