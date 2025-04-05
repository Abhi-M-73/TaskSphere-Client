import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center px-4 py-24 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
        Search, Create & <br />
        Find Your <span className="text-purple-700">Favorite Tasks</span>
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        An online platform where task seekers can create, manage, and organize their day-to-day tasks easily and efficiently.
      </p>

      <div className="mt-6 max-w-xl mx-auto flex border border-gray-200 shadow rounded-full overflow-hidden bg-white">
        <input
          type="text"
          placeholder="Search Your Task..."
          className="w-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        />
        <button className="bg-purple-700 text-white px-6 py-3 font-semibold hover:bg-purple-800 transition-all rounded-r-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
