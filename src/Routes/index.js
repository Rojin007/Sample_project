const { CreateUser } = require("./controllers/signup");

const express = require("express");
const router = express.Router();

router.post("/signup", CreateUser);
module.exports = router;
