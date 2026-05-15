import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
//<<<<<<< HEAD>>>>>>> b2c946471c9f41efce3ff302ae1e553e5c098e4d

// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// Function to fetch car data
const fetchCarData = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  // Log the data to check the structure
  console.log("Fetched Data:", data);

  // Map prices from the variantPrices array into a priceMap
  const priceMap = {};
  data.variantPrices.forEach(entry => {
    const key = `${entry.model}-${entry.variant}`;
    priceMap[key] = entry.price;
  });

  // Log the priceMap to check the mapping
  console.log("Price Map:", priceMap);

  // Return the data
  return {
    carColors: data.carColors,
    carVariants: data.carVariants,
    priceMap: priceMap, // Include the priceMap in the return value
  };
};




function Bookingspage() {
  const [formType, setFormType] = useState("vehicle"); // 'vehicle', 'testRide', 'service'
  const [showVehicleOptionsModal, setShowVehicleOptionsModal] = useState(false);
  const [selectedVehicleOption, setSelectedVehicleOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // For handling submission state
  const [, setSubmitSuccess] = useState(false); // For tracking if submission was successful

  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["carData"],
    queryFn: fetchCarData,
  });

  // Set state based on the query results
  const carColors = data?.carColors || {};
  const carVariants = data?.carVariants || {};

  // Separate form data for each booking type
  const [bookVehicleFormData, setBookVehicleFormData] = useState({
    carModel: "",
    variant: "",
    color: "",
    name: "",
    phone: "",
    city: "",
    email: "",
    purchaseOption: "",
  });

  const [bookRideFormData, setBookRideFormData] = useState({
    carModel: "",
    variant: "",
    name: "",
    phone: "",
    city: "",
    email: "",
    date: "",
  });

  const [bookServiceFormData, setBookServiceFormData] = useState({
    carModel: "",
    serviceType: "",
    name: "",
    phone: "",
    city: "",
    email: "",
    date: "",
    comments: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "vehicle") {
      setBookVehicleFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === "carModel") {
        setBookVehicleFormData((prevData) => ({
          ...prevData,
          carModel: value,
          variant: "",
          color: "", // Reset color when changing the car model
        }));
      }
    } else if (formType === "testRide") {
      setBookRideFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === "carModel") {
        setBookRideFormData((prevData) => ({
          ...prevData,
          carModel: value,
          variant: "",
        }));
      }
    } else if (formType === "service") {
      setBookServiceFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === "carModel") {
        setBookServiceFormData((prevData) => ({
          ...prevData,
          carModel: value,
        }));
      }
    }
  };
  const sendDataToZapier = async (formData, formType) => {
    try {
      // Construct the payload for Zapier/Make, adding fields conditionally
      const payload = {
        formType: formType,
        name: formData.name || null,
        email: formData.email || null,
        phone: formData.phone || null,
        carModel: formData.carModel || null,
        variant: formData.variant || null,
        color: formData.color || null,
        city: formData.city || null,
        purchaseOption: formData.purchaseOption || null,
        date: formData.date || null,
        serviceType: formData.serviceType || null,
        comments: formData.comments || null,
      };

      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_MAKE_WEBHOOK_BOOKING,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });

      console.log("Data sent to Make successfully:", response.data);
      return true;
    } catch (error) {
      console.error("Error sending data to Make:", error);
      return false;
    }
  };



  const sendEmail = async (formData, formType) => {
    try {
      console.log("FormData:", formData);
      console.log("Form type:", formType);
  
      const generateUniqueId = () => {
        const timestamp = Date.now().toString().slice(-4); // Last 4 digits of the timestamp
        const randomPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
        return `${timestamp}${randomPart}`;
      };
  
      let emailParams = {};
  
      if (formType === "-Test Ride Booking-") {
        console.log("Sending Test Ride Email...");
        emailParams = {
          sender: {
            email: "sales@suzukicampbellpur.com",
            name: "Suzuki Campbellpur",
          },
          to: [{ email: formData.email, name: formData.name }],
          templateId: 10,
          params: {
            id: generateUniqueId(), // Unique ID
            firstname: formData.name,
            lastname: formData.lastname,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            car_model: formData.carModel,
            booking_date: formData.date,
            items: [
              {
                variant_id_name: formData.variant,
              },
            ],
          },
        };
      } else if (formType === "-Vehicle Booking-") {
        console.log("Sending Vehicle Booking Email...");
  
        const { priceMap } = await fetchCarData();
        const selectedModelVariant = `${formData.carModel.trim()}-${formData.variant.trim()}`;
        console.log("selectedModelVariant is", selectedModelVariant);
        let selectedPrice = priceMap[selectedModelVariant] || "10000";
        let formattedPrice = parseFloat(selectedPrice.replace(/[^0-9.-]+/g, ""));
        if (isNaN(formattedPrice)) formattedPrice = 10000;
        const vehiclePrice = formattedPrice.toFixed(2);
        const totalPrice = vehiclePrice;
        const today = new Date();
        const bookingDate = today.toLocaleDateString();
  
        emailParams = {
          sender: {
            email: "sales@suzukicampbellpur.com",
            name: "Suzuki Campbellpur",
          },
          to: [{ email: formData.email, name: formData.name }],
          templateId: 2,
          params: {
            id: generateUniqueId(), // Unique ID
            FIRSTNAME: formData.name,
            EMAIL: formData.email,
            billing_address: {
              firstname: formData.name,
              city: formData.city,
            },
            shipping_address: {
              firstname: formData.name,
              city: formData.city,
            },
            orderType: formType,
            items: [
              {
                name: formData.carModel,
                price: vehiclePrice,
                variant_id_name: formData.variant,
                service_type: formData.serviceType,
                purchase_option: formData.purchaseOption,
                quantity: 1,
                date: bookingDate,
              },
            ],
            total: totalPrice,
            currency: "PKR",
            bookingDate: bookingDate,
          },
        };
      } else if (formType === "-Service Booking-") {
        console.log("Sending Service Appointment Booking Email...");
  
        emailParams = {
          sender: {
            email: "sales@suzukicampbellpur.com",
            name: "Suzuki Campbellpur",
          },
          to: [{ email: formData.email, name: formData.name }],
          templateId: 9,
          params: {
            id: generateUniqueId(), // Unique ID
            firstname: formData.name,
            lastname: formData.lastname,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            car_model: formData.carModel,
            variant: formData.variant,
            service_type: formData.serviceType,
            date: formData.date,
            comments: formData.comments || "No additional comments",
            items: [
              {
                variant_id_name: formData.variant,
              },
            ],
          },
        };
      }
  
      console.log("Email Parameters (Not Sent):", JSON.stringify(emailParams, null, 2));
  
      const apiKey = process.env.REACT_APP_BREVO_API_KEY;
      console.log("Brevo API Key:", apiKey);
  
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        emailParams,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );
  
      console.log("Email sent successfully:", response.data);
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending the email. Please try refreshing the page and submitting again.");
      return false;
    }
  };
  
  
  
  
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formType === "vehicle") {
      // Show the pop-up with vehicle options
      setShowVehicleOptionsModal(true);
    } else {
      setIsSubmitting(true);
      var isSuccess = null;
      if (formType === "testRide") {
        isSuccess = await sendEmail(bookRideFormData, "-Test Ride Booking-"); // 'contact' form type here
        isSuccess = await sendDataToZapier(bookRideFormData, "test_ride"); // 'contact' form type here
      } else if (formType === "service") {
        isSuccess = await sendEmail(bookServiceFormData, "-Service Booking-"); // 'contact' form type here
        isSuccess = await sendDataToZapier(
          bookServiceFormData,
          "service_booking"
        ); // 'contact' form type here
      }

      if (isSuccess) {
        setSubmitSuccess(true); // Set success state
        navigate("/post-booking"); // Navigate after successful submission
      } else {
        alert(
          "There was an issue with the form submission. Please Refresh the page and try again."
        );
      }

      setIsSubmitting(false); // Reset submitting state after request completion
    }
  };

  const handleVehicleOptionSubmit = async () => {
    console.log("Selected Vehicle Option:", selectedVehicleOption);
    var isSuccess = null;
    console.log("Vehicle Booking Data:", bookVehicleFormData);
    //THIS DATA TO BE SENT TO SUZUKI CAMPBELLPUR VIA EMAIL
    setIsSubmitting(true);

    isSuccess = await sendEmail(bookVehicleFormData, "-Vehicle Booking-"); // 'vehicle' form type here
    isSuccess = await sendDataToZapier(bookVehicleFormData, "vehicle_booking"); // 'vehicle' form type here

    if (isSuccess) {
      setSubmitSuccess(true); // Set success state
      navigate("/post-booking"); // Navigate after successful submission
    } else {
      alert(
        "There was an issue with the vehicle option form submission. Please Refresh the page and try again."
      );
    }

    setIsSubmitting(false); // Reset submitting state after request completion
  };

  const handleVehicleOptionChange = (e) => {
    const newOption = e.target.value;
    setSelectedVehicleOption(newOption); // Update the selected option

    // Update the booking form data directly with the new value
    setBookVehicleFormData((prevData) => ({
      ...prevData,
      purchaseOption: newOption, // Use the value from the event instead of selectedVehicleOption
    }));
  };

  // Loading and error handling of React query fetching
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data!</div>;

  return (
    <>
      <div className="container px-2 mx-auto my-10 sm:px-10 md:px-20 dark:bg-gray-900">
        {/* Heading */}
        <div
          style={{ flexDirection: "column" }}
          className="flex justify-center px-10 my-10 text-center align-center"
        >
          <motion.h2
            className="mt-10 mb-4 text-3xl font-bold text-center sm:text-4xl sm:mt-0 text-textLight dark:text-textDark"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Online Bookings
          </motion.h2>

          {/* Horizontal Line */}
          <div className="w-20 h-1 mx-auto my-3 bg-red-500"></div>
        </div>

        {/* Buttons to toggle between forms */}
        <div className="flex justify-center mb-6 space-x-4 align-center">
          <button
            className={`py-2 px-4 rounded-md ${
              formType === "vehicle"
                ? "bg-primaryDark text-white dark:bg-gray-700 dark:text-textDark "
                : "bg-primaryLight dark:text-textLight border border-gray-300"
            }`}
            onClick={() => setFormType("vehicle")}
          >
            Book a New Vehicle
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              formType === "testRide"
                ? "bg-primaryDark text-white dark:bg-gray-700 dark:text-textDark "
                : "bg-primaryLight dark:text-textLight border border-gray-300"
            }`}
            onClick={() => setFormType("testRide")}
          >
            Book A Test Ride
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              formType === "service"
                ? "bg-primaryDark text-white dark:bg-gray-700 dark:text-textDark "
                : "bg-primaryLight dark:text-textLight border border-gray-300"
            }`}
            onClick={() => setFormType("service")}
          >
            Book a Service Appointment
          </button>
        </div>

        {/* Form */}
        <form
          className="px-4 py-4 mx-0 space-y-6 border border-gray-200 shadow-lg sm:px-6 sm:py-6 sm:mx-6 md:px-10 md:py-8 md:mx-20 rounded-xl bg-primaryLight dark:bg-primaryDark dark:border-gray-700"
          onSubmit={handleSubmit}
        >
          {/* Car Model (for all forms) */}
          {(formType === "vehicle" ||
            formType === "testRide" ||
            formType === "service") && (
            <div>
              <label
                htmlFor="carModel"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                Car Model <span className="text-red-600">*</span>
              </label>
              <select
                id="carModel"
                name="carModel"
                required
                value={
                  formType === "vehicle"
                    ? bookVehicleFormData.carModel
                    : formType === "testRide"
                    ? bookRideFormData.carModel
                    : bookServiceFormData.carModel
                }
                onChange={(e) => handleInputChange(e, formType)}
                className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400"
              >
                <option value="">Select Car Model</option>
                <option value="Alto">Alto</option>
                <option value="Cultus">Cultus</option>
                <option value="Swift">Swift</option>
                <option value="Every">Every</option>
                <option value="Ravi">Ravi</option>
              </select>
            </div>
          )}

          {/* Variant (only for vehicle and test ride) */}
          {(formType === "vehicle" || formType === "testRide") &&
            (formType === "vehicle"
              ? bookVehicleFormData.carModel
              : bookRideFormData.carModel) && (
              <div>
                <label
                  htmlFor="variant"
                  className="block text-lg font-medium text-gray-700 dark:text-textDark"
                >
                  Variant <span className="text-red-600">*</span>
                </label>
                <select
                  id="variant"
                  name="variant"
                  required
                  value={
                    formType === "vehicle"
                      ? bookVehicleFormData.variant
                      : bookRideFormData.variant
                  }
                  onChange={(e) => handleInputChange(e, formType)}
                  className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-300"
                >
                  <option value="">Select Variant</option>
                  {carVariants[
                    formType === "vehicle"
                      ? bookVehicleFormData.carModel
                      : bookRideFormData.carModel
                  ].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            )}

          {/* Color (only for vehicle) */}
          {formType === "vehicle" && bookVehicleFormData.carModel && (
            <div>
              <label
                htmlFor="color"
                className="block text-lg font-medium text-gray-700"
              >
                Color <span className="text-red-600">*</span>
              </label>
              <select
                id="color"
                name="color"
                required
                value={bookVehicleFormData.color}
                onChange={(e) => handleInputChange(e, formType)}
                className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200"
              >
                <option value="">Select Color</option>
                {carColors[bookVehicleFormData.carModel].map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Service Type (for service appointments) */}
          {formType === "service" && (
            <div>
              <label
                htmlFor="serviceType"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                Service Type <span className="text-red-600">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={bookServiceFormData.serviceType}
                onChange={(e) => handleInputChange(e, formType)}
                className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400"
              >
                <option value="">Select Type of Service You Need</option>
                <option value="Engine Tuning">Engine Tuning</option>
                <option value="Tappets Adj">Tappets Adjustment</option>
                <option value="Throttle Cleaning">Throttle Cleaning</option>
                <option value="Brake Service">Brake Service</option>
                <option value="General Checkup">General Checkup</option>
                <option value="Electric Checkup">Electric Checkup</option>
                <option value="Computerized Checkup">
                  Computerized Checkup
                </option>
                <option value="Wheel Alignment">Wheel Alignment</option>
                <option value="Wheel Balancing">Wheel Balancing</option>
                <option value="Oil and Filter Change">
                  Oil and Filter Change
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {/* Comments (for service appointments) */}
          {formType === "service" && (
            <div>
              <label
                htmlFor="comments"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                Comments <span className="text-red-600">*</span>
              </label>
              <textarea
                id="comments"
                name="comments"
                required
                value={bookServiceFormData.comments}
                onChange={(e) => handleInputChange(e, formType)}
                className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200"
                placeholder="Add Additional Info/Comments"
              />
            </div>
          )}

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              value={
                formType === "vehicle"
                  ? bookVehicleFormData.name
                  : formType === "testRide"
                  ? bookRideFormData.name
                  : bookServiceFormData.name
              }
              onChange={(e) => handleInputChange(e, formType)}
              className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              required
              type="tel"
              value={
                formType === "vehicle"
                  ? bookVehicleFormData.phone
                  : formType === "testRide"
                  ? bookRideFormData.phone
                  : bookServiceFormData.phone
              }
              onChange={(e) => handleInputChange(e, formType)}
              className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200"
              placeholder="Enter your phone number"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              City <span className="text-red-600">*</span>
            </label>
            <select
              id="city"
              name="city"
              required
              value={
                formType === "vehicle"
                  ? bookVehicleFormData.city
                  : formType === "testRide"
                  ? bookRideFormData.city
                  : bookServiceFormData.city
              }
              onChange={(e) => handleInputChange(e, formType)}
              className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400"
            >
              <option value="">Select City</option>
              <option value="Abbottabad">Abbottabad</option>
              <option value="Attock">Attock</option>
              <option value="Bahawalpur">Bahawalpur</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Gujranwala">Gujranwala</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Sargodha">Sargodha</option>
              <option value="Sialkot">Sialkot</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              value={
                formType === "vehicle"
                  ? bookVehicleFormData.email
                  : formType === "testRide"
                  ? bookRideFormData.email
                  : bookServiceFormData.email
              }
              onChange={(e) => handleInputChange(e, formType)}
              className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Date (only for test ride and service) */}
          {(formType === "testRide" || formType === "service") && (
            <div>
              <label
                htmlFor="date"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                Date <span className="text-red-600">*</span>
              </label>
              <input
                id="date"
                name="date"
                required
                type="date"
                value={
                  formType === "testRide"
                    ? bookRideFormData.date
                    : bookServiceFormData.date
                }
                onChange={(e) => handleInputChange(e, formType)}
                className="block w-full p-2 mt-2 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center align-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 my-10 text-white bg-red-600 rounded-md hover:bg-red-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
              <svg
                className="w-4 h-4 ml-2" // Adjust the size and margin as needed
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
            </button>
          </div>
        </form>

        {showVehicleOptionsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70">

      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">

              <h2 className="mb-4 text-2xl font-bold ">
                Choose Purchase Option
              </h2>
              <div className="my-10 space-y-4">
                <label className="block">
                  <input
                    type="radio"
                    name="purchaseOption"
                    value="booking"
                    checked={selectedVehicleOption === "booking"}
                    // onChange={(e) => setSelectedVehicleOption(e.target.value)}
                    onChange={(e) => handleVehicleOptionChange(e)}
                  />
                  <span className="ml-2">
                    Booking - Full Payment<br></br> (Vehicle available after 2
                    months)
                  </span>
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="purchaseOption"
                    value="priority"
                    checked={selectedVehicleOption === "priority"}
                    onChange={(e) => handleVehicleOptionChange(e)}
                  />
                  <span className="ml-2">
                    Ready/Priority Delivery<br></br> (Additional charges for
                    immediate delivery)
                  </span>
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="purchaseOption"
                    value="leasing"
                    checked={selectedVehicleOption === "leasing"}
                    onChange={(e) => handleVehicleOptionChange(e)}
                  />
                  <span className="ml-2">
                    Leasing from Bank <br></br>(Min. 30% down payment with
                    insurance, tracker, etc.)
                  </span>
                </label>
              </div>
              <div className="flex flex-col justify-center mt-6">
                <button
                  onClick={handleVehicleOptionSubmit}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please Wait..." : "Confirm"}
                </button>
                <div className="mt-3 text-sm text-red-500">
                  *Note: after clicking CONFIRM your details along with your
                  Purshase Option will be sent to Suzuki Campbellpur
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Bookingspage;