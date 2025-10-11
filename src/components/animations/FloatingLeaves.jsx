'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Leaf SVG component
const Leaf = ({ className, size = 24, color = '#A8D5BA', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <path d="M2 22c1.25-1.25 2.5-2.5 3.75-2.5 2.5 0 0 2.5 2.5 2.5 1.25 0 2.5-1.25 3.75-2.5"></path>
    <path d="M8 22c-.5-1.5-2.5-3.5-3.5-3.5-2 0 0 2.5 1 4"></path>
    <path d="M12 22c.5-2.5 1.5-3.5 2.5-3.5 1.25 0 0 2.5-1 3.5"></path>
    <path d="M19 22c-1.5-1-1-2-1-4 0-3.5 2-5.5 2-8 0-1.5-1-3-3-3s-2 2-2 3c0 2.5-1 3-1 5s1 3.5 1 5c0 1-1 2-2 2"></path>
  </svg>
);

export const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  
  // Generate random leaves with different properties
  useEffect(() => {
    const generateLeaves = () => {
      const numLeaves = 20; // Increased number of floating leaves
      const newLeaves = [];
      
      for (let i = 0; i < numLeaves; i++) {
        const size = Math.random() * 30 + 15; // Random size between 15 and 45
        const startX = Math.random() * 100; // Random start position (%)
        const startY = Math.random() * -100 - 20; // Start above the screen
        const duration = Math.random() * 10 + 20; // Animation duration between 20-30s
        const delay = Math.random() * 5; // Random delay (shorter for more immediate visibility)
        const rotate = Math.random() * 360; // Random rotation
        const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.3-0.8 (more visible)
        
        // Alternate colors between mint-green, beige, and deep-green with proper theme colors
        const colorOptions = ['#A8D5BA', '#F6EAD4', '#E0D6C3', '#47624F'];
        const colorIndex = Math.floor(Math.random() * colorOptions.length);
        
        newLeaves.push({
          id: `leaf-${i}`,
          size,
          startX,
          startY,
          duration,
          delay,
          rotate,
          opacity,
          color: colorOptions[colorIndex]
        });
      }
      
      setLeaves(newLeaves);
    };
    
    generateLeaves();
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          initial={{ 
            x: `${leaf.startX}%`, 
            y: `${leaf.startY}%`,
            opacity: 0,
            rotate: leaf.rotate
          }}
          animate={{ 
            y: '120%', // Go beyond the screen bottom
            x: `calc(${leaf.startX}% + ${(Math.random() * 30) - 15}px)`, // Add some sideways drift
            opacity: leaf.opacity,
            rotate: leaf.rotate + (Math.random() > 0.5 ? 360 : -360)
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
            ease: "easeInOut"
          }}
          style={{ 
            left: `${leaf.startX}%`,
          }}
        >
          <Leaf 
            size={leaf.size} 
            color={leaf.color} 
            className="drop-shadow-lg filter blur-[0.3px]"
          />
        </motion.div>
      ))}
    </div>
  );
};

// For gentle floating animation for any element
export const FloatingAnimation = ({ children, duration = 4, yOffset = 15, ...props }) => {
  return (
    <motion.div
      animate={{ 
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};