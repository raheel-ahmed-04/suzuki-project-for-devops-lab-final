import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

function Maintenance() {
  // Array of image sources and alt text
  const images = [
    { src: "/images/Sgp.png", alt: "Image 1" },
    { src: "/images/accessories.png", alt: "Image 2" },
  ];

  return (
    <div className="relative max-w-screen-xl p-6 py-8 mx-auto bg-white dark:bg-gray-900 sm:px-6 lg:px-8 lg:mt-20">
      {/* Animated Heading */}
      <motion.h2
        className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Maintenance Services
      </motion.h2>
      {/* Animated <hr> line with color change */}
      <motion.hr
        className="w-24 mx-auto mb-8 border-t-4 border-red-500 dark:border-red-400 rounded"
        initial={{ scaleX: 0.8, borderColor: "#ef4444" }}
        whileInView={{ scaleX: 1, borderColor: "#d60928" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* <hr className="w-24 mx-auto mb-8 border-t-2 border-blue-600 dark:border-blue-400" /> */}

      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        {/* Image Section - Display Two Images Vertically */}
        <div className="hidden relative md:flex flex-col items-center justify-center px-20 mt-10 lg:mt-0 lg:col-start-1">
          {/* First Image */}
          <div className="w-full h-full mb-10 overflow-hidden transform transition-all duration-500 hover:scale-105">
            <img
              className="object-cover w-full h-full animate__animated animate__fadeIn animate__delay-1s"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>

          {/* Second Image */}
          <div className="w-full h-full overflow-hidden transform transition-all duration-500 hover:scale-105">
            <img
              className="object-cover w-full h-full animate__animated animate__fadeIn animate__delay-2s"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="ml-auto lg:col-start-2 lg:max-w-2xl animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-base font-semibold leading-6 text-blue-600 dark:text-blue-400 uppercase">
            Comprehensive Services
          </p>
          <h4 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-8 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            Exceptional Vehicle Maintenance and Support
          </h4>
          <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-300">
            Ensure your vehicle performs at its best with our professional
            maintenance services. We offer a variety of services, from regular
            check-ups to advanced diagnostics, ensuring your vehicle is always
            ready for the road.
          </p>

          <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
            <li className="mt-6 lg:mt-0 animate__animated animate__fadeIn animate__delay-2s">
              <div className="flex hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-400 rounded-full">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="ml-4 text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                  Regular Check-Ups
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0 animate__animated animate__fadeIn animate__delay-3s">
              <div className="flex hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-400 rounded-full">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="ml-4 text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                  Advanced Diagnostics
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0 animate__animated animate__fadeIn animate__delay-4s">
              <div className="flex hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-400 rounded-full">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="ml-4 text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                  24/7 Customer Support
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0 animate__animated animate__fadeIn animate__delay-5s">
              <div className="flex hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-400 rounded-full">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 transform hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="ml-4 text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                  Expert Tips for Vehicle Longevity
                </span>
              </div>
            </li>
          </ul>

          {/* View More Button */}
          <div className="flex justify-start mt-5">
            <NavLink
              to="/service"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 dark:bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105"
            >
              View More
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
