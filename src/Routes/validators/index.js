const user = require("../../Models/Schemas/user");
let check = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
const CreateUserValidation = async (req, res, next) => {
  const { name, phone, password } = req.body;
  const phoneExist = await user.findOne({ phone });
  if (!name || !password || !phone) {
    res.send({ status: false, data: "Required Fields are empty" });
    return;
  } else if (!Number(phone)) {
    res.send({ status: false, data: "Phone must be a number" });
    return;
  } else if (phone.length !== 10) {
    res.send({ status: false, data: "Phone must be 10 values" });
    return;
  } else if (phoneExist) {
    res.send({ status: false, data: "phone already exist" });
    return;
  } else if (name.length <= 3) {
    res.send({ status: false, data: "invalid name" });
    return;
  } else if (password.length <= 8) {
    res.send({ status: false, data: "password must be minimum 8 characters" });
    return;
  } else if (!password.match(check)) {
    res.send({
      status: false,
      data: "password must contain a capital letter ,a number,a special character",
    });
    return;
  }
  next();
};
module.exports = { CreateUserValidation };
