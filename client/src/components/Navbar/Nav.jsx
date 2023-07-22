import React, { useState, useEffect } from "react";
import NavButton from "./NavButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchBarResultsList from "./SearchBarResultsList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Adjust the scroll position as needed
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "fixed top-0 w-full" : ""
      } bg-commerce-teal outline outline-[6px] outline-offset-1 outline-commerce-mint z-50`}
    >
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 flex-row items-center justify-between">
          {/********************************************* MENU CONTENT *************************************/}

          <div className="shrink-0 basis-1/3 md:basis-1/6">
            <Link to="/" className="font-oswald text-xl font-bold text-white">
              E-SATIŞ
            </Link>
          </div>

          <div className="basis-1/3 md:basis-4/6">
            <SearchBar/>
          </div>


          <div className="flex basis-1/3 justify-end  md:basis-1/6 ">
            <Link to="/signup" className="mr-3">
              <NavButton text="Sign up" />
            </Link>
            <Link to="/login">
              <NavButton text="Log in" />
            </Link>
          </div>
          {/********************************************* MENU CONTENT *************************************/}
        </div>
      </div>



      {/********************************************* TOGGLE BUTTON *************************************/}

      <div className="flex justify-center  md:hidden">
        <button
          onClick={toggleMenu}
          className="mb-1 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-black focus:bg-commerce-teal-2 focus:text-black focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/********************************************* TOGGLE BUTTON *************************************/}


      {/********************************************* Categories *************************************/}

      <div className={`${isScrolled ? "hidden" : "mx-auto max-w-7xl md:py-3"}`}>
        <div className="hidden md:flex  md:justify-center">
          <ul className="flex items-baseline space-x-28 font-oswald text-lg font-bold ">
            <Link to="/categories/all-products" className="navi-efect">
              All Products
            </Link>
            <Link to="/categories/mobile-phones" className="navi-efect">
              Mobile Phones
            </Link>
            <Link to="/categories/laptops" className="navi-efect">
              Laptops
            </Link>
            <Link to="/categories/tv" className="navi-efect">
              TV
            </Link>
          </ul>
        </div>
      </div>
      {/********************************************* Categories *************************************/}



      {/********************************************* TOGGLE MENU *************************************/}
      <div
        className={`${
          isOpen ? "absolute z-50 block" : "hidden"
        } mt-1 w-full bg-commerce-teal-2 md:hidden `}
      >
        <div className="box-wrap font-oswald sm:px-3">
          <Link
            to="/categories/all-products"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            All Products
          </Link>
          <Link
            to="/categories/mobile-phones"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Mobile Phones
          </Link>
          <Link
            to="/categories/laptops"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Laptops
          </Link>
          <Link
            to="/categories/tv"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Tv
          </Link>
        </div>
      </div>
      {/********************************************* TOGGLE MENU *************************************/}
    </nav>
  );
};

export default Navbar;
