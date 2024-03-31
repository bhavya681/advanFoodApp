import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-gray-800 text-white py-40 p-2 rounded-md h-[40rem]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-yellow-500">
            Welcome to Fast Food Hub
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Satisfy your cravings with our delicious fast food menu delivered
            right to your doorstep!
          </p>

          <a href="#home">
            <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-bold hover:bg-yellow-600 transition duration-300 shadow-lg">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
