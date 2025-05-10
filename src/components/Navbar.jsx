// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Our Clients", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Nirvaan Logo"
              className="h-10 w-auto"
            />
          </Link>

          <Link to="/" className="text-2xl font-bold  text-green-600">
            Nirvaan
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out group">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-2 text-gray-700 hover:text-blue-600 transition-all duration-300">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
