import React from "react";

function TestimonialCard({ name, image, feedback, location }) {
  return (
    <div className="w-full max-w-xs px-5 pt-5 pb-10 mx-2 mb-5 transition-transform duration-500 rounded-lg shadow-lg cursor-pointer bg-primaryLight dark:bg-primaryDark hover:scale-105 group text-textLight dark:text-textDark transform transition-all duration-500 hover:shadow-2xl hover:bg-opacity-90 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
      <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
        <div className="relative block animate__animated animate__fadeIn animate__delay-2s">
          <img
            alt="profile"
            src={image}
            className="object-cover w-20 h-20 mx-auto rounded-full transition-all duration-300 transform hover:scale-110 group-hover:rotate-12 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full mb-10">
        <div className="h-3 text-3xl leading-tight text-left text-gray-400 transition-all duration-300 transform -translate-x-3 group-hover:text-accentLight dark:group-hover:text-accentDark group-hover:translate-x-1">
          “
        </div>
        <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-300">
          {feedback}
        </p>
        <div className="h-3 -mt-3 text-3xl leading-tight text-right text-gray-400 transition-all duration-300 transform translate-x-3 group-hover:text-accentLight dark:group-hover:text-accentDark group-hover:-translate-x-1">
          ”
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-center text-accentLight dark:text-accentDark text-md animate__animated animate__fadeIn animate__delay-3s">
          {name}
        </p>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 animate__animated animate__fadeIn animate__delay-4s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C8.134 2 5 5.134 5 9c0 3.24 2.412 7.462 6.072 11.374a1 1 0 001.442 0C16.588 16.462 19 12.24 19 9c0-3.866-3.134-7-7-7zm0 11a3 3 0 110-6 3 3 0 010 6z"
            />
          </svg>
          {location}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
