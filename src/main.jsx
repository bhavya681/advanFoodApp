import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CartProvider from "./context/Cart.jsx";
import DeatilsProvider from "./context/Deatils.jsx";
import AuthProvider from "./context/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <DeatilsProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </DeatilsProvider>
    </CartProvider>
  </React.StrictMode>
);
