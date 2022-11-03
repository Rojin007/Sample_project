const { getBlog } = require("../../../../Models/blog");
const post = require("../../../../Models/Schemas/post");
const user = require("../../../../Models/Schemas/user");
const { blogMap } = require("../../../../Utils/map");

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
  const view = await blogMap(result);
  console.log(view);
  if (result) {
    res.send(view);
  } else {
    res.send("failed to get");
  }
};

module.exports = { GetBlog };
