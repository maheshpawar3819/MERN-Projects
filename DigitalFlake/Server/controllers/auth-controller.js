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
      return res.status(400).json({ message: "email is already exist" });
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
        expiresIn: "1h",
      }
    );

    //sending response
    res
      .status(200)
      .json({ user: createUser, token, message: "user created successfully" });
  } catch (error) {
    next();
  }
};

module.exports = { registerUser };
