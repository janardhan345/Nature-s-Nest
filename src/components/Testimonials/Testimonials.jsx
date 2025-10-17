'use client';


const TestimonialCard = ({ quote, author, location, imageSrc }) => {
  return (
    <div className="bg-[var(--beige)] p-8 rounded-lg shadow-md border border-[var(--soft-sand)] flex flex-col items-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[var(--mint-green)]">
        <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
      </div>
      <p className="italic text-gray-600 text-center mb-6 relative">
        <span className="absolute -left-2 -top-4 text-4xl text-[var(--mint-green)] opacity-30">"</span>
        {quote}
        <span className="absolute -right-2 -bottom-4 text-4xl text-[var(--mint-green)] opacity-30">"</span>
      </p>
      <div className="text-center mt-2">
        <p className="font-playfair text-[var(--deep-green)] text-lg">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our stay at Nature's Nest was transformative. The connection with nature while enjoying luxurious comfort was exactly what we needed.",
      author: "Emma & James",
      location: "London, UK",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The sustainable approach to luxury hospitality sets a new standard. We left feeling refreshed and inspired.",
      author: "Sophie & Michael",
      location: "Berlin, Germany",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "The attention to detail and commitment to sustainability without compromising on luxury was remarkable.",
      author: "Olivia & Liam",
      location: "Sydney, Australia",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--mint-green)] bg-opacity-5" id="testimonials">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--mint-green)] font-playfair text-center mb-16">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              imageSrc={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;