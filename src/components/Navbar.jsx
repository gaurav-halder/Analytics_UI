import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onClickHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="py-5 px-5 md:px-20">
        <div className="flex justify-between items-center mx-auto">
          <div className="space-x-2 flex items-center md:space-x-4">
            <div className="flex space-x-2">
              <img className="h-10" src="/images/Analytics_UI_Logo.png" />
            </div>
            <h1 className="text-2xl md:text-xl font-semibold pe-4">
              Untitled UI
            </h1>
            <nav className="hidden md:flex space-x-8 items-center">
              <div className="hover:text-blue-500 cursor-pointer">Home</div>
              <div className="hover:text-blue-500 cursor-pointer space-x-2 flex">
                <p>Products</p>
                <KeyboardArrowDownIcon />
              </div>
              <div className="hover:text-blue-500 cursor-pointer space-x-2 flex">
                <p>Resources</p>
                <KeyboardArrowDownIcon />
              </div>
              <div className="hover:text-blue-500 cursor-pointer">Pricing</div>
            </nav>
          </div>
          <img className="hidden md:block h-10" src="/images/avatar.png" />

          {/* Mobile Menu Icon*/}
          <div className="md:hidden">
            <button onClick={onClickHandler}>
              {isMobileMenuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 h-[1px]"></div>

      {/* Mobile Menu*/}
      { isMobileMenuOpen &&(
        <div className="md:hidden">
          <nav className="flex flex-col bg-white absolute w-2/5 space-y-3 py-4 right-0 px-6 text-lg">
            <div className="hover:text-blue-500 cursor-pointer">Home</div>
            <div className="hover:text-blue-500 cursor-pointer space-x-2 flex">
              <p>Products</p>
              <KeyboardArrowDownIcon />
            </div>
            <div className="hover:text-blue-500 cursor-pointer space-x-2 flex">
              <p>Resources</p>
              <KeyboardArrowDownIcon />
            </div>
            <div className="hover:text-blue-500 cursor-pointer">Pricing</div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
