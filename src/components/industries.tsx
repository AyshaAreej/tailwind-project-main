import React from "react";
import wasteIcon from "../assets/images/wasteManagement.svg";
import waterIcon from "../assets/images/waterSolutions.png";
import industrialIcon from '../assets/images/industrial.png'
import agricultureIcon from "../assets/images/agriculture.png";

const industries = [
  {
    title: "WASTE MANAGEMENT",
    description: "Landfills, Hazardous Waste Containment",
    icon: wasteIcon,
  },
  {
    title: "WATER SOLUTIONS",
    description: "Reservoirs, Canals, Wastewater Ponds",
    icon: waterIcon,
  },
  {
    title: "INDUSTRIAL",
    description: "Mining, Petrochemical, Evaporation Ponds",
    icon: industrialIcon,
  },
  {
    title: "AGRICULTURE",
    description: "Agriculture & Aquaculture",
    icon: agricultureIcon,
  },
];

const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-8">Industries We Serve</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  rounded overflow-hidden">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 flex flex-col items-center justify-center text-center"
          >
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="w-8 h-8 mb-3"
            />
            <h3 className="font-semibold text-xs uppercase">{item.title}</h3>
            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;