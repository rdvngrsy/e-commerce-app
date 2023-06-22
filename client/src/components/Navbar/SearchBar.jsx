import React from "react";

const SearchBar = () => {
  return (
    <div className="">
      <div className="hidden xs:flex xs:justify-center xs:space-x-2">
        <input
          type="text"
          className="block w-full basis-3/4 rounded-full border bg-white px-4 py-2 text-black font-oswald font-light tracking-wider focus:border-commerce-mint focus:outline-none focus:ring focus:ring-lime-200 focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="rounded-full btn-green px-4 text-black hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
