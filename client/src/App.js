import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseProducts from './pages/BrowseProducts';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import TrackOrder from './pages/TrackOrder';
import BookingPage from './pages/BookingPage';
import ReceiptPage from './pages/ReceiptPage';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<BrowseProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;