import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to fetch product', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-20 text-gray-500">Loading product...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-contain border rounded-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center text-yellow-500 mb-2">
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl text-green-600 font-bold mb-4">₹{product.price}</p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
