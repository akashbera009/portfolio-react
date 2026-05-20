import React, { useState, useEffect } from 'react'
import './project.css'
import Modal from '../../components/Modal/Modal';
import { Project_Data } from '../../assets/Data/Project_Data';
import { Project_Card } from '../../components/Cards/Project_Card';

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const visibleProjects = isExpanded
    ? Project_Data
    : isMobile
      ? Project_Data.slice(0, 2)  // Show only 2 on mobile
      : Project_Data.slice(0, 3); // Show 3 on desktop


  const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

  return (
    <>
      <h2>Selected Works</h2>

      <div className="projects-section">

        <div className={`alter-prjct-container ${isExpanded ? 'expanded' : ''}`}>
          {visibleProjects
            .filter(item => item?.isActive)
            .sort((a, b) => b.priorty - a.priorty)
            .map((proj, index) => (
              <Project_Card
                proj={proj}
                key={index}
                handleOpenModal={handleOpenModal}
              />
            ))}
        </div>
      </div>

      <div className="expand-collapse-wrapper">
        <button className="alter-prjt-open-btn-1" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Collapse Projects' : 'Expand All Projects'}
          <span className={`arrow-icon ${isExpanded ? 'expanded' : ''}`} />
        </button>
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          project={selectedProject}
        />
      )}
    </>
  )
}


export default Projects