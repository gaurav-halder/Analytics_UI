import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const HeroContainer1 = () => {
  return (
    <div className="flex flex-col items-center text-center pt-16 pb-12 px-2 md:px-4 bg-white">
      <div className="flex items-center space-x-1 md:space-x-4 rounded-full bg-purple-50 text-sm p-1 border border-purple-400 mb-8">
        <div className="bg-white text-purple-500 text-sm rounded-full px-2 py-[1px] border border-purple-400 cursor-pointer">
          New feature
        </div>
        <div className="text-purple-500 flex items-center space-x-1 cursor-pointer">
          <p>Check out the team dashboard</p>
          <ArrowForwardIcon fontSize="small" />
        </div>
      </div>
      <div className="flex flex-col items-center cursor-default">
        <h1 className="text-[40px] md:text-6xl font-semibold text-gray-900 mb-4">
          Beautiful analytics to grow smarter
        </h1>
        <h3 className="text-gray-500 md:text-lg mb-8 md:w-3/5 ">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
        <button className="flex items-center justify-center space-x-2 border border-slate-300 py-3 md:px-4 px-32 w-full md:w-auto rounded-lg">
          <PlayCircleOutlineIcon />
          <p>Demo</p>
        </button>
        <button className="bg-purple-600 text-white py-3 md:px-6 px-32 w-full md:w-auto rounded-lg">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HeroContainer1;
