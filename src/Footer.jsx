import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:text-left">
          <div>
            <h3 className="text-sm font-semibold text-gray-400">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Solutions{" "}
                  <span className="text-green-500 font-medium text-xs bg-green-100 px-2 py-1 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Media kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 ">Use cases</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  SaaS centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Marketplaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Ecommerce
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 ">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  AngelList
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 ">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 mb-8 h-[1px] bg-slate-100"></div>

        <div className="cursor-default">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center space-x-2">
              <img className="h-10" src="/images/Analytics_UI_Logo.png" />
              <h1 className="text-2xl md:text-xl">Untitled UI</h1>
            </div>
            <p className="pt-2">© 2077 Untitled UI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
