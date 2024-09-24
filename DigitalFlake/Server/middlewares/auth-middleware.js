const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//middleware to handling login

const loginMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({
        message: "token not provided",
      });
    }

    console.log(token)
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "faild to authenticate token",
        });
      }
      // save user id
      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginMiddleware;
