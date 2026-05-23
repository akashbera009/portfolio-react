import React, { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import './ProjectCard.css';

const ProjectCard = ({ proj, handleOpenModal }) => {
    const { activeTheme } = useContext(ThemeContext);

    const style = {
        '--accent-glow': activeTheme.primary,
        '--text-primary': activeTheme.textPrimary,
        '--text-secondary': activeTheme.textSecondary,
    };

    return (
        <SpotlightCard
            className="project-card-wrapper"
            motionProps={{
                whileHover: { y: -10, scale: 1.02 },
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
        >
            <div className="project-card-content" style={style}>
                <div className="project-image-container">
                    <img src={proj.image} alt={proj.title} className="project-image" />
                    <div className="project-image-overlay">
                        <button className="view-details-btn" onClick={() => handleOpenModal(proj)}>
                            View Details
                        </button>
                    </div>
                </div>

                <div className="project-info">
                    <div className="project-header">
                        <h3 className="project-title">{proj.title}</h3>
                        <div className="project-tags">
                            {proj.techStack?.map((tech, idx) => (
                                <span key={idx} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <p className="project-description">{proj.description}</p>

                    <div className="project-footer">
                        <div className="project-links">
                            {proj.github && (
                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.62C-2-2-2 10.3l6 14c.3 1.1.8 2.2 1.7 2.8l2-7.1C12.1 17.6 16.5 13.5 16.5 8.5C16.5 4.5 13.5 0 12 0z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            )}
                            {proj.live && (
                                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 13a5 5 0 0 0 7.54-4.29 1 1 0 0 0 .46-1.35 5 5 0 0 0-4.53-5.21 1 1 0 0 0-1.46.43 5 5 0 0 0-2.41 5.21 1 1 0 0 0 .46 1.35A5 5 0 0 0 10 13z" />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
};

export default ProjectCard;
