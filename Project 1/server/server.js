const express = require("express");
const app = express();
const router = require("./router/auth-router");
const port = 8080;

app.use("/api/auth", router);

app.listen(port, () => {
  console.log(`Server is running at port :${port}`);
});
