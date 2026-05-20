// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, ThemeContext } from './assets/ThemeContext';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { sections } from "./assets/Data/Sections_Data.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };


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

          {activeSections
            .map((sec) => {
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6" /></svg>
        </button>

      </div>
    );
  };
  return (<>
    <ThemeProvider>
      {loading ? (
        //  <MainContent />
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <MainContent />
      )}
    </ThemeProvider>
  </>
  );
}

export default App;