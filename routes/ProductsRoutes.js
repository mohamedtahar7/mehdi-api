import express from "express";
import { Product } from "../models/Product.js";
const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// Get a Product By Id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// Add a product
router.post("/", async (req, res) => {
  try {
    const { name, price, category, images, colors, description, dimensions } =
      req.body;
    if (!name || !price || !category || !images) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newProduct = {
      name,
      price,
      description,
      category,
      images,
      colors,
      dimensions,
    };
    const product = await Product.create(newProduct);
    return res.status(201).send({ message: "product created", product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// edit a Product
router.put("/:id", async (req, res) => {
  try {
    const { name, price, category, images, colors, description, dimensions } =
      req.body;
    if (!name || !price || !category || !images) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).send(`Product ${result.name} updated Successfully`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// Delete a Product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).send({ message: "Product Deleted Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ messsage: error.message });
  }
});
export default router;
