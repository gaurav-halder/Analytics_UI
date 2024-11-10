import React from "react";

const features = [
  {
    icon: "/images/F1.png",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    linkText: "Learn more",
  },
  {
    icon: "/images/F2.png",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "Learn more",
  },
  {
    icon: "/images/F3.png",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    linkText: "Learn more",
  },
];

const Features2 = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center py-12 md:pt-16 px-4 cursor-default">
        <div className="inline-block bg-purple-50 text-purple-600 font-medium border border-purple-200 text-sm px-4 py-1 rounded-full mb-4">
          Features
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
          Cutting-edge features for advanced analytics
        </h2>
        <p className="text-xl md:text-2xl mx-4 md:mx-6 text-gray-600">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="">
        <img
          className="hidden w-3/4 mx-auto md:block md:w-[18%] md:absolute md:ms-40 md:mt-24"
          src="/images/FeaturesMobile.png"
          alt=""
        />
        <img
          className="sm:hidden w-3/4 mx-auto block md:w-[18%] md:absolute md:ms-40 md:mt-24"
          src="/images/Mobileimage.png"
          alt=""
        />
        <img
          className="hidden md:block mx-auto h-full w-3/5 border-4 border-black rounded-3xl"
          src="/images/Features2.png"
          alt=""
        />
      </div>
      <div className="bg-white mt-6 md:mt-24 px-14">
        <div className="grid md:grid-cols-3 gap-2 md:gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="py-3 px-1 md:p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <img src={feature.icon} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="text-purple-600 font-semibold">
                {feature.linkText} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 mb-8 h-[1px] bg-slate-100 md:mx-14 mx-4"></div>
    </div>
  );
};

export default Features2;
