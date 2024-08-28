const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User=new mongoose.model("User",userSchema);

User.insertMany({username:"mahesh",email:"meheshp@gmail.com",phone:"7828624595",password:"mahi79152"})

module.exports=User;
