import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const BrowseProducts = () => {
  const { addToCart } = useCart(); // ✅ now this will work
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default BrowseProducts;