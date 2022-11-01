const { CreateUser } = require("./controllers/signup");

const express = require("express");
const { userLogin } = require("./controllers/login");
const router = express.Router();

router.post("/signup", CreateUser);

router.get("/login", userLogin);

module.exports = router;
