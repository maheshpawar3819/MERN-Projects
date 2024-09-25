const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//middleware to handling login

const loginMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    // console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "token not provided",
      });
    }

    //extract the token
    const jwtToken = token.split(" ")[1];

    // console.log(token)
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await prisma.user.findUnique({
      where: { id: isVerified.id },
      select: {
        id: true,
        name: true,
        email: true,
        //not send password to frontend
        password: false,
      },
    });

    // creating custom properties
    req.user = userData;
    req.token = token;
    req.userId = userData.id;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = loginMiddleware;
