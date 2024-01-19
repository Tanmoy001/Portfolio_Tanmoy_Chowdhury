import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Your CSS file for cursor styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHover = (e) => {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'p'||tagName === 'a') {
      setHovered(true);
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleHover);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className={`cursor-wrapper ${hovered ? 'big-cursor' : ''}`}>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="circle circle1"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="circle circle2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="circle circle3"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
