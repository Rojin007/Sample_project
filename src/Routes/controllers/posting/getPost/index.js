const { getBlog } = require("../../../../Models/blog");
const post = require("../../../../Models/Schemas/post");
const user = require("../../../../Models/Schemas/user");

const GetBlog = async (req, res) => {
  const name = req.user_id;
  const users = await user.findOne({ name });
  const userId = users.id;
  const blog = await post.findOne({ userId });
  if (!blog) {
    res.send("no blog found for the user");
  }
  console.log(userId);
  const result = await getBlog(userId);
  console.log(result);
  if (result) {
    res.send(result);
  } else {
    res.send("failed to get");
  }
};
module.exports = { GetBlog };
