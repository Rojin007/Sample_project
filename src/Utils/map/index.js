const user = require("../../Models/Schemas/user");

const GetCreator = async (id) => {
  const name = await user.findOne({ id });
  if (name) {
    return name.name;
  }

  return false;
};
const blogMap = async (data) => {
  //  cr = GetCreator(userId);
  const result = await Promise.all(
    data.map(async (item) => {
      return {
        postId: item.id,
        name: item.title,

        content: item.content,
        like: item.like,
        dislike: item.dislike,
        comment: item.comment,
        creator: await GetCreator(item.userId),
      };
    })
  );
  return result;
};
module.exports = { blogMap };
