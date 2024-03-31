import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/Cart";
import CartPage from "./CartPage";
import { AuthContext } from "../context/Auth";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (cartItems.length >= 1) {
      setBounce(true);
      const timeout = setTimeout(() => {
        setBounce(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [cartItems]);

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(()=>{
console.log(auth);
  },[])

  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/">
              {" "}
              <div className="text-white font-bold transition-all text-3xl ease-linear hover:animate-ping">
                Fast Food Hub
              </div>
            </Link>
            <ul className="flex space-x-4 text-white cursor-pointer">
              <Link to="/">
                <li className="text-lg">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-lg">About</li>
              </Link>
              <Link to="/menu">
                <li className="text-lg">Menu</li>
              </Link>
              <Link to="/contact">
                <li className="text-lg">Contact</li>
              </Link>
              {!localStorage.getItem("user") && !localStorage.getItem("token") ? (
                <>
                  {" "}
                  <Link to={"/login"}>
                    <li className="text-lg">Login</li>
                  </Link>
                  <Link to={"/register"}>
                    <li className="text-lg">Register</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"} onClick={()=>{
                      setAuth("");
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    }}>
                    <li onClick={()=>{
                      setAuth("");
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                  }}
                     className="text-lg">Logout</li>
                  </Link>
                </>
              )}

              <div className="flex items-center">
                <span
                  className={`text-white ml-1 text-lg font-bold ${
                    bounce ? "transition-all ease-in-out animate-bounce" : ""
                  }`}
                >
                  <CiShoppingCart
                    size={24}
                    className="text-white"
                    onClick={() => {
                      toggle();
                    }}
                  />
                </span>
                <h1 className="font-mono text-sm pb-4 text-white font-bold">
                  {cartItems.length > 0 ? `(${cartItems.length})` : ""}
                </h1>
              </div>
            </ul>
          </div>
        </div>
        <nav className="fixed z-30 top-18 m-1 right-0 max-h-[40rem] p-2 w-[555px]">
          {showModal ? (
            <>
              <CartPage toggle={toggle} showModal={showModal} />
            </>
          ) : (
            ""
          )}
        </nav>
      </nav>
    </>
  );
};

export default NavBar;
