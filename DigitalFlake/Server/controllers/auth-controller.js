require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//for register the user

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //check is email alrady exist
    const isExist = await prisma.user.findFirst({
      where: { email: email },
    });

    if (isExist) {
      return res.status(400).json({ message: "Email is already exist" });
    }

    //hash the password before store in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    //create new user
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    //generating jwt webtoken

    const token = jwt.sign(
      {
        userId: createUser.id,
      },
      process.env.JWT_SECRET_KEY,
      {
      }
    );

    //sending response
    res
      .status(200)
      .json({ user: createUser, token, message: "User created successfully" });
  } catch (error) {
    next();
  }
};

//for login the user

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //check email valid or not
    const isExist = await prisma.user.findFirst({
      where: { email },
    });

    if (!isExist) {
      return res
        .status(401)
        .json({ message: "Email is not exist plese enter the correct email" });
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password, isExist.password);

    //check password and emil
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Email and Password" });
    }

    //genereate json token
    const token = jwt.sign({ id: isExist.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    //sending response with token and id

    res.status(200).json({
      message: "Successfully login",
      token,
      user: {
        id: isExist.id,
        email: isExist.email,
        name: isExist.name,
      },
    });
  } catch (error) {
    next(error);
  }
};

//to get uer
const userData = async (req, res, next) => {
  try {
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser, userData };
