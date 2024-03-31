import React from "react";

const CategoryFilters = ({ menuItems, filterCategory, filterAll}) => {
  return (
    <>
      <div className="flex justify-center items-center text-center space-x-7">
      <button className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl" onClick={() => filterAll()}>All</button>
        {menuItems.map((m) => (
          <>
            <button className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl" onClick={() => filterCategory(m)}>{m}</button>
          </>
        ))}
      </div>
    </>
  );
};

export default CategoryFilters;
