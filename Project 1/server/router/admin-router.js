const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

//route for edit user
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

//route for delete user
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);

module.exports = router;
