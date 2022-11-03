const { deleteBlog } = require("../../../../Models/blog");
const post = require("../../../../Models/Schemas/post");
const user = require("../../../../Models/Schemas/user");

const DeletePost = async (req, res) => {
  const id = await req.body.id;
  const name = await req.user_id;
  const users = await user.findOne({ name });
  const userId = await users.id;

  const isLiked = await post.findOne({ id: id, userId: userId });
  console.log(isLiked);
  if (!isLiked) {
    res.send("You are not authorized");
  } else {
    const result = await deleteBlog(userId, id);
    console.log(result);
    res.send("post has been deleted");
  }
};
module.exports = { DeletePost };
