const { createBlog } = require("../../../../Models/blog");
const CreateBlog = async (req, res) => {
  //    const{title,content}= req.body;
  //    const userId=req.user.id;
  const result = createBlog(req.body, req.user.id);
  if (result) {
    res.send("success");
  } else {
    res.send("failed to create");
  }
};
module.exports = { CreateBlog };
