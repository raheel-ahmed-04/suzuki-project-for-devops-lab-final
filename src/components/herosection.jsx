import React, { useState, useEffect } from "react";

function Herosection() {
  // List of images to cycle through
  const images = [
    "/images/hero/1.png",
    "/images/hero/2.png",
    "/images/hero/3.png",
    "/images/hero/4.png",
    "/images/hero/5.png",
    "/images/hero/6.png"
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to cycle through the images at a set interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      {/* Background Images with smooth fade transition */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Background"
          className={`hero-background ${index === currentImageIndex ? "active" : ""
            }`}
        />
      ))}

      {/* Content over the image */}
      {/* <div className="hero-content">
        <div className="flex items-center gap-3 mt-4 md:justify-center">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 active:bg-gray-900 hover:shadow-none"
          >
            View Listing
          </a>
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 font-medium text-gray-800 duration-150 border rounded-lg bg-gray-50 hover:bg-transparent active:bg-gray-100"
          >
            Book a Ride!
          </a>
        </div>
      </div> */}

      {/* Image Indicators */}
      <div className="absolute z-10 flex space-x-2 transform -translate-x-1/2 hero-indicators bottom-6 left-1/2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-800 ${index === currentImageIndex ? "opacity-100" : "opacity-50"
              } transition-opacity duration-400`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Herosection;
