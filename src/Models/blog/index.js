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
module.exports = { createBlog, getBlog };
