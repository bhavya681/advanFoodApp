import React, { useState } from "react";
import Data from "../assets/Data";

const Menu = () => {
  const [Items, setItems] = useState(Data);
  return (
    <>
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">
            Menu
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our delicious menu options below:
          </p>
          {/* Menu items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Items.map((i) => (
              <>
                <div key={i.id} className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={i.img}
                    alt={i.name}
                    style={{backgroundSize:"contain"}}
                    className="w-full h-48 object-cover mb-4 cursor-pointer p-4 rounded-lg"
                  />
                  <h2 className="text-xl font-bold mb-2">{i.name}</h2>
                  <p className="text-gray-700">{i.desc}</p>
                  <span className="font-bold m-2 p-2 text-green-500">${i.price}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
