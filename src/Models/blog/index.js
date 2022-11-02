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
module.exports = { createBlog };
