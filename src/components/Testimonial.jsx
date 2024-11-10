import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="flex flex-col items-center space-y-8 cursor-default">
        <div className="flex flex-row items-center space-x-3">
            <img className='h-10' src="/images/Sisyphus.png"/><p className="text-3xl md:text-2xl">Sisyphus</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl text-center mx-3 md:mx-52">
            We've been using Untitled to kick start every new project and can't
            imagine working without it.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 ">
            <img className='h-16' src="/images/Candice.png" />
          <div className="text-center space-y-2">
            <p className="text-gray-900 font-semibold text-lg">Candice Wu</p>
            <p className="text-gray-500 ">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
