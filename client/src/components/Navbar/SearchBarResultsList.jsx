import React from "react";
import SearchBarResults from "./SearchBarResults";

const SearchBarResultsList = ({ results }) => {
    console.log(results);
  return (
   
    <div className={`${results.length > 0 ? "pt-5" : "hidden"} border-4 border-commerce-mint -mt-5 flex max-h-[200px] flex-col overflow-y-scroll bg-white`}>
      {results.map((product) => {
        return <SearchBarResults key={product._id} product={product} />;
      })}
    </div>
  );
};

export default SearchBarResultsList;
