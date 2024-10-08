const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
//middlewares (zod validation);
const { signupSchema, loginSchema } = require("../validators/auth-avlidator");
const validate = require("../middlewares/validate-middleware");

// prefered way because you can able to attach multiple requests on one route with less code
router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
