import React from "react";
import { motion } from "framer-motion";

// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};


const Pricingandterms = ({ priceList }) => {
  return (
    <>
      <section className="relative text-gray-700 body-font dark:bg-gray-900">
        {/* Heading */}
        <div className="my-10 text-center sm:my-5">
          <motion.h2
            className="mt-10 mb-4 text-3xl font-bold text-center sm:text-4xl sm:mt-0 text-textLight dark:text-textDark"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Price List
          </motion.h2>
          {/* Horizontal Line */}
          <div className="w-20 h-1 mx-auto my-3 bg-red-500"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            With Effect From 13th October, 2024
          </p>
        </div>
        <div className="mx-0 overflow-x-auto rounded-lg sm:mx-10">
          <table className="min-w-full text-left text-gray-700 table-auto bg-blue-950">
            {/* Table Head */}
            <thead>
              <tr className="text-center text-red-500 bg-gray-200">
                <th className="px-6 py-3">Model</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">WHT Filer</th>
                <th className="px-6 py-3">WHT Non-Filer</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {priceList.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="text-white dark:text-gray-400">
                    <td
                      colSpan={4}
                      className="px-6 py-3 font-semibold text-left sm:text-center"
                    >
                      {item.model}
                    </td>
                  </tr>
                  {item.variants.map((variant, variantIndex) => (
                    <tr
                      className="text-center bg-white border-b border-gray-300 dark:bg-gray-400 dark:text-gray-100"
                      key={variantIndex}
                    >
                      <td className="px-6 py-3">{variant.name}</td>
                      <td className="px-6 py-3">{variant.price} + Tax</td>
                      <td className="px-6 py-3">{variant.whtFiler}</td>
                      <td className="px-6 py-3">{variant.whtNonFiler}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-start mx-10 align-right">
          <span className="text-red-600 ">*WHT = WithHolding Tax</span>
        </div>

        {/* Terms & Conditions Section */}
        <div className="p-5 mx-auto my-10 max-w-7xl ">
          <h2 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-gray-400">
            Terms & Conditions
          </h2>
          <ul className="pl-5 space-y-3 text-gray-800 list-decimal dark:text-gray-400">
            <li>
              <strong>Payment</strong>: Payment favoring 'PAK SUZUKI MOTOR CO.
              LTD A/C CUSTOMER NAME' in shape of pay-order/demand draft.
            </li>
            <li>
              Prices prevailing at the time of deposition of final payment with
              PSMCL shall apply. PSMCL is exempted from income tax deduction at
              source <strong>PSMCL NTN:0712837-1.</strong>
            </li>
            <li>
              <strong>Booking:</strong> Advance full payment of ALL VEHICLES for
              booking.
            </li>
            <li>
              <strong>Documents</strong>: <br></br>{" "}
              <strong>Individual Customer: </strong>
              DD/pay-order original & Copy of CNIC, Customer signed PBO.
              <br></br>
              <strong>Corporate Customer/Bank: </strong>
              DD/pay-order, Original Purchase Order, Copy of NTN PBO form, 1/5
              GST deduction certificate, signed & stamped.
            </li>
            <li>
              <strong>Extended Warranty: </strong> Payment to be made favoring{" "}
              'PAK SUZUKI MOTOR CO. LTD A/C CUSTOMER NAME' in shape of
              pay-order/demand draft.
            </li>
            <li>
              Payment for{" "}
              <strong>
                Suzuki Genuine Accessories, Suzuki Insurance & Registration
              </strong>{" "}
              may be made in favor of{" "}
              <strong>'Suzuki Campbellpur Motors'</strong>.
            </li>
            <li>
              <strong>Jumbo Pack: </strong>
              Includes Steering cover, Seat cover, Floor mats, Mud flaps & Top
              Cover . Payment may be made in favor of 'Suzuki Campbell Motors'.
            </li>
            <li>
              <strong>Suzuki Finance: </strong>Leasing facility is available at
              most affordable rates.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pricingandterms;
