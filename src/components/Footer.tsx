import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-12 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-xl font-bold">Eloixe</span>
            <span className="text-xl font-bold">Energies</span>
          </div>
          <p className="text-gray-400">
            Your trusted partner in solar energy solutions
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <div className="space-y-2">
            <Link to="/" className="block text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="block text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link to="#" className="block text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <div className="space-y-2">
            <Link to="#" className="block text-gray-400 hover:text-white">
              Solar Assessment
            </Link>
            <Link to="#" className="block text-gray-400 hover:text-white">
              System Design
            </Link>
            <Link to="#" className="block text-gray-400 hover:text-white">
              Installation
            </Link>
            <Link to="#" className="block text-gray-400 hover:text-white">
              Maintenance
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="text-gray-400">1234 Solar Street</p>
            <p className="text-gray-400">contact@eloixeenergies.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Eloixe Energies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
