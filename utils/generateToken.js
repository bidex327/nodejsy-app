const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId) => {
  try {
    if (!userId) {
      throw new error("userId is required");
    }
    const token = jwt.sign({ Id: userId }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });
    return token;
  } catch (err) {
    console.error(`error generating token: ${err.message}`);
  }
};

module.exports = generateToken;
