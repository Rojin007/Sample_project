const { CreateUser } = require("./controllers/signup");
const { CreateUserValidation } = require("./validators");
const express = require("express");
const { userLogin } = require("./controllers/login");
const { CreateBlog } = require("./controllers/posting/addPost");
const { authenticateToken } = require("../Utils/jwt");
const { GetBlog } = require("./controllers/posting/getPost");
const { LikePost } = require("./controllers/posting/likePost");
const { DeletePost } = require("./controllers/posting/deletePost");
const { UpdatePost } = require("./controllers/posting/updatePost");
const { authenticateTokens } = require("../MiddleWare");
const router = express.Router();

router.post("/signup", CreateUserValidation, CreateUser);

router.post("/post-content", authenticateToken, CreateBlog);
router.get("/post-view", authenticateToken, GetBlog);
router.post("/post-like", authenticateToken, LikePost);
router.post("/post-delete", authenticateToken, DeletePost);
router.post("/post-Update", authenticateToken, UpdatePost);
//little bug in routes line no.16-20
//Use the routes from line no. 23-27
router.post("/post-contents", authenticateTokens, CreateBlog);
router.get("/post-views", authenticateTokens, GetBlog);
router.post("/post-likes", authenticateTokens, LikePost);
router.post("/post-deletes", authenticateTokens, DeletePost);
router.post("/post-Updates", authenticateTokens, UpdatePost);

router.get("/login", userLogin);

module.exports = router;
