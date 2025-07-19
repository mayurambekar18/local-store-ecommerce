// src/pages/TrackOrder.js
import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    // Dummy logic
    if (orderId.length > 3) {
      setStatus({
        orderId,
        status: 'Out for Delivery 🚚',
        expected: 'in 2–3 days 🗓',
        location: 'Mumbai Warehouse',
      });
    } else {
      setStatus('invalid');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Track Your Order</h2>

        <input
          type="text"
          placeholder="Enter your Order Number"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleTrack}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Track Order 📦
        </button>

        {status === 'invalid' && (
          <p className="text-red-500 mt-4">❌ Invalid Order Number</p>
        )}

        {status && status !== 'invalid' && (
          <div className="mt-6 text-left bg-blue-50 p-4 rounded-md shadow-sm">
            <p><strong>Order:</strong> #{status.orderId}</p>
            <p><strong>Status:</strong> {status.status}</p>
            <p><strong>Expected:</strong> {status.expected}</p>
            <p><strong>Current Location:</strong> {status.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;