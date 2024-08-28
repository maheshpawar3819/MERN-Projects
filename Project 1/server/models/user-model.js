const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

//secure the passwrod with using bcrypt (middleware);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    //hash the passwrod
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

const User = new mongoose.model("User", userSchema);

// User.insertMany({username:"mahesh",email:"meheshp@gmail.com",phone:"7828624595",password:"mahi79152"})

module.exports = User;
