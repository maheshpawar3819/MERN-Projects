//Home page logic

const home = async (req, res) => {
  try {
    res.send("Welcome to Home Page :)");
  } catch (error) {
    console.log(error);
  }
};

//Registeration page logic
const register = async (req, res) => {
  try {
    res.send("Welcome to registeration page using controllers again:)");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home ,register};
