import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MoreVehiclesSlider from "../components/morevehiclesslider";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Function to fetch vehicles data
const fetchVehiclesData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.vehiclesData;
};

export default function VehicleDetailsPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const location = useLocation();
  const navigate = useNavigate();
  const vehicleName = location.pathname.split("/").pop().replace("%20", " ");

  const {
    data: vehiclesData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["vehiclesData"],
    queryFn: fetchVehiclesData,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-accentLight dark:text-accentDark">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-customRed">
          Error fetching data!
        </h1>
        <button
          className="mt-4 underline text-accentLight dark:text-accentDark"
          onClick={() => navigate("/vehicle-listing")}
        >
          Go back to the Vehicle Listings
        </button>
      </div>
    );
  }

  const selectedVehicle = vehiclesData.find(
    (v) => v.model.toLowerCase() === vehicleName.toLowerCase()
  );

  if (!selectedVehicle) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-accentLight dark:text-accentDark">
          Vehicle not found
        </h1>
        <button
          className="mt-4 underline text-accentLight dark:text-accentDark"
          onClick={() => navigate("/vehicle-listing")}
        >
          Go back to the Vehicle Listings
        </button>
      </div>
    );
  }

  const { vehicle, variants } = selectedVehicle;

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = `/pdf/${vehicle.title
      .replace(" ", "_")
      .toLowerCase()}_brochure.pdf`;
    link.download = `${vehicle.title} Brochure.pdf`;
    link.click();
  };

  const handleClick = (vehicle) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setImageIndex(0);
    navigate(`/vehicle-listing/${vehicle.title}`, {
      state: {
        imgSrc: vehicle.imgSrc,
        hoverImgSrc: vehicle.hoverImgSrc,
        tag: vehicle.tag,
        title: vehicle.title,
        description: vehicle.description,
        price: vehicle.basePrice,
      },
    });
  };

  return (
    <section className="overflow-hidden text-textLight dark:text-textDark bg-primaryLight dark:bg-primaryDark body-font">
      <div className="flex flex-col items-center justify-center mt-10 text-center">
        <h1 className="text-3xl font-bold text-textLight dark:text-textDark">
          Vehicle Details
        </h1>
        <div className="w-20 h-1 mx-auto my-3 bg-customRed"></div>
      </div>

      <div className="container flex flex-col px-5 py-5 mx-auto mb-10 md:flex-row">
        <div className="hidden w-1/4 py-4 mr-10 md:block">
          <h2 className="px-2 mb-4 text-lg font-bold transition-colors duration-300 ease-in-out md:text-xl lg:text-2xl sm:px-4 lg:px-0 text-textLight dark:text-textDark">
            More Vehicles
          </h2>
          {vehiclesData.map((vehicle, index) => (
            <div key={index} className="mb-8">
              <h3 className="mb-2 font-semibold text-md text-textLight dark:text-textDark">
                {vehicle.vehicle.title}
              </h3>
              <LazyLoadImage
                src={vehicle.vehicle.imgSrc[0]}
                alt={vehicle.vehicle.title}
                width={200}
                height={180}
                effect="blur"
                onClick={() => handleClick(vehicle.vehicle)}
                className="block border-4 shadow-xl cursor-pointer border-accentLight dark:border-accentDark rounded-xl"
              />
            </div>
          ))}
          <div className="mb-8">
            <div
              onClick={() => navigate(`/vehicle-listing`)}
              className="flex items-center justify-center h-20 mb-2 border-4 shadow-xl cursor-pointer md:h-40 lg:w-52 bg-accentLight dark:bg-accentDark border-accentLight dark:border-accentDark rounded-xl"
            >
              <span className="font-semibold md:text-lg text-textLight dark:text-textDark">
                See More
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:w-3/4 md:w-[100%] mx-auto lg:w-4/5">
          <div className="w-full px-0 sm:px-0 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
            <h2 className="text-sm tracking-widest text-gray-500 dark:text-gray-400 title-font">
              Suzuki
            </h2>
            <h1 className="mb-4 text-3xl font-medium text-textLight dark:text-textDark title-font">
              {vehicle.title}
            </h1>

            <div className="flex mb-10">
              {["description", "pricing", "furtherDetails"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-grow py-2 text-lg px-1 ${activeTab === tab
                    ? "text-accentLight dark:text-accentDark border-b-2 border-accentLight dark:border-accentDark"
                    : "border-b-2 border-gray-300 dark:border-gray-700"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "description" && (
              <>
                <p className="mb-4 leading-relaxed">{vehicle.description}</p>
                <div className="flex py-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">
                    Colors
                  </span>
                  <span className="ml-auto font-semibold text-right text-textLight dark:text-textDark w-60">
                    {vehicle.colors.map((color, idx) => (
                      <span key={idx}>
                        {`${color} -`}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
                <div className="flex py-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">
                    Variants
                  </span>
                  <span className="ml-auto font-semibold text-right text-textLight dark:text-textDark">
                    {variants.map((variant, idx) => (
                      <span key={idx}>
                        {`${variant.name} -`}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex items-center mt-5 lg:mt-20">
                  <span className="text-2xl font-medium text-accentLight dark:text-accentDark title-font">
                    {vehicle.basePrice} PKR
                    <br />
                    <span className="text-sm">(starting price)</span>
                  </span>

                  <NavLink
                    to={"/booking"}
                    className="flex px-6 py-2 ml-auto text-white border-0 rounded bg-accentLight dark:bg-accentDark focus:outline-none hover:bg-accentLight/80 dark:hover:bg-accentDark/80"
                  >
                    Book Now!
                  </NavLink>
                </div>
              </>
            )}

            {activeTab === "pricing" && (
              <div className="mb-4">
                {variants.map((variant, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 my-10 border-t border-gray-200 dark:border-gray-700"
                  >
                    <span className="mr-10 text-gray-500 dark:text-gray-400">
                      {variant.name}
                    </span>
                    <span className="text-textLight dark:text-textDark">
                      {variant.price}
                    </span>
                  </div>
                ))}
                <NavLink
                  to="/pricelist"
                  className="flex items-center justify-end text-base font-medium border-transparent rounded-md shadow-none text-accentLight dark:text-accentDark hover:shadow-sm hover:text-accentLight/80 dark:hover:text-accentDark/80"
                >
                  View Full Pricing Details
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6l6 6-6 6"
                    />
                  </svg>
                </NavLink>
              </div>
            )}

            {activeTab === "furtherDetails" && (
              <div className="flex flex-col mb-4">
                <p className="mb-4 leading-relaxed">
                  To see further details, download the brochure for{" "}
                  {vehicle.title}.
                </p>
                <button
                  onClick={handleDownloadBrochure}
                  className="px-6 py-2 my-10 text-white border-0 rounded bg-accentLight dark:bg-accentDark focus:outline-none hover:bg-accentLight/80 dark:hover:bg-accentDark/80"
                >
                  Download Brochure
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center object-cover object-center w-full h-auto mb-10 rounded md:justify-start lg:items-start lg:justify-start lg:w-1/2 lg:h-auto lg:mt-10">
            <LazyLoadImage
              alt="vehicle"
              className="object-contain object-center rounded w-70 h-70 sm:w-96 sm:h-96"
              src={vehicle.imgSrc[imageIndex]}
              effect="blur"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/cars/Alto.png";
              }}
            />
            <div className="grid grid-cols-3 mt-4 sm:grid-cols-4">
              {selectedVehicle.vehicle.imgSrc.map((img, idx) => (
                <button
                  key={idx}
                  className={`h-24 w-24 mx-2 my-2 rounded-lg focus:outline-none ${imageIndex === idx
                    ? "ring-2 ring-accentLight dark:ring-accentDark"
                    : ""
                    }`}
                  onClick={() => setImageIndex(idx)}
                >
                  <LazyLoadImage
                    alt={`${selectedVehicle.model}`}
                    className="object-contain object-center w-full h-full rounded-lg"
                    src={img}
                    effect="blur"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/cars/Alto.png";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <MoreVehiclesSlider
          vehiclesData={vehiclesData}
          handleClick={handleClick}
        />
      </div>
    </section>
  );
}