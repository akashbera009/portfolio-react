// V1Root — the production v1 site, rendered at /. Extracted verbatim from
// the pre-router App.jsx so v1 behavior is byte-identical to what main shipped.

import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, ThemeContext } from './assets/ThemeContext';
import LoadingScreen from '../shared/components/LoadingScreen/LoadingScreen';
import { sections } from './assets/Data/Sections_Data.jsx';

const MainContent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastFirstSection = window.scrollY > window.innerHeight;
      setIsVisible(scrolledPastFirstSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSections = sections
    .filter(s => s.isActive)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid">
      <div
        className="body"
        style={{
          backgroundColor: isDarkMode ? '#0d1117' : '#F0F0F0',
          color: isDarkMode ? '#f0f6fc' : 'black',
        }}
      >
        <Navbar />

        {activeSections.map((sec) => {
          const Component = sec.component;
          return (
            <motion.div
              key={sec.id}
              className="section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <section id={sec.id}>
                <Component />
              </section>
            </motion.div>
          );
        })}
      </div>

      <button
        className={`back-to-top-btn ${isVisible ? 'visible' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 15l6-6l6 6" /></svg>
      </button>
    </div>
  );
};

function V1Root() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <MainContent />
      )}
    </ThemeProvider>
  );
}

export default V1Root;
