import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Nature's Nest | Eco-Luxury Resorts",
  description: "Eco-crafted luxury resorts designed in harmony with nature. Experience sustainable luxury at Nature's Nest resorts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
