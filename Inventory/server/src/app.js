const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const errorHandling = require("./middlewares/errorHandler");

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes"));

//middleware for errors
app.use("*", (req, res) => {
  throw new ApiError(404, "page not found");
});

app.use(errorHandling);

module.exports = app;
