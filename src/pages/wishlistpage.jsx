import React, { useContext, useEffect } from "react";
import WishlistContext from "../context/WishlistContext";
import VehicleCard from "../components/vehiclecard";

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-5 dark:bg-gray-900 text-gray-700 dark:text-gray-300 body-font min-h-screen">
      <div className="container px-5">
        {/* Heading */}
        <div className="flex flex-col items-center px-5 sm:px-10 my-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Your Wishlist
          </h1>
          <div className="w-24 h-1 my-3 bg-red-500 dark:bg-red-400 rounded"></div>
        </div>

        {/* Wishlist Vehicles */}
        <div className="container flex flex-col mb-10">
          {wishlist.length === 0 ? (
            <p className="text-xl text-center text-accentLight dark:text-accentDark">
              No cars in your wishlist
            </p>
          ) : (
            <div className="flex flex-wrap px-5 -m-4">
              {wishlist.map((vehicle, index) => (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
