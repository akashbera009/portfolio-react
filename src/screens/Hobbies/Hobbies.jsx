import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import './hobbies.css';
import { ThemeContext } from '../../assets/ThemeContext';
import { hobbies } from '../../assets/Data/Hobbies_Data';

const Hobbies = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="hobbies-container">
      <h2>Hobbies</h2>
      <div className={`hobbies-list ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        {hobbies.map((hobby, index) => (
          <motion.a
            href={hobby.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hobby-card"
            key={`hobby-${index}`}
            style={{ '--accent-color': hobby.accentColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
          >
            <h3 className="hobi-h3">{hobby.title}</h3>
            <p>{hobby.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
