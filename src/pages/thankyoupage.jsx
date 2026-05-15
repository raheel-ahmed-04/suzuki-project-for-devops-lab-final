import React, { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="max-w-md p-10 mx-auto my-40 text-center bg-white shadow-lg rounded-xl">
          <div className="flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48"
              height="48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="green"
                strokeWidth="4"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M16 24l6 6L34 18"
                stroke="green"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="mb-5 text-4xl font-bold text-green-600">Thank You!</h2>
          <p className="mb-10 text-lg text-gray-700">
            Your Form has Been Submitted Successfully.
          </p>
          <p className="text-gray-500 ">
            Your details has been sent to <strong>Suzuki Campbellpur</strong>,
            and they will contact you shortly.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
