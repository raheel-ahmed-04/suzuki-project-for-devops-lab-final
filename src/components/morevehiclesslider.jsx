import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MoreVehiclesSlider = ({ vehiclesData, handleClick }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize scroll buttons visibility
    }

    window.addEventListener("resize", handleScroll);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative px-2 py-4 mt-10 bg-gray-100 dark:bg-gray-700">
      <h2 className="mb-4 text-2xl font-bold">More Vehicles</h2>

      {canScrollLeft && (
        <button
          className="absolute flex items-center justify-center left-0 w-10 h-10 p-2 text-white bg-indigo-500 rounded-full top-1/2 transform -translate-y-1/2"
          onClick={() =>
            containerRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
        >
          &lt;
        </button>
      )}

      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {vehiclesData.map((vehicle, index) => (
          <div key={index} className="mb-8 flex flex-col items-center">
            <div className="w-[150px] h-[150px] border-4 border-indigo-500 shadow-xl rounded-xl overflow-hidden">
              <img
                src={vehicle.vehicle.imgSrc[0]}
                alt={vehicle.vehicle.title}
                onClick={() => handleClick(vehicle.vehicle)}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
            <h3 className="font-semibold text-md text-center">
              {vehicle.vehicle.title}
            </h3>
          </div>
        ))}
        <div className="mb-8">
          <div
            onClick={() => navigate(`/vehicle-listing`)}
            className="flex items-center justify-center w-[150px] h-[150px] bg-indigo-100 border-4 border-indigo-500 shadow-xl cursor-pointer rounded-xl"
          >
            <span className="text-lg font-semibold text-indigo-500">
              See More
            </span>
          </div>
        </div>
      </div>

      {canScrollRight && (
        <button
          className="absolute flex items-center justify-center right-0 w-10 h-10 p-2 text-white bg-indigo-500 rounded-full top-1/2 transform -translate-y-1/2"
          onClick={() =>
            containerRef.current.scrollBy({ left: 200, behavior: "smooth" })
          }
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default MoreVehiclesSlider;
