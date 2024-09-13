const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//define routes
router.route("/").get(protect, getProducts).post(protect, createProduct);
router.route("/:id").put(protect, updateProduct).delete(protect, deleteProduct);

module.exports=router;