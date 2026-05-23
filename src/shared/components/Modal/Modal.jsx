// Modal.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import ImageSlideshow from '../ImageSlideShow/ImageSlideShow';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const {
    name,
    logo,
    githubLink,
    linkedinLink,
    liveDemo,
    images,
    description,
    techStack,
    features,
    role,
    challenges,
    isResponsive,
    performanceBadge
  } = project;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-header1">
          <div className="logo-container1">
            <img src={logo} alt={`${name} logo`} className="project-logo1" loading="lazy"/>
          </div>
          <div className="header-content1">
            <h2 className="modal-h21">{name}</h2>
          </div>
        </div>

        <div className="modal-slider-show">
          <ImageSlideshow img1={images[0]} img2={images[1]} img3={images[2]}/>
        </div>
            <div className="modal-links">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                GitHub
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                LinkedIn
              </a>
              {liveDemo && (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 16v-5h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 11h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Live Demo
                </a>
              )}
            </div>

        <div className="modal-content">
          <div className="description-section">
            <h3 className="section-title1">Project Overview</h3>
            <p className="description1">{description}</p>
          </div>

          <div className="modal-info-row">
            <div className="info-card">
              <h3 className="section-title1">Tech Stack</h3>
              <div className="tech-stack-badges">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3 className="section-title1">Key Features</h3>
              <ul className="features-list">
                {features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4 12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3 className="section-title1">My Role</h3>
              <div className="role-content">{role}</div>
            </div>
          </div>

          {challenges && (
            <div className="challenges-section">
              <h3 className="section-title1">Challenges & Learnings</h3>
              <p className="challenges-content">{challenges}</p>
            </div>
          )}

          <div className="indicators">
            {isResponsive && (
              <div className="indicator-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Responsive Design
              </div>
            )}
            {performanceBadge && (
              <div className="indicator-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2 7 8l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 11v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {performanceBadge}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;