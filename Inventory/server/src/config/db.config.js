const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

const ConnectDb = async () => {
  try {
    await mongoose.connect(PUBLIC_DATA.mongoUri);
    console.log(`the app is connect with ${mongoose.connection.host}`);
  } catch (error) {
    mongoose.disconnect();
    process.exit(1);
  }
};

module.exports = {ConnectDb};
