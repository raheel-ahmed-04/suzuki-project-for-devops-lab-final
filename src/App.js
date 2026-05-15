import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Helmet } from "react-helmet";
import "./App.css";

// Icons
import { Car } from "lucide-react";

// Header & Footer
import Navbar from "./components/navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/footer";

// Routes
import Homepage from "./pages/homepage";
import Vehiclelistingpage from "./pages/vehiclelistingpage";
import Servicepage from "./pages/servicepage";
import Bookingspage from "./pages/bookingspage";
import Blogspage from "./pages/blogspage";
import Contactpage from "./pages/contactpage";
import Pricelistpage from "./pages/pricelistpage";
import VehicleDetailsPage from "./pages/vehicledetailspage";
import ThankYouPage from "./pages/thankyoupage";
import WishlistPage from "./pages/wishlistpage";
import WhatsAppButton from "./components/WhatsAppButton";
import FinanceCalculator from "./pages/FinanceCalculatorPage";
// import ErrorPage from './pages/ErrorPage'; // Import ErrorPage

import { ThemeToggle } from "./components/ThemeToggle";
import { ScrollToTop } from "./components/ScrollToTop";

// Import the PromoPopup component
import PromoPopup from "./components/PromoPopup";

function LoadingIcon() {
  return (
    <div className="relative mb-8">
      {/* Removed the ping effect */}
      <div className="absolute inset-0 opacity-0">
        <Car className="w-24 h-24 text-white" />
      </div>

      <img
        src="/images/swift.png"  
        alt="Swift"
        className="relative z-10 w-48 h-48"  
      />
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100));
      } else {
        setLoading(false);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress]);

  if (!loading) {
    return (
      <>
        <Helmet>
          <title>Suzuki Campbellpur Motors</title>
          <meta
            name="description"
            content="Suzuki franchise offering a wide range of cars and spare parts online. Discover our latest models and genuine spare parts with convenient online shopping."
          />
        </Helmet>

        <ThemeProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Navbar />
              <Breadcrumbs />
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/vehicle-listing"
                  element={<Vehiclelistingpage />}
                />
                <Route
                  path="/vehicle-listing/:vehicleTitle"
                  element={<VehicleDetailsPage />}
                />
                <Route path="/service" element={<Servicepage />} />
                <Route path="/pricelist" element={<Pricelistpage />} />
                <Route path="/booking" element={<Bookingspage />} />
                <Route path="/blogs" element={<Blogspage />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path="/post-booking" element={<ThankYouPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/financecalculator" element={<FinanceCalculator />} />
                {/* <Route path="*" element={<ErrorPage />} /> */} {/* Catch-all route */}
              </Routes>

              <Footer />
              <WhatsAppButton />
              <ThemeToggle />
              <ScrollToTop />
              {/* Display the promo popup after the main content */}
              <PromoPopup />
            </BrowserRouter>
          </WishlistProvider>
        </ThemeProvider>
      </>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background with Suzuki car */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <img
          src="/images/Cars4.png"
          alt="Background"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center">
        <LoadingIcon />

        {/* Suzuki Logo */}
        <div className="mb-8 text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="suzuki"
            >
              <path
                fill="#F44336"
                d="M8.616 6.05c.224-.719.793-.352.793-.352s1.473 1.101 5.514 3.625S24 8.344 24 8.344L12.036 0C6.789 5.46.072 7.417.072 7.417l.019.007L15.384 17.95c-.224.719-.793.352-.793.352s-1.473-1.101-5.514-3.625C5.037 12.154 0 15.656 0 15.656L11.964 24c5.247-5.46 11.964-7.417 11.964-7.417l-.019-.007L8.616 6.05z"
              ></path>
            </svg>
          </div>

          <h1
            className="mb-2 text-5xl font-bold text-white"
            style={{ fontFamily: "Suzuki" }}
          >
            SUZUKI
          </h1>
          <div
            className="text-red-600 text-md"
            style={{ fontFamily: "Suzuki" }}
          >
            CAMPBELLPUR MOTORS
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 mb-4 overflow-hidden bg-gray-700 rounded-full">
          <div
            className="h-full transition-all duration-300 ease-out bg-red-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div
          className="text-sm font-thin text-white"
          style={{ fontFamily: "Suzuki" }}
        >
          Loading your experience...
        </div>
      </div>
    </div>
  );
}

export default App;
