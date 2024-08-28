const User = require("../models/user-model");

//Home page logic
const home = async (req, res) => {
  try {
    res.send("Welcome to Home Page :)");
  } catch (error) {
    console.log(error);
  }
};

//Registeration page logic
const register = async (req, res) => {
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
    console.log(error, "Internal Server Error ");
  }
};

module.exports = { home, register };
