import React, { useState } from "react";

const SearchFilters = ({ filterSerach, filterAll }) => {
  const [serach, setSearch] = useState("");

  const searchHandle = (e) => {
    setSearch(e.target.value);
    filterSerach(serach);
  };
  const srchClear = () => {
    setSearch("");
    filterAll();
  };

  return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-indigo-500 transition-colors duration-300"
          placeholder="Search..."
          value={serach}
          onChange={searchHandle}
        />
        <button onClick={srchClear} className="bg-gray-100 text-black p-1 my-4 border shadow-md shadow-gray-800 font-mono rounded-lg">clear</button>
        <svg
          className="absolute top-3 left-3 h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.5 17.5l4.5 4.5"
          />
        </svg>
      </div>
    </>
  );
};

export default SearchFilters;
