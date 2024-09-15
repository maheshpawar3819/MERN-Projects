const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to database");
  } catch (error) {
    console.error("database connection faild");
    process.exit();
  }
};

module.exports=connectDb;
