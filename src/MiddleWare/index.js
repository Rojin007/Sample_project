const verifyToken = require("../Utils/jwt");

const authMiddleware = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    res.send({
      error: "No token found",
    });
    return;
  }
  try {
    if (!token) return next();
    const decoded = await verifyToken(token);
    console.log(decoded);

    req.user = decoded;
    return next();
  } catch (error) {
    res.send({
      error: "Invalid Token!",
    });
    return;
  }
};
module.exports = { authMiddleware };
