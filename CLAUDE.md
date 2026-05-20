# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- Develop: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: `npm run deploy`
- Preview build: `npm run preview`

## Architecture and Structure

- **Framework**: React 18 with Vite.
- **Key Directories**:
  - `src/components`: Main page sections (About, Achievements, Contact, Education, Experience, Hobbies, Projects, Skills) and core layout components (Header, Footer, Navbar, LoadingScreen).
  - `src/SupportingComonent`: Reusable utility components such as `Modal.jsx`, `ImageSlideShow.jsx`, and `ThreeD_Hover_Card.jsx`.
  - `src/assets`: Contains `ThemeContext.jsx` for managing theme state.
  - `src/css`: Theme-related color definitions.
- **Styling**: Uses CSS files colocated with components.
- **Key Libraries**: `framer-motion` for animations, `react-draggable` for interactive elements, and `react-intersection-observer` for scroll-based triggers.
