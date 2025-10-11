'use client';

import { MotionSection, MotionH1, MotionP, MotionDiv, fadeInUp, staggerContainer } from '../animations/motion';

const Hero = () => {
  return (
    <MotionSection
      className="relative h-screen-90 bg-hero-pattern bg-cover bg-center text-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <MotionH1 
          className="font-playfair text-5xl md:text-7xl mb-4"
          variants={fadeInUp}
        >
          Heaven, Naturally.
        </MotionH1>
        
        <MotionP 
          className="font-poppins text-xl md:text-2xl mb-8 max-w-2xl"
          variants={fadeInUp}
        >
          Escape to eco-crafted luxury resorts designed in harmony with nature.
        </MotionP>
        
        <MotionDiv
          variants={fadeInUp}
        >
          <button className="bg-deep-green hover:bg-opacity-90 text-white font-poppins px-8 py-3 rounded-sm transition-all duration-300 text-lg">
            Book Your Haven
          </button>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Hero;