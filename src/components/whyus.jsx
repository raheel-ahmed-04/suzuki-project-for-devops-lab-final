"use client";

import React from "react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.8, 0.5, 1],
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

function Whyus() {
  return (
    <motion.div
      className="relative max-w-screen-xl p-6 py-8 mx-auto bg-white dark:bg-gray-900 sm:px-6 lg:px-8 lg:mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2
        className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Why Choose Us
      </motion.h2>

      <motion.hr
        className="w-24 mx-auto mb-8 border-t-4 border-red-500 dark:border-red-400 rounded"
        initial={{ scaleX: 0.8, borderColor: "#ef4444" }}
        whileInView={{ scaleX: 1, borderColor: "#d60928" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      <p className="mb-12 text-xl text-center text-gray-600 dark:text-gray-300">
        Experience the best in automotive services with a commitment to quality,
        safety, and customer satisfaction.
      </p>

      <motion.div
        className="flex flex-wrap items-start justify-center gap-12 md:justify-between"
        variants={containerVariants}
      >
        <motion.div
          className="grid gap-4 text-center justify-items-center md:flex-1"
          variants={itemVariants}
        >
          <div className="p-4 border-8 rounded-full border-amber-400 dark:border-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-gray-900 dark:text-gray-100"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl sm:text-3xl text-gray-900 dark:text-gray-100">
            Safety & Reliability
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Your safety is our priority. We ensure all vehicles meet the highest
            security standards.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 text-center justify-items-center md:flex-1"
          variants={itemVariants}
        >
          <div className="p-4 border-8 rounded-full border-amber-400 dark:border-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-gray-900 dark:text-gray-100"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl sm:text-3xl text-gray-900 dark:text-gray-100">
            Fuel Efficiency
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Our range of vehicles is designed to save fuel and reduce your
            carbon footprint.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 text-center justify-items-center md:flex-1"
          variants={itemVariants}
        >
          <div className="p-4 border-8 rounded-full border-amber-400 dark:border-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-gray-900 dark:text-gray-100"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl sm:text-3xl text-gray-900 dark:text-gray-100">
            Trusted Excellence
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            With years of experience, our showroom has built a reputation for
            quality and trust.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Whyus;