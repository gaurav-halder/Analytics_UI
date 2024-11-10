import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription anytime. No questions asked.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add details like VAT ID or company name to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is processed monthly. You’ll receive an invoice at the beginning of each billing cycle.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your account settings page.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-4/5 md:w-3/5 mx-auto pt-10 pb-20">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 cursor-default">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-600 mb-8 text-xl md:text-2xl cursor-default">
          Everything you need to know about the product and billing.
        </p>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-8">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-medium text-gray-800">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FiMinus className="text-gray-500" />
              ) : (
                <FiPlus className="text-gray-500" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-lg me-10 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center py-10 bg-slate-50 mx-4 md:mx-32 rounded-2xl">
        <img className="h-14 mb-8" src="/images/FAQ.png" />
        <p className="text-2xl font-medium">Still have questions?</p>
        <div className="flex flex-col items-center space-y-8">
            <p className="mt-3 text-lg md:text-2xl text-center md:me-10 text-gray-500">Can't find the answers you're looking for? Please chat to our friendly team.</p>
            <button className="py-3 px-4 bg-purple-600 text-white rounded-lg text-xl">Get in touch</button>
        </div>
      </div>
      <div className="mt-16 md:mt-24 mb-8 h-[1px] bg-slate-100 md:mx-14 mx-4"></div>
    </div>
  );
};

export default FAQ;
