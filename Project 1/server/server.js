const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const port = 8080;

//middleware
//for using json in the application
app.use(express.json());

app.use("/api/auth", router);

//logic start server only when the db connect succssfully
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port :${port}`);
  });
}).catch((error) => {
  console.log("Error to connect with Db");
})
