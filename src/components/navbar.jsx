import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa"; // Importing the heart icon from React Icons
import WishlistContext from "../context/WishlistContext";


export default function Navbar() {
  const { wishlist } = useContext(WishlistContext); // Access wishlist from context
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsHovered(false);
    }, 500); // 3 seconds delay
  };
  const toggleMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(!menuOpen);
  };
 

  

  const toggleDropdown = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      {/* Top Bar with Social Links and Contact Info */}
      <div className="flex flex-col items-center justify-between px-2 py-1 text-sm text-gray-800 bg-gray-200 sm:flex-row top-bar dark:bg-gray-800 dark:text-gray-300 sm:text-base">
        <div className="flex my-1 space-x-3 sm:my-0">
          <a
            className="text-white dark:text-gray-300 hover:text-blue-500"
            href="https://www.facebook.com/suzukicampbellpurmotor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="text-white dark:text-gray-300 hover:text-red-500"
            href="https://youtube.com/@suzukicampbellpur-attock4871?si=VRgqn08U6PryBU2I"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M19.615 3.184A3.042 3.042 0 0017.537 2.5C15.259 2.5 12 2.5 12 2.5s-3.259 0-5.537.5a3.042 3.042 0 00-2.078.684A3.133 3.133 0 003.22 5.262C3 6.905 3 9.152 3 9.152s0 2.247.22 3.89a3.133 3.133 0 001.165 2.078 3.042 3.042 0 002.078.684c2.278.5 5.537.5 5.537.5s3.259 0 5.537-.5a3.042 3.042 0 002.078-.684 3.133 3.133 0 001.165-2.078c.22-1.643.22-3.89.22-3.89s0-2.247-.22-3.89a3.133 3.133 0 00-1.165-2.078zM9.615 12.5v-5l5 2.5-5 2.5z"></path>
            </svg>
          </a>
          <a
            className="text-white dark:text-gray-300 hover:text-pink-500"
            href="https://www.instagram.com/suzukicampbellpurmotors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-1 sm:space-y-0 sm:space-x-2 sm:flex-row">
  <p className="text-xs sm:text-sm">
    <a href="tel:+923171111861" className="hover:underline">
      Sales: (+92) 317-1110861
    </a>
  </p>
  <span className="hidden sm:inline">|</span>
  <p className="text-xs sm:text-sm">
    <a href="tel:+923171110866" className="hover:underline">
      Aftersales: (+92) 317-1110866
    </a>
  </p>
  <span className="hidden sm:inline">|</span>
  <p className="text-xs sm:text-sm">
    <a href="mailto:ceo@suzukicampbellpur.com" className="hover:underline">
      Email: ceo@suzukicampbellpur.com
    </a>
  </p>
