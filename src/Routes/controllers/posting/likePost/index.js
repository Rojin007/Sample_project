const { likeBlog } = require("../../../../Models/blog");
const post = require("../../../../Models/Schemas/post");
const user = require("../../../../Models/Schemas/user");

const LikePost = async (req, res) => {
  const id = await req.body.id;
  const name = await req.user_id;
  const users = await user.findOne({ name });
  const userId = await users.id;

  const posts = await post.find({ id });

  const isLiked = await post.findOne({ id: id, like: userId });
  console.log(isLiked);
  if (isLiked) {
    res.send("already liked");
  } else {
    const result = await likeBlog(userId, id);
    console.log(result);
    res.send("post has been liked");
  }
};
module.exports = { LikePost };
