const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//All get all user logic for amdin pannel

const getAllUsers = async (req, res, next) => {
  try {
    //find the user in the database
    const users = await User.find({}, { password: 0 });
    //handling error part
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

//All contacts logic for admin pannel

const getAllContacts = async (req, res, next) => {
  try {
    //find the contact in the database
    const contacts = await Contact.find();
    //handling error part
    if (!contacts || contacts.length === 0) {
      res.status(404).json({ message: "No contacts found" });
    }
    //send respons to the frountend
    res.status(200).json(contacts);
  } catch (error) {
    //pass error to error middleware
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts };
