const { createUser } = require("../../../Models/user");

const CreateUser = async (req, res) => {
  const { name, phone, password } = req.body;
  const result = await createUser(name, phone, password);

  if (result) res.send("true");
};
module.exports = { CreateUser };
