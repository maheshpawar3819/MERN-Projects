const express = require("express");
const router = express.Router();
const {
  getSubcategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory-controller");

//to get subCategories
router.route("/subcategories").get(getSubcategories);
//to ceate subCategory
router.route("/create").post(createSubCategory);
//to update subCategory
router.route("/update/:id").put(updateSubCategory);
//to delete subCategory
router.route("/delete/:id").delete(deleteSubCategory);

module.exports=router;