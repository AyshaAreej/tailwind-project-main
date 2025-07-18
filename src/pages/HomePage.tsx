import heroBg from "../assets/images/HeroImage.png";
import About from "../components/About";
import Footer from "../components/footer";
import Header from "../components/Header";
import IndustriesWeServe from "../components/industries";
import KeyStrength from "../components/KeyStrength";
import ServicesApplications from "../components/serviceApplication";
import StillHaveQuestions from "../components/StillHaveQuestion";
import TechnicalCapabilities from "../components/technical";
import VisionMissionValues from "../components/Vision";
import WhyChooseUs from "../components/whyChooseUs";

const LandingPage = () => {
  return (
    <div className=" text-gray-800">
      <Header />
      <div className=""></div>
      <section
        className="relative w-full h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141727] to-[#3A416F] opacity-80"></div>

        {/* Content aligned to left within container */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl w-full">
          <div className="max-w-2xl">
            {/* Label on top tightly coupled with heading */}
            <p className="text-sm font-medium text-orange-400 leading-tight mb-1">
              Experts in HDPE Installation
            </p>

            {/* Main headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              A Specialized Saudi arabian
              <br />
              engineering contracting firm
            </h1>

            {/* CTA Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-5 rounded">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <About />
      <KeyStrength />
      <VisionMissionValues />
      <section id="services">
        <ServicesApplications />
      </section>
      <IndustriesWeServe />
      <section id="technical">
        <TechnicalCapabilities />
      </section>
      <section id="safety">
        <WhyChooseUs />
      </section>
      <StillHaveQuestions />
      <Footer />
    </div>
  );
};

export default LandingPage;
