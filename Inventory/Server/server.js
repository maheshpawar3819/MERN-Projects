const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRouters");
const porductRouters = require("./routes/productRouters");

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());

//path
app.use("/api/auth", authRoutes);
app.use("/api/products", porductRouters);

//define port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDb();
  console.log(`server was listning on port ${port}`);
});
