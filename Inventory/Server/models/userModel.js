const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password must required"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Manager", "Employee"],//only those peoples are able to change in databse
      default: "Employee",
    },
  },
  { timestamps: true }
);

const User=mongoose.model("User",userSchema);

module.exports=User;

