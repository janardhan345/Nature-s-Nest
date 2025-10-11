'use client';

import { MotionDiv } from '../animations/motion';
import Link from 'next/link';

// Simple leaf logo icon
const LeafLogo = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-10 h-10 text-mint-green"
  >
    <path d="M2 22c1.25-1.25 2.5-2.5 3.75-2.5 2.5 0 0 2.5 2.5 2.5 1.25 0 2.5-1.25 3.75-2.5"></path>
    <path d="M8 22c-.5-1.5-2.5-3.5-3.5-3.5-2 0 0 2.5 1 4"></path>
    <path d="M12 22c.5-2.5 1.5-3.5 2.5-3.5 1.25 0 0 2.5-1 3.5"></path>
    <path d="M19 22c-1.5-1-1-2-1-4 0-3.5 2-5.5 2-8 0-1.5-1-3-3-3s-2 2-2 3c0 2.5-1 3-1 5s1 3.5 1 5c0 1-1 2-2 2"></path>
  </svg>
);

// Social media icon
const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-green text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <LeafLogo />
              <span className="font-playfair text-2xl">Nature's Nest</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Our Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-mint-green transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <MotionDiv 
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    <Link href="#" className="text-mint-green hover:text-white transition-colors duration-300">
                      <InstagramIcon />
                    </Link>
                  </MotionDiv>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-mint-green border-opacity-30 pt-6 text-center text-sm text-mint-green text-opacity-70">
          <p>&copy; {currentYear} Nature's Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;