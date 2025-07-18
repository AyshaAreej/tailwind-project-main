import React from "react";
import supplyIcon from "../assets/svgs/supply.svg";
import installationIcon from "../assets/svgs/installation.svg";
import qualityIcon from "../assets/svgs/qualityAssurance.svg";
import fusionIcon from "../assets/svgs/fusion.svg";
import repairIcon from "../assets/svgs/repair.svg";
import siteIcon from "../assets/svgs/site.svg";

const services = [
  { title: "Supply", description: "HDPE Geomembrane Supply & Installation", icon: supplyIcon },
  { title: "Installation", description: "Geotextile Installation", icon: installationIcon },
  { title: "Quality Assurance", description: "Leak Detection & Quality Assurance", icon: qualityIcon },
  { title: "Fusion & Extrusion", description: "Seam Welding (Fusion & Extrusion)", icon: fusionIcon },
  { title: "Repair", description: "Liner Repair & Maintenance", icon: repairIcon },
  { title: "Site preparation", description: "Site Preparation & Consultancy", icon: siteIcon },
];

const ServicesApplications: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-8">Services & Applications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition text-center">
            <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-bold mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesApplications;
