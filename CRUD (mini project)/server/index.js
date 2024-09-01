const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const userModel = require("./models/Users");

//middleware
app.use(cors());
app.use(express.json());

//connect database
mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      err.json(err);
    });
});

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/getuser/:id", (req, res) => {
  let id = req.params.id;

  // for removing : colon
  id = id.replace(/^:+/, "");

  userModel
    .findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred", details: error });
    });
});

app.put("/updateUser/:id", (req, res) => {
  let id = req.params.id;
  const { name, email, age } = req.body;
  //add regax to remove : colon
  id = id.replace(/^:+/, "");
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        age: age,
      },
      { new: true }
    )
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

app.delete("/deleteuser/:id", (req, res) => {
  let id = req.params.id;
  // remove : coma
  id = id.replace(/^:+/, "");
  // console.log(id);
  userModel
    .findByIdAndDelete({
      _id: id,
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.listen(port, () => {
  console.log(`Server is listingn on port : ${port}`);
});
