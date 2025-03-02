import React from "react";

const clients = [
  { name: "Noise", logo: "src/assets/logos/noise-logo.avif" },
  { name: "Philips", logo: "src/assets/logos/philips-logo.avif" },
  { name: "Jack Daniel's", logo: "src/assets/logos/JD-logo.avif" },
  { name: "Blenders Pride", logo: "src/assets/logos/BP-logo.avif" },
  { name: "Benetton", logo: "src/assets/logos/bentton-logo.avif" },
  { name: "HRX", logo: "src/assets/logos/hrx-logo.avif" },
  { name: "Mamaearth", logo: "src/assets/logos/mamaearth-logo.avif" },
  { name: "Ustraa", logo: "src/assets/logos/ustraa-logo.avif" },
];

const ClientsSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center">
        {/* Heading - Mobile Center, Desktop Left with Extra Left Margin */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center text-center md:text-left mb-12 md:mb-0 md:pl-12">
          <h2 className="text-5xl md:text-4xl leading-tight font-medium font-barlow">
            Working With the <br />
            Best Clients and <br />
            Partners
          </h2>
        </div>

        {/* Logos - Mobile Single Column, Desktop Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {clients.map((client, index) => (
            <div key={index}>
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
