import React from "react";
import "/home/rdvngrsy/React-Apps/e-commerce-app/client/src/index.css";

const NavButton = ({ text }) => {
  return (
    <>
      <button className="btn-green group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap">
        <span className="relative rounded-md bg-white px-5 py-1.5 font-oswald text-base font-bold transition duration-200 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          {text}
        </span>
      </button>
    </>
  );
};

export default NavButton;
