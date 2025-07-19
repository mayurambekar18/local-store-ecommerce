import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-green-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold mb-2">Total: ₹{total}</h3>
            <button
              onClick={() => navigate('/booking')}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Proceed to Booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;