require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const port = 8080;

//middleware
//for using json in the application
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

//logic start server only when the db connect succssfully
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port :${port}`);
    });
  })
  .catch((error) => {
    console.log("Error to connect with Db");
  });
