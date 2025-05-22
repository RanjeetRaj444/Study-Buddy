const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  DOB: { type: String, require: true },
  address: { type: String, require: true },
  mob: { type: Number, require: true },
});

const User = mongoose.model("User-project", userSchema);

module.exports = User;
