# Nature's Nest - Eco-Luxury Resort Landing Page

A responsive landing page for a fictional eco-luxury resort brand called "Nature's Nest" built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Fully responsive design optimized for desktop, tablet, and mobile devices
- Modern, clean UI with nature-inspired color scheme
- Smooth animations and transitions using Framer Motion
- Component-based architecture for easy maintenance
- Custom Google fonts integration (Playfair Display and Poppins)

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Google Fonts**: Web fonts for typography

## Project Structure

```
natures-nest/
├── public/
│   ├── images/ - Image assets
├── src/
│   ├── app/ - Next.js app directory
│   │   ├── globals.css - Global styles
│   │   ├── layout.js - Root layout component
│   │   └── page.js - Home page component
│   ├── components/ - React components
│   │   ├── Hero/ - Hero section component
│   │   ├── Features/ - Features section component
│   │   ├── Gallery/ - Gallery section component
│   │   ├── Testimonials/ - Testimonials section component
│   │   ├── Footer/ - Footer component
│   │   ├── animations/ - Animation utilities
│   │   └── Layout.jsx - Layout wrapper component
│   └── utils/ - Utility functions and constants
└── tailwind.config.js - Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/natures-nest.git
cd natures-nest
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:
- Mint Green: #A8D5BA
- Beige: #F6EAD4
- Soft Sand: #E0D6C3
- Deep Green: #47624F

### Fonts

The project uses Google Fonts:
- Playfair Display for headings
- Poppins for body text

### Images

Replace the placeholder images in the `public/images/` directory with your own images. Make sure to maintain the same file names or update the references in the components.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration: Luxury eco-resorts and minimalist design principles
- Next.js team for the amazing React framework
- Tailwind CSS team for the utility-first CSS framework
- Framer Motion team for the powerful animation library
