import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Card animation configuration
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// Button animation on hover
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" },
};

function Homelistings({ vehicles }) {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font">
      <div className="relative max-w-screen-xl p-6 py-8 mx-auto bg-white dark:bg-gray-900 sm:px-6 lg:px-8 lg:mt-20">
        <div className="flex flex-col w-full mb-10 text-center">
          {/* Animated Heading */}
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Vehicle Listings
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
          <p className="mx-auto text-xl leading-relaxed lg:w-2/3 text-gray-600 dark:text-gray-300">
            Explore Suzuki Pakistan’s collection of premium cars, featuring
            advanced technology, sleek design, and unmatched performance. Find
            the perfect vehicle that fits your lifestyle.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap -m-4 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              className="p-4 lg:w-1/3 sm:w-1/2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative flex group">
                <img
                  alt={vehicle.name}
                  className="absolute inset-0 object-contain object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={vehicle.image}
                />
                <div className="relative z-10 w-full px-8 py-10 transition-opacity duration-1000 ease-in-out bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400 title-font">
                    {vehicle.name}
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100 title-font">
                    {vehicle.descriptionTitle}
                  </h1>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {vehicle.description}
                  </p>
                  <div className="flex justify-end">
                    <NavLink
                      to={`/vehicle-listing/${vehicle.name}`}
                      className="inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 border-transparent rounded-md shadow-none hover:shadow-sm hover:text-blue-900 dark:hover:text-blue-500"
                    >
                      More Details
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
            </motion.div>
          ))}

          {/* View All Vehicles Section */}
          <motion.div
            className="p-4 lg:w-1/3 sm:w-1/2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative flex group">
              <div className="relative z-10 w-full px-8 py-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100 title-font">
                  View All Vehicles
                </h1>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  Discover more vehicles in Suzuki’s lineup and find the perfect
                  match for your driving needs.
                </p>
                <NavLink to="/vehicle-listing">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-6 py-2 mt-4 text-lg text-white bg-blue-600 dark:bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    View All
                  </motion.button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Homelistings;
