'use client';

import { MotionSection, MotionH1, MotionP, MotionDiv, fadeInUp, staggerContainer } from '../animations/motion';
import { FloatingLeaves, FloatingAnimation } from '../animations/FloatingLeaves';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <MotionSection
      className="relative h-screen min-h-[90vh] bg-deep-green text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Background image with proper loading */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Eco-luxury resort in nature" 
          fill 
          priority
          style={{objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
      
      {/* Dark overlay with theme color */}
      <div className="absolute inset-0 bg-deep-green bg-opacity-40 z-10"></div>
      
      {/* Add floating leaves animation */}
      <FloatingLeaves />
      
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center items-center text-center">
        <MotionH1 
          className="font-playfair text-5xl md:text-7xl mb-4 text-beige"
          variants={fadeInUp}
        >
          Heaven, Naturally.
        </MotionH1>
        
        <MotionP 
          className="font-poppins text-xl md:text-2xl mb-10 max-w-2xl text-soft-sand"
          variants={fadeInUp}
        >
          Escape to eco-crafted luxury resorts designed in harmony with nature.
        </MotionP>
        
        <MotionDiv
          className="flex flex-col sm:flex-row gap-6"
          variants={fadeInUp}
        >
          <Link href="#booking" className="group">
            <button className="bg-mint-green hover:bg-opacity-90 text-deep-green font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 text-lg">
              Book Your Haven
            </button>
          </Link>
          
          <Link href="#explore" className="group">
            <button className="bg-transparent hover:bg-beige hover:bg-opacity-20 border-2 border-beige text-beige hover:text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform group-hover:-translate-y-1 text-lg">
              Explore Our Resorts
            </button>
          </Link>
        </MotionDiv>
      </div>
      
      {/* Scroll indicator */}
      <FloatingAnimation className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" yOffset={12}>
        <div className="flex flex-col items-center">
          <span className="text-beige text-sm mb-2 opacity-80">Scroll to explore</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-beige opacity-80"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </FloatingAnimation>
    </MotionSection>
  );
};

export default Hero;