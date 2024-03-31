import React, { useState } from "react";
import QRCode from "qrcode";

const PaymentForm = () => {
  const [qrCodeData, setQRCodeData] = useState("");

  // Function to generate QR code
  const generateQRCode = async () => {
    try {
      const qrCodeURL = await QRCode.toDataURL(window.location.href);
      setQRCodeData(qrCodeURL);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  // Generate QR code on component mount
  useState(() => {
    generateQRCode();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <div className="mb-2">
        {/* Use a credit card icon */}
        <span className="flex justify-center text-center items-center ">
          <img
            src="https://freepngimg.com/thumb/credit_card/25618-8-credit-card-visa-and-master-card-image-thumb.png"
            className="flex justify-center text-center items-center  w-[400px] h-[334px] shadow-gray-500 transition-all ease-linear cursor-wait hover:animate-pulse"
            alt="card"
          />
        </span>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Expiry Date"
          className="w-1/2 p-2 rounded-md mr-2 border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all ease-linear cursor-pointer hover:animate-pulse">
        Pay Now
      </button>
      <div className="mt-4">
        <div className="flex justify-center items-center p-5 space-x-8">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
            alt="Phone Pe"
            className="w-[70px]"
          />
          <img
            src=" https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.svg
"
            className="w-[70px]"
            alt="Google Pay"
          />
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.svg"
            alt="Paytm"
            className="w-[70px]"
          />
          <img
            src=" https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/master-card-icon.svg"
            alt="Mater Card"
            className="w-[70px]"
          />
        </div>
        <p className="text-sm text-gray-600">Scan QR Code for payment</p>
        {/* Display generated QR code */}
        <img src={qrCodeData} alt="QR Code" className="mx-auto mt-2 transition-all ease-linear cursor-wait hover:animate-pulse" />
      </div>
    </div>
  );
};

export default PaymentForm;
