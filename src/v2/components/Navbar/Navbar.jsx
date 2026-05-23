import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import './navbar.css';

const DesktopNavbar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const { activeTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    const resumeLink = 'https://drive.google.com/file/d/1PvchcbK36TICD5mPDzyRulxORw7Ox2MQ/view?usp=sharing';

    const handleToggle = () => setOpen(!open);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeLink;
        link.setAttribute('download', 'Resume.pdf'); // Custom filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const style = {
        '--glass-bg': activeTheme.glass,
        '--glass-border': activeTheme.glassBorder,
        '--text-primary': activeTheme.textPrimary,
        '--text-secondary': activeTheme.textSecondary,
        '--accent-glow': activeTheme.primary,
    };

    return (
        <div className="navbar-wrapper" style={style}>
            <nav className="navbar-island">
                <a href="#about" className="navbar-logo-container">
                    <img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">Akash Bera</span>
                </a>

                <div className="navbar-links-container">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <motion.div
                        className="nav-pill"
                        initial={false}
                        animate={{
                            x: navItems.findIndex(i => i.id === activeSection) * 76.4, // Approximate width
                            width: 80
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                </div>

                <div className="navbar-actions">
                    <div className="dropdown-container" ref={dropdownRef}>
                        <button className="nav-action-btn" onClick={handleToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 441 512" width="24" height="24" fill="currentColor">
                                <path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm264.81 31.11c3.56.15 6.09 1.33 7.54 3.55 3.98 5.94-1.44 11.81-5.19 15.94l-40.04 40.71c-4.32 4.26-9.32 4.31-13.64 0l-41.01-41.82c-3.51-3.95-7.86-9.36-4.19-14.83 1.49-2.22 4-3.4 7.56-3.55h19.74v-32.45c0-5.82 4.81-10.69 10.7-10.69h28.06c5.9 0 10.71 4.8 10.71 10.69v32.45h19.76z" />
                            </svg>
                        </button>
                        {open && (
                            <div className="dropdown-content">
                                <a href={resumeLink} download target="_blank" rel="noopener noreferrer">
                                    <p className="text-download">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                                        Download Resume
                                    </p>
                                </a>
                                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                                    <p className="text-download">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" /><path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" /></svg>
                                        View Resume
                                    </p>
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="https://linkedin.com/in/akash-bera-5a3009250" target="_blank" rel="noopener noreferrer" className="nav-action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.225 0H1.775C.796 0 0 .795 0 1.775v20.45C0 23.205.796 24 1.775 24h20.45C23.205 24 24 23.205 24 22.225V1.775C24 .795 23.205 0 22.225 0zM7.079 20.452H3.74V9h3.339v11.452zM5.41 7.474c-1.05 0-1.89-.857-1.89-1.91 0-1.064.841-1.91 1.895-1.91 1.05 0 1.889.846 1.889 1.91 0 1.053-.839 1.91-1.889 1.91zM20.43 20.452h-3.339v-5.848c0-1.394-.027-3.197-1.948-3.197-1.951 0-2.248 1.525-2.248 3.096v6.949h-3.339V9h3.203v1.564h.046c.445-.84 1.53-1.73 3.145-1.73 3.363 0 3.981 2.208 3.981 5.08v6.539z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    );
};

const MobileNavbar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const { activeTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.3 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const style = {
        '--glass-bg': activeTheme.glass,
        '--glass-border': activeTheme.glassBorder,
        '--text-primary': activeTheme.textPrimary,
        '--text-secondary': activeTheme.textSecondary,
    };

    return (
        <div className="navbar-wrapper" style={style}>
            <nav className="navbar-island">
                <a href="#about" className="navbar-logo-container">
                    <img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">Akash Bera</span>
                </a>
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
                {isMenuOpen && (
                    <div className="navbar-links-container mobile-open">
                        {['about', 'skills', 'projects', 'experience', 'achievements', 'contact'].map(id => (
                            <a key={id} href={`#${id}`} className={`navbar-link ${activeSection === id ? 'active' : ''}`}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 980);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
