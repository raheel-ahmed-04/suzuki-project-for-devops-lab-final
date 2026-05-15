import React, { useState, useEffect } from "react";
import {
  Award,
  GaugeCircle,
  Gauge,
  Battery,
  Weight,
  ChevronRight,
  X,
  Calendar,
  
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Heading animation variants
const headingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const fetchBlogPosts = async () => {
  const response = await fetch("/data/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return {
    blogPosts: data.blogPosts,
    featuredPost: data.featuredPost,
  };
};

const categories = [
  "All",
  "Blog",
  "News",
  "Sporty",
  "Family",
  "Stylish",
  "Luxury",
  "Economy",
  "Commercial",
];

export default function Blogspage2() {
  const navigate=useNavigate();
  const {
    data = { blogPosts: [], featuredPost: {} }, // Default values for safety
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogPosts"], // Cache key
    queryFn: fetchBlogPosts, // Fetch function
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-accentLight dark:text-accentDark">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-extrabold text-red-500 dark:text-red-400">
          Error fetching data!
        </h1>
      </div>
    );
  }

  const filteredBlogs =
    selectedCategory === "All"
      ? data.blogPosts
      : data.blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="body-font bg-primaryLight dark:bg-gray-900 text-textLight dark:text-textDark">
      <div className="min-h-screen px-5 mx-auto mt-10">
        <motion.h2
          className="mt-10 mb-4 text-3xl font-bold text-center sm:text-4xl sm:mt-0 text-textLight dark:text-textDark"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Welcome to News & Blogs
        </motion.h2>
        <div className="w-20 h-1 mx-auto my-3 bg-customRed"></div>
        <h2 className="mb-10 text-xl text-center text-gray-700 dark:text-gray-300">
          Stay Informed and Inspired!
        </h2>

        <FeaturedPost post={data.featuredPost} />
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-textLight dark:text-textDark">
            Featured Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((post, index) => (
              <PostCard key={index} post={post} onLearnMore={setSelectedPost} />
            ))}
          </div>
        </div>

        {selectedPost && (
          <PostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onScheduleTestDrive={() => {
              setSelectedPost(null);
              navigate("/booking");
             
            }}

          />
        )}


        
      </div>
    </section>
  );
}

function FeaturedPost({ post }) {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[600px] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-full bg-customRed">
              <Award className="w-4 h-4 mr-1" />
              Featured
            </span>
            <h1 className="mt-4 text-5xl font-bold text-white">{post.title}</h1>
            <p className="mt-2 text-xl text-gray-300">{post.excerpt}</p>
            <div className="flex items-center mt-6 space-x-6">
              <span className="text-2xl font-bold text-white">
                {post.price}
              </span>
              <span className="flex items-center text-gray-300">
                <GaugeCircle className="w-5 h-5 mr-2" />
                {post.engine}
              </span>
              <button className="px-6 py-2 text-white transition-colors rounded-full bg-customRed hover:bg-red-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Categories({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex pb-4 space-x-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`mt-4 ml-2 px-6 py-2 rounded-full text-sm font-medium transition-colors
                     hover:bg-red-600 hover:text-white
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                     ${category === selectedCategory
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

function PostCard({ post, onLearnMore }) {
  return (
    <article className="overflow-hidden transition-shadow bg-gray-100 border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-lg dark:border-gray-700">
      <img
        src={post.image[0]}
        alt={post.title}
        className="object-cover w-full h-56"
      />
      <div className="p-6">
        <span className="text-sm font-medium text-customRed dark:text-red-400">
          {post.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-textLight dark:text-textDark">
          {post.title}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="space-y-2">
            <div className="text-xl font-bold text-textLight dark:text-textDark">
              {post.price}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <GaugeCircle className="w-4 h-4 mr-1" />
              {post.engine}
            </div>
          </div>
          <button
            onClick={() => onLearnMore(post)}
            className="flex items-center text-sm font-medium text-customRed dark:text-red-400 hover:text-red-500 dark:hover:text-red-300"
          >
            Learn more
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

function PostModal({ post, onClose, onScheduleTestDrive }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  if (!post) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto top-16"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-primaryLight dark:bg-primaryDark sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute top-0 right-0 z-10 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 rounded-md bg-primaryLight dark:bg-primaryDark hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-customRed"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-primaryLight dark:bg-primaryDark">
            <div className="relative">
              <Slider {...settings}>
                {post.image.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`${post.title} - View ${index + 1}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute px-2 py-1 text-sm rounded bottom-4 right-4 bg-primaryLight dark:bg-primaryDark">
                {currentSlide + 1} / {post.image.length}
              </div>
            </div>

            <div className="px-8 py-6 max-h-[calc(100vh-20rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-customRed dark:text-red-400">
                  {post.category}
                </span>
                <div className="text-2xl font-bold text-textLight dark:text-textDark">
                  {post.price}
                </div>
              </div>

              <h2 className="mb-4 text-3xl font-bold text-textLight dark:text-textDark">
                {post.title}
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
              <div className="mb-10">
                {post.content?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-textLight dark:text-textDark">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-textLight dark:text-textDark">
                  <GaugeCircle className="w-6 h-6 text-accentLight dark:text-accentDark" />
                  <span>Engine: {post.engine}</span>
                </div>
                <div className="flex items-center space-x-3 text-textLight dark:text-textDark">
                  <Gauge className="w-6 h-6 text-accentLight dark:text-accentDark" />
                  <span>Top Speed: {post.topSpeed}</span>
                </div>
                <div className="flex items-center space-x-3 text-textLight dark:text-textDark">
                  <Battery className="w-6 h-6 text-accentLight dark:text-accentDark" />
                  <span>Fuel Efficiency: {post.fuelEfficiency}</span>
                </div>
                <div className="flex items-center space-x-3 text-textLight dark:text-textDark">
                  <Weight className="w-6 h-6 text-accentLight dark:text-accentDark" />
                  <span>Curb Weight: {post.curbWeight}</span>
                </div>
              </div>

            
              <div className="flex justify-end mt-8 space-x-4">
                <button
                  onClick={onScheduleTestDrive}
                  className="flex items-center px-6 py-2 border rounded-full border-customRed text-customRed dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Test Drive
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

