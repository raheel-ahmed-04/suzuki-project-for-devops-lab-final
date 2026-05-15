import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa"; // Import icons
import VehicleCard from "../components/vehiclecard"; // Import the card component
import { useQuery } from "@tanstack/react-query";
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


// Function to fetch vehicle data
const fetchVehicleData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data; // Return the entire data object
};

function VehicleListingPage() {
  // Use React Query to fetch vehicle data
  const { data, error, isLoading } = useQuery({
    queryKey: ["vehicleData"],
    queryFn: fetchVehicleData,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("None");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const { topSellers = [], allVehicles = [] } = data || {};

  const filterVehicles = (vehicles) => {
    let filtered = vehicles.filter((vehicle) =>
      vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if the price is a valid number and apply sorting
    if (sortOption === "Price (Lowest First)") {
      filtered.sort(
        (a, b) =>
          parseFloat(a.price.toString().replace(/,/g, "")) -
          parseFloat(b.price.toString().replace(/,/g, ""))
      );
    } else if (sortOption === "Price (Highest First)") {
      filtered.sort(
        (a, b) =>
          parseFloat(b.price.toString().replace(/,/g, "")) -
          parseFloat(a.price.toString().replace(/,/g, ""))
      );
    }

    return filtered;
  };
  const filteredAllVehicles = filterVehicles(allVehicles);
  console.log(filteredAllVehicles);

  // Check if filters are applied
  const filtersApplied = searchTerm || sortOption !== "None";

  return (
    <section className="mb-10 dark:bg-gray-900 text-gray-700 dark:text-gray-300 body-font min-h-screen">
      <div className="container px-5 mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center px-5 sm:px-10 my-10 text-center">
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl font-bold text-center mt-10 sm:mt-0 text-textLight dark:text-textDark"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Vehicle Listings
          </motion.h2>
          <div className="w-24 h-1 my-3 bg-red-500 dark:bg-red-400 rounded"></div>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Explore our extensive collection of vehicles ranging from
            fuel-efficient cars to high-performance models.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex  justify-end items-center mb-8 px-5 space-x-4">
          <div className="flex items-center">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border text-sm sm:text-md border-gray-300 rounded-lg w-5/6 sm:w-full"
            />
          </div>
          <div className="flex items-center">
            <FaFilter className="mr-2 text-gray-500" />
            <select
              className="p-2 border text-sm sm:text-md border-gray-300 rounded-lg w-3/4 sm:w-full"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="None">None</option>
              <option value="Price (Lowest First)">Price (Lowest First)</option>
              <option value="Price (Highest First)">
                Price (Highest First)
              </option>
            </select>
          </div>
        </div>

        {/* Top Sellers Section (Only show if no filters are applied) */}
        {!filtersApplied && (
          <div>
            <div className="flex flex-wrap w-full px-5 sm:px-10 mt-10 sm:mt-20 mb-5">
              <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                <h2 className="mb-2 text-2xl font-medium text-gray-900 dark:text-gray-100 sm:text-3xl">
                  Top Sellers
                </h2>
                <div className="w-20 h-1 bg-red-600 dark:bg-red-400 rounded"></div>
              </div>
            </div>

            {/* Render Top Sellers */}
            <div className="flex flex-wrap px-5 -m-4">
              {topSellers.map((vehicle, index) => (
                <VehicleCard
                  key={index}
                  imgSrc={vehicle.imgSrc}
                  hoverImgSrc={vehicle.hoverImgSrc}
                  tag={vehicle.tag}
                  title={vehicle.title}
                  description={vehicle.description}
                  price={vehicle.price}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* All Vehicles Section */}
        <div className="flex flex-wrap w-full px-5 sm:px-10 mt-10 sm:mt-20 mb-5">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h2 className="mb-2 text-2xl font-medium text-gray-900 dark:text-gray-100 sm:text-3xl">
              All Vehicles
            </h2>
            <div className="w-20 h-1 bg-red-600 dark:bg-red-400 rounded"></div>
          </div>
        </div>

        {/* Render Filtered All Vehicles */}
        <div className="flex flex-wrap px-5 -m-4">
          {filteredAllVehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              imgSrc={vehicle.imgSrc}
              hoverImgSrc={vehicle.hoverImgSrc}
              tag={vehicle.tag}
              title={vehicle.title}
              description={vehicle.description}
              price={vehicle.price}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleListingPage;
