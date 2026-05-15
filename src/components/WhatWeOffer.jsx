import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
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

function WhatWeOffer() {
  return (
    <motion.div
      className="relative max-w-screen-xl p-6 py-8 mx-auto bg-white dark:bg-gray-900 sm:px-6 lg:px-8 lg:mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Heading with headingVariants */}
      <motion.h2
        className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        What We Offer
      </motion.h2>

      {/* Animated <hr> line with color change */}
      <motion.hr
        className="w-24 mx-auto mb-8 border-t-4 border-red-500 dark:border-red-400 rounded"
        initial={{ scaleX: 0.8, borderColor: "#ef4444" }}
        whileInView={{ scaleX: 1, borderColor: "#d60928" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      <p className="mb-12 text-xl text-center text-gray-600 dark:text-gray-300">
        For your Great Traveling Experience
      </p>

      <motion.div
        className="flex flex-wrap items-start justify-center gap-12 md:justify-between"
        variants={containerVariants}
      >
        {/* Card Section */}
        {[
          {
            title: "Suzuki Vehicles",
            image: "/images/cars/swift-cropped.png",
            text: "Your safety is our priority.",
            link: "/vehicle-listing",
          },
          {
            title: "Suzuki Services",
            image: "/images/service.png",
            text: "Fuel-efficient and eco-friendly.",
            link: "/service",
          },
          {
            title: "Suzuki Store",
            image: "/images/Sgp.png",
            text: "Quality and trust for years.",
            link: "/service",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="grid gap-4 px-4 py-8 text-center bg-gray-100 dark:bg-gray-800 rounded-lg justify-items-center md:flex-1 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <img
              src={card.image}
              alt={card.title}
              className="object-contain w-64 h-48"
            />
            <h3 className="text-xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {card.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{card.text}</p>
            <NavLink to={card.link}>
              <motion.button
                className="px-6 py-2 mt-4 text-md sm:text-lg text-white bg-blue-600 dark:bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-600 uppercase transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore More
              </motion.button>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WhatWeOffer;
