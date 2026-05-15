import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Import the Lucide X icon

const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false); // Default to not showing

  useEffect(() => {
    const promotionEndDate = new Date("2025-06-12"); // Ensure end of the day
    const currentDate = new Date();

    // Ensure comparison is strictly based on time
    if (currentDate <= promotionEndDate) {
      const hasSeenPromo = localStorage.getItem("promoSeen");
      setShowPopup(true);

      if (!hasSeenPromo) {
        setShowPopup(true); // Show popup if promo hasn't been seen
      }
    }
    else {
      setShowPopup(false); // Hide popup if promo has ended
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("promoSeen", "true"); // Mark promo as seen in local storage
  };

  // If the popup should not be shown, return null
  if (!showPopup) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-end justify-center z-[100]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.9, ease: "easeInOut" }}
    >
      <div className="relative bg-white rounded-lg shadow-2xl border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-fit text-center flex flex-col z-[200] overflow-y-auto max-h-[80%] 3xl:w-[35%] 2xl:w-[45%] xl:w-[55%] lg:w-[65%] md:w-[75%] h-auto">
        <div className="h-fit w-fit">
          {/* Close Button (X) */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-black hover:text-red-500 focus:outline-none z-[200]"
          >
            <X size={36} /> {/* Lucide X icon */}
          </button>

          {/* Promo Image */}
          <img
            src="/images/promo/4.png"
            alt="Promotion"
            className="object-contain rounded-t-lg"
          />
        </div>

        {/* Promo Text */}
        {/* <div className="px-6 py-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            🎉{" "}
            <span className="text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text">
              Special Promotion!
            </span>{" "}
            🎉
          </h2>
          <p className="text-lg sm:text-xl">
            <p className="text-lg text-transparent sm:text-xl bg-gradient-to-r from-red-500 via-gray-800 to-pink-500 bg-clip-text">
              Get exclusive deals on our services. <br />
              Offer valid till:{" "}
              <span className="font-bold text-red-500 underline">
                30th April 2025
              </span>
            </p>
          </p>
        </div> */}
      </div>
    </motion.div>
  );
};

export default PromoPopup;