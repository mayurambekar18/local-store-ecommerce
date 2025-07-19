// src/pages/ReceiptPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiptPage = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000); // dummy order number
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h2>

        <p className="text-gray-700 mb-2">
          Thank you for shopping with <span className="font-semibold text-blue-600">Local Store</span>.
        </p>

        <p className="text-lg font-semibold text-gray-800 mt-4">
          🧾 Order Number: <span className="text-black">#{orderNumber}</span>
        </p>

        <p className="text-lg mt-2">📦 Your items will arrive by: 
          <span className="font-medium text-green-600"> {deliveryDate.toDateString()}</span>
        </p>

        <p className="text-gray-600 text-sm mt-1">
          (Keep your order number safe for tracking.)
        </p>

        <div className="mt-6">
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
          >
            🛒 Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;