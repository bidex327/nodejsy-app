const User = require("../models/userSchema");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const signupUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;
    if (
      fullName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== ""
    ) {
      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(400).json({ message: "user already exist" });
      }
      const user = await User.create({
        fullName,
        email,
        phoneNumber,
        password,
      });
      res.status(201).json({
        message: "user created successfull",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: user.password,
        },
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: "all fields are required" });
    }
  } catch (err) {
    console.error(`An error has occurred: ${err.message}`);
    res.status(500).json({ message: "internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error(`an error occured: ${err.message}`);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { signupUser, loginUser };
