'use client';

import { useEffect } from 'react';
import { Playfair_Display, Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

// Configure fonts
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair-display',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const Layout = ({ children }) => {
  const pathname = usePathname();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`${playfair.variable} ${poppins.variable}`}>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;