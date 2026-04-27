import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/'); 
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-[#0a192f] text-white fixed w-full top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-pink-600 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          Raphael Sosa
        </div>
        <div className="flex space-x-8">
          <button
            onClick={() => handleNavClick('home')}
            className="text-white hover:text-pink-600 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-white hover:text-pink-600 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('experience')}
            className="text-white hover:text-pink-600 transition duration-300"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-white hover:text-pink-600 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-white hover:text-pink-600 transition duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
