// src/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { theme } from '../theme/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const activeTheme = useMemo(() => ({
        ...theme[isDarkMode ? 'dark' : 'light'],
        isDarkMode
    }), [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, activeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
