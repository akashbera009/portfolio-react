# State: v1/v2 Route Separation (Vercel)

Tracks progress separating v1 (live at `/`) from v2 (the in-progress redesign at `/v2`) so both coexist in one Vercel deploy. Updated after each task.

**Plan file (read-only):** `/Users/admin/.claude/plans/ok-we-will-do-silly-dolphin.md`

---

## Status

- **Branch:** `v2/seperation-v2-urls` (branched off `v2/dev`)
- **Phase:** ✅ Complete — both routes verified locally; ready for commit / push / Vercel preview deploy
- **Last updated:** 2026-05-23

---

## Locked decisions

| Choice | Pick |
|---|---|
| Trigger | `/v2` route |
| Routing | `react-router-dom` v7 |
| Loading | `React.lazy` + `Suspense` |
| File layout | `src/v1/` + `src/v2/` namespaces; truly shared infra in `src/shared/` |
| Deploy | Vercel + `vercel.json` SPA rewrite |
| Default route | `/` → V1Root (unchanged); `*` → redirect to `/` |
| Branch flow | `v2/seperation-v2-urls` → `v2/dev` → eventually `main` |

---

## Task checklist

### Phase 0 — Cleanup of wrong scaffold ✅
- [x] Deleted `src/screens/Education/EducationV2.jsx`, `educationV2.css`, `public/404.html`
- [x] Restored `index.html`, `src/App.jsx`, `src/assets/Data/Sections_Data.jsx`
- [x] Removed `predeploy` + `deploy` GH-Pages scripts from `package.json`

### Phase 1 — Move v2 files into `src/v2/` ✅
- [x] `git mv` v2 Navbar, v2 Cards (GlassCard, ProjectCard, SpotlightCard, TraitCard), v2 screens (About, Contact, Experience, Projects, Skills), v2 theme, v2 ThemeContext, Traits_Data

### Phase 1.5 — Move shared infra into `src/shared/` ✅
- [x] `git mv` LoadingScreen, Modal, ImageSlideShow → `src/shared/components/`
- [x] `git mv` all portfolio Data files (About_Section, Achievement, Education, Experience, Hobbies, Project, Subject_Mastery, Technical_Domain, Tools_Languages) → `src/shared/assets/Data/`

### Phase 2 — Restore v1 from main, move into `src/v1/` ✅
- [x] `git checkout main` for v1 Navbar, deleted v1 cards (Technical_Domain_Card, ThreeD_Hover_Card, ToolTip_Mini_Card, Tool_Language_Card), v1 screens (About, Contact, Experience, Projects, Skills), v1 ThemeContext, themeColour
- [x] `git mv` everything remaining at `src/components/`, `src/screens/`, `src/assets/` → `src/v1/...`

### Phase 3 — Router shell + roots ✅
- [x] Created `src/v1/V1Root.jsx` (extracted MainContent + loading flow from original App.jsx, byte-identical behavior)
- [x] Created `src/v2/V2Root.jsx` + `v2Root.css` (v2 Navbar + v2 sections + v1 fallback for not-yet-redesigned, "V2" dev badge)
- [x] Rewrote `src/App.jsx` as `<BrowserRouter><Suspense><Routes>...` with lazy V1Root/V2Root
- [x] Created `vercel.json` with SPA rewrite

### Phase 4 — Fix imports ✅
- [x] Fixed Data file paths (v1 + v2 screens → `../../../shared/assets/Data/...`)
- [x] Fixed Modal path (→ `../../../shared/components/Modal/Modal`)
- [x] Fixed ImageSlideShow path in v1 Project_Card
- [x] Fixed case-sensitivity (`components/cards/` → `components/Cards/`) in v2 screens — needed for Vercel Linux build
- [x] Fixed Traits_Data path (v2-only, stays at `../../assets/Data/Traits_Data`)
- [x] Wrapped borrowed v1 sections in V2Root with v1 `ThemeProvider` (Achievements/Hobbies use v1 ThemeContext shape)

### Phase 5 — Docs ✅
- [x] Updated `CLAUDE.md` architecture section to describe v1/v2/shared layout, deploy, branch flow
- [x] Updated `state.md` (this file)

### Phase 6 — Verify ✅
- [x] `npm run dev` → `localhost:3001/` renders v1 (v1 Navbar, v1 hero, Education Journey)
- [x] `localhost:3001/v2` renders v2 redesign (v2 Navbar, new About hero, V2 dev badge)
- [x] `localhost:3001/garbage` → redirects to `/`
- [x] `npm run build` succeeded with proper code splits: `V1Root` chunk 55KB, `V2Root` chunk 29KB. No Linux case-sensitivity errors.

---

## Next steps (not done — for the user to decide)

- Commit the work on `v2/seperation-v2-urls` (recommended slicing: Phase 0 cleanup, Phase 1+1.5 v2/shared moves, Phase 2 v1 restore+move, Phase 3 router shell+roots+vercel.json, Phase 4 import fixes, Phase 5 docs)
- Push branch to GitHub. Vercel preview deploy should serve both routes correctly (validates the SPA rewrite)
- When verified on preview, merge `v2/seperation-v2-urls` → `v2/dev`. `v2/dev` → `main` happens later, on the user's call

## Open questions

_None right now._

## Resolved questions

1. ~~`vite.config.js base`~~ — N/A (custom domain via Vercel; `base: '/'` correct)
2. ~~Per-section v2 vs full-site v2~~ — Full-site v2. Routing-level separation via lazy `V1Root` / `V2Root`
3. ~~File layout~~ — Two namespaces (`src/v1/`, `src/v2/`) + `src/shared/` for truly cross-version infra
4. ~~Deploy target~~ — Vercel. `vercel.json` SPA rewrite. Removed GH-Pages deploy script

## Notes

- v1 components borrowed by V2Root (Education, Achievements) are wrapped in v1's `ThemeProvider` inside V2Root because they `useContext(v1Theme)`. When you redesign these for v2, replace the import in `V2Root.jsx`'s `v2Sections` and drop the `borrowed: true` flag.
- v2 had a case-sensitivity bug (`components/cards/` lowercase) that worked on macOS dev but would have broken on Vercel's Linux build. Fixed during the restructure.
- `public/404.html` and the index.html SPA decode snippet I added earlier (GH-Pages hacks) are removed — Vercel needs neither, only `vercel.json`.
- The `Education` v1 screen file has a pre-existing bug (an SVG `<text>` rendered inside an HTML `<foreignObject>` triggers a React warning). It existed on main before this work; not in scope to fix here.
