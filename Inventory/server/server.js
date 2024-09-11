require("dotenv").config();
const { PUBLIC_DATA } = require("./constant");
const app = require("./src/app");
const { ConnectDb } = require("./src/config/db.config");

ConnectDb();

app.listen(PUBLIC_DATA.port, () => {
  console.log(`app is listen at http://localhost:${PUBLIC_DATA.port}`);
});
