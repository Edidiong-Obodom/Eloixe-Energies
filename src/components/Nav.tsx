import { useState } from "react";
import { Menu, X } from "lucide-react";
import { handleNavigateToId } from "../utilities";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-green-600 text-xl font-bold">Eloixe</span>
          <span className="text-gray-700 text-xl font-bold">Energies</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-green-600">
            About
          </Link>
          <button
            className="text-gray-600 hover:text-green-600 cursor-pointer"
            onClick={() => handleNavigateToId("services")}
            onKeyDown={() => handleNavigateToId("about")}
          >
            Services
          </button>
          <Link to="#" className="text-gray-600 hover:text-green-600">
            Experts
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <button
              className="text-gray-600 hover:text-green-600 cursor-pointer text-left"
              onClick={() => handleNavigateToId("services")}
              onKeyDown={() => handleNavigateToId("about")}
            >
              Services
            </button>
            <Link to="#" className="text-gray-600 hover:text-green-600">
              Experts
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
