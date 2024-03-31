import React, { useContext } from "react";
import { CartContext } from "../context/Cart";
import { Link } from "react-router-dom";

const CartPage = ({ toggle, showModal }) => {
  const {
    setCartItems,
    cartItems,
    addTocart,
    removeFromCart,
    clearCart,
    totalItemPrice,
  } = useContext(CartContext);
  return (
    <>
      <div className="bg-gray-100 p-2 shadow-2xl shadow-gray-800 rounded-3xl">
        {showModal ? (
          <>
            <div className=" rounded-lg shadow-md">
              <nav className="flex justify-between space-x-5 p-8">
                <h1 className="text-3xl font-bold text-black">CartItems</h1>
                <b
                  onClick={toggle}
                  className="text-3xl font-bold text-black hover:text-red-500 cursor-pointer"
                >
                  X
                </b>
              </nav>
              <hr></hr>
              {cartItems.map((cartItem) => (
                <>
                  <div
                    className="p-2 m-2 shadow-lg rounded-sm flex text-center"
                    key={cartItem.id}
                  >
                    <img
                      src={cartItem.img}
                      alt={cartItem.name}
                      className="w-[182px] h-[111px] rounded-[100%] cursor-pointer transition-all ease-in-out hover:animate-bounce shadow-xl shadow-gray-600 p-1 m-1"
                    />
                    <nav className="p-8">
                      <h1 className="font-bold text-xl text-center p-1 font-mono text-black">
                        {cartItem.name}
                      </h1>
                      <div className="flex p-1 space-x-2 justify-center">
                        <button
                          className="p-2 bg-green-500 text-white font-bold font-mono rounded-[60%]"
                          onClick={() => {
                            addTocart(cartItem);
                          }}
                        >
                          +
                        </button>
                        <h1 className="text-xl p-1 font-bold font-mono">
                          {cartItem.quantity}
                        </h1>
                        <button
                          className="p-2 bg-red-500 text-white font-bold font-mono rounded-[60%]"
                          onClick={() => {
                            removeFromCart(cartItem);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </nav>
                  </div>
                </>
              ))}
            </div>
            {cartItems.length > 0 ? (
              <>
                <nav className="flex justify-center flex-col text-center items-center">
                  <h1 className="text-xl font-mono font-bold p-1 mt-4 text-green-600">
                    Total Cost: ${totalItemPrice()}
                  </h1>
                  <button
                    className="bg-gray-400 mt-4 shadow-2xl rounded-md p-2 font-mono shadow-gray-600"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Clear Cart
                  </button>

                  <Link to="/payment">
                    <button
                      onClick={() => {
                        setCartItems([]);
                      }}
                      className="mt-4 p-2 rounded-xl shadow-2xl shadow-gray-500 bg-green-500 text-white "
                    >
                      Checkout
                    </button>
                  </Link>
                </nav>
              </>
            ) : (
              <>
                <h1 className="p-4 text-2xl font-bold font-mono text-center">
                  No Items Found
                </h1>
              </>
            )}
          </>
        ) : (
          <>
            <h1>No Items Found</h1>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
