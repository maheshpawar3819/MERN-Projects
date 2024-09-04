require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");
const port = 8080;

//middleware
//handling cors policy
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
//for using json in the application
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
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
