const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// prefered way because you can able to attach multiple requests on one route with less code
router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);

module.exports = router;
