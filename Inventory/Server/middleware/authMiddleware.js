const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //extarct the token in the header
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "not authorized,token not valid" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //exclude the passowrd
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { protect };
