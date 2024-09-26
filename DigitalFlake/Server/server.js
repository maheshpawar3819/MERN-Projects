require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error-middleware");
//routes
const authRoute = require("./routes/aurhRoute");
const categoryRoute=require("./routes/categoryRoute");

//handling cors policy
const corsOpetions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

// middlewares
app.use(cors(corsOpetions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoute);
// to category
app.use("/api/categories",categoryRoute);

//error middleware
app.use(errorMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listning on port: ${port}`);
});
