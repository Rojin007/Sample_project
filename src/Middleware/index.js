const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

process.env.TOKEN_SECRET;

const authenticateTokens = async (req, res, next) => {
  console.log(req.headers.authorization.split(" ")[1]);

  if (req.headers.authorization.split(" ")[1] == null)
    return res.sendStatus(401);

  jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.TOKEN_SECRET,
    (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      console.log(user);
      req.user_id = user;

      next();
    }
  );
};
module.exports = { authenticateTokens };
