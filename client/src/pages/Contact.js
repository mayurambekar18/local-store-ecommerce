// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Optionally send message somewhere
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-4 py-10 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📬 Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">📞 Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">📧 Email:</span> support@localstore.com</p>
            <p><span className="font-semibold">📍 Address:</span> Mumbai, India</p>
            <p><span className="font-semibold">🕐 Working Hours:</span> 10AM - 7PM (Mon - Sat)</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Send Message 💌
            </button>

            {submitted && (
              <p className="text-green-600 mt-2 font-medium">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;