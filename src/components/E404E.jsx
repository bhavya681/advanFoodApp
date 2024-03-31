import React from "react";
import { Link } from "react-router-dom";

const E404E = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-lg lg:text-xl text-white mb-8">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default E404E;
