import React from "react";

const Pricing = () => {
  const downloadPDF = (type) => {
    const pdfUrl = `/pdf/${type}.pdf`; // Replace with the actual path to your PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${type}-Rates.pdf`;
    link.click();
  };

  return (
    <div className="w-full mx-auto px-5 py-5 text-gray-600 dark:text-gray-300 mb-10 bg-white dark:bg-gray-900">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900 dark:text-gray-100">
          Pricing
        </h1>
        <h3 className="text-lg font-medium mb-10 text-gray-700 dark:text-gray-400">
          We provide clear and competitive pricing for all our services.
          Download the PDFs for detailed rate information.
        </h3>
      </div>

      <div className="max-w-4xl mx-auto md:flex md:space-x-6">
        {/* General Labor Rates */}
        <div className="w-full md:w-1/3 px-8 py-10 mb-3 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-lg md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-900 dark:text-gray-100">
              General Labor Rates
            </h2>
            <ul className="text-sm px-5 mb-8 list-disc dark:text-gray-400">
              <li className="leading-tight">Comprehensive mechanical work</li>
              <li className="leading-tight">Electrical repairs</li>
            </ul>
          </div>
          <div className="w-full">
            <button
              onClick={() => downloadPDF("general-labor")}
              className="font-bold bg-gray-600 dark:bg-indigo-600 hover:bg-gray-700 dark:hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Regular Parts Rate */}
        <div className="w-full md:w-1/3 px-8 py-10 mb-3 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-lg md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-900 dark:text-gray-100">
              Regular Parts Rate
            </h2>
            <ul className="text-sm px-5 mb-8 list-disc dark:text-gray-400">
              <li className="leading-tight">Genuine parts</li>
              <li className="leading-tight">Warranty included</li>
              <li className="leading-tight">Certified installation</li>
            </ul>
          </div>
          <div className="w-full">
            <button
              onClick={() => downloadPDF("regular-parts")}
              className="font-bold bg-gray-600 dark:bg-indigo-600 hover:bg-gray-700 dark:hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Scheduled Labor Rates */}
        <div className="w-full md:w-1/3 px-8 py-10 mb-3 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-lg md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-900 dark:text-gray-100">
              Scheduled Labor Rates
            </h2>
            <ul className="text-sm px-5 mb-8 list-disc dark:text-gray-400">
              <li className="leading-tight">Scheduled repairs</li>
              <li className="leading-tight">Priority handling</li>
            </ul>
          </div>
          <div className="w-full">
            <button
              onClick={() => downloadPDF("scheduled-labor")}
              className="font-bold bg-gray-600 dark:bg-indigo-600 hover:bg-gray-700 dark:hover:bg-indigo-700 text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
