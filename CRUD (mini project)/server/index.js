const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const userModel=require("./models/Users");

//middleware
app.use(cors());
app.use(express.json());

//connect database
mongoose.connect("mongodb://127.0.0.1:27017/crud");


app.post("/createUser",(req,res)=>{
    userModel.create(req.body).then((users) => {
        res.json(users);
    }).catch((err) => {
        err.json(err);
    })
})

app.listen(port, () => {
  console.log(`Server is listingn on port : ${port}`);
});
