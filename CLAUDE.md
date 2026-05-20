# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Vision: AI-First Developer Portfolio
The goal is a futuristic, premium, and interactive developer portfolio utilizing glassmorphism, AI-inspired glow effects, and a modular reusable card system.
Reference Design: [Lehar Sindra Portfolio](https://leharsindra.framer.website/#about-me)

## Common Commands
- Develop: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: `npm run deploy`
- Preview build: `npm run preview`

## Architecture and Structure
- **Framework**: React 18 with Vite.
- **Core Design Direction**:
  - **Visual Theme**: AI-first, futuristic, elegant, premium, interactive, and motion-enhanced.
  - **Inspiration**: AI dashboards, modern SaaS, premium portfolio experiences, subtle cyberpunk aesthetics, glowing gradients, layered glassmorphism.
  - **Theme System**: Centralized in `/src/theme/theme.js`. All components must use semantic colors from this file. No hardcoded colors.
  - **Styling**: Focus on glassmorphism, glowing gradients, and layered panels.
  - **Motion**: Premium, staggered animations using `framer-motion` (springs, opacity + translate). Avoid excessive bouncing or flashy transitions.
- **Key Directories**:
  - `src/theme`: Theme definitions and semantic color palettes.
  - `src/components/cards`: Reusable modular card system (GlassCard, ProjectCard, etc.).
  - `src/components`: Main page sections and layout components.
  - `src/assets`: Theme state management (`ThemeContext.jsx`).
- **Key Libraries**: `framer-motion`, `react-draggable`, `react-intersection-observer`.

## Mandatory UI Effects
- **Glassmorphism**: High-translucency panels with subtle borders.
- **Interactions**: Cursor-aware hover glow, subtle card tilt, gradient shift, glow trails, and magnetic interactions.
- **Layout**: Deep charcoal backgrounds (primary) with blue/cyan/violet AI glow.

## Implementation Priority & Status
1. Theme system ✅
2. Shared card system ✅
3. Navbar ✅
4. Hero/About ✅
5. Projects ✅
6. Skills ✅
7. Experience/Hackathon ⏳ (Current Focus)
8. Contact polish ⏳
9. Refactor ⏳

## Detailed Section Requirements
- **Hero/About**: Preserve `ToolTip_Mini_Card` and social tooltip interaction. Upgrade with layered backgrounds, AI glow, animated grid, and spotlight effects.
- **Skills/Expertise**: Inspiration from "How I am as A Designer". Use large interactive cards, glass panels, and hover transformations.
- **Experience**: Use "Blogs Written by Me" section from reference as inspiration.
- **Hackathons**: Create reusable `ProjectCard`, `AchievementCard`, `HackathonCard` with animated hover, glowing borders, and status badges.
- **Projects**: Copy reference project cards with image preview, glass overlay, tech stack pills, and animated spotlight hover.
- **Education**: Maintain current structure; improve ordering, spacing, typography, and subtle hover polish.
- **Contact**: Futuristic input styles, glass contact form, animated borders, and hover glow buttons.

## Reusable Card Architecture
All cards in `/components/cards/` should support:
- Dark/light themes
- Hover glow
- Subtle border animation
- Responsive layout
- Reusable padding variants

## Final Deliverable Requirement
At the end of the redesign, explicitly list:
- Components/cards that are no longer used.
- New components that replaced them.
