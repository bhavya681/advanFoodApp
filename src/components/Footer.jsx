import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-center">Fast Food Hub</h2>
          <p className="mt-2">Your destination for delicious fast food</p>
        </div>
        <div className="flex justify-center lg:justify-end mb-8">
          <Link
            to="/"
            className="mx-4 hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="mx-4 hover:text-gray-400 transition-colors duration-300"
          >
            Menu
          </Link>
          <Link
            to="/locations"
            className="mx-4 hover:text-gray-400 transition-colors duration-300"
          >
            Locations
          </Link>
          <Link
            to="/contact"
            className="mx-4 hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="text-center lg:text-right">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Fast Food Hub. All rights
            reserved.
          </p>
          <p className="mt-2 text-center">Designed with ❤️ by Bhavya Wade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
