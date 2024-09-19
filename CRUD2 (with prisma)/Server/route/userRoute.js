const express=require("express");
const router=express.Router();
const {home,createUser}=require("../controllers/userController")

//home route
router.route("/").get(home)
router.route("/createUser").post(createUser);


module.exports=router;