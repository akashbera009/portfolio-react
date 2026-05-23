import React, { useContext } from 'react';
import './achievement.css';
import { ThemeContext } from '../../assets/ThemeContext';
import { portfolioItems } from '../../../shared/assets/Data/Achievement_Data';

function Achievements() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`achievement-main-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="skills-bg-grid"></div>
      <h2 >Milestones</h2>

      <div className="outer-div">
        <div className="dashboard-grid">
          {portfolioItems
            .map((item, index) => (
              <div
                key={index}
                className={`dashboard-item ${item.size} ${isDarkMode ? 'achievement-dark' : 'achievement-light'}`}
                style={{ '--accent-color': item.accentColor }}
              >
                {/* Pattern Background */}
                <div className={`pattern ${item.pattern}`}></div>

                {/* Glow Effect */}
                <div className="card-glow"></div>

                {/* Content */}
                <span className="icon">{item.icon}</span>
                <p className={`title ${isDarkMode ? 'achievement-dark-title' : 'achievement-light-title'}`}>
                  {item.title}
                </p>
                {item.subtitle && (
                  <small className={`subtitle ${isDarkMode ? 'achievement-dark-sub' : 'achievement-light-sub'}`}>
                    {item.subtitle}
                  </small>
                )}

                {/* Corner Accents */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;