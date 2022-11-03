const { generateId } = require("../../Utils/randomGen");
const post = require("../Schemas/post");
const createBlog = async (title, content, userId) => {
  const uid = generateId();
  const result = await post.create({
    id: uid,
    title,
    content,
    userId,
  });
  if (result) {
    return true;
  } else {
    return false;
  }
};
const getBlog = async (userId) => {
  const result = await post.find({ userId });

  if (result) {
    return result;
  } else {
    return false;
  }
};
const likeBlog = async (userId, id) => {
  const posts = await post.findOne({ id });
  const result = await posts.updateOne({ $push: { like: userId } });
  console.log(result);
  if (result) {
    return true;
  } else {
    return false;
  }
};
module.exports = { createBlog, getBlog, likeBlog };
