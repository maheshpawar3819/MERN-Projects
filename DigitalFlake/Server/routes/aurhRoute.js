const express = require("express");
const router = express.Router();
const { registerSchema } = require("../validations/authValidation");
const validate = require("../middlewares/validate-middleware");
const { registerUser, loginUser, userData } = require("../controllers/auth-controller");
const loginMiddleware = require("../middlewares/auth-middleware");

//route for register user (1.vaidation,and create user controller);
router.route("/register").post(validate(registerSchema), registerUser);

//route for login user (1.loginMiddleware, controller);
router.route("/login").post(loginUser);

//get user router
router.route("/user").get(loginMiddleware, userData);

module.exports = router;
