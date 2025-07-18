import VisionIcon from "../assets/svgs/Icon-Design.svg";
import MissionIcon from "../assets/svgs/Icon-Interaction.svg";
import ValuesIcon from "../assets/svgs/Icon Integration.svg";



const VisionMissionValues = () => {
  return (
    <section className="bg-vision py-16 px-4 sm:px-8 lg:px-20">
      <p className="max-w-4xl mx-auto text-gray-700 mb-12 text-sm text-center leading-relaxed">
        Optimum Techniques is the trusted partner for safe, sustainable, and high-quality geomembrane installations in the environmental and industrial sectors—driven by integrity, innovation, and a commitment to lasting partnerships.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src={VisionIcon} alt="Vision icon" className="w-10 h-10" />
          <h3 className="font-bold text-base">Vision</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            To be the preferred partner for safe, sustainable, and technically superior installations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src={MissionIcon} alt="Mission icon" className="w-10 h-10" />
          <h3 className="font-bold text-base">Mission</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We deliver precise geomembrane installations with unmatched safety, quality, and reliability—protecting the environment and building long-term partnerships.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src={ValuesIcon} alt="Values icon" className="w-10 h-10" />
          <h3 className="font-bold text-base">Values</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We operate with integrity, pursue excellence through continuous improvement, prioritize safety without compromise, embrace innovation, and build trust-based client partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;

