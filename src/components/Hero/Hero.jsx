'use client';

import { FloatingLeaves, FloatingAnimation } from '../animations/FloatingLeaves';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[90vh] bg-[var(--deep-green)]] overflow-hidden">
      {/* Background image with proper loading */}
      <div className="inset-2 z-2">
        <Image 
          src="/images/peakpx.jpg" 
          alt="Eco-luxury resort in nature" 
          fill 
          priority
          style={{ objectPosition: 'center'}}
        />
      </div>
      
      {/* Dark overlay with theme color */}
     
      
      {/* Add floating leaves animation */}
      <FloatingLeaves />
      
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center items-center text-center">
        <h1 className="font-playfair text-5xl md:text-7xl mb-4 text-[var(--beige)] bg-[var(--deep-green)] inline-block rounded-3xl px-4 py-2">Heaven, Naturally.</h1>

        <p className="font-poppins text-xl md:text-2xl mb-10 max-w-2xl text-[var(--soft-sand)] bg-[var(--deep-green)] inline-block rounded-3xl px-4 py-2">Escape to eco-crafted luxury resorts designed in harmony with nature.</p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="#booking" className="group">
            <button className="bg-[var(--mint-green)] hover:bg-opacity-90 text-[var(--deep-green)] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 text-lg">
              Book Your Haven
            </button>
          </Link>
          
          <Link href="#explore" className="group">
            <button className="bg-transparent hover:bg-[var(--beige)] hover:bg-opacity-20 border-2 border-[var(--beige)] text-[var(--beige)] hover:text-[var(--deep-green)] font-medium py-4 px-10 rounded-full transition-all duration-300 transform group-hover:-translate-y-1 text-lg">
              Explore Our Resorts
            </button>
          </Link>
  </div>
      </div>
      
      {/* Scroll indicator */}
  <FloatingAnimation className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" yOffset={12}>
        <div className="flex flex-col items-center">
          <span className="text-[var(--beige)] text-sm mb-2 opacity-80">Scroll to explore</span>
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
            className="text-[var(--beige)] opacity-80"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </FloatingAnimation>
  </section>
  );
};

export default Hero;