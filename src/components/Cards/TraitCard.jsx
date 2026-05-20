import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import './TraitCard.css';

const TraitCard = ({ trait, professionalWhy, humanTouch, icon }) => {
    const { activeTheme } = useContext(ThemeContext);

    const style = {
        '--accent-glow': activeTheme.primary,
    };

    return (
        <motion.div
            className="trait-card-wrapper"
            whileHover={{ y: -5 }}
        >
            <GlassCard variant="default" className="trait-card" style={style}>
                <div className="trait-icon">
                    {icon}
                </div>
                <div className="trait-content">
                    <h3 className="trait-title">{trait}</h3>
                    <p className="trait-professional">{professionalWhy}</p>
                    <p className="trait-human">"{humanTouch}"</p>
                </div>
            </GlassCard>
        </motion.div>
    );
};

export default TraitCard;
