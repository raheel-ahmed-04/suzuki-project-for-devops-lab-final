import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

// Function to fetch offer services logos data
const fetchServicesLogos = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.offerServicesLogos; // Return the offerServicesLogos data array
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

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * Math.random(),
    },
  }),
};

const Offerservices = () => {
  // Use React Query to fetch offer services logos
  const { data: offerServicesLogos = [], error, isLoading } = useQuery({
    queryKey: ["offerServicesLogos"],
    queryFn: fetchServicesLogos,
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-blue-500 dark:text-blue-300">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-red-500 dark:text-red-400">
          Error fetching data!
        </h1>
      </div>
    );
  }

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
        Services We Offer
      </motion.h2>
      <motion.hr
        className="w-24 mx-auto mb-8 border-t-4 border-red-500 rounded dark:border-red-400"
        initial={{ scaleX: 0.8, borderColor: "#ef4444" }}
        whileInView={{ scaleX: 1, borderColor: "#d60928" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      <section className="relative min-h-screen py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-80"
          style={{
            backgroundImage: 'url("/images/blogs/swift1.png")',
            backgroundAttachment: "fixed",
            opacity:0.4,
                    }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {offerServicesLogos.map((service) => (
              <motion.div
                key={service.id}
                className="flex items-center justify-center"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                <div className="p-2 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <img
                    src={service.icon}
                    alt={`Service ${service.id}`}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerservices;