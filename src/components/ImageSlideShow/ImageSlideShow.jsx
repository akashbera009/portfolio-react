import React, { useEffect, useState } from 'react';
import './imageSlideshow.css'; // Import the CSS

const ImageSlideshow = ({img1 , img2 , img3 }) => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <img 
        loading='lazy'
          key={index}
          src={src}
          className={`slide11 ${index === current ? 'active11' : ''}`}
          alt={`slide-${index}`}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
