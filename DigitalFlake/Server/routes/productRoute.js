const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controller");

//route to get all products
router.route("/products").get(getProducts);

//route to create product
router.route("/create").post(createProduct);

//route to update product
router.route("/upadte").put(updateProduct);

//route to delete product
router.route("delete").delete(deleteProduct);