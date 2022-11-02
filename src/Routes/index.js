const { CreateUser } = require("./controllers/signup");
const { CreateUserValidation } = require("./validators");
const express = require("express");
const { userLogin } = require("./controllers/login");
const { CreateBlog } = require("./controllers/posting/addPost");
const { authMiddleware } = require("../MiddleWare");
const router = express.Router();

router.post("/signup", CreateUserValidation, CreateUser);
router.post("/post-content", authMiddleware, CreateBlog);
router.get("/login", userLogin);

module.exports = router;
