const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

module.exports = router;
