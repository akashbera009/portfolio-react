import React, { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/Cards/ProjectCard';
import './experience.css';
import { experiences, hackathons } from '../../assets/Data/Experience_Data';

const ExperienceItem = ({ exp, index }) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className="experience-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 10 }}
    >
      <div className="exp-content">
        <div className="exp-main">
          <h3 className="exp-title" style={{ color: activeTheme.textPrimary }}>{exp.title}</h3>
          <div className="exp-company-spaced" style={{ color: activeTheme.primary }}>
            {exp.company.toUpperCase().split('').join(' ')}
          </div>
        </div>
        <div className="exp-details">
          <span className="exp-duration" style={{ color: activeTheme.textSecondary }}>{exp.duration}</span>
          <p className="exp-description" style={{ color: activeTheme.textSecondary }}>{exp.description}</p>
        </div>
      </div>
      <div className="exp-arrow" style={{ color: activeTheme.primary }}>
        →
      </div>
    </motion.div>
  );
};

function Experience() {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <div className="experience-section">
      <div className="experience-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: activeTheme.textPrimary }}
        >
          Professional Journey
        </motion.h2>

        <div className="experience-list">
          {experiences
            .filter(item => item.isActive)
            .sort((a, b) => b.priorty - a.priorty)
            .map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
        </div>

        {hackathons && hackathons?.length > 0 && (
          <div className="hackathons-wrapper">
            <motion.h3
              className="subsection-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{ color: activeTheme.textPrimary }}
            >
              Hackathons & Achievements
            </motion.h3>
            <div className="hackathon-grid">
              {hackathons
                .filter(item => item.isActive)
                .sort((a, b) => b.priorty - a.priorty)
                .map((hack, index) => {
                  const projData = {
                    title: hack.title,
                    description: hack.description,
                    techStack: hack.techs,
                    github: hack.link,
                    live: null,
                    image: 'https://via.placeholder.com/400x250?text=Hackathon'
                  };
                  return (
                    <ProjectCard
                      key={index}
                      proj={projData}
                      handleOpenModal={(p) => console.log('Open Modal', p)}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
