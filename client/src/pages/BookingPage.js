import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    paymentMethod: 'UPI',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill all the fields!");
      return;
    }

    // You can also save order to backend here
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">📦 Booking Details</h2>

        {!orderPlaced ? (
          <>
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />

              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    checked={formData.paymentMethod === 'UPI'}
                    onChange={handleChange}
                  />
                  UPI
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={formData.paymentMethod === 'COD'}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded"
              >
                ✅ Place Your Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              🎉 Your order has been placed!
            </h3>
            <p className="text-gray-600 mb-6">Thanks for shopping with Local Store.</p>
            <button
              onClick={() => navigate('/receipt')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
            >
              📄 Go to Receipt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;