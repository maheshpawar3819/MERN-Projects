const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    //find the user in the database
    const users = await User.find({}, { password: 0 });
    //handling error part
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    //send respons to the frountend
    res.status(200).json(users);
  } catch (error) {
    //pass error to error middleware
    next(error);
  }
};

module.exports = getAllUsers;
