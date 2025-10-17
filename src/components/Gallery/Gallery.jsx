'use client';

const GalleryItem = ({ imageSrc, altText }) => {
  return (
    <div className="overflow-hidden rounded-lg aspect-[4/3] cursor-pointer relative group hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-deep-green bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-playfair">View Resort</span>
      </div>
    </div>
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
    <section className="py-20 px-6 bg-[var(--beige)] bg-opacity-20" id="gallery">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--deep-green)] font-playfair text-center mb-16">Experience Natural Luxury</h2>
        
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
    </section>
  );
};

export default Gallery;