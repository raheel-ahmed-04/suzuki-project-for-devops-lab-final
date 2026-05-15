import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Pricingandterms from "../components/pricingandterms";

// Function to fetch price list data
const fetchPriceListData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.priceList; // Return only the priceList
};

function Pricelistpage() {
  // Use React Query to fetch price list data
  const {
    data: priceList = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["priceList"], // Unique key for the query
    queryFn: fetchPriceListData, // Function to fetch data
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
      <Pricingandterms priceList={priceList} />
      
      
    </div>
  );
}

export default Pricelistpage;
