const blogMap = async (data) => {
  const result = data.map((item) => {
    return {
      postId: item.id,
      name: item.title,
      creator: item.userId,
      content: item.content,
      like: item.like,
      dislike: item.dislike,
      comment: item.comment,
    };
  });
  return result;
};
module.exports = { blogMap };
