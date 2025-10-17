'use client';


const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[var(--soft-sand)] p-8 rounded-lg shadow-sm border border-[var(--soft-sand)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[var(--beige)]">
      <div className="text-[var(--deep-green)] mb-4 w-16 h-16 mx-auto">
        {icon}
      </div>
      <h3 className="font-playfair text-2xl mb-3 text-center text-[var(--deep-green)]">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// Simple line icons
const NaturalInteriorsIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house-check w-full h-full" viewBox="0 0 16 16" >
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514"/>
</svg>
)
const OrganicFoodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" className="w-full h-full">
  <path strokeLinejoin="round" d="M10 9.255C7.606 7.958 5.08 5.715 3 2m8.616 2.419C9.58 3.084 7.097 3.642 6.069 5.666s-.211 4.747 1.824 6.083c1.842 1.209 5.874 2.459 9.107-1.004c-3.03-1.29-3.35-4.99-5.384-6.326"/>
  <path d="M4 11c-.64.47-1 1.005-1 1.572C3 14.465 7.03 16 12 16s9-1.535 9-3.428c0-.567-.36-1.101-1-1.572"/>
  <path d="M21 13c0 3.577-2.506 6.715-5.205 8.482c-.555.364-1.215.518-1.878.518h-3.834c-.663 0-1.323-.154-1.878-.518C5.506 19.715 3 16.577 3 13"/></g></svg>
);

const NoPlasticIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" className="w-full h-full">
  <path d="M5.003 16.408q.173-.521.2-1.069c0-.553-.123-1.099-.36-1.598a.34.34 0 0 0-.409-.25a.35.35 0 0 0-.25.41q.03.334 0 .669q-.072.376-.19.739c0 .24-.1.49-.17.73a5.6 5.6 0 0 0-.17 1.367c.012.26.099.51.25.72a.4.4 0 0 0 .53.14a.39.39 0 0 0 .13-.53c-.06-.14 0-.27 0-.42q.19-.468.44-.908m2.326 2.217h-.36c-1.198 0-1.208-.09-1.337.13c-.24.44.839.999 1.258 1.129c.238.06.485.078.73.05c1.377-.13 1.377-.47 1.377-.6s.13-.41-1.668-.709m15.951-1.498a4.51 4.51 0 0 0-3.555-3.756a7.2 7.2 0 0 0-2.677.06a5.8 5.8 0 0 0-2.507 1.059a6.6 6.6 0 0 0-2.118 3.925a4.81 4.81 0 0 0 1.229 4.245c.408.384.89.68 1.418.87a7.77 7.77 0 0 0 4.505.249a4.73 4.73 0 0 0 2.587-1.678a6.52 6.52 0 0 0 1.118-4.974m-9.798 1.478a5.42 5.42 0 0 1 1.848-3.146a4.56 4.56 0 0 1 1.998-.77a6 6 0 0 1 2.167-.06q.304.08.59.21c-.67.69-1.35 1.369-1.998 2.128c-.33.4-.64.819-.94 1.249a18 18 0 0 0-.838 1.308c-.56.999-1 1.948-1.488 2.926a2.8 2.8 0 0 1-.57-.38a3.89 3.89 0 0 1-.769-3.465m7.88 2.907a3.78 3.78 0 0 1-1.997 1.428a6.26 6.26 0 0 1-3.885-.1c.699-.999 1.458-1.998 2.197-3.066c.39-.55.77-1.109 1.149-1.668c.38-.56.739-1.129 1.128-1.678c.28-.4.58-.79.87-1.179a3.63 3.63 0 0 1 1.328 2.118a5.4 5.4 0 0 1-.79 4.145"/>
  <path d="M17.159 8.807c.253-.225.416-.533.46-.87a7.7 7.7 0 0 0 .05-1.537c0-.87-.07-1.728-.17-2.587s-.24-1.508-.41-2.248a11.7 11.7 0 0 1 1.788 3.346a21 21 0 0 1 .759 2.737c.29 1.441.454 2.905.49 4.375a.39.39 0 0 0 .768 0a22.6 22.6 0 0 0 0-4.425a15 15 0 0 0-.37-1.887a10 10 0 0 0-.698-1.818c-.28-.56-2.527-4.215-3.277-3.476c-.318.11-.618.268-.888.47c-.444.35-.811.79-1.08 1.288a6.9 6.9 0 0 0-.588 1.907a13.4 13.4 0 0 0 .1 2.897a.4.4 0 0 0 .399.38a.38.38 0 0 0 .37-.39a19 19 0 0 1 .26-2.257c.05-.29.129-.56.199-.85q.14-.62.39-1.208c.117-.397.318-.765.589-1.079q.222 1.156.31 2.328c.05.829.06 1.668 0 2.497c0 .18 0 .589-.05.998c0 .22 0 .45-.12.53a4 4 0 0 1-1.449.53a13.4 13.4 0 0 1-2.686.159c-.59 0-1.18-.06-1.758-.12c-.58-.06-1.169-.13-1.758-.23l-1.199-.18s-.11-.06-.13-.13a3 3 0 0 1-.09-.459a4 4 0 0 1 0-.729c.025-.978.121-1.953.29-2.916q.171-.926.47-1.818c0 .09.08.18.11.27s.15.45.22.669l.309.999q.412 1.318.669 2.676a.38.38 0 0 0 .759-.06c.028-.81-.009-1.622-.11-2.427a7 7 0 0 0-.22-1.028a7 7 0 0 0-.4-1A6.6 6.6 0 0 0 7.9.148a.3.3 0 0 0-.27-.11a.3.3 0 0 0-.29 0a10.1 10.1 0 0 0-3.226 3.796a18.2 18.2 0 0 0-1.588 4.664l-.42 2.917l-.479 2.297C1.207 15.239.5 17.097.63 18.705a3.8 3.8 0 0 0 1.927 3.136q.338.199.7.35q.358.15.738.24q.618.16 1.249.25q.635.094 1.278.099q.868.015 1.728-.09q.859-.093 1.698-.29a.38.38 0 0 0 .3-.449a.39.39 0 0 0-.46-.3q-.796.154-1.608.21q-.808.052-1.618 0a9 9 0 0 1-1.158-.14c-.38-.07-.76-.17-1.139-.28a3.4 3.4 0 0 1-.59-.22a4 4 0 0 1-.548-.309a2.73 2.73 0 0 1-1.289-2.297c.099-1.573.436-3.122.999-4.594l.49-2.408l.329-2.936a17 17 0 0 1 1.288-4.435A9.4 9.4 0 0 1 7.54.836l.19.32c-.405.802-.72 1.646-.939 2.517a24 24 0 0 0-.51 2.996a5.3 5.3 0 0 0 .07 1.598a1.37 1.37 0 0 0 .65.88q.264.126.55.19c.339.08.728.109.998.169c.61.11 1.229.21 1.848.27c.62.06 1.228.11 1.868.13c1.005.031 2.01-.052 2.996-.25a5 5 0 0 0 1.898-.85"/></g>
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
    <section className="py-20 px-6 bg-[var(--mint-green)] bg-opacity-10" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--deep-green)] font-playfair text-center mb-16">Luxury in Harmony with Nature</h2>
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
    </section>
  );
};

export default Features;