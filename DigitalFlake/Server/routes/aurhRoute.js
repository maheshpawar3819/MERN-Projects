const express = require("express");
const router = express.Router();
const { registerSchema } = require("../validations/authValidation");
const validate = require("../middlewares/validate-middleware");
const { registerUser } = require("../controllers/auth-controller");

//route for register user (1.vaidation,and create user controller);
router.route("/register").post(validate(registerSchema), registerUser);

module.exports = router;
