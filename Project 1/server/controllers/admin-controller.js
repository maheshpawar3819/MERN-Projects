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

//logic for update user

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//logic to delete user
const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};

//logic to update user

const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id);
    //get data for server by createing custom property
    const udpatedUserData = req.body;

    const updateUser = await User.updateOne(
      { _id: id },
      {
        $set: udpatedUserData,
      }
    );
    return res.status(200).json(updateUser);
  } catch (error) {
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

//To delete contact data

const deleteContanct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteC = await Contact.deleteOne({ _id: id });
    res.status(200).json(deleteC);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContanct
};
