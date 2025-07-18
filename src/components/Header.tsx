import Logo from "../assets/svgs/Logo.svg";

const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
      <header className="sticky top-0 z-50 w-full bg-white">
        <div className="flex justify-between items-center w-full px-4 sm:px-8  py-[21px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-900 hover:text-blue-700"
            >
              About us
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-gray-900 hover:text-blue-700"
            >
              Services
            </a>
            <a
              href="#technical"
              className="text-sm font-medium text-gray-900 hover:text-blue-700"
            >
              Technical Capabilities
            </a>
            <a
              href="#safety"
              className="text-sm font-medium text-gray-900 hover:text-blue-700"
            >
              Safety & Compliance
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded">
            CONTACT US
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
