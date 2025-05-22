const monggose = require("mongoose");
require("dotenv").config();
const mongoConnect = async () => {
  try {
    await monggose.connect(process.env.MONGO_URL);
    console.log("Database connected🫡");
    console.log("server is running on port 3001");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoConnect;
