const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//logic for registeration

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //hash the user password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const userExist = await User.findOne({ email });
    //logic for check the provided email is already exist or not
    if (userExist) {
      res.status(400).json({ message: "email is already exist" });
    }

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: `User registered successfully` });
  } catch (error) {
    next(error);
  }
};

//logic for login

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //condition for check email and password is correct or not
    //bcrypt compare password provided by user and hash password it will compare this two passwords with each other
    if (user && (await bcrypt.compare(password, user.password))) {
      //generate token for user
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "30d" }
      );
      res.json({ token });
    } else {
      res.status(404).json({ message: "invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
