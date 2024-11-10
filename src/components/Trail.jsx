import React from 'react';

const Trail = () => {
  return (
    <div>
      <div className="bg-gray-50 flex flex-col items-center py-16 md:py-24 space-y-4 md:space-y-8 cursor-default">
        <div className="text-3xl md:text-5xl font-medium">Start your free trial</div>
        <div className="text-gray-500 text-lg md:text-2xl mx-10 text-center">
          Join over 4,000+ startups already growing with United.
        </div>
        <div className="text-xl pt-2 md:pt-3 flex flex-col-reverse md:flex-row items-center md:space-x-4">
          <button className="px-[120px] md:px-5 py-3 bg-white border font-medium border-slate-200 rounded-lg mt-2 md:mt-0">
            Learn More
          </button>
          <button className="px-[120px] md:px-5 py-3 bg-purple-600 font-medium text-white rounded-lg mb-2 md:mb-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trail;