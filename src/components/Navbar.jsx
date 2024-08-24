import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#f8fafc] mx-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/image/domilogo.png"
              alt="img"
              className="w-15 h-12 rounded"
            ></img>
            
          </Link>
          <div className="relative inline-block text-left">
  <div className="p-5">
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">

      <span>Delivering to</span>
      
      <h4>Please select a location</h4>
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <Link className="mr-5 text-[#020617] font-bold" to="/">MENU</Link>
            <Link className="mr-5 text-[#020617] font-bold" to="/product">DEALS</Link>
            <Link className="mr-5 text-[#020617] font-bold">STORES</Link>
            <Link className="mr-5 text-[#020617] font-bold">ALLIANCES</Link>
          </nav>
            <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <FaRegUserCircle />
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-2"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <FaShoppingCart />
            </span>
          </button>
        </div>
      </header>
     <header className="text-gray-600 body-font mx-auto bg-[#525252]">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 font-bold text-[#f8fafc]">PREMIUM CRUSTS</a>
      <a className="mr-5 font-bold text-[#f8fafc]">EVERYDAY VALUE DEALS</a>
      <a className="mr-5 font-bold text-[#f8fafc]">LUNCH DEALS</a>
      <a className="mr-5 font-bold text-[#f8fafc]">FAMILY DEALS</a>
      <a className="mr-5 font-bold text-[#f8fafc]">VALUE DEALS</a>
      <a className="mr-5 font-bold text-[#f8fafc]">MIDNIGHT DEALS(STARTING AT 12AM)</a>
    </nav>
  </div>
</header>
<div className="font-bold p-2 text-2xl mt-7 ml-20">
<h1>
  PREMIUM CRUSTS
  <hr></hr>
</h1>

</div>

    </div>
  );
};

export default Navbar;
