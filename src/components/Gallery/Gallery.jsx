'use client';

import { MotionSection, MotionDiv, MotionH2, MotionImage, fadeInUp, staggerContainer } from '../animations/motion';

const GalleryItem = ({ imageSrc, altText }) => {
  return (
    <MotionDiv 
      className="overflow-hidden rounded-lg aspect-[4/3] cursor-pointer relative group"
      variants={fadeInUp}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(71, 98, 79, 0.15)' }}
      transition={{ duration: 0.4 }}
    >
      <MotionImage 
        src={imageSrc} 
        alt={altText} 
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      />
      <div className="absolute inset-0 bg-deep-green bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-playfair">View Resort</span>
      </div>
    </MotionDiv>
  );
};

const Gallery = () => {
  // These would be replaced with actual resort images
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Luxury eco-cottage with panoramic forest views" },
    { src: "/images/gallery-2.jpg", alt: "Sustainably designed pool area surrounded by nature" },
    { src: "/images/gallery-3.jpg", alt: "Open-air natural dining experience" },
    { src: "/images/gallery-4.jpg", alt: "Luxurious bedroom with organic materials" },
    { src: "/images/gallery-5.jpg", alt: "Peaceful meditation area in natural surroundings" },
    { src: "/images/gallery-6.jpg", alt: "Eco-resort exterior blending with the landscape" },
  ];

  return (
    <MotionSection 
      className="py-20 px-6 bg-beige bg-opacity-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      id="gallery"
    >
      <div className="container mx-auto">
        <MotionH2 
          className="text-3xl md:text-4xl text-deep-green font-playfair text-center mb-16"
          variants={fadeInUp}
        >
          Experience Natural Luxury
        </MotionH2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem 
              key={index}
              imageSrc={image.src}
              altText={image.alt}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Gallery;