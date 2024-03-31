import React from "react";

const FancyFilters = ({
  filterItems,
  filterEmotions,
  filterhighToLowPrices,
  filterlowToHighPrices,
  VFood,
  NVFood,
  filterhighToLowRatings,
  filterlowToHighRatings,
}) => {
  return (
    <>
      <div className="space-x-5">
        <div className="space-x-4">
          {filterItems.map((f) => (
            <>
              <button
                className="my-4  font-bold hover:bg-green-300 hover:text-black bg-gray-300 text-white p-4 font-mono rounded-lg shadow-xl"
                onClick={() => {
                  filterEmotions(f);
                }}
              >
                {f}
              </button>
            </>
          ))}
        </div>

        <button
          className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-4 font-mono rounded-lg shadow-xl"
          onClick={() => {
            filterhighToLowPrices();
          }}
        >
          High To Low Price
        </button>

        <button
          className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl"
          onClick={() => {
            filterlowToHighPrices();
          }}
        >
          Low To High Price
        </button>

        <button
          className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl"
          onClick={() => {
            filterhighToLowRatings();
          }}
        >
          High To Low Ratings
        </button>

        <button
          className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl"
          onClick={() => {
            filterlowToHighRatings();
          }}
        >
          Low To High Ratings
        </button>
      </div>
      <div className="space-x-4">
      <button
        className="my-4 font-bold hover:bg-red-300 hover:text-black bg-red-600 text-white p-2 font-mono rounded-lg shadow-xl"
        onClick={() => {
          NVFood();
        }}
      >
        Non Veg
      </button>

      <button
        className="my-4 font-bold hover:bg-green-300 hover:text-black bg-green-700 text-white p-2 font-mono rounded-lg shadow-xl"
        onClick={() => {
          VFood();
        }}
      >
        Veg
      </button>
      </div>
    </>
  );
};

export default FancyFilters;
