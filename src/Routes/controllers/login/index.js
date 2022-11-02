const user = require("../../../Models/Schemas/user");
const { verifyPassword } = require("../../../Utils/hashed");
const { generateAccessToken } = require("../../../Utils/jwt");

const userLogin = async (req, res) => {
  const { name, passwords } = req.body;
  const userExist = await user.findOne({ name });

  //   const pass = userExist.map((item) => {
  //     return item.password;
  //   });

  if (userExist) {
    const pass = userExist.password;
    console.log(pass);
    const result = await verifyPassword(passwords, pass);
    console.log(result);
    if (result) {
      const token = generateAccessToken(name);
      res.send(token);
    } else res.send("wrong password");
  } else res.send("no user exist");
  // res.send("false");
};
module.exports = { userLogin };
