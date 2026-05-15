import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-center max-w-lg">
        <div className="mb-6">
          <img 
            src="/images/error.svg"  // Path to the SVG file in the public/images folder
            alt="Error Icon" 
            className="w-12 h-12 mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">This site can’t be reached</h1>
        <p className="text-sm mb-4">
          The webpage at <span className="text-blue-500">https://www.suzukicampbellpur.com/</span> might be temporarily down or it may have moved permanently to a new web address.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">ERR_FAILED</p>
      </div>
    </div>
  );
};

export default ErrorPage;
