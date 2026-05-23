# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Vision: AI-First Developer Portfolio
The goal is a futuristic, premium, and interactive developer portfolio utilizing glassmorphism, AI-inspired glow effects, and a modular reusable card system.
Reference Design: [Lehar Sindra Portfolio](https://leharsindra.framer.website/#about-me)

## Working state: `state.md`

The repo has a `state.md` at the root that tracks the current multi-turn initiative — what's been decided, the task checklist, what's done, what's blocked. **Read it at the start of any session** to pick up where the last one left off. **Update it whenever you complete a task** (check off the box, add a "Last updated" date). A Stop hook in `.claude/settings.json` reminds you to do this after each turn. The detailed approved plan lives at `/Users/admin/.claude/plans/ok-we-will-do-silly-dolphin.md` (read-only reference).

## Common Commands

- Develop: `npm run dev` (Vite serves on `0.0.0.0:3000` — see `vite.config.js`)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (flat ESLint config in `eslint.config.js`)
- Deploy: `npm run deploy` (runs `vite build` then publishes `dist/` to GitHub Pages via `gh-pages`)

There is no test runner configured.

## Architecture

- **Framework**: React 18 + Vite 8 (JSX, no TypeScript). Entry: `src/main.jsx` → `src/App.jsx`.
- **Two coexisting site versions, routed by URL.** `src/App.jsx` is a thin `BrowserRouter` shell: `/` lazy-loads `V1Root` (the production site), `/v2` lazy-loads `V2Root` (in-progress redesign). Both roots are `React.lazy` imports so visitors on `/` never download v2 code and vice versa (verified via `npm run build` chunk output). Unknown paths redirect to `/`. `Suspense` fallback is the shared `LoadingScreen`.
- **Three top-level source trees:**
  - **`src/v1/`** — the production site. Self-contained: own `Navbar`, `ThemeContext` (exposes `{ isDarkMode, toggleTheme }`), section components, and `Sections_Data.jsx` registry. `V1Root.jsx` runs the loading flow then renders sections from the registry. v1 looks byte-identical to `main`.
  - **`src/v2/`** — the redesign. Self-contained: own `Navbar`, `ThemeContext` (exposes `{ isDarkMode, toggleTheme, activeTheme }` — `activeTheme` comes from `src/v2/theme/theme.js`), v2-specific card components (`GlassCard`, `ProjectCard`, `SpotlightCard`, `TraitCard`), and v2 screen components. `V2Root.jsx` hand-composes the section list (no registry). Visible "V2" dev badge top-right.
  - **`src/shared/`** — truly cross-version infrastructure imported by both v1 and v2:
    - `components/LoadingScreen/` (Suspense fallback)
    - `components/Modal/`, `components/ImageSlideShow/`
    - `assets/Data/` — portfolio content (About, Experience, Projects, etc.). Editing a Data file updates both v1 and v2 in one place. v2-only data (`Traits_Data.jsx`) lives in `src/v2/assets/Data/`.
- **Section registry is v1-only.** Adding/reordering/hiding a section in v1: edit `src/v1/assets/Data/Sections_Data.jsx`. v2 doesn't use a registry — `V2Root` hand-imports each section. Sections v2 hasn't redesigned yet (Education, Achievements) are borrowed from `src/v1/screens/` and wrapped in v1's `ThemeProvider` inside `V2Root` (marked `borrowed: true` in the section list, with TODO comment).
- **Deploy**: Vercel with `vercel.json` SPA rewrite (`/(.*)` → `/index.html`) so cold-loading `/v2` works. No GH-Pages config (the old `gh-pages` deploy script was removed; `gh-pages` devDep is harmless and can be uninstalled when convenient).
- **Branch flow**: v2 work lands on `v2/dev`. Feature branches off `v2/dev`. When v2 is ready, `v2/dev` merges into `main`, shipping both v1 (at `/`) and v2 (at `/v2`) together.

## Styling

CSS files are colocated with their components (e.g. `Navbar/Navbar.css`). No CSS framework — plain CSS plus inline style overrides driven by `isDarkMode`.

## Key Libraries

- `framer-motion` — section entrance animations in `App.jsx` and elsewhere.
- `react-intersection-observer` — scroll-triggered effects.
- `react-draggable` — interactive draggable elements.
- `react-icons` — icon set.
