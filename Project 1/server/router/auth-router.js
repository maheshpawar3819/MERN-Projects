const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("welcome to home page with using router :)");
// });

// prefered way because you can able to attach multiple requests on one route with less code
router.route("/").get((req, res) => {
  res.send("Welcome to home page :)");
});

router.route("/register").get((req,res) => {
    res.send("Welcome to registeration page :)");
})

module.exports = router;
