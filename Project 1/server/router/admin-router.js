const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);

//route to get all contacts
router.route("/contacts").get(authMiddleware, getAllContacts);

//route for edit user
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

//to update the user data

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, updateUserById);

//route for delete user
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);

module.exports = router;
