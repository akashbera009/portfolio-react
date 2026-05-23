// V2Root — the redesign shell, rendered at /v2.
//
// Composes v2 sections directly (no Sections_Data registry — hand-composed
// so it's obvious which version each section uses). Sections that don't have
// a v2 design yet (Education, Achievements, Hobbies) borrow the v1 component
// for now; flagged with TODO so they're easy to find when redesigned.
//
// v1 borrowed sections are wrapped in v1's own ThemeProvider because they
// `useContext(v1Theme)`; v2's ThemeContext has a different shape.
//
// A visible "V2" badge in the top-right corner makes it obvious at a glance
// that you're on /v2. Remove before any public reveal.

import React from 'react';
import { motion } from 'framer-motion';

import { ThemeProvider } from './assets/ThemeContext';
import { ThemeProvider as V1ThemeProvider } from '../v1/assets/ThemeContext';
import Navbar from './components/Navbar/Navbar';

// v2 sections
import About from './screens/About/About';
import Skills from './screens/Skills/Skills';
import Projects from './screens/Projects/Projects';
import Experience from './screens/Experience/Experience';
import Contact from './screens/Contact/Contact';

// TODO(v2): redesign these — currently borrowing v1 components.
import Education from '../v1/screens/Education/Education';
import Achievements from '../v1/screens/Achievements/Achievements';

import './v2Root.css';

// `borrowed: true` → wrap the section in v1's ThemeProvider so the v1
// component's useContext(v1Theme) resolves.
const v2Sections = [
  { id: 'about',        Component: About },
  { id: 'education',    Component: Education,    borrowed: true },
  { id: 'skills',       Component: Skills },
  { id: 'projects',     Component: Projects },
  { id: 'experience',   Component: Experience },
  { id: 'achievements', Component: Achievements, borrowed: true },
  { id: 'contact',      Component: Contact },
];

function V2Root() {
  return (
    <ThemeProvider>
      <div className="v2-root">
        <span className="v2-dev-badge" aria-hidden="true">V2</span>
        <Navbar />
        {v2Sections.map(({ id, Component, borrowed }) => {
          const node = <Component />;
          return (
            <motion.div
              key={id}
              className="section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <section id={id}>
                {borrowed ? <V1ThemeProvider>{node}</V1ThemeProvider> : node}
              </section>
            </motion.div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default V2Root;
