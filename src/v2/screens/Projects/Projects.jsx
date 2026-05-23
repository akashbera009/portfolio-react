import React, { useState, useEffect } from 'react';
import './project.css';
import Modal from '../../../shared/components/Modal/Modal';
import { Project_Data } from '../../../shared/assets/Data/Project_Data';
import ProjectCard from '../../components/Cards/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';

function Projects() {
    const { activeTheme } = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleProjects = isExpanded
        ? Project_Data
        : isMobile
            ? Project_Data.slice(0, 2)
            : Project_Data.slice(0, 3);

    const handleOpenModal = (proj) => {
        setSelectedProject(proj);
        setModalOpen(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const style = {
        '--accent-glow': activeTheme.primary,
        '--text-primary': activeTheme.textPrimary,
    };

    return (
        <div className="projects-page-wrapper" style={style}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="projects-section-title"
            >
                Selected Works
            </motion.h2>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <AnimatePresence mode="popLayout">
                    {visibleProjects
                        .filter(item => item?.isActive)
                        .sort((a, b) => b.priorty - a.priorty)
                        .map((proj, index) => (
                            <motion.div key={proj.id || index} variants={itemVariants} layout>
                                <ProjectCard
                                    proj={proj}
                                    handleOpenModal={handleOpenModal}
                                />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </motion.div>

            <div className="expand-collapse-wrapper">
                <motion.button
                    className="expand-projects-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isExpanded ? 'Collapse Projects' : 'Explore All Works'}
                    <span className={`arrow-icon ${isExpanded ? 'expanded' : ''}`} />
                </motion.button>
            </div>

            {selectedProject && (
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    project={selectedProject}
                />
            )}
        </div>
    );
}

export default Projects;
