import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import './GlassCard.css';

const GlassCard = ({ children, className = '', motionProps = {}, variant = 'default' }) => {
    const { activeTheme } = useContext(ThemeContext);

    const style = {
        '--glass-bg': activeTheme.glass,
        '--glass-border': activeTheme.glassBorder,
        '--glass-glow': activeTheme.glow,
        '--text-primary': activeTheme.textPrimary,
    };

    return (
        <motion.div
            className={`glass-card glass-card--${variant} ${className}`}
            style={style}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
