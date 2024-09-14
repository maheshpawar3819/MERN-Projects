const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  user,
} = require("../controllers/authController");

//define routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
