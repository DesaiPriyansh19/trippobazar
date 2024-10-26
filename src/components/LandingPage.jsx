import React, { useState } from "react";

// import LoginPage from "./LoginPage/LoginPage";
import dalLek from "../assets/bg-img.jpg";
import discoverOne from "../assets/Discover-1.svg";
import round from "../assets/Round.svg";
import dubai from "../assets/dubai.svg";
import paris from "../assets/paris-last.jpg";
import newyork from "../assets/newyorkk.jpg";

export default function LandingPage() {
  const [guests, setGuests] = useState(1);

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);
  const carouselItems = [
    {
      image: dubai,
      location: "DUBAI",
      country: "UAE",
      price: "₹ 48,999",
      description: "Dubai travel plans starting at just ₹39,999.",
    },
  
    {
      image: newyork,
      location: "NEW YORK",
      country: "USA",
      price: "$ 2,199",
      description: "Experience New York from $2,199.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const { image, location, country, price, description } = carouselItems[currentIndex];

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F8F8F8] ">
      <section
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dalLek})` }}
      >
        {/* Top Left Logo and Paragraph */}
        <div className="absolute top-64 left-4 flex items-center">
          <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
        </div>

        {/* H1 Heading */}
        <div className="flex justify-start items-center h-full px-14 ">
          <h1 className="text-white font-poppins mt-60 text-[80px] font-extrabold leading-none">
            DISCOVER NEW <br></br>HORIZONS
          </h1>
        </div>

        {/* Top Right Paragraph */}
        <div className="absolute top-20 right-4">
          <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
        </div>

        {/* Small Centered Image with Text */}
        <div className="absolute bottom-11 right-28 transform -translate-x-1/2 flex justify-center items-center">
          <img src={round} alt="Small Icon" className="h-32" />
          <p className="absolute text-center text-white font-semibold">
            EXPLORE <br></br>PLANS
          </p>
        </div>
      </section>
      <div className="w-4/5 h-[30vh] bg-white shadow-lg rounded-lg mx-auto mt-[-2rem] p-6 relative z-10">
        {/* Starting Location and Destination Inputs */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
            {/* <img src={startLocationIcon} alt="Start Location" className="h-5 w-5 mr-2" /> */}
            <input
              type="text"
              placeholder="Where are you starting from?"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          <p className="text-gray-500 font-medium">To</p>

          <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
            {/* <img src={destinationIcon} alt="Destination" className="h-5 w-5 mr-2" /> */}
            <input
              type="text"
              placeholder="Enter Destination"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Date Inputs */}
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex flex-col w-full">
            <p className="text-gray-500 font-medium mb-1">Start Date</p>
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              {/* <img src={calendarIcon} alt="Calendar Icon" className="h-5 w-5 mr-2" /> */}
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-gray-500 font-medium mb-1">End Date</p>
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              {/* <img src={calendarIcon} alt="Calendar Icon" className="h-5 w-5 mr-2" /> */}
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="flex items-center space-x-2">
            <p className="text-gray-500 font-medium">Guests</p>
            <button
              onClick={decrementGuests}
              className="px-3 py-1 bg-gray-200 rounded-md"
            >
              -
            </button>
            <p className="font-semibold">{guests}</p>
            <button
              onClick={incrementGuests}
              className="px-3 py-1 bg-gray-200 rounded-md"
            >
              +
            </button>
          </div>

          {/* Search Button */}
          <button className="flex items-center px-4 py-2 bg-[#03B58B] text-white rounded-md space-x-2">
            {/* <img src={searchIcon} alt="Search Icon" className="h-5 w-5" /> */}
            <p className="font-medium">Search Packages</p>
          </button>
        </div>
      </div>
      <h1 className="text-black text-center font-poppins mt-10 text-[40px] font-extrabold leading-none">Popular Packages</h1>
      <p className="mb-10 mt-5 text-center ">
        Simplify your journey choices effortlessly with our convenient <br></br> and
        easy-to-choose travel packages.
      </p>
      <section className="p-6 relative text-center ">
      <div className="relative w-4/5 h-[90%] mx-auto flex items-center">
        {/* Main Image Container */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img src={image} alt={location} className="w-full h-full object-cover" />
        </div>

        {/* Overlay Container */}
        <div className="absolute bottom-0 right-0 w-[30vw] h-[85vh] bg-white p-4  rounded-lg">
          {/* Green Small Div */}
          <div className="absolute top-0 left-0 bg-[#00B58A] h-5 text-center w-22 mb-4"><p className="text-[.9rem] font-medium text-white "> seasonal offer </p></div>

          {/* Location and Price Info */}
          <div className="space-y-2 mt-5">
            <h3 className="text-lg font-bold">{location}</h3>
            <p className="text-gray-500">{country}</p>
            <h2 className="text-2xl font-bold bg-[#00B58A] text-white inline-block px-2 py-1 rounded-md">
              {price}
            </h2>
            <p className="mt-2 font-semibold">What’s included?</p>

            {/* Included Icons */}
            <div className="flex space-x-2 mt-2">
              {/* <img src={includedIcon1} alt="Icon 1" className="h-6 w-6" />
              <img src={includedIcon2} alt="Icon 2" className="h-6 w-6" />
              <img src={includedIcon3} alt="Icon 3" className="h-6 w-6" />
              <img src={includedIcon4} alt="Icon 4" className="h-6 w-6" /> */}
            </div>

            {/* Book Now Button */}
            <button className="mt-4 px-4 py-2 bg-[#03B58B] text-white rounded-md font-medium">
              Book Now
            </button>
          </div>

          {/* Additional Info Section */}
          <div className="absolute bottom-0 left-0 w-full  mt-4  border-t border-gray-200 bg-[#EDF7F9]">
            <p>Our travel plans include all facilities as per your custom requirements.</p>
            <p className="font-bold mt-2">{description}</p>
            <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button
        onClick={handlePrev}
        className=" mt-6 transform text-2xl -translate-y-1/2 -200 p-2 rounded-full shadow-lg hover:bg-gray-300"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        onClick={handleNext}
        className="mt-6 ml-8 transform text-2xl -translate-y-1/2  p-2 rounded-full shadow-lg hover:bg-gray-300"
      >
        &#8594; {/* Right Arrow */}
      </button>
    </section>
    </div>
  );
}
