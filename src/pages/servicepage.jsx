import React, { useEffect } from "react";
import Servicesprovided from "../components/servicesprovided";
import { NavLink } from "react-router-dom";
import Pricing from "../components/pricing";
import { motion } from "framer-motion";

// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

function Servicepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Heading */}
      <div
        style={{ flexDirection: "column" }}
        className="flex justify-center px-10 mt-5 text-center align-center"
      >
        <motion.h2
          className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Services Information
        </motion.h2>
        <div className="w-20 h-1 mx-auto my-3 bg-red-500 dark:bg-red-400"></div>
      </div>

      {/* Services Information Section */}
      <div className="relative z-20 flex items-center overflow-hidden text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300">
        <div className="container relative flex flex-wrap items-center justify-center px-10 py-10 mx-auto md:flex-nowrap">
          <div className="relative z-20 flex flex-col md:w-2/3 lg:w-2/10">
            {/* Decorative Line */}
            <span className="w-20 h-2 mb-5 bg-gray-800 sm:mb-16 dark:bg-gray-400"></span>

            {/* Main Heading */}
            <h1 className="flex flex-col mb-5 text-5xl font-black leading-none text-gray-800 uppercase sm:text-6xl dark:text-gray-100">
              Genuine Oil,
              <span className="text-3xl sm:text-4xl">Parts & Accessories</span>
            </h1>

            {/* Subtext */}
            <p className="mb-5 text-lg text-gray-700 dark:text-gray-400">
              Our commitment is to providing you with top-notch automotive
              services, whether you're looking for regular maintenance, repairs,
              or upgrades. Suzuki Campbellpur is the best choice for all your
              vehicle needs.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Our new partnership with{" "}
              <span className="text-lg font-bold text-blue-800 dark:text-blue-400">
                "ECSTAR"
              </span>{" "}
              ensures that you receive the highest quality Suzuki parts and
              accessories for optimal vehicle performance and longevity.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center justify-center mt-10 md:ml-20 lg:ml-40 gap-14">
            <img
              src="/images/logos/ecstar.png"
              alt="Ecstar"
              className="w-full max-w-sm m-auto md:max-w-md"
            />
            <img
              src="/images/Sgp.png"
              alt="Suzuki Genuine Parts"
              className="w-full max-w-xs m-auto md:max-w-sm"
            />
            <img
              src="/images/Suzuki Genuine Accessories.png"
              alt="Suzuki Genuine Accessories"
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Appointment and Contact Section */}
      <div className="flex flex-wrap justify-around gap-4 p-10 text-gray-800 bg-blue-900 lg:flex-nowrap dark:bg-gray-800">
        {/* Appointment Section */}
        <div className="flex flex-col items-center justify-center w-full p-6 text-center bg-gray-100 rounded-lg dark:bg-gray-700 sm:w-1/3">
          <div className="flex justify-center mb-4 text-center text-black dark:text-white">
            {/* Note SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold dark:text-white">
            Make An Appointment
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Choose a preferred date and time for the appointment that suits you
            best.
          </p>
          <NavLink
            to={"/booking"}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700"
          >
            BOOK AN APPOINTMENT
          </NavLink>
        </div>

        {/* Working Hours Section */}
        <div className="flex flex-col items-center justify-center w-full p-6 text-center bg-gray-100 rounded-lg dark:bg-gray-700 sm:w-1/3">
          <div className="flex justify-center mb-4 text-center text-black dark:text-white">
            {/* Bag SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="7" width="18" height="14" rx="2" ry="2"></rect>
              <path d="M16 7a4 6 0 0 0-8 0"></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold dark:text-white">
            Working Hours
          </h3>
          <ul className="text-gray-600 list-none dark:text-gray-300">
            <li>9:00 AM – 6:00 PM</li>
            <li>Monday – Sunday</li>
          </ul>
        </div>

        {/* Call Now Section with CRO and Service Manager */}
        <div className="flex flex-col items-center w-full p-6 text-center bg-gray-100 rounded-lg dark:bg-gray-700 sm:w-1/3">
          {/* Call Now - General Information */}
          <div className="mb-6">
            <div className="flex justify-center mb-2 text-center text-black dark:text-textDark">
              {/* Phone SVG (Black color) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white">Call Now</h3>
            <span className="mb-2 text-gray-600 dark:text-gray-300">(For Appointment)</span>
          </div>

          {/* CRO Section */}
          <a
            href="tel:+923171110870"
            className="block mb-6 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 dark:shadow-none dark:hover:shadow-gray-600 cursor-pointer"
          >
            <h3 className="text-xl font-semibold dark:text-white">CRO</h3>
            <div className="flex items-center justify-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">+92 317 1110870</span>
            </div>
          </a>

          {/* Service Manager Section */}
          <a
            href="tel:+923171110866"
            className="block p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 dark:shadow-none dark:hover:shadow-gray-600 cursor-pointer"
          >
            <h3 className="text-xl font-semibold dark:text-white">Service Manager</h3>
            <div className="flex items-center justify-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">+92 317 1110866</span>
            </div>
          </a>
        </div>
      </div>

      {/* Image Banner with Overlay and Content */}
      <div className="relative h-[700px] bg-black dark:bg-gray-800">
        <img
          src="/images/SGO-Banner.jpg"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-70"
          alt="Car Maintenance"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black dark:bg-gray-800 opacity-60"></div>

        {/* Content at the Top */}
        <div className="absolute left-0 z-30 flex flex-col items-center w-full p-5 text-center text-white top-10">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Why Choose Us?
          </h2>
        </div>

        {/* Content at the Bottom */}
        <div className="absolute left-0 z-30 flex flex-col items-center w-full p-10 text-center text-white bottom-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/verified.png"
                alt="Verified Car Workshop"
                className="w-12 h-12 mb-4"
              />
              <h3 className="mb-2 text-xl font-semibold">
                Verified Car Workshop
              </h3>
              <p className="hidden sm:flex">
                Our car workshop is carefully verified so your car is in good
                hands.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/certified.png"
                alt="Certified Service Advisor"
                className="w-12 h-12 mb-4"
              />
              <h3 className="mb-2 text-xl font-semibold">
                Certified Service Advisor
              </h3>
              <p className="hidden sm:flex">
                Get expert car maintenance and repair guidance from our skilled
                advisors.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/best-price.png"
                alt="Best Prices"
                className="w-12 h-12 mb-4"
              />
              <h3 className="mb-2 text-xl font-semibold">Best Prices</h3>
              <p className="hidden sm:flex">
                Transparent and fair price estimates on your car repair
                services.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/warranty.png"
                alt="Warranted Spare Parts"
                className="w-12 h-12 mb-4"
              />
              <h3 className="mb-2 text-xl font-semibold">
                Warranted Spare Parts
              </h3>
              <p className="hidden sm:flex">
                Quality care with warranted spare parts and accessories.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Servicesprovided />
      <Pricing />

      {/* Video Section */}
<div className="container px-10 py-10 mx-auto text-center">
  <motion.h2
    className="mb-6 text-3xl sm:text-4xl font-bold text-textLight dark:text-textDark"
    variants={headingVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    style={{ marginBottom: "40px" }} // Adjust this value as needed
  >
    Explore Our Services in Real-Time
  </motion.h2>
  <div className="w-full max-w-4xl mx-auto">
    <iframe
      className="w-full h-64 sm:h-96 rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/elwutoCIuN0"
      title="Suzuki Campbellpur Services Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

    </>
  );
}

export default Servicepage;