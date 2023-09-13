import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  dimensions: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: false,
  },
});
export const Product = mongoose.model("Product", productSchema);
