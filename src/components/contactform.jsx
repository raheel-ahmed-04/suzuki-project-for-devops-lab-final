import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contactform() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // For handling form submission state
  const [submitSuccess, setSubmitSuccess] = useState(false); // Success state for confirmation message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send email via Brevo API
  const sendEmailWithBrevo = async (data) => {
    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            email: "sales@suzukicampbellpur.com",
            name: "Suzuki Campbellpur",
          },
          to: [{ email: data.email, name: data.name }],
          templateId: 4,
          params: {
            FIRSTNAME: data.name,
            EMAIL: data.email,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_BREVO_API_KEY,
          },
        }
      );

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email via Brevo:", error);
      throw error;
    }
  };

  // Function to send data to Zapier/Make Webhook
  const sendDataToZapier = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_MAKE_WEBHOOK_CONTACT,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: data.name, // Make sure field names are correct
          email: data.email,
          message: data.message,
        },
      });

      console.log("Data submitted to Make successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data to Make:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call Brevo and Zapier functions
      await sendEmailWithBrevo(formData);
      await sendDataToZapier(formData);

      setSubmitSuccess(true);
      navigate("/post-booking");

      // Optionally, reset the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert(
        "There was an error with the submission. Please Try refreshing the page and submitting again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative body-font text-textLight dark:text-textDark">
      {/* Image Background with Form Centered */}
      <div className="relative h-[300px] xs:h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
        <img
          src="/images/Campbellpur Motors.png"
          alt="Campbellpur Motors"
          className="absolute inset-0 object-fill w-full h-full"
        />
      </div>

      {/* Contact Section */}
      <section className="px-5 my-10">
        <div className="container flex flex-col items-center justify-center mx-auto bg-white dark:bg-gray-900">
          {/* Heading */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-semibold text-center transition-all duration-300 cursor-pointer title-font text-textLight dark:text-textDark hover:text-red-500 dark:hover:text-red-400">
              <span className="text-4xl text-red-500 dark:text-red-400 font-dancing">
                {" "}
                "{" "}
              </span>
              Welcome to Suzuki Campbellpur Motors
              <span className="text-4xl text-red-500 dark:text-red-400 font-dancing">
                "{" "}
              </span>
            </h1>

            {/* About Us */}
            <div className="flex flex-col">
              <p className="my-4 text-lg text-gray-600 dark:text-gray-300">
                Suzuki Campbellpur Motors is subsidiary of Pak Suzuki Motor
                Company Ltd. We have achieved excellence in the automotive
                industry, earning several awards for our dealership,
                performance, and workshop operations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We take pride in serving various government and corporate
                clients across the country. Our focus is on delivering
                exceptional customer satisfaction through top-notch service,
                quality, and value for money.
              </p>
              <p className="my-4 text-lg text-gray-600 dark:text-gray-300">
                To ensure this, we maintain a state-of-the-art workshop staffed
                by Suzuki-trained technical experts and have established a fully
                equipped workshop with modern machinery to provide rapid and
                quality service.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Contact
              </h1>

              {/* Address */}
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Main G.T Road, Opposite Radio Pakistan, Near Lawrencepur,
                District Attock
              </p>

              {/* Phone */}
              <div className="flex gap-2 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.314 28.323"
                  className="w-5 h-5"
                  stroke="cyan"
                >
                  <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                </svg>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  <a href="tel:+923171110806" className="hover:underline">
                    +92-317-111-0860
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="flex my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="orange"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.5 6L18 8M4.5 6h13a2 2 0 012 2v9a2 2 0 01-2 2h-14a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  <a
                    href="mailto:ceo@suzukicampbellpur.com"
                    className="hover:underline"
                  >
                    ceo@suzukicampbellpur.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="flex items-center justify-center py-6 bg-gray-100 dark:bg-gray-800">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90"
        >
          <h2 className="mb-4 text-2xl font-medium text-center text-gray-900 dark:text-gray-100 title-font">
            Contact Us
          </h2>
          <p className="mb-5 leading-relaxed text-center text-gray-600 dark:text-gray-300">
            Feel free to send us a message!
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting} // Disable button during submission
            className="px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded dark:bg-blue-500 focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {submitSuccess && (
          <div className="mt-4 text-green-500">
            <p>
              Your message was sent successfully! We will get back to you soon.
            </p>
          </div>
        )}
      </section>

      {/* Maps Integration */}
      <div>
        {/* Full-width Map Section */}
        <div className="relative flex items-end justify-start w-full overflow-hidden">
          <iframe
            width="100%"
            height="500px"
            className=""
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13255.212497902448!2d72.4900625!3d33.8431875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a311b0bbfdf59cf%3A0x295ae949bf017d7d!2sSuzuki%20Campbellpur%20Motors!5e0!3m2!1sen!2s!4v1728051091150!5m2!1sen!2s"
            style={{
              filter: "opacity(1)",
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contactform;
