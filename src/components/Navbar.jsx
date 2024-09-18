import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header id="topbar">
        {/* Logo Section */}
        <nav id="logo">
          <img
            src="https://mobirise.com/extensions/organicamp/assets/images/logo1.jpg"
            alt="vegan-store-logo"
          />
        </nav>

        {/* Hamburger Menu for mobile */}
        <button
          className="hamburger-menu"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span className={isOpen ? "hamburger open" : "hamburger"}></span>
        </button>

        {/* Menu Items */}
        <nav id="menu-items-container" className={isOpen ? "open" : ""}>
          <span
            className={`menu-items ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </span>
          <span
            className={`menu-items ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </span>
          <span
            className={`menu-items ${
              location.pathname === "/testimonials" ? "active" : ""
            }`}
          >
            <Link to="/testimonials">Testimonial</Link>
          </span>
          <span
            className={`menu-items ${
              location.pathname === "/footer" ? "active" : ""
            }`}
          >
            <Link to="/footer">Footer</Link>
          </span>
        </nav>
      </header>

      {/* Basic Styles for Mobile Menu */}
      <style>{`
        #topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }

        .hamburger-menu {
          display: none;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger {
          width: 25px;
          height: 3px;
          background-color: #333;
          transition: 0.3s;
        }

        .hamburger.open {
          transform: rotate(45deg);
        }

        #menu-items-container {
          display: flex;
        }

        #menu-items-container.open {
          display: block;
        }

        .menu-items {
          margin-left: 15px;
        }

        .menu-items.active {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Navbar;
