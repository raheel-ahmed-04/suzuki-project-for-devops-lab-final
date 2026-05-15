import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Herosection from "../components/herosection";
import Whyus from "../components/whyus";
import Maintenance from "../components/maintenance";
import Testimonials from "../components/testimonials";
import Homelistings from "../components/homelistings";
import WhatWeOffer from "../components/WhatWeOffer";
import Offerservices from "../components/OfferServices";
import PromoPopup from "../components/PromoPopup";

// Function to fetch vehicle data
const fetchVehicleData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.vehicles; // Return only the vehicles array
};

function Homepage() {
  // Use React Query to fetch vehicles data
  const {
    data: vehicles = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["vehicles"], // Unique key for the query
    queryFn: fetchVehicleData, // Function to fetch data
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle loading and error states
  if (isLoading) {
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
    <div>
      <PromoPopup />
      <main>
        <Herosection />
        <WhatWeOffer />
        <Whyus />
        <Homelistings vehicles={vehicles} />
        <Maintenance />
        <Offerservices />
        <Testimonials />
      </main>
    </div>
  );
}

export default Homepage;
