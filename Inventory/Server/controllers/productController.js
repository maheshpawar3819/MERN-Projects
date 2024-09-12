const Product = require("../models/productModel");

//To get products

const getProducts = async (req, res) => {
  const products = await Product.find().populate("supplier");
  res.json(products);
};

//To create product
const createProduct = async (req, res, next) => {
  try {
    const { name, sku, price, quantity, category, supplier } = req.body;
    const product = new Product({
      name,
      sku,
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
    await Product.findByIdandDelete(id);
    res.status(204).json({ message: `product deleted` });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
