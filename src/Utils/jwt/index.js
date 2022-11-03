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
const verifyToken = (token) => {
  // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

  //   if (err) return res.sendStatus(403)

  //   req.user_id = user.user_id

  //   next()
  // })

  jwt.verify(token, process.env.TOKEN_SECRET, (user, err) => {
    if (err) {
      return { data: "error" };
    } else {
      //req.user = user;
      console.log(user);
      return user;
    }
  });
};
const authenticateToken = (req, res, next) => {
  // const authHeader = req.headers["authorization"];
  const token = req.headers?.authorization?.split("  ")[1];
  // const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    console.log(user);
    req.user_id = user;

    next();
  });
};

module.exports = { generateAccessToken, verifyToken, authenticateToken };
