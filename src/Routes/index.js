const { CreateUser } = require("./controllers/signup");
const { CreateUserValidation } = require("./validators");
const express = require("express");
const { userLogin } = require("./controllers/login");
const router = express.Router();

router.post("/signup", CreateUserValidation, CreateUser);

router.get("/login", userLogin);

module.exports = router;
