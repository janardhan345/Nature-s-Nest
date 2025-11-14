"use client";

import Link from "next/link";

// Simple leaf logo icon
const LeafLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 18.923q-1.317 0-2.48-.457T7.427 17.21l-2.073 2.049q-.134.14-.341.14t-.348-.14t-.14-.348t.14-.34l2.048-2.049q-.8-.929-1.256-2.105T5 11.923q0-2.931 2.034-4.965Q9.07 4.923 12 4.923h5.962q.44 0 .739.299q.299.3.299.74v5.961q0 2.931-2.034 4.966Q14.93 18.923 12 18.923m0-1q2.5 0 4.25-1.75t1.75-4.25v-6h-6q-2.5 0-4.25 1.75T6 11.923q0 1.11.377 2.103t1.056 1.776l5.233-5.233q.133-.14.34-.14t.354.146q.16.16.16.351t-.166.357L8.12 16.496q.783.679 1.776 1.053t2.103.374m0-6"
    />
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
    <footer
      className="bg-[var(--deep-green)] text-white py-12 relative z-10 border-t border-[var(--mint-green)] border-opacity-20"
      id="footer"
    >
      {/* Force footer to be visible in all modes */}
      <div className="absolute inset-0 bg-deep-green z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="inline-block transform transition-transform duration-300 hover:rotate-6 hover:scale-110 hover:text-[var(--mint-green)]">
                <LeafLogo />
              </div>
              <span className="font-playfair text-2xl hover:text-3xl transform duration-300 hover:text-[var(--soft-sand)]">
                Nature's Nest
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Our Locations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--mint-green)] transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <div className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <Link
                      href="#"
                      className="text-[var(--mint-green)] hover:text-white transition-colors duration-300"
                    >
                      <InstagramIcon />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--mint-green)] border-opacity-30 pt-6 text-center text-sm text-[var(--mint-green)]">
          <p>&copy; {currentYear} Nature's Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
