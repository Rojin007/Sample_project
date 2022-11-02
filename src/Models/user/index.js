const { generateHash } = require("../../Utils/hashed");
const { generateId } = require("../../Utils/randomGen");

const user = require("../Schemas/user");
const createUser = async (name, phone, password) => {
  const uid = generateId();
  const pwd = await generateHash(password);
  const phoneExist = await user.findOne({ phone });
  if (phoneExist) {
    //this.send("phone already exist");

    console.log("phone already exist");
    return;
  }
  const result = await user.create({
    id: uid,
    name,
    phone,
    password: pwd,
  });
  console.log(result);
  if (result) return true;
  return false;
};

module.exports = { createUser };
