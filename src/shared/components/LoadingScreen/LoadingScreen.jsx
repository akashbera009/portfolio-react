import React, { useState, useEffect } from 'react';
import './loading-screen.css'; // Assuming the CSS is in this file

const loadingLines = [
    "Initializing environment variables...",
    "Loading fonts and stylesheets...",
    "Setting up framework dependencies...",
    "Configuring React components...",
    "Loading API endpoints...",
    "Authenticating user session...",
    "Analyzing project structure...",
    "Rendering navigation menu...",
    "Compiling assets and resources...",
    "Optimizing performance...",
    "Building UI components...",
    "Rendering animations...",
    "Integrating third-party APIs...",
    "Checking for updates...",
    "Initializing state management...",
    "Setting up routing logic...",
    "Applying dark mode styles...",
    "Verifying certificates...",
    "Connecting to blockchain network...",
    "Launching portfolio...",
    "Fetching analytics data...",
    "Running accessibility checks...",
    "Finalizing visual elements...",
    "Processing media files...",
    "Initializing About section...",
    "Initializing Skills section...",
    "Loading Projects data...",
    "Retrieving Experience details...",
    "Connecting to Certifications module...",
    "Finalizing Contact section...",
    "Fetching portfolio components...",
    "Optimizing assets...",
    "Compiling Framer Motion animations...",
    "Integrating theme switcher...",
    "Setting up scroll triggers...",
    "Loading complete.",
    "Welcome . . ."
];

const LoadingScreen = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onComplete(); // Skip loading when Enter or Space is pressed
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
}, [onComplete]);
  useEffect(() => {
    // Simulate typing effect with a delay
    if (currentLine < loadingLines.length) {
      const typingSpeeds = [0, 150, 50]; // Different speeds in ms

      const timeoutId = setTimeout(() => {
        setLines((prevLines) => [...prevLines, loadingLines[currentLine]]);
        setCurrentLine((prevLine) => prevLine + 1);
      }, typingSpeeds[Math.floor(Math.random() * typingSpeeds.length)]);

      return () => clearTimeout(timeoutId); // Clean up timeout
    } else {
      // When loading is complete, trigger the parent function
      const completeTimeout = setTimeout(() => {
        onComplete();
      }, 100); // Delay before calling onComplete (which hides the loading screen)

      return () => clearTimeout(completeTimeout);
    }
  }, [currentLine]);

  return (
    <div className="loading-screen">
      <div className="loading-terminal">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        {currentLine < loadingLines.length && (
          <span className="cursor"></span> // Blinking cursor
        )}
      </div>
      
    </div>
  );
};

export default LoadingScreen;
