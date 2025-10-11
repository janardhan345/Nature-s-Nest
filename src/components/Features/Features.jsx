'use client';

import { MotionSection, MotionDiv, MotionH2, fadeInUp, staggerContainer } from '../animations/motion';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <MotionDiv 
      className="bg-white p-8 rounded-lg shadow-sm border border-soft-sand hover:shadow-lg transition-all duration-300"
      variants={fadeInUp}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', transition: { duration: 0.3 } }}
    >
      <div className="text-mint-green mb-4 w-16 h-16 mx-auto">
        {icon}
      </div>
      <h3 className="font-playfair text-2xl mb-3 text-center text-deep-green">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </MotionDiv>
  );
};

// Simple line icons
const NaturalInteriorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const OrganicFoodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path>
    <path d="M8 5H5a1 1 0 0 0-1 1v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1Z"></path>
    <path d="M5 14h6"></path>
    <path d="M5 18h6"></path>
    <path d="M19 10V6c0-.6-.4-1-1-1h-3"></path>
    <path d="M16 5V3c0-.6-.4-1-1-1"></path>
    <path d="M19 10c-1.1 0-2 .9-2 2v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1c0-1.1-.9-2-2-2"></path>
    <path d="M17 14h3c.6 0 1-.4 1-1v-1c0-1.1-.9-2-2-2"></path>
    <path d="M18 19c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2"></path>
    <path d="M16 19h-2c-.6 0-1-.4-1-1v-1c0-1.1.9-2 2-2s2 .9 2 2v1c0 .6-.4 1-1 1Z"></path>
  </svg>
);

const NoPlasticIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M8.4 10.6a7 7 0 0 0 9.8 9.8M14 16.8a7 7 0 0 0 4.6-6.7c0-1.8-.7-3.6-2-5a7 7 0 0 0-9.9 0"></path>
    <path d="M5 6.5a7 7 0 0 0-1.1 3.8c0 2.6 1.5 5 3.7 6.8"></path>
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="8" cy="9" r="1"></circle>
    <circle cx="16" cy="9" r="1"></circle>
    <circle cx="8" cy="15" r="1"></circle>
    <circle cx="16" cy="15" r="1"></circle>
    <path d="M3 3l18 18"></path>
  </svg>
);

const Features = () => {
  const features = [
    {
      title: "Natural Interiors",
      description: "Sustainable, locally sourced materials that blend with the environment while providing ultimate comfort.",
      icon: <NaturalInteriorsIcon />
    },
    {
      title: "Local Organic Food",
      description: "Farm-to-table cuisine featuring fresh ingredients from our gardens and local producers.",
      icon: <OrganicFoodIcon />
    },
    {
      title: "No Plastic Policy",
      description: "Our commitment to zero single-use plastics preserves the pristine environments we call home.",
      icon: <NoPlasticIcon />
    }
  ];

  return (
    <MotionSection 
      className="py-20 px-6 bg-mint-green bg-opacity-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      id="features"
    >
      <div className="container mx-auto">
        <MotionH2 
          className="text-3xl md:text-4xl text-deep-green font-playfair text-center mb-16"
          variants={fadeInUp}
        >
          Luxury in Harmony with Nature
        </MotionH2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Features;