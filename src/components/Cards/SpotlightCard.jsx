import React, { useState, useRef } from 'react';
import GlassCard from './GlassCard';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', motionProps = {} }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const spotlightStyle = {
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 80%)`,
    };

    return (
        <div
            className={`spotlight-card-wrapper ${className}`}
            onMouseMove={handleMouseMove}
            ref={cardRef}
        >
            <GlassCard motionProps={motionProps}>
                <div className="spotlight-overlay" style={spotlightStyle} />
                <div className="spotlight-content">
                    {children}
                </div>
            </GlassCard>
        </div>
    );
};

export default SpotlightCard;