</div>

      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-5 py-3 text-gray-800 bg-white shadow-lg navbar dark:bg-gray-700 dark:text-gray-100">
        <div className="flex items-center space-x-3">
          <img
            src="/images/logos/campbellpur-motors-logo.png"
            alt="Suzuki Logo"
            className="h-10 cursor-pointer navbar--logo"
            onClick={() => navigate("/")}
          />
          <span className="hidden sm:flex">|</span>
          <img
            src="/images/logos/tagline.png"
            alt="Tagline Logo"
            className="hidden h-10 navbar--tagline sm:flex"
          />
        </div>

        {/* Desktop Links */}
        <ul className="items-center justify-center hidden space-x-3 font-medium text-md lg:flex navbar--list">
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/"
              activeclassname="active"
            >
              Home
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/vehicle-listing"
              activeclassname="active"
            >
              Vehicles
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/service"
              activeclassname="active"
            >
              Services
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          
          
          <li className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="inline-block px-1 py-3 text-gray-800 dark:text-gray-100 transition-all duration-1000 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer whitespace-nowrap">
        Pre Sales
      </span>

      <ul className={`absolute left-0 ${isHovered ? 'block' : 'hidden'} bg-white dark:bg-gray-800 shadow-xl rounded-lg py-4 w-72 mt-2 transition-all duration-1000 ease-in-out transform opacity-0 ${isHovered ? 'opacity-100 translate-y-2 visible' : ''}`}>
        {/* Option: Latest Suzuki Price List */}
        <li className="py-2">
          <NavLink
            className="block px-6 py-3 text-base text-gray-800 dark:text-gray-100 transition-all duration-1000 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg hover:shadow-xl transform hover:scale-105 text-center"
            to="/pricelist"
            activeclassname="active"
          >
            Latest Suzuki Price List
          </NavLink>
        </li>

        {/* Separator: Dark/Light Theme Compatible (Larger Breaker) */}
        <li className="border-t border-gray-400 dark:border-gray-600 my-3 mx-6"></li>

        {/* Option: Easy Auto Bank Loan Calculator */}
        <li className="py-2">
          <NavLink
            className="block px-6 py-3 text-base text-gray-800 dark:text-gray-100 transition-all duration-1000 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg hover:shadow-xl transform hover:scale-105 text-center"
            to="/financecalculator"
            activeclassname="active"
          >
            Easy Auto Bank Loan Calculator
          </NavLink>
        </li>
      </ul>
    </li>



    
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/booking"
              activeclassname="active"
            >
              Online Bookings
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/blogs"
              activeclassname="active"
            >
              News & Blogs
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="relative inline-block text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/contact"
              activeclassname="active"
            >
              Contact Us
              {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span> */}
            </NavLink>
          </li>
          <li>
            {/* Wishlist Link for desktop */}
            <NavLink
              className="relative inline-flex items-center text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              to="/wishlist"
              activeclassname="active"
            >
              <FaRegHeart className="text-lg" /> {/* Heart icon */}
              {/* Counter Badge */}
              {wishlist.length > 0 && (
                <span className="absolute top-0 left-3 bg-red-600 opacity-[90%] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex gap-4 lg:hidden">
          {/* Wishlist Logo and Link for mobile */}
          <NavLink
            className="relative inline-flex items-center text-gray-800 transition-all duration-300 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
            to="/wishlist"
            activeclassname="active"
          >
            <FaRegHeart className="text-lg" /> {/* Heart icon */}
            {/* Counter Badge */}
            {wishlist.length > 0 && (
              <span className="absolute top-0 left-3 bg-red-600 opacity-[90%] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-gray-800 lg:hidden dark:text-gray-100 focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "transform rotate-90" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <>
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

{/* Mobile Menu */}
{menuOpen && (
  <>
    <div
      className="fixed inset-0 z-40 bg-black opacity-50"
      onClick={toggleMenu}
    ></div>
    <ul className="fixed z-50 w-full px-5 py-4 text-gray-800 bg-white shadow-lg rounded-lg md:hidden dark:bg-gray-900 dark:text-gray-100">
      <li className="text-center">
        <NavLink
          className="block text-lg font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-center">
        <NavLink
          className="block text-lg font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/vehicle-listing"
        >
          Vehicles
        </NavLink>
      </li>
      <li className="text-center">
        <NavLink
          className="block text-lg font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/service"
        >
          Services
        </NavLink>
      </li>

      {/* Dropdown for Price List */}
      <li
        className={`relative transition-all duration-300 ease-in-out ${
          isHovered ? 'mb-1' : 'mb-0'
        }`}
      >
        <button
          className="block w-full text-lg font-medium text-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleDropdown}
        >
          Pre Sales
        </button>

        <ul
          className={`transition-all duration-300 ease-in-out ${
            isHovered ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-1`}
        >
          <li className="py-1">
            <NavLink
              className="block px-4 py-2 text-base text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg hover:shadow-md transform hover:scale-105 text-center"
              to="/pricelist"
              activeclassname="active"
              onClick={toggleMenu}
            >
              Latest Suzuki Price List
            </NavLink>
          </li>

          <li className="border-t border-gray-300 dark:border-gray-600 my-1 mx-4"></li>

          <li className="py-1">
            <NavLink
              className="block px-4 py-2 text-base text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg hover:shadow-md transform hover:scale-105 text-center"
              to="/financecalculator"
              activeclassname="active"
              onClick={toggleMenu}
            >
              Easy Auto Bank Loan Calculator
            </NavLink>
          </li>
        </ul>
      </li>

      <li className="text-center">
        <NavLink
          className="block text-lg font-medium pb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/booking"
        >
          Online Bookings
        </NavLink>
      </li>
      <li className="text-center">
        <NavLink
          className="block text-lg font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/blogs"
        >
          News & Blogs
        </NavLink>
      </li>
      <li className="text-center">
        <NavLink
          className="block text-lg font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          onClick={toggleMenu}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  </>
)}



    </>
  );
}
