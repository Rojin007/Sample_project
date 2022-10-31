const jwt = require("jsonwebtoken");
//> require('crypto').randomBytes(64).toString('hex')
// ''
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET);
};

module.exports = { generateAccessToken };
