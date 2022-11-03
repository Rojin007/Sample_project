const { CreateUser } = require("./controllers/signup");
const { CreateUserValidation } = require("./validators");
const express = require("express");
const { userLogin } = require("./controllers/login");
const { CreateBlog } = require("./controllers/posting/addPost");
const { authenticateToken } = require("../Utils/jwt");
const { GetBlog } = require("./controllers/posting/getPost");
const { LikePost } = require("./controllers/posting/likePost");
const router = express.Router();

router.post("/signup", CreateUserValidation, CreateUser);
router.post("/post-content", authenticateToken, CreateBlog);
router.get("/post-view", authenticateToken, GetBlog);
router.post("/post-like", authenticateToken, LikePost);
router.get("/login", userLogin);

module.exports = router;
