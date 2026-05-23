# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- Develop: `npm run dev` (Vite serves on `0.0.0.0:3000` — see `vite.config.js`)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (flat ESLint config in `eslint.config.js`)
- Deploy: `npm run deploy` (runs `vite build` then publishes `dist/` to GitHub Pages via `gh-pages`)

There is no test runner configured.

## Architecture

- **Framework**: React 18 + Vite 8 (JSX, no TypeScript). Entry: `src/main.jsx` → `src/App.jsx`.
- **Page composition is data-driven.** `src/App.jsx` does not import section components directly. It reads `src/assets/Data/Sections_Data.jsx`, filters by `isActive`, sorts by `order`, and renders each section wrapped in a `framer-motion` div with an `id` matching the section key (used by `Navbar` anchor links). To add, reorder, hide, or remove a page section, edit `Sections_Data.jsx` — don't wire components into `App.jsx`.
- **Two component roots, by role:**
  - `src/screens/` — full page sections (About, Education, Skills, Projects, Experience, Achievements, Hobbies, Contact). Each is a self-contained section rendered by the registry above.
  - `src/components/` — reusable/layout pieces (`Navbar`, `Header`, `Footer`, `LoadingScreen`, `Modal`, `ImageSlideShow`, `Cards`, `SendMailjetEmail`).
- **Section content lives in `src/assets/Data/`** as JSX modules (`About_Section_Data.jsx`, `Project_Data.jsx`, `Experience_Data.jsx`, etc.). Screens import these rather than hard-coding their content, so copy/data updates happen in `Data/` not in the screen components.
- **Theme** is a single `ThemeContext` (`src/assets/ThemeContext.jsx`) providing `{ isDarkMode, toggleTheme }`, wrapping the entire app in `App.jsx`. Defaults to dark mode. Color tokens are referenced inline (e.g. `#0d1117` for dark bg, `#f0f6fc` for primary text) and also catalogued in `README.md` and `src/assets/themeColour.jsx`.
- **Loading flow**: `App.jsx` mounts `LoadingScreen` first; it calls `onComplete` to flip to `MainContent`.

## Styling

CSS files are colocated with their components (e.g. `Navbar/Navbar.css`). No CSS framework — plain CSS plus inline style overrides driven by `isDarkMode`.

## Key Libraries

- `framer-motion` — section entrance animations in `App.jsx` and elsewhere.
- `react-intersection-observer` — scroll-triggered effects.
- `react-draggable` — interactive draggable elements.
- `react-icons` — icon set.
