import React, { useState } from "react";
import axios from "axios";
import SearchBarResultsList from "./SearchBarResultsList";


const SearchBar = () => {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const filterFetchProduct = (value) => {
    axios.get("http://localhost:4000/product")
      .then((response) => {
        const results = response.data.filter((product) => {
          return value && product && product.title && product.title.toLowerCase().includes(value.toLowerCase());
        });
        setResults(results)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };
 
  const handleChange = (value) => {
    setInput(value)
    filterFetchProduct(value)
  }


  return (
    <div className="relative z-50">
      <div className="hidden xs:flex xs:justify-center xs:space-x-2">
        <div className="relative basis-3/4">
          <div className="relative z-40">
            <input
              type="text"
              className="w-full rounded-full border bg-white px-4 py-2 text-black font-oswald font-light tracking-wider focus:border-commerce-mint focus:outline-none focus:ring focus:ring-commerce-mint "
              placeholder="Search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <div className="absolute z-30 w-full">
            <SearchBarResultsList results={results}/>
          </div>

        </div>
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
