import React from 'react'

const Features = () => {
  return (
    <div className="my-14 md:my-20 cursor-default">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-4 px-4 text-center">
        <p className="text-purple-700 text-lg md:text-xl">Features</p>
        <p className="text-2xl md:text-4xl font-medium">
          Analytics that feels like it's from the future
        </p>
        <p className="text-base md:text-xl text-slate-500 w-full md:w-1/2">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* First Row of Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-20 text-center mt-12 md:mt-16">
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/Shareteambox.png" alt="Share team inboxes" />
          <p className="font-medium">Share team inboxes</p>
          <p className="text-slate-500 text-sm md:text-base">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/DeliveryInstant.png" alt="Deliver instant answers" />
          <p className="font-medium">Deliver instant answers</p>
          <p className="text-slate-500 text-sm md:text-base">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/ManageTeams.png" alt="Manage your team with reports" />
          <p className="font-medium">Manage your team with reports</p>
          <p className="text-slate-500 text-sm md:text-base">
            Measure what matters with our easy-to-use reports. Filter, export, and drill down on data in a couple of clicks.
          </p>
        </div>
      </div>

      {/* Second Row of Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-20 text-center mt-8 md:mt-12">
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/Connectwithcustomers.png" alt="Connect with customers" />
          <p className="font-medium">Connect with customers</p>
          <p className="text-slate-500 text-sm md:text-base">
            Solve problems or close sales in real-time with chat. Seamlessly route to email without confusion.
          </p>
        </div>
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/Connecttools.png" alt="Connect the tools you already use" />
          <p className="font-medium">Connect the tools you already use</p>
          <p className="text-slate-500 text-sm md:text-base">
            Explore 100+ integrations to make your workflow more efficient and familiar, plus developer tools.
          </p>
        </div>
        <div className="w-full md:w-96 flex flex-col items-center space-y-2">
          <img className="h-12" src="/images/peopledifferent.png" alt="Our people make the difference" />
          <p className="font-medium">Our people make the difference</p>
          <p className="text-slate-500 text-sm md:text-base">
            We’re an extension of your team, available 24/7 for support. Chat with our friendly team whenever you need help.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features