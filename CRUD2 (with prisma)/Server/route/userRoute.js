const express = require("express");
const router = express.Router();
const { home, createUser, getUser,updateUser ,deletUser} = require("../controllers/userController");

//home route
router.route("/").get(home);
router.route("/createUser").post(createUser);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deletUser);

module.exports = router;
