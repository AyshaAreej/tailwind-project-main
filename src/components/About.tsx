const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="px-4 sm:px-8 lg:px-[196px]">
        <div className="w-full bg-gray-100 rounded-[12px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left side: About us heading */}
          <div className="md:w-1/3 flex justify-start md:justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              About us
            </h2>
          </div>

          {/* Right side: Description */}
          <div className="md:w-2/3 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Optimum Techniques is a specialized engineering contracting firm delivering high-quality HDPE
              geomembrane lining solutions for environmental and industrial applications across Saudi Arabia.
            </p>
            <p>
              We combine engineering precision, safety compliance, and sustainable practices to meet
              international standards with local expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
