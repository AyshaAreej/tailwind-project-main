import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo.svg";

const Header = () => {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `font-normal text-[14px] leading-[22.4px] tracking-[-0.4px] px-2 py-1 rounded
     ${isActive ? "underline bg-gray-200 text-blue-700" : "text-gray-900 hover:text-blue-700"}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-8 py-[21px]">

        {/* LEFT DIV: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* RIGHT DIV: Nav + CTA */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/about" className={navItemClass}>
              About us
            </NavLink>
            <NavLink to="/services" className={navItemClass}>
              Services
            </NavLink>
            <NavLink to="/technical" className={navItemClass}>
              Technical Capabilities
            </NavLink>
            <NavLink to="/safety" className={navItemClass}>
              Safety & Compliance
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm cursor-pointer font-medium py-2 px-4 rounded">
              CONTACT US
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
