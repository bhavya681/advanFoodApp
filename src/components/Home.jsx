import React, { useContext, useEffect, useRef, useState } from "react";
import Data from "../assets/Data";
import CategoryFilters from "./CategoryFilters";
import FancyFilters from "./FancyFilters";
import SearchFilters from "./SearchFilters";
import { CartContext } from "../context/Cart";
import { DetailsContext } from "../context/Deatils";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Home = () => {
  const { addTocart, cartItems } = useContext(CartContext);

  const [items, setItems] = useState(Data);

  const menuItems = [...new Set(Data.map((i) => i.category))];

  const filterCategory = (items) => {
    const newItems = Data.filter((d) => d.category === items);
    setItems(newItems);
  };

  const filterAll = () => {
    setItems(Data);
  };

  const filterItems = [...new Set(Data.map((s) => s.emotions))];

  const filterEmotions = (item) => {
    const newItems = Data.filter((d) => d.emotions === item);
    setItems(newItems);
  };

  const filterhighToLowPrices = () => {
    const newItems = [...Data].sort((a, b) => b.price - a.price);
    setItems(newItems);
  };

  const filterlowToHighPrices = () => {
    const newItems = [...Data].sort((a, b) => a.price - b.price);
    setItems(newItems);
  };

  const VFood = () => {
    const newItems = Data.filter((i) => i.diet === "Veg");
    setItems(newItems);
  };

  const NVFood = () => {
    const newItems = Data.filter((i) => i.diet === "Non Veg");
    setItems(newItems);
  };

  const filterhighToLowRatings = () => {
    const newItems = [...Data].sort((a, b) => b.rating - a.rating);
    setItems(newItems);
  };

  const filterlowToHighRatings = () => {
    const newItems = [...Data].sort((a, b) => a.rating - b.rating);
    setItems(newItems);
  };

  const filterSerach = (keyword) => {
    const newItems = Data.filter((i) =>
      i.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setItems(newItems);
  };

  const { addToDetailPage } = useContext(DetailsContext);

  return (
    <>
      <img className="m-[0px] p-[0px] space-x-[39%] ml-[39%] text-center items-center flex justify-center shadow-xs rounded-3xl cursor-pointer"  src="https://media.giphy.com/media/9HTu0L9WXbwf6/giphy.gif?cid=ecf05e47yavpk2w182hb6ut1hbcyr9mppgndhk8dwnltldlc&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
      <h1 className="flex justify-center text-center items-center font-mono text-4xl p-3">
        All Products
      </h1>

      <div id="home">
        <FancyFilters
          filterItems={filterItems}
          filterEmotions={filterEmotions}
          filterhighToLowPrices={filterhighToLowPrices}
          filterlowToHighPrices={filterlowToHighPrices}
          VFood={VFood}
          NVFood={NVFood}
          filterhighToLowRatings={filterhighToLowRatings}
          filterlowToHighRatings={filterlowToHighRatings}
        />
        <CategoryFilters
          menuItems={menuItems}
          filterCategory={filterCategory}
          filterAll={filterAll}
        />
      </div>

      <div className="m-5 p-7">
        <SearchFilters filterSerach={filterSerach} filterAll={filterAll} />
      </div>

      <div className="p-4 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-2xl shadow-gray-500 overflow-hidden"
          >
            <div className="bg-gray-100 flex justify-center text-center items-center p-1">
              <img
                className="w-[200px]  cursor-pointer object-contain rounded-[100%] p-4 transition-all ease-linear hover:animate-bounce"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">{item.name}</h1>
              <h2 className="mb-2 text-green-700 font-bold font-mono">
                ${item.price}
              </h2>
              <p className="text-gray-600 mb-2">{item.desc.slice(0, 50)}...</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-1 text-3xl">&#9733;</span>
                <span className="text-gray-600 text-2xl">{item.rating}</span>
              </div>
              <p
                className={`font-mono text-xl font-bold mb-2 ${
                  item.diet === "Veg" ? "text-green-500" : "text-red-600"
                }`}
              >
                {item.diet === "Veg" ? "Veg 🟢" : "Non Veg 🔴"}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    addTocart(item);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Add To Cart
                </button>
                <button
                  className="bg-green-500 font-serif text-sm font-bold text-white px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none"
                  onClick={() => {
                    addToDetailPage(item);
                  }}
                >
                  <Link to={`/product/${item.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
