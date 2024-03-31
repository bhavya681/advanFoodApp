import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import E404E from "./components/E404E";
import Payment from "./components/Payment";
import Productdetails from "./components/Productdetails";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Router>
      <Toaster/>
        <NavBar />
        <LandingPage />
        <div className="p-4 text-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/product/:id" element={<Productdetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<E404E />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
