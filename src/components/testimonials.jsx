import React, { useRef, useState, useEffect } from "react";
import TestimonialCard from "./testimonialcard";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

// Fetch testimonials data function
const fetchTestimonialsData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.testimonialsData; // Return only the testimonials data array
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

function Testimonials() {
  const containerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const {
    data: testimonialsData = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["testimonialsData"],
    queryFn: fetchTestimonialsData,
  });

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      handleScroll();
      container.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("resize", handleScroll);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, [testimonialsData]);

  if (isLoading || testimonialsData.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-indigo-500">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-red-500">
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
        viewport={{ once: true, amount: 0.2 }}
      >
        What Our Customers Say
      </motion.h2>
      {/* Animated <hr> line with color change */}
      <motion.hr
        className="w-24 mx-auto mb-8 border-t-4 border-red-500 dark:border-red-400 rounded"
        initial={{ scaleX: 0.8, borderColor: "#ef4444" }}
        whileInView={{ scaleX: 1, borderColor: "#d60928" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      {canScrollLeft && (
        <button
          className="absolute left-0 z-10 w-10 h-10 p-2 text-white transform -translate-y-1/2 bg-blue-600 rounded-full dark:bg-blue-500 top-1/2 hover:bg-blue-800 dark:hover:bg-blue-700"
          onClick={scrollLeft}
        >
          &lt;
        </button>
      )}

      <div
        ref={containerRef}
        className="flex items-center justify-start w-full max-w-full gap-5 px-5 py-10 overflow-x-auto scrollbar-hide dark:bg-gray-900"
        style={{ scrollBehavior: "smooth" }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[350px] max-w-[400px] flex-shrink-0 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <TestimonialCard
              name={testimonial.name}
              image={testimonial.image}
              feedback={testimonial.feedback}
              location={testimonial.location}
            />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="absolute right-0 z-10 w-10 h-10 p-2 text-white transform -translate-y-1/2 bg-blue-600 rounded-full dark:bg-blue-500 top-1/2 hover:bg-blue-800 dark:hover:bg-blue-700"
          onClick={scrollRight}
        >
          &gt;
        </button>
      )}
    </div>
  );
}

export default Testimonials;
