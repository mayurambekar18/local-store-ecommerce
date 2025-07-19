// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            🛍 Local Store<br />
            <span className="text-blue-600">Your Everyday Essentials</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Shop grocery, furniture, fashion & more. Great prices. Fast delivery.
          </p>
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-300">
              🛒 Explore Products
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2">
          <img
            src="https://th.bing.com/th/id/OIP.jCQaM7f-5Sj9mV5_xPt3nAAAAA?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Shopping banner"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;