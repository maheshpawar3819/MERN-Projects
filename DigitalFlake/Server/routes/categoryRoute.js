const express = require("express");
const router = express.Router();
const {
  getCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");

//to get all categories
router.route("/categories").get(getCategories);
//to create category
router.route("/categories").post(createNewCategory);
//to update category
router.route("/categories/:id").put(updateCategory);
//to delete category
router.route("/category/:id").delete(deleteCategory);

module.exports=router;