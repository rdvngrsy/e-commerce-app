import React, { useState } from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-commerce-teal outline outline-[6px] outline-offset-1 outline-commerce-mint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 flex-row items-center justify-between">
          {/********************************************* MENU CONTENT *************************************/}

          <div className="shrink-0 basis-1/3 md:basis-1/6">
            <h1 className="font-oswald text-xl font-bold text-white">
              E-SATIŞ
            </h1>
          </div>

          <div className="hidden md:flex md:basis-4/6 md:justify-center">
            <ul className="flex items-baseline space-x-28 font-oswald text-lg font-bold ">
              <li className="navi-efect">Menu 1</li>
              <li className="navi-efect">Menu 2</li>
              <li className="navi-efect">Menu 3</li>
            </ul>
          </div>
          {/********************************************* MENU CONTENT *************************************/}

          {/********************************************* TOGGLE BUTTON *************************************/}

          <div className="-mr-2 flex basis-1/3 justify-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-black focus:bg-commerce-teal-2  focus:text-black focus:outline-none"
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
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/********************************************* TOGGLE BUTTON *************************************/}

          <div className="flex basis-1/3 justify-end  md:basis-1/6 ">
            <div className="mr-3">
              <NavButton text="Signin" />
            </div>
            <NavButton text="Login" />
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-commerce-teal-2 md:hidden `}
      >
        <div className="box-wrap font-oswald sm:px-3">
          <a
            href="#"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Menu 1
          </a>
          <a
            href="#"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Menu 2
          </a>
          <a
            href="#"
            className="box block rounded-md px-3 py-2  text-lg font-medium text-white transition duration-200 ease-in hover:bg-commerce-blue hover:text-gray-300"
          >
            Menu 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
