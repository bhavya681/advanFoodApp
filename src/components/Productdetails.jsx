import React, { useContext } from "react";
import { DetailsContext } from "../context/Deatils";
import { CartContext } from "../context/Cart";

const Productdetails = () => {
  const { detailItem } = useContext(DetailsContext);
  const { addTocart } = useContext(CartContext);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Product Details</h1>
        {detailItem.map((d) => (
          <div
            key={d.id}
            className="flex flex-col md:flex-row gap-4 border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="w-full md:w-1/3 relative overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg md:rounded-l-lg hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => {
                    addTocart(d);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{d.name}</h2>
                <p className="text-gray-700 mb-4">
                  <span className="font-bold font-mono p-1">Description:</span>{" "}
                  {d.desc}
                </p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-green-700 font-bold mr-2 block">
                    ${d.price}
                  </span>
                  <br></br>
                  <hr></hr>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-6 h-6 fill-current ${
                          index < d.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26 6.91.81-5 4.86 1.18 6.88L12 18.74l-6.18 3.07 1.18-6.88-5-4.86 6.91-.81L12 2z" />
                      </svg>
                    ))}
                    <span className="text-gray-800 ml-1 font-bold font-mono">
                      ({d.rating})
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">Emotion: {d.emotions}</p>
                <p className="text-gray-700 mb-2">Category: {d.category}</p>
              </div>
              <button
                onClick={() => {
                  addTocart(d);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none self-start md:self-end"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productdetails;
