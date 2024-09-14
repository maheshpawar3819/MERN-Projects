const Product = require("../models/productModel");

//To get products

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("supplier");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Faild to fetch the data" });
  }
};

//To create product
const createProduct = async (req, res, next) => {
  try {
    const { name,  price, quantity, category, supplier } = req.body;

    const product = new Product({
      name,
      price,
      quantity,
      category,
      supplier,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

//To update product

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatep = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatep);
  } catch (error) {
    next(error);
  }
};

//To delete product

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).json({ message: `product deleted` });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
