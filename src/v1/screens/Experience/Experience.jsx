import React, { useContext } from 'react'
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import './experience.css';
import { experiences, hackathons } from '../../../shared/assets/Data/Experience_Data';

function Experience() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="experience-container">
      <h2>Professional Journey</h2>
      <div className={`experience-list ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        {experiences
          .filter(item => item.isActive)
          .sort((a, b) => b.priorty - a.priorty)
          .map((exp, index) => (
            <motion.div
              className="experience-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}  // Starts with opacity 0 and slight downward position
              animate={{ opacity: 1, y: 0 }}   // Animates to full opacity and normal position
              transition={{ delay: index * 0.1, duration: 0.5 }}  // Staggered delay for each card
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }} // Hover effects
            >
              <h3>{exp.title}</h3>
              <p className="company-name">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </motion.div>
          ))}
      </div>

      {hackathons && hackathons?.length > 0 && (
        <>
          <h3 className={`hackathons-subsection   ${isDarkMode ? 'dark' : 'light'}`}>Hackathons</h3>
          <div class="hackathon-grid">

            {hackathons
              .filter(item => item.isActive)
              .sort((a, b) => b.priorty - a.priorty)
              .map((exp, index) => (
                <div class={`hackathon-card  ${isDarkMode ? 'dark' : 'light'}`} key={index}>
                  <h4>{exp.title}</h4>
                  <p class={`hackathon-date  ${isDarkMode ? 'dark' : 'light'}`}>{exp.date}</p>
                  <p class="hackathon-role">{exp.role}</p>
                  <p class="hackathon-achievements">
                    {exp.description}
                  </p>
                  <div class={`hackathon-tech ${isDarkMode ? 'dark' : 'light'}`}>
                    {exp?.techs && exp?.techs?.map((tech, index) => (
                      <span
                        key={index}
                        class={`tech-tag  ${isDarkMode ? 'dark' : 'light'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={exp.link} class={`hackathon-link1  ${isDarkMode ? 'dark' : 'light'}`} target="_blank">View Project</a>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Experience;
