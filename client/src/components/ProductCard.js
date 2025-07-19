import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain p-4 bg-gray-100"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <div className="flex items-center text-yellow-500 text-sm">
          {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
        </div>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <p className="text-green-600 font-bold text-lg">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;