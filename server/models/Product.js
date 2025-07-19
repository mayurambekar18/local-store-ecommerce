import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  category: String,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
