const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//Home page logic
const home = async (req, res) => {
  try {
    res.send("Welcome to Home Page :)");
  } catch (error) {
    console.log(error);
  }
};

//Registeration page logic
const register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.json({
      msg: "registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.log(error, "Internal Server Error ");
    next(error);
  }
};

// User Login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check email valid or not
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.json({
        msg: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(404).json({ message: "Invalid Email and Password" });
    }
  } catch (error) {
    res.status(400).json("internal server error");
  }
};

//user route logic (to send user deta)

const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
