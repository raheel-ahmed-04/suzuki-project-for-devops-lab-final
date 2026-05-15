import React from "react";

function Servicesprovided() {
  return (
    <section className="text-gray-600 bg-gray-100 dark:text-gray-300 body-font dark:bg-gray-900">
      <div className="container flex flex-wrap px-5 py-10 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900 sm:text-4xl md:text-left dark:text-white">
          What is Included In Our Repair/Maintenance Service?
        </h2>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {/* Mechanical Repair */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none dark:bg-gray-700"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-100 title-font">
                  Mechanical Repair
                </h2>
                <p className="leading-relaxed">
                  From brakes to suspension and engine. Whether you need a
                  simple fix or a major overhaul of the engine, we have you
                  covered.
                </p>
              </div>
            </div>

            {/* Denting & Painting */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none dark:bg-gray-700"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-100 title-font">
                  Denting & Painting
                </h2>
                <p className="leading-relaxed">
                  We offer professional denting and painting services to restore
                  your vehicle’s look and color.
                </p>
              </div>
            </div>

            {/* Electrical Repair */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none dark:bg-gray-700"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-100 title-font">
                  Electrical Repair
                </h2>
                <p className="leading-relaxed">
                  Our auto workshop is equipped with the latest diagnostic tools
                  to accurately diagnose and repair all electrical issues in
                  your vehicle.
                </p>
              </div>
            </div>

            {/* Periodic Maintenance */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none dark:bg-gray-700"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-100 title-font">
                  Periodic Maintenance
                </h2>
                <p className="leading-relaxed">
                  Comprehensive periodic maintenance services to keep your
                  vehicle running smoothly and prevent breakdowns.
                </p>
              </div>
            </div>

            {/* Other Repair Services */}
            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-100 title-font">
                  Other Repair Services
                </h2>
                <p className="leading-relaxed">
                  From transmission repair to AC service, we offer a wide range
                  of other repair services.
                </p>
              </div>
            </div>
          </div>

          {/* Image for Repair Services */}
          <img
            className="object-contain object-center w-full rounded-lg md:w-3/4 lg:w-3/5 "
            src="/images/cars/Alto.png"
            alt="Car Repair Services"
          />
        </div>
      </div>
    </section>
  );
}

export default Servicesprovided;
