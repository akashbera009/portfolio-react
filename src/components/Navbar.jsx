import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../assets/ThemeContext';
import '../css/navbar.css'; // Ensure the path is correct

const DesktopNavbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Adjust this if necessary
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('Intersecting section:', entry.target.id); // Debugging
                    setActiveSection(entry.target.id);
                }
            });
        }, options);
    
        sections.forEach((section) => {
            observer.observe(section);
        });
    
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    

    return (
        <nav className={`navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
            <div className="navbar-logo">
                <img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="Logo" className="logo" />
                <h1>Akash Bera</h1>
            </div>
            
            <ul className="navbar-list">
                <li><a href="#about" className={`navbar-link ${activeSection === 'about' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>About</a></li>
                <li><a href="#skills" className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}  ${isDarkMode ? 'link-dark' : 'link-light'}`}>Skills</a></li>
                <li><a href="#projects" className={`navbar-link ${activeSection === 'projects' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Projects</a></li>
                <li><a href="#experience" className={`navbar-link ${activeSection === 'experience' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Experience</a></li>
                <li><a href="#certifications" className={`navbar-link ${activeSection === 'certificate' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Certifications</a></li>
                <li><a href="#contact" className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}${isDarkMode ? 'link-dark' : 'link-light'}`}>Contact</a></li>
            </ul>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={`navbar-link-linkedin ${isDarkMode ? 'link-dark' : 'link-light'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.775C.796 0 0 .795 0 1.775v20.45C0 23.205.796 24 1.775 24h20.45C23.205 24 24 23.205 24 22.225V1.775C24 .795 23.205 0 22.225 0zM7.079 20.452H3.74V9h3.339v11.452zM5.41 7.474c-1.05 0-1.89-.857-1.89-1.91 0-1.064.841-1.91 1.895-1.91 1.05 0 1.889.846 1.889 1.91 0 1.053-.839 1.91-1.889 1.91zM20.43 20.452h-3.339v-5.848c0-1.394-.027-3.197-1.948-3.197-1.951 0-2.248 1.525-2.248 3.096v6.949h-3.339V9h3.203v1.564h.046c.445-.84 1.53-1.73 3.145-1.73 3.363 0 3.981 2.208 3.981 5.08v6.539z"/>
                </svg>
            </a>
            <button onClick={toggleTheme} className={`theme-toggle ${isDarkMode ? 'toggle-dark' : 'toggle-light'}`}>
                {isDarkMode ? '🌙' : '☀️'}
            </button>
           
        </nav>
    );
};

const MobileNavbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Trigger when 60% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log('Mobile intersecting:', entry.target.id);
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className={`navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
            <div className="navbar-logo">
                <img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="Logo" className="logo" />
                <h1>Akash Bera</h1>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <div>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="121.31px"
                            height="122.876px"
                            viewBox="0 0 121.31 122.876"
                            enableBackground="new 0 0 121.31 122.876"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
                                />
                            </g>
                        </svg>
                    </div>
                    ) : (
                    <div>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 122.88 95.95"
                            style={{ enableBackground: 'new 0 0 122.88 95.95' }}
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    className="st0"
                                    d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"
                                />
                            </g>
                        </svg>
                    </div>
                )} {/* Toggle icon based on menu state */}
            </button>

            <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#about" className={`navbar-link ${activeSection === 'about' ? 'active' : ''}   ${isDarkMode ? 'link-dark' : 'link-light'}`}>About</a></li>
                <li><a href="#skills" className={`navbar-link ${activeSection === 'skills' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Skills</a></li>
                <li><a href="#projects" className={`navbar-link ${activeSection === 'projects' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Projects</a></li>
                <li><a href="#experience" className={`navbar-link ${activeSection === 'experience' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Experience</a></li>
                <li><a href="#certifications" className={`navbar-link ${activeSection === 'certificate' ? 'active' : ''} ${isDarkMode ? 'link-dark' : 'link-light'}`}>Certifications</a></li>
                <li><a href="#contact" className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}${isDarkMode ? 'link-dark' : 'link-light'}`}>Contact</a></li>
                <button onClick={toggleTheme} className={`theme-toggle ${isDarkMode ? 'toggle-dark' : 'toggle-light'}`}>
                {isDarkMode ? '🌙' : '☀️'}
            </button>
            </ul>
            
        </nav>
    );
};

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
