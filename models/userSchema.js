const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 15,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
