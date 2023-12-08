import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Your CSS file for cursor styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor-wrapper">
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="circle circle1"
        style={{
          left: `${position.x-5}px`,
          top: `${position.y-5}px`,
        }}
      ></div>
      <div
        className="circle circle2"
        style={{
          left: `${position.x+5}px`,
          top: `${position.y+5}px`,
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
