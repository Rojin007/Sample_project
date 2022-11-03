const { updateBlog } = require("../../../../Models/blog");
const post = require("../../../../Models/Schemas/post");
const user = require("../../../../Models/Schemas/user");

const UpdatePost = async (req, res) => {
  const id = await req.body.id;
  const name = await req.user_id;
  const users = await user.findOne({ name });
  const userId = await users.id;
  const { title, content } = req.body;

  const isLiked = await post.findOne({ id: id, userId: userId });
  console.log(isLiked);
  if (!isLiked) {
    res.send("You are not authorized");
  } else {
    const result = await updateBlog(userId, id, title, content);
    console.log(result);
    res.send("post has been updated");
  }
};
module.exports = { UpdatePost };
