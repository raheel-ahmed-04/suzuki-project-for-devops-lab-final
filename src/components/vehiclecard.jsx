import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WishlistContext from "../context/WishlistContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function VehicleCard({ imgSrc, hoverImgSrc, tag, title, description, price }) {
  const [isHovered, setIsHovered] = useState(false);
  const { wishlist, updateWishlist } = useContext(WishlistContext); // Use context
  const navigate = useNavigate();

  // Check if the vehicle is in the wishlist
  const isInWishlist = wishlist.some((item) => item.title === title);

  const handleAddToWishlist = () => {
    // Add the vehicle to the wishlist if it's not already present
    if (!isInWishlist) {
      const updatedWishlist = [
        ...wishlist,
        { imgSrc, hoverImgSrc, tag, title, description, price },
      ];
      updateWishlist(updatedWishlist); // Use context to update wishlist
    }
  };

  const handleRemoveFromWishlist = () => {
    // Remove the vehicle from the wishlist
    const updatedWishlist = wishlist.filter((item) => item.title !== title);
    updateWishlist(updatedWishlist); // Use context to update wishlist
  };

  const handleClick = () => {
    // Navigate to the details page and pass the vehicle data via state
    navigate(`/vehicle-listing/${title}`, {
      state: {
        imgSrc,
        hoverImgSrc,
        tag,
        title,
        description,
        price,
      },
    });
  };

  return (
    <div
      className="w-full p-4 sm:w-1/2 lg:w-1/3 xl:w-1/4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Click For Details"
      onClick={handleClick}
    >
      <div className="p-6 transition-transform duration-500 bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-800 hover:scale-105">
        <LazyLoadImage
          className={`h-40 ${isHovered
              ? "w-full md:px-5 md:py-10"
              : "rounded w-full object-contain sm:object-cover object-center"
            } mb-6`}
          src={isHovered ? hoverImgSrc : imgSrc}
          alt={title}
          effect="blur"
        />
        <h3 className="text-xs font-medium tracking-widest text-red-600 dark:text-red-400 title-font">
          {tag}
        </h3>
        <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 title-font">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <p className="mt-2 text-gray-800 dark:text-gray-200 text-medium">
          <span className="italic">Starting From : </span>
          <span className="italic font-semibold text-red-600 dark:text-red-400 text-medium">
            {price}/-
          </span>
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation on button click
            isInWishlist ? handleRemoveFromWishlist() : handleAddToWishlist();
          }}
          className="px-4 py-2 mt-4 text-sm text-white bg-red-600 rounded hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500"
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
