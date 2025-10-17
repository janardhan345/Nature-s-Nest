 'use client';

import { useEffect, useState } from 'react';

// Leaf SVG component
const Leaf = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
<path fill="#A8D5BA" d="m150.38 253.68l21.94-23.3l11.65 11c73.63 69.36 147.51 111.56 234.45 133.07c11.73-32 12.77-67.22 2.64-101.58c-13.44-45.59-44.74-85.31-90.49-114.86c-40.25-26-76.6-32.09-115.09-38.54c-21.12-3.54-43-7.2-66.85-14.43c-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15L32 63.33c-.1 2.56-2.42 63.57 14.22 147.77c17.58 89 50.24 155.85 97.07 198.63c38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75c-89.5-23.28-165.95-67.55-242-139.16Z"/>
<path fill="#A8D5BA" d="M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.5 158.5 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583 583 0 0 0 58.55 12l15.82 2.44l4.86-31.63Z"/></svg>
);

export const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const numLeaves = 18;
    const colorOptions = ['#A8D5BA', '#F6EAD4', '#E0D6C3', '#47624F'];
    const newLeaves = Array.from({ length: numLeaves }).map((_, i) => {
      const size = Math.round(Math.random() * 30 + 12);
      const startX = Math.random() * 100;
      const startY = Math.random() * -80 - 10;
      const duration = +(Math.random() * 12 + 18).toFixed(2);
      const delay = +(Math.random() * 6).toFixed(2);
      const rotate = Math.round(Math.random() * 360);
      const opacity = +(Math.random() * 0.5 + 0.3).toFixed(2);
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      return { id: `leaf-${i}`, size, startX, startY, duration, delay, rotate, opacity, color };
    });
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <style>{`
        @keyframes leafFall { 
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(120vh) rotate(360deg); opacity: 0.9; }
        }
      `}</style>
      {leaves.map((leaf) => {
        const style = {
          left: `${leaf.startX}%`,
          top: `${leaf.startY}%`,
          width: `${leaf.size}px`,
          height: `${leaf.size}px`,
          opacity: leaf.opacity,
          transform: `rotate(${leaf.rotate}deg)`,
          animation: `leafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          transformOrigin: 'center',
        };
        return (
          <div key={leaf.id} style={style} className="absolute drop-shadow-lg filter blur-[0.3px]">
            <Leaf size={leaf.size} color={leaf.color} />
          </div>
        );
      })}
    </div>
  );
};

export const FloatingAnimation = ({ children, duration = 4, yOffset = 15, ...props }) => {
  const animationStyle = {
    animation: `floatAnim ${duration}s ease-in-out infinite`,
    display: 'inline-block'
  };
  return (
    <div style={animationStyle} {...props}>
      <style>{`
        @keyframes floatAnim { 0% { transform: translateY(0); } 50% { transform: translateY(-${yOffset}px); } 100% { transform: translateY(0); } } 
      `}</style>
      {children}
    </div>
  );
};