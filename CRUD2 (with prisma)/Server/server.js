require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./route/userRoute");
const cors = require("cors");

//handling cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//inbuilt middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define routs
app.use("/api/user",userRoute)

//server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server was listning on port ${port}`);
});
