import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-400 bg-customBlue dark:bg-gray-900 dark:text-gray-300 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <NavLink
            className="flex items-center justify-center font-medium title-font md:justify-start"
            to="/"
          >
            <img
              src="/images/logos/Logo3.png"
              alt="Suzuki"
              className="w-50 h-30"
            />
          </NavLink>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-400 text-medium">
            Engineered for your{" "}
            <span className="text-2xl text-red-600 font-dancing">
              delightful
            </span>{" "}
            experience.
          </p>
        </div>

        <div className="flex flex-wrap flex-grow gap-16 mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:mr-20 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-lg font-medium tracking-widest text-white title-font">
              OUR LOCATION
            </h2>
            <p className="mb-5 text-gray-400 dark:text-gray-500">
              Suzuki Campbellpur Motors, Lawrencepur, Main G.T Road, Attock
              Punjab, Pakistan
            </p>
            <a
              className="text-gray-400 hover:text-white"
              href="https://maps.app.goo.gl/FzGQjHX97yQPyrrX6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C8.134 2 5 5.134 5 9c0 3.24 2.412 7.462 6.072 11.374a1 1 0 001.442 0C16.588 16.462 19 12.24 19 9c0-3.866-3.134-7-7-7zm0 11a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
              Get Directions
            </a>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-lg font-medium tracking-widest text-white title-font">
              QUICK LINKS
            </h2>
            <nav className="flex flex-col gap-2 mb-10 list-none">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="text-gray-400 hover:text-white"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className="text-gray-400 hover:text-white"
                >
                  Book Online
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricelist"
                  className="text-gray-400 hover:text-white"
                >
                  Price List
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="text-gray-400 hover:text-white">
                  Blogs
                </NavLink>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-lg font-medium tracking-widest text-white title-font">
              OPENING HOURS
            </h2>
            <p className="text-gray-400 dark:text-gray-500">Monday to Sunday</p>
            <div className="flex items-center justify-center my-2 md:justify-start lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="inline-block w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
              </svg>
              <p className="text-gray-400 dark:text-gray-500">
                9:00 AM - 6:00 PM

              </p>
            </div>
            <div>
              <p className="flex items-center justify-center my-3 md:justify-start lg:justify-start">
                <a
                  href="mailto:ceo@suzukicampbellpur.com"
                  className="flex hover:text-white group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="inline w-5 h-5 mr-1 group-hover:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.5 6L18 8M4.5 6h13a2 2 0 012 2v9a2 2 0 01-2 2h-14a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                  ceo@suzukicampbellpur.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start lg:justify-start">
                <a
                  href="tel:+923171110860"
                  className="flex hover:text-white group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.314 28.323"
                    stroke="currentColor"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 group-hover:stroke-white"
                  >
                    <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415z" />
                  </svg>
                  +92-317-1110860
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start lg:justify-start">
                <a
                  href="tel:+923171110861"
                  className="flex hover:text-white group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.314 28.323"
                    stroke="currentColor"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 group-hover:stroke-white"
                  >
                    <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415z" />
                  </svg>
                  +92-317-1110861, 63, 64 (Sales)
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start lg:justify-start">
                <a
                  href="tel:+923171110866"
                  className="flex hover:text-white group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.314 28.323"
                    stroke="currentColor"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 group-hover:stroke-white"
                  >
                    <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415z" />
                  </svg>
                  +92-317-1110866, 68 (Aftersales)
                </a>
              </p>
            </div>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 text-white bg-red-600 rounded hover:bg-blue-600 dark:hover:bg-blue-500">
                <span className="text-white no-underline">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 dark:bg-gray-900">
        <div className="grid grid-cols-3 px-4 py-6 lg:px-20 md:py-4 ">
          <p className="text-sm text-gray-400">
            © 2024 Suzuki Campbellpur Motors — Attock
          </p>
          <p className="text-sm text-center text-gray-400">
            Built by — {``}
            <a
              className="font-semibold"
              href="https://www.carshowroomwebservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Car Showroom Web Services
            </a>
          </p>
          <div className="inline-flex justify-end">
            <a
              className="text-gray-400 hover:text-blue-500"
              href="https://www.facebook.com/suzukicampbellpurmotor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-red-500"
              href="https://youtube.com/@suzukicampbellpur-attock4871?si=VRgqn08U6PryBU2I"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M19.615 3.184A3.042 3.042 0 0017.537 2.5C15.259 2.5 12 2.5 12 2.5s-3.259 0-5.537.5a3.042 3.042 0 00-2.078.684A3.133 3.133 0 003.22 5.262C3 6.905 3 9.152 3 9.152s0 2.247.22 3.89a3.133 3.133 0 001.165 2.078 3.042 3.042 0 002.078.684c2.278.5 5.537.5 5.537.5s3.259 0 5.537-.5a3.042 3.042 0 002.078-.684 3.133 3.133 0 001.165-2.078c.22-1.643.22-3.89.22-3.89s0-2.247-.22-3.89a3.133 3.133 0 00-1.165-2.078zM9.615 12.5v-5l5 2.5-5 2.5z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-pink-500"
              href="https://www.instagram.com/suzukicampbellpurmotors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
