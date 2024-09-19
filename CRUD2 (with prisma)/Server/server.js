require("dotenv").config()
const express=require("express");
const app=express();

//inbuilt middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//server
const port=process.env.PORT || 5000
app.listen(port,() => {
    console.log(`server was listning on port ${port}`);
})