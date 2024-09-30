const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product-controller");

//route to get all products
router.route("/products").get(getProducts);

//route to create product
router.route("/create").post(createProduct);

//route to update product
router.route("/update/:id").put(updateProduct);

//route to delete product
router.route("/delete/:id").delete(deleteProduct);

//route to get product by id
router.route("/product/:id").get(getProduct);

module.exports = router;
