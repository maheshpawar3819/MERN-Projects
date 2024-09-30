const express = require("express");
const router = express.Router();
const {
  getCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} = require("../controllers/category-controller");

//to get all categories
router.route("/categories").get(getCategories);
router.route("/category/:id").get(getCategory);
//to create category
router.route("/categories").post(createNewCategory);
//to update category
router.route("/categories/:id").put(updateCategory);
//to delete category
router.route("/categories/:id").delete(deleteCategory);
//to get category by id
router.route("/categories/:id").get(getCategory);

module.exports = router;
