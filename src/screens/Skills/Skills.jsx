import React, { useRef, useState, useEffect } from 'react'
import './skills.css'
import ThreeD_Hover_Card from '../../components/Cards/ThreeD_Hover_Card'
import { Tool_Language_Card } from '../../components/Cards/Tool_Language_Card';
import { Technical_Domain_Data } from '../../assets/Data/Technical_Domain_Data';
import { Technical_Domain_Card } from '../../components/Cards/Technical_Domain_Card';
import { Tools_Languages_Data } from '../../assets/Data/Tools_Languages_Data';
import { Subject_Mastery_Data } from '../../assets/Data/Subject_Mastery_Data';

function Skills() {

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const autoScrollTimer = useRef(null);
  const isUserInteracting = useRef(false);
  const inactivityTimer = useRef(null);



  // Check scroll position
  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowLeft(container.scrollLeft > 0);
    setShowRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
  };

  // Manual scroll
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 450;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if (direction === 'right' && isAtEnd) {
      // Loop to start
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Normal scroll
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }

    // Reset interaction flag
    handleUserInteraction();
  };

  // Auto-scroll
  const startAutoScroll = () => {
    clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(() => {
      if (!isUserInteracting.current) {
        scroll('right');
      }
    }, 3000); // Adjust timing (3 seconds)
  };

  // Handle user interaction
  const handleUserInteraction = () => {
    isUserInteracting.current = true;
    clearTimeout(inactivityTimer.current);

    // Resume after 5 seconds of inactivity
    inactivityTimer.current = setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 3000);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial setup
    checkScroll();
    container.addEventListener('scroll', checkScroll);

    // Mouse events
    container.addEventListener('mousedown', () => isUserInteracting.current = true);
    container.addEventListener('mouseup', handleUserInteraction);
    container.addEventListener('touchstart', () => isUserInteracting.current = true);
    container.addEventListener('touchend', handleUserInteraction);

    // Start auto-scroll
    startAutoScroll();

    return () => {
      container.removeEventListener('scroll', checkScroll);
      container.removeEventListener('mousedown', () => isUserInteracting.current = true);
      container.removeEventListener('mouseup', handleUserInteraction);
      container.removeEventListener('touchstart', () => isUserInteracting.current = true);
      container.removeEventListener('touchend', handleUserInteraction);
      clearInterval(autoScrollTimer.current);
      clearTimeout(inactivityTimer.current);
    };
  }, []);

  return (
    <>

      <div className="skills-bg-grid"></div>
      <div className="skills-container">

        <h2>Technical Proficiency </h2>
        <div className="header-badge"><p className='animated-gradient-text'>Primary Technical Domains</p></div>

        <div className="skills-grid">
          {Technical_Domain_Data
            .filter(item => item.isActive)
            .sort((a, b) => b.priorty - a.priorty)
            .map((item, index) => (
              <Technical_Domain_Card key={index} item={item} />
            ))}
        </div>

        <div className="bracket-container ">
          <div className="header-badge"><p className='animated-gradient-text'>Languages & Daily Drivers</p></div>

          <div className="tool-language-container">
            {Tools_Languages_Data
              .filter(item => item?.isActive)
              .sort((a, b) => b.priorty - a.priorty)
              .map((item, index) => (
                <Tool_Language_Card
                  key={index}
                  name={item.name}
                  working={item.working}
                  icon={item.icon}
                />
              ))}
          </div>

        </div>
        <div className="header-badge"><p className='animated-gradient-text'>Key Subject Mastery</p></div>


        <div className="stats-wrapper">

          <button onClick={() => scroll('left')} className={`scroll-btn left ${!showLeft && 'hidden'}`}><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z" /></svg></button>
          <div class="stats-container" ref={scrollRef}>
            <div className='inside-stats-container'></div>
            {Subject_Mastery_Data
              .filter(item => item.isActive)
              .sort((a, b) => b.priorty - a.priorty)
              .map((card, index) => (
                <ThreeD_Hover_Card
                  key={index}
                  title={card.title}
                  liItem1={card.items[0]}
                  liItem2={card.items[1]}
                  liItem3={card.items[2]}
                  subCode={card.subCode}
                  iconSource={card.iconSource}
                />
              ))}
            <button onClick={() => scroll('right')} className={`scroll-btn right ${!showRight && 'hidden'}`}><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z" /></svg></button>
          </div>
        </div>

      </div>
    </>
  )
}


export default Skills
