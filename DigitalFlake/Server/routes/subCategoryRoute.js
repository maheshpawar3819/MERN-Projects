const express = require("express");
const router = express.Router();
const {
  getSubcategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getCategory,
} = require("../controllers/subCategory-controller");

//to get subCategories
router.route("/subcategories").get(getSubcategories);
//to ceate subCategory
router.route("/create").post(createSubCategory);
//to update subCategory
router.route("/update/:id").put(updateSubCategory);
//to delete subCategory
router.route("/delete/:id").delete(deleteSubCategory);
//to get category by id
router.route("/subcategory/:id").get(getCategory);

module.exports = router;
