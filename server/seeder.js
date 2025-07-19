const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');
const products = require('./data/products');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('🌱 Data Seeded Successfully!');
    process.exit();
  } catch (err) {
    console.log('❌ Seeder Error:', err);
    process.exit(1);
  }
};

seedData();