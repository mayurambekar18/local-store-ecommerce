import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">🛍 LocalStore</h1>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-yellow-300">🏠 Home</Link></li>
          <li><Link to="/cart" className="hover:text-yellow-300">🛒 Cart</Link></li>
          <li><Link to="/track" className="hover:text-yellow-300">📦 Track Order</Link></li>
          <li><Link to="/receipt" className="hover:text-yellow-300">🧾 Receipt</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">📞 Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;