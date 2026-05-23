import React, { useContext } from 'react';
import './skills.css';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import { Technical_Domain_Data } from '../../../shared/assets/Data/Technical_Domain_Data';
import { Tools_Languages_Data } from '../../../shared/assets/Data/Tools_Languages_Data';
import { traitsData } from '../../assets/Data/Traits_Data';
import TraitCard from '../../components/Cards/TraitCard';
import GlassCard from '../../components/Cards/GlassCard';

function Skills() {
  const { activeTheme } = useContext(ThemeContext);

  const style = {
    '--accent-glow': activeTheme.primary,
    '--text-primary': activeTheme.textPrimary,
    '--text-secondary': activeTheme.textSecondary,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="skills-page-wrapper" style={style}>
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="skills-main-title">Technical Proficiency</h2>
        <p className="skills-subtitle">A blend of technical mastery and human-centric problem solving.</p>
      </motion.div>

      <div className="skills-layout">
        <motion.section
          className="traits-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants} className="section-label">How I Build</motion.h3>
          <div className="traits-grid">
            {traitsData.map((trait) => (
              <motion.div key={trait.id} variants={itemVariants}>
                <TraitCard
                  trait={trait.trait}
                  professionalWhy={trait.professionalWhy}
                  humanTouch={trait.humanTouch}
                  icon={trait.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mastery-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants} className="section-label">Technical Mastery</motion.h3>
          <div className="mastery-grid">
            {Technical_Domain_Data
              .filter(item => item.isActive)
              .sort((a, b) => b.priorty - a.priorty)
              .map((domain, index) => (
                <motion.div key={domain.id || index} variants={itemVariants}>
                  <GlassCard variant="compact" className="domain-card">
                    <div className="domain-header">
                      <span className="domain-icon">{domain.icon}</span>
                      <h4 className="domain-title">{domain.title}</h4>
                    </div>
                    <div className="domain-details">
                      {domain.skills?.map((skill, idx) => (
                        <span key={idx} className="domain-skill-pill">{skill}</span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
          </div>
        </motion.section>

        <motion.section
          className="tools-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants} className="section-label">Languages & Daily Drivers</motion.h3>
          <div className="tools-cloud">
            {Tools_Languages_Data
              .filter(item => item?.isActive)
              .sort((a, b) => b.priorty - a.priorty)
              .map((tool, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard variant="compact" className="tool-pill-card">
                    <div className="tool-pill-content">
                      <span className="tool-icon">{tool.icon}</span>
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-level">{tool.working}%</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
    // </div>
  );
}

export default Skills;
