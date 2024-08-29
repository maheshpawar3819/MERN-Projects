const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
//middlewares (zod validation);
const signupSchema = require("../validators/auth-avlidator");
const validate = require("../middlewares/validate-middleware");

// prefered way because you can able to attach multiple requests on one route with less code
router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(authcontrollers.login);

module.exports = router;
