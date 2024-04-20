import React, { useState } from "react";
import Crousel from "../Crousel";
import Footer from "./Footer";
import "./App.css";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState(""); // State for tracking the search query

  const images = [
    "./images/banner1.jpg",
    "./images/second_banner.webp",
    "./images/fouth_banner.jpg",
  ];

  const designerReviews = [
    // {
    //   avatar: "./images/Main_Page-1.jpg",
    //   name: "John Doe",
    //   rating: 4.5,
    //   review:
    //     "Amazing designs, highly recommended! Great attention to detail and creativity.",
    // },
    // {
    //   avatar: "./images/Main_Page-4.jpeg",
    //   name: "Jane Smith",
    //   rating: 5,
    //   review:
    //     "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    // },
    // {
    //   avatar: "./images/Main_Page-5.jpeg",
    //   name: "Jane Smith",
    //   rating: 5,
    //   review:
    //     "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    // },
    {
      avatar: "./images/Main_Page-6.jpeg",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-7.webp",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-8.avif",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-3.jpg",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-2.webp",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-3.jpg",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-12.webp",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-10.webp",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    {
      avatar: "./images/Main_Page-9.webp",
      name: "Jane Smith",
      rating: 5,
      review:
        "Incredible creativity, exceeded my expectations! Will definitely work with them again.",
    },
    // Add more designer reviews as needed
  ];

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the reviews based on the search query (case-insensitive)
  const filteredReviews = designerReviews.filter((review) =>
    review.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-950">
      <div className="text-customGreen text-center py-10">
        <h1 className="animate-marquee text-5xl font-bold">
          Journey Through The World Of Art
        </h1>
      </div>
      <Crousel images={images} />

      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Designer Reviews</h2>

        {/* Search bar for filtering designer reviews */}
        <input
          type="text"
          placeholder="Search by designer name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="mb-6 p-2 border border-gray-300 rounded-full w-full sm:w-1/2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review, index) => (
              <div
                key={index}
                className="bg-black rounded-lg flex flex-col overflow-hidden border border-customGreen"
              >
                <img
                  src={review.avatar}
                  alt="Designer"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <div class="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2a.75.75 0 0 1 .675.418l1.949 3.902 4.39.639 a.75.75 a.75 a . . ."
                          />
                        </svg>
                        <span className="text-yellow-400">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">{review.review}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white">
              No designers found with the name "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
