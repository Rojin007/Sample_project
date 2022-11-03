const { createBlog } = require("../../../../Models/blog");

const user = require("../../../../Models/Schemas/user");

const CreateBlog = async (req, res) => {
  const { title, content } = req.body;

  const name = req.user_id;
  const users = await user.findOne({ name });
  const userId = users.id;
  console.log(userId);
  const result = createBlog(title, content, userId);
  if (result) {
    res.send("successfully created post");
  } else {
    res.send("failed to create");
  }
};
module.exports = { CreateBlog };
