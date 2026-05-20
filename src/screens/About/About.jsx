import React, { useContext, useState, useEffect } from 'react';
import './about.css';
import './grid.css';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import { about_section_introduction, gmailInfo, socialLinks } from '../../assets/Data/About_Section_Data';
import { traitsData } from '../../assets/Data/Traits_Data';
import TraitCard from '../../components/cards/TraitCard';
import GlassCard from '../../components/cards/GlassCard';

function About() {
    const { activeTheme } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const style = {
        '--glass-bg': activeTheme.glass,
        '--glass-border': activeTheme.glassBorder,
        '--text-primary': activeTheme.textPrimary,
        '--text-secondary': activeTheme.textSecondary,
        '--accent-glow': activeTheme.primary,
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
        <div className="about-main" style={style}>
            <div className="grid-background" />
            <div className="about-glow-orb orb-1" />
            <div className="about-glow-orb orb-2" />

            <div className="about-layout">
                <motion.div
                    className="about-hero"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-text-section">
                        <motion.span variants={itemVariants} className="greeting">
                            {about_section_introduction?.hi}
                        </motion.span>

                        <motion.div variants={itemVariants} className="hero-name-wrapper">
                            <span className="name-label">I'm </span>
                            <img
                                src={about_section_introduction?.name_image}
                                alt={about_section_introduction?.name}
                                className="hero-name-img"
                            />
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="hero-sub-header">
                            {about_section_introduction?.subHeader}
                        </motion.h2>

                        <motion.p variants={itemVariants} className="hero-description">
                            {about_section_introduction?.description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="hero-actions">
                            <div className="social-pills">
                                {socialLinks
                                    .filter(item => item?.isActive)
                                    .sort((a, b) => a.order - b.order)
                                    .map((item, index) => (
                                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                                            {item.deskTop_Icon}
                                            <span>{item.platform_name}</span>
                                        </a>
                                    ))}
                            </div>
                            <a href={`mailto:${gmailInfo.gmail}`} target="_blank" rel="noopener noreferrer" className="hero-gmail-btn">
                                {gmailInfo.Icon}
                                <span>Get in touch</span>
                            </a>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="hero-image-section">
                        <div className="image-glass-wrapper">
                            <img
                                src={about_section_introduction.big_image}
                                alt={about_section_introduction?.name}
                                className="hero-profile-image"
                            />
                            <div className="image-glow" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="traits-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 variants={itemVariants} className="section-title">
                        How I Build
                    </motion.h2>
                    <div className="traits-grid">
                        {traitsData.map((trait, index) => (
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
                </motion.div>
            </div>
        </div>
    );
}

export default About;
